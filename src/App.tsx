/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Play, 
  Info, 
  Monitor, 
  MousePointer2, 
  ShieldCheck,
  GitBranch,
  ChevronLeft, 
  ChevronUp,
  ChevronDown,
  CheckCircle2, 
  XCircle,
  Star,
  Home,
  RotateCcw,
  ListOrdered,
  User,
  Medal,
  Clock,
  LogOut,
  Loader2,
  FolderOpen,
  FileText,
  Presentation
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LEVELS, Level, Question, Difficulty } from './constants';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';

// ... (playSound and ICON_MAP remain the same)
const playSound = (type: 'correct' | 'incorrect' | 'select') => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (type === 'correct') {
    // Happy "ding" sound
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.1); // C6
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
  } else if (type === 'incorrect') {
    // Sad "buzz" sound
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
    oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.4);
  } else if (type === 'select') {
    // Subtle "pop" sound
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  }
};

const ICON_MAP: Record<string, any> = {
  Info,
  Monitor,
  MousePointer2,
  ShieldCheck,
  GitBranch,
  FolderOpen,
  FileText,
  Presentation
};

type GameState = 'HOME' | 'NAME_INPUT' | 'LEVEL_SELECT' | 'DIFFICULTY_SELECT' | 'PLAYING' | 'SUMMARY' | 'LEADERBOARD' | 'ACHIEVEMENTS';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 'FIRST_QUIZ', title: 'Người Khởi Đầu', description: 'Hoàn thành bài trắc nghiệm đầu tiên.', icon: 'Star', color: 'bg-blue-500' },
  { id: 'PERFECT_SCORE', title: 'Thiên Tài Nhí', description: 'Đạt điểm tuyệt đối trong một bài học.', icon: 'Trophy', color: 'bg-yellow-500' },
  { id: 'HARD_MODE', title: 'Kẻ Thách Thức', description: 'Hoàn thành một bài học ở mức độ Khó.', icon: 'ShieldCheck', color: 'bg-red-500' },
  { id: 'ALL_LEVELS', title: 'Nhà Thông Thái', description: 'Hoàn thành tất cả các chủ đề học tập.', icon: 'Medal', color: 'bg-purple-500' }
];

interface LeaderboardEntry {
  id: string;
  userName: string;
  score: number;
  totalQuestions: number;
  levelTitle: string;
  difficulty: string;
  timestamp: Timestamp;
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>('HOME');
  const [userName, setUserName] = useState<string>(localStorage.getItem('quiz_user_name') || '');
  const [tempName, setTempName] = useState('');
  const [nameError, setNameError] = useState('');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(false);
  
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [orderingItems, setOrderingItems] = useState<string[]>([]);
  const [matchingPairs, setMatchingPairs] = useState<{left: string, right: string}[]>([]);
  const [matchingSelections, setMatchingSelections] = useState<{left: string | null, right: string | null}>({left: null, right: null});
  const [dragDropMapping, setDragDropMapping] = useState<Record<string, string>>({});
  const [selectedDragItem, setSelectedDragItem] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('quiz_achievements');
    if (saved) setUnlockedAchievements(JSON.parse(saved));
  }, []);

  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (gameState === 'SUMMARY') {
      // Big celebratory confetti
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#fbbf24', '#f472b6']
      });
      
      // Count up animation
      let start = 0;
      const end = score;
      if (start === end) {
        setDisplayScore(end);
      } else {
        const duration = 1500; // 1.5 seconds
        const increment = end / (duration / 16); // 60fps
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setDisplayScore(end);
            clearInterval(timer);
          } else {
            setDisplayScore(Math.floor(start));
          }
        }, 16);
      }

      // Side bursts
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [gameState]);

  const unlockAchievement = (id: string) => {
    if (unlockedAchievements.includes(id)) return;
    
    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (achievement) {
      const updated = [...unlockedAchievements, id];
      setUnlockedAchievements(updated);
      localStorage.setItem('quiz_achievements', JSON.stringify(updated));
      setNewAchievement(achievement);
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => setNewAchievement(null), 5000);
    }
  };

  const fetchLeaderboard = async () => {
    setIsLoadingLeaderboard(true);
    try {
      const q = query(
        collection(db, 'leaderboard'),
        orderBy('score', 'desc'),
        orderBy('timestamp', 'desc'),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      const entries: LeaderboardEntry[] = [];
      querySnapshot.forEach((doc) => {
        entries.push({ id: doc.id, ...doc.data() } as LeaderboardEntry);
      });
      setLeaderboardData(entries);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setIsLoadingLeaderboard(false);
    }
  };

  const saveScore = async () => {
    if (!userName || !currentLevel || !selectedDifficulty) return;
    
    try {
      await addDoc(collection(db, 'leaderboard'), {
        userName,
        score,
        totalQuestions: filteredQuestions.length,
        levelTitle: currentLevel.title,
        difficulty: selectedDifficulty,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const handleStartClick = () => {
    if (!userName) {
      setGameState('NAME_INPUT');
    } else {
      setGameState('LEVEL_SELECT');
    }
  };

  const submitName = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = tempName.trim();
    
    if (trimmedName.length < 2) {
      setNameError('Tên phải có ít nhất 2 ký tự em nhé!');
      return;
    }
    
    setUserName(trimmedName);
    localStorage.setItem('quiz_user_name', trimmedName);
    setGameState('LEVEL_SELECT');
    setNameError('');
  };

  const selectLevel = (level: Level) => {
    playSound('select');
    setCurrentLevel(level);
    setSelectedDifficulty(null);
    setGameState('DIFFICULTY_SELECT');
  };

  const confirmQuit = () => {
    setShowQuitConfirm(false);
    setGameState('HOME');
    setCurrentLevel(null);
    setSelectedDifficulty(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  const startQuiz = () => {
    if (!currentLevel || !selectedDifficulty) return;
    const questions = currentLevel.questions.filter(q => q.difficulty === selectedDifficulty);
    setFilteredQuestions(questions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState('PLAYING');
    setShowFeedback(false);
    setSelectedOption(null);
    
    // Initialize first question
    const firstQ = questions[0];
    if (firstQ?.type === 'ORDERING' && firstQ.items) {
      setOrderingItems([...firstQ.items].sort(() => Math.random() - 0.5));
    }
  };

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback || isChecking) return;
    
    setSelectedOption(optionIndex);
    setIsChecking(true);

    // Brief delay for "checking" animation
    setTimeout(() => {
      const correct = optionIndex === filteredQuestions[currentQuestionIndex].correctAnswer;
      setIsCorrect(correct);
      setIsChecking(false);
      
      if (correct) {
        setScore(prev => prev + 1);
        playSound('correct');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#fbbf24']
        });
      } else {
        playSound('incorrect');
      }
      setShowFeedback(true);
    }, 800); // 800ms delay for the checking effect
  };

  const handleOrderingMove = (index: number, direction: 'up' | 'down') => {
    if (showFeedback) return;
    const newItems = [...orderingItems];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newItems.length) return;
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setOrderingItems(newItems);
    playSound('select');
  };

  const handleOrderingSubmit = () => {
    if (showFeedback || isChecking) return;
    setIsChecking(true);
    
    setTimeout(() => {
      const currentQ = filteredQuestions[currentQuestionIndex];
      const correct = JSON.stringify(orderingItems) === JSON.stringify(currentQ.correctAnswer);
      setIsCorrect(correct);
      setIsChecking(false);
      
      if (correct) {
        setScore(prev => prev + 1);
        playSound('correct');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#fbbf24']
        });
      } else {
        playSound('incorrect');
      }
      setShowFeedback(true);
    }, 800);
  };

  const handleMatchingSelect = (side: 'left' | 'right', value: string) => {
    if (showFeedback) return;
    const newSelections = { ...matchingSelections, [side]: value };
    
    if (newSelections.left && newSelections.right) {
      // Check if this pair is already matched
      const exists = matchingPairs.some(p => p.left === newSelections.left || p.right === newSelections.right);
      if (!exists) {
        setMatchingPairs([...matchingPairs, { left: newSelections.left, right: newSelections.right }]);
        playSound('select');
      }
      setMatchingSelections({ left: null, right: null });
    } else {
      setMatchingSelections(newSelections);
      playSound('select');
    }
  };

  const handleMatchingSubmit = () => {
    if (showFeedback || isChecking) return;
    setIsChecking(true);
    
    setTimeout(() => {
      const currentQ = filteredQuestions[currentQuestionIndex];
      const correctPairs = currentQ.pairs || [];
      
      // Check if all pairs are correctly matched
      const isCorrect = matchingPairs.length === correctPairs.length && 
        matchingPairs.every(p => correctPairs.some(cp => cp.left === p.left && cp.right === p.right));
        
      setIsCorrect(isCorrect);
      setIsChecking(false);
      
      if (isCorrect) {
        setScore(prev => prev + 1);
        playSound('correct');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#fbbf24']
        });
      } else {
        playSound('incorrect');
      }
      setShowFeedback(true);
    }, 800);
  };

  const handleDragDropSelect = (item: string) => {
    if (showFeedback) return;
    setSelectedDragItem(item);
    playSound('select');
  };

  const handleDragDropPlace = (target: string) => {
    if (showFeedback || !selectedDragItem) return;
    setDragDropMapping(prev => ({ ...prev, [selectedDragItem]: target }));
    setSelectedDragItem(null);
    playSound('select');
  };

  const handleDragDropSubmit = () => {
    if (showFeedback || isChecking) return;
    setIsChecking(true);
    
    setTimeout(() => {
      const currentQ = filteredQuestions[currentQuestionIndex];
      const correctMapping = currentQ.correctAnswer as Record<string, string>;
      
      const isCorrect = Object.keys(correctMapping).every(key => dragDropMapping[key] === correctMapping[key]) &&
                        Object.keys(dragDropMapping).length === Object.keys(correctMapping).length;
        
      setIsCorrect(isCorrect);
      setIsChecking(false);
      
      if (isCorrect) {
        setScore(prev => prev + 1);
        playSound('correct');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#fbbf24']
        });
      } else {
        playSound('incorrect');
      }
      setShowFeedback(true);
    }, 800);
  };

  const nextQuestion = () => {
    setOrderingItems([]);
    setMatchingPairs([]);
    setMatchingSelections({left: null, right: null});
    setDragDropMapping({});
    setSelectedDragItem(null);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      setShowFeedback(false);
      setSelectedOption(null);
      setIsChecking(false);

      const nextQ = filteredQuestions[nextIdx];
      if (nextQ.type === 'ORDERING' && nextQ.items) {
        setOrderingItems([...nextQ.items].sort(() => Math.random() - 0.5));
      }
    } else {
      setGameState('SUMMARY');
      saveScore();
      
      // Check for achievements
      unlockAchievement('FIRST_QUIZ');
      
      if (score === filteredQuestions.length) {
        unlockAchievement('PERFECT_SCORE');
      }
      
      if (selectedDifficulty === 'Hard') {
        unlockAchievement('HARD_MODE');
      }

      // Check for ALL_LEVELS (this would ideally check Firestore, but we can use local tracking for now)
      const completedLevels = JSON.parse(localStorage.getItem('quiz_completed_levels') || '[]');
      if (currentLevel && !completedLevels.includes(currentLevel.id)) {
        const updated = [...completedLevels, currentLevel.id];
        localStorage.setItem('quiz_completed_levels', JSON.stringify(updated));
        if (updated.length === LEVELS.length) {
          unlockAchievement('ALL_LEVELS');
        }
      }
    }
  };

  const resetGame = () => {
    setGameState('HOME');
    setCurrentLevel(null);
    setSelectedDifficulty(null);
    setFilteredQuestions([]);
    setScore(0);
    setIsChecking(false);
  };

  const difficultyConfig: Record<Difficulty, { label: string; color: string; desc: string }> = {
    Easy: { label: 'Dễ', color: 'bg-green-500', desc: 'Câu hỏi cơ bản, dễ hiểu.' },
    Medium: { label: 'Vừa', color: 'bg-yellow-500', desc: 'Câu hỏi tiêu chuẩn.' },
    Hard: { label: 'Khó', color: 'bg-red-500', desc: 'Thử thách nâng cao.' }
  };

  const getLevelImageSeed = (id: number) => {
    const seeds: Record<number, string> = {
      1: 'information',
      2: 'computer',
      3: 'keyboard',
      4: 'security',
      5: 'logic'
    };
    return seeds[id] || 'education';
  };

  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-50" />
      
      <AnimatePresence mode="wait">
        {gameState === 'HOME' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10 max-w-2xl"
          >
            <div className="mb-8 floating">
              <div className="bg-white p-6 rounded-full inline-block shadow-2xl border-8 border-sky-100">
                <Trophy className="w-24 h-24 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-sky-600 mb-4 drop-shadow-sm">
              Tin Học 3
            </h1>
            <p className="text-2xl font-display text-slate-600 mb-12">
              Nhà Thông Thái Nhỏ
            </p>
            <div className="flex flex-col gap-4 mx-auto max-w-xs">
              <button 
                onClick={handleStartClick}
                className="btn-playful bg-sky-500 text-white hover:bg-sky-600 flex items-center justify-center gap-2"
              >
                <Play className="fill-current" /> Bắt đầu ngay
              </button>
              <button 
                onClick={() => setGameState('ACHIEVEMENTS')}
                className="btn-playful bg-white text-purple-600 border-2 border-purple-100 flex items-center justify-center gap-2"
              >
                <Medal className="w-5 h-5" /> Thành tích
              </button>
              <button 
                onClick={() => {
                  setGameState('LEADERBOARD');
                  fetchLeaderboard();
                }}
                className="btn-playful bg-white text-sky-600 border-2 border-sky-100 flex items-center justify-center gap-2"
              >
                <ListOrdered className="w-5 h-5" /> Bảng xếp hạng
              </button>
              {userName && (
                <p className="text-slate-400 text-sm mt-2">
                  Chào mừng, <span className="font-bold text-sky-500">{userName}</span>!
                  <button 
                    onClick={() => {
                      setUserName('');
                      localStorage.removeItem('quiz_user_name');
                      setGameState('NAME_INPUT');
                    }}
                    className="ml-2 text-sky-400 underline hover:text-sky-600"
                  >
                    Đổi tên
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        )}

        {gameState === 'NAME_INPUT' && (
          <motion.div 
            key="name-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="z-10 w-full max-w-md"
          >
            <div className="card-playful text-center">
              <div className="bg-sky-100 p-4 rounded-full inline-block mb-6">
                <User className="w-12 h-12 text-sky-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-2">Tên của em là gì?</h2>
              <p className="text-slate-500 mb-8">Hãy nhập tên để lưu điểm vào bảng xếp hạng nhé!</p>
              
              <form onSubmit={submitName} className="space-y-4">
                <input 
                  type="text"
                  value={tempName}
                  onChange={(e) => {
                    setTempName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  placeholder="Nhập tên của em..."
                  className={`w-full p-4 rounded-2xl border-2 outline-none text-center text-xl font-bold text-slate-700 transition-all ${
                    nameError ? 'border-red-500 bg-red-50' : 'border-sky-100 focus:border-sky-500'
                  }`}
                  autoFocus
                  required
                  maxLength={20}
                />
                <AnimatePresence>
                  {nameError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm font-bold"
                    >
                      {nameError}
                    </motion.p>
                  )}
                </AnimatePresence>
                <button 
                  type="submit"
                  className="btn-playful bg-sky-500 text-white w-full"
                >
                  Tiếp tục
                </button>
                <button 
                  type="button"
                  onClick={() => setGameState('HOME')}
                  className="text-slate-400 hover:text-slate-600 font-medium"
                >
                  Quay lại
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {gameState === 'LEVEL_SELECT' && (
          <motion.div 
            key="levels"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="z-10 w-full max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setGameState('HOME')}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-slate-400" />
              </button>
              <h2 className="text-3xl font-display font-bold text-slate-800">Chọn chủ đề học tập</h2>
            </div>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {LEVELS.map((level) => {
                const Icon = ICON_MAP[level.icon];
                return (
                  <motion.button
                    key={level.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.03, translateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectLevel(level)}
                    className="card-playful text-left flex flex-col gap-4 group"
                  >
                    <div className="w-full h-32 overflow-hidden rounded-xl bg-slate-100">
                      <img 
                        src={`https://picsum.photos/seed/${getLevelImageSeed(level.id)}/600/300`} 
                        alt={level.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-100 p-4 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-slate-800 mb-1">{level.title}</h3>
                        <p className="text-slate-500 text-sm">{level.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}

        {gameState === 'DIFFICULTY_SELECT' && currentLevel && (
          <motion.div 
            key="difficulty"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="z-10 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setGameState('LEVEL_SELECT')}
                  className="p-2 hover:bg-white rounded-full transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-slate-400" />
                </button>
                <h2 className="text-3xl font-display font-bold text-slate-800">Chọn mức độ</h2>
              </div>
              <button 
                onClick={() => setShowQuitConfirm(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 font-bold transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Thoát</span>
              </button>
            </div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid gap-4"
            >
              {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((diff) => {
                const isSelected = selectedDifficulty === diff;
                const isOtherSelected = selectedDifficulty !== null && !isSelected;
                
                return (
                  <motion.button
                    key={diff}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    whileHover={!isOtherSelected ? { scale: 1.02, x: 5 } : {}}
                    whileTap={!isOtherSelected ? { scale: 0.98 } : {}}
                    disabled={isOtherSelected}
                    onClick={() => {
                      playSound('select');
                      setSelectedDifficulty(diff);
                    }}
                    className={`card-playful text-left flex items-center gap-6 group transition-all duration-300 ${
                      isSelected ? 'ring-4 ring-sky-500 border-sky-200 bg-sky-50/30' : 
                      isOtherSelected ? 'opacity-40 grayscale' : ''
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 ${
                      difficultyConfig[diff].color
                    } ${isSelected ? 'scale-110 shadow-lg' : ''}`}>
                      {difficultyConfig[diff].label[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-slate-800">{difficultyConfig[diff].label}</h3>
                      <p className="text-slate-500">{difficultyConfig[diff].desc}</p>
                    </div>
                    {isSelected && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-sky-500 text-white p-2 rounded-full"
                      >
                        <CheckCircle2 className="w-6 h-6" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            <AnimatePresence>
              {selectedDifficulty && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8"
                >
                  <button
                    onClick={startQuiz}
                    className="btn-playful bg-sky-500 text-white w-full flex items-center justify-center gap-3 text-xl py-5 shadow-xl shadow-sky-200"
                  >
                    <span>Bắt đầu học ngay</span>
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === 'PLAYING' && currentLevel && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="z-10 w-full max-w-3xl"
          >
            <div className="mb-8 bg-white/50 rounded-2xl glass-morphism overflow-hidden">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowQuitConfirm(true)}
                    className="p-2 hover:bg-white rounded-full transition-colors text-red-500"
                    title="Thoát trò chơi"
                  >
                    <LogOut className="w-6 h-6" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="bg-sky-500 text-white p-2 rounded-lg">
                      {(() => {
                        const Icon = ICON_MAP[currentLevel.icon];
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <span className="font-display font-bold text-slate-700 hidden md:inline">{currentLevel.title}</span>
                  </div>
                  {selectedDifficulty && (
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${difficultyConfig[selectedDifficulty].color}`}>
                      {difficultyConfig[selectedDifficulty].label}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-500 font-display">
                    Câu {currentQuestionIndex + 1}/{filteredQuestions.length}
                  </span>
                  <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={score}
                        initial={{ scale: 1.5, y: -5, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        className="text-sm font-bold text-sky-600 font-display"
                      >
                        {score}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-200/50">
                <motion.div 
                  className="h-full bg-sky-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                />
              </div>
            </div>

            <div className="card-playful mb-6 min-h-[400px] flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h3 
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-display font-bold text-slate-800 mb-8"
                >
                  {filteredQuestions[currentQuestionIndex].text}
                </motion.h3>
              </AnimatePresence>
              
              <div className="grid gap-4 mt-auto">
                {(!filteredQuestions[currentQuestionIndex].type || filteredQuestions[currentQuestionIndex].type === 'MCQ' || filteredQuestions[currentQuestionIndex].type === 'FIND_ERROR') && (
                  filteredQuestions[currentQuestionIndex].options?.map((option, idx) => {
                    let statusClass = "border-slate-100 hover:bg-sky-50 hover:border-sky-200";
                    if (isChecking && idx === selectedOption) {
                      statusClass = "bg-sky-50 border-sky-500 text-sky-700 ring-2 ring-sky-200";
                    } else if (showFeedback) {
                      if (idx === filteredQuestions[currentQuestionIndex].correctAnswer) {
                        statusClass = "bg-green-50 border-green-500 text-green-700";
                      } else if (idx === selectedOption) {
                        statusClass = "bg-red-50 border-red-500 text-red-700";
                      } else {
                        statusClass = "opacity-50 border-slate-100";
                      }
                    }

                    return (
                      <motion.button
                        key={`${currentQuestionIndex}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        disabled={showFeedback || isChecking}
                        onClick={() => handleAnswer(idx)}
                        className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all flex items-center justify-between ${statusClass}`}
                      >
                        <span>{option}</span>
                        {isChecking && idx === selectedOption && (
                          <Loader2 className="w-5 h-5 animate-spin text-sky-500" />
                        )}
                        {showFeedback && idx === filteredQuestions[currentQuestionIndex].correctAnswer && (
                          <CheckCircle2 className="text-green-500" />
                        )}
                        {showFeedback && idx === selectedOption && idx !== filteredQuestions[currentQuestionIndex].correctAnswer && (
                          <XCircle className="text-red-500" />
                        )}
                      </motion.button>
                    );
                  })
                )}

                {filteredQuestions[currentQuestionIndex].type === 'ORDERING' && (
                  <div className="grid gap-3">
                    {orderingItems.map((item, idx) => (
                      <motion.div
                        key={`${currentQuestionIndex}-${item}`}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-2xl border-2 flex items-center justify-between bg-white ${
                          showFeedback 
                            ? (JSON.stringify(orderingItems) === JSON.stringify(filteredQuestions[currentQuestionIndex].correctAnswer) 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-red-500 bg-red-50')
                            : 'border-slate-100'
                        }`}
                      >
                        <span className="font-semibold text-slate-700">{item}</span>
                        {!showFeedback && (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleOrderingMove(idx, 'up')}
                              disabled={idx === 0}
                              className="p-1 hover:bg-slate-100 rounded-lg disabled:opacity-30"
                            >
                              <ChevronUp className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => handleOrderingMove(idx, 'down')}
                              disabled={idx === orderingItems.length - 1}
                              className="p-1 hover:bg-slate-100 rounded-lg disabled:opacity-30"
                            >
                              <ChevronDown className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {!showFeedback && (
                      <button
                        onClick={handleOrderingSubmit}
                        disabled={isChecking}
                        className="mt-4 btn-playful bg-sky-500 text-white flex items-center justify-center gap-2"
                      >
                        {isChecking ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                        Xác nhận thứ tự
                      </button>
                    )}
                  </div>
                )}

                {filteredQuestions[currentQuestionIndex].type === 'MATCHING' && (
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Cột A</p>
                        {filteredQuestions[currentQuestionIndex].pairs?.map((pair, idx) => {
                          const isMatched = matchingPairs.some(p => p.left === pair.left);
                          const isSelected = matchingSelections.left === pair.left;
                          return (
                            <button
                              key={`left-${idx}`}
                              disabled={showFeedback || isMatched}
                              onClick={() => handleMatchingSelect('left', pair.left)}
                              className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                                isMatched ? 'bg-slate-100 border-slate-200 text-slate-400' :
                                isSelected ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-100' :
                                'border-slate-100 hover:border-sky-200 hover:bg-sky-50'
                              }`}
                            >
                              {pair.left}
                            </button>
                          );
                        })}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Cột B</p>
                        {(() => {
                          // Shuffle right side once per question
                          const rightItems = filteredQuestions[currentQuestionIndex].pairs?.map(p => p.right) || [];
                          return rightItems.map((item, idx) => {
                            const isMatched = matchingPairs.some(p => p.right === item);
                            const isSelected = matchingSelections.right === item;
                            return (
                              <button
                                key={`right-${idx}`}
                                disabled={showFeedback || isMatched}
                                onClick={() => handleMatchingSelect('right', item)}
                                className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                                  isMatched ? 'bg-slate-100 border-slate-200 text-slate-400' :
                                  isSelected ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-100' :
                                  'border-slate-100 hover:border-sky-200 hover:bg-sky-50'
                                }`}
                              >
                                {item}
                              </button>
                            );
                          });
                        })()}
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-200">
                      <p className="text-xs font-bold text-slate-400 mb-3 uppercase">Các cặp đã nối:</p>
                      <div className="flex flex-wrap gap-2">
                        {matchingPairs.map((pair, idx) => (
                          <div key={idx} className="bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm flex items-center gap-2">
                            <span className="text-slate-600">{pair.left}</span>
                            <span className="text-slate-300">↔</span>
                            <span className="text-slate-600">{pair.right}</span>
                            {!showFeedback && (
                              <button 
                                onClick={() => setMatchingPairs(matchingPairs.filter((_, i) => i !== idx))}
                                className="text-red-400 hover:text-red-600 ml-1"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                        {matchingPairs.length === 0 && <p className="text-slate-400 italic text-sm">Chưa có cặp nào được nối</p>}
                      </div>
                    </div>

                    {!showFeedback && (
                      <button
                        onClick={handleMatchingSubmit}
                        disabled={isChecking || matchingPairs.length < (filteredQuestions[currentQuestionIndex].pairs?.length || 0)}
                        className="btn-playful bg-sky-500 text-white flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isChecking ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                        Xác nhận kết quả
                      </button>
                    )}
                  </div>
                )}

                {filteredQuestions[currentQuestionIndex].type === 'DRAG_DROP' && (
                  <div className="grid gap-6">
                    <div className="flex flex-wrap gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                      {filteredQuestions[currentQuestionIndex].items?.map((item, idx) => {
                        const isPlaced = !!dragDropMapping[item];
                        const isSelected = selectedDragItem === item;
                        return (
                          <button
                            key={`item-${idx}`}
                            disabled={showFeedback || isPlaced}
                            onClick={() => handleDragDropSelect(item)}
                            className={`px-4 py-2 rounded-xl border-2 font-semibold transition-all ${
                              isPlaced ? 'opacity-30 bg-slate-200 border-slate-300' :
                              isSelected ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-100' :
                              'bg-white border-slate-100 hover:border-sky-200 shadow-sm'
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredQuestions[currentQuestionIndex].targets?.map((target, idx) => {
                        const itemsInTarget = Object.entries(dragDropMapping).filter(([_, t]) => t === target).map(([i]) => i);
                        return (
                          <div 
                            key={`target-${idx}`}
                            className={`p-4 rounded-2xl border-2 min-h-[100px] flex flex-col gap-3 transition-all ${
                              selectedDragItem ? 'border-sky-300 bg-sky-50/50 border-dashed' : 'border-slate-100 bg-white'
                            }`}
                            onClick={() => handleDragDropPlace(target)}
                          >
                            <p className="text-xs font-bold text-slate-400 uppercase">{target}</p>
                            <div className="flex flex-wrap gap-2">
                              {itemsInTarget.map((item, iIdx) => (
                                <div key={iIdx} className="bg-sky-500 text-white px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-2">
                                  {item}
                                  {!showFeedback && (
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        const newMapping = { ...dragDropMapping };
                                        delete newMapping[item];
                                        setDragDropMapping(newMapping);
                                      }}
                                      className="hover:text-sky-200"
                                    >
                                      <XCircle className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                              ))}
                              {itemsInTarget.length === 0 && <p className="text-slate-300 italic text-sm mt-2">Thả mục vào đây...</p>}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {!showFeedback && (
                      <button
                        onClick={handleDragDropSubmit}
                        disabled={isChecking || Object.keys(dragDropMapping).length < (filteredQuestions[currentQuestionIndex].items?.length || 0)}
                        className="btn-playful bg-sky-500 text-white flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isChecking ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                        Xác nhận kết quả
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 mb-6"
                >
                  <p className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Chính xác! 🎉' : 'Chưa đúng rồi! 💡'}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {filteredQuestions[currentQuestionIndex].explanation}
                  </p>
                  <button 
                    onClick={nextQuestion}
                    className="btn-playful bg-sky-500 text-white w-full"
                  >
                    {currentQuestionIndex < filteredQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === 'SUMMARY' && currentLevel && (
          <motion.div 
            key="summary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 text-center max-w-md w-full"
          >
            <div className="card-playful">
              <div className="mb-6">
                <div className="bg-yellow-100 p-6 rounded-full inline-block mb-4">
                  <Star className="w-16 h-16 text-yellow-500 fill-current" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-800">Hoàn thành!</h2>
                <p className="text-slate-500">
                  Chủ đề: {currentLevel.title} <br/>
                  Mức độ: {selectedDifficulty && difficultyConfig[selectedDifficulty].label}
                </p>
              </div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="bg-sky-50 p-6 rounded-3xl mb-8 relative overflow-hidden group"
              >
                {/* Animated background elements */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl"
                />
                <motion.div 
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"
                />

                <p className="text-slate-600 mb-1 font-semibold relative z-10">Điểm số của bạn</p>
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <AnimatePresence mode="popLayout">
                    <motion.p 
                      key={score}
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10,
                        delay: 0.4
                      }}
                      className="text-6xl font-display font-bold text-sky-600 drop-shadow-sm"
                    >
                      {score}
                    </motion.p>
                  </AnimatePresence>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl font-display font-bold text-slate-300"
                  >
                    /
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-5xl font-display font-bold text-slate-400"
                  >
                    {filteredQuestions.length}
                  </motion.p>
                </div>
                
                {/* Celebratory message based on score */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-sm font-bold text-sky-500 uppercase tracking-widest"
                >
                  {score === filteredQuestions.length ? "Tuyệt vời! Điểm tuyệt đối!" : 
                   score >= filteredQuestions.length / 2 ? "Làm tốt lắm!" : "Cố gắng lên nhé!"}
                </motion.p>
              </motion.div>

              <div className="grid gap-3">
                <button 
                  onClick={() => startQuiz()}
                  className="btn-playful bg-sky-500 text-white flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Thử lại
                </button>
                <button 
                  onClick={() => {
                    setGameState('LEADERBOARD');
                    fetchLeaderboard();
                  }}
                  className="btn-playful bg-white text-sky-600 border-2 border-sky-100 flex items-center justify-center gap-2"
                >
                  <ListOrdered className="w-5 h-5" /> Bảng xếp hạng
                </button>
                <button 
                  onClick={() => setGameState('LEVEL_SELECT')}
                  className="btn-playful bg-white text-sky-600 border-2 border-sky-100 flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" /> Về danh sách
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {gameState === 'ACHIEVEMENTS' && (
          <motion.div 
            key="achievements"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="z-10 w-full max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setGameState('HOME')}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-slate-400" />
              </button>
              <h2 className="text-3xl font-display font-bold text-slate-800">Thành tích của em</h2>
            </div>

            <div className="grid gap-4">
              {ACHIEVEMENTS.map((achievement) => {
                const isUnlocked = unlockedAchievements.includes(achievement.id);
                const Icon = ICON_MAP[achievement.icon] || Star;
                
                return (
                  <div 
                    key={achievement.id}
                    className={`card-playful flex items-center gap-6 transition-all ${
                      isUnlocked ? 'opacity-100' : 'opacity-50 grayscale bg-slate-50'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${
                      isUnlocked ? achievement.color : 'bg-slate-300'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-800">
                        {achievement.title}
                        {!isUnlocked && <span className="ml-2 text-sm font-normal text-slate-400">(Chưa khóa)</span>}
                      </h3>
                      <p className="text-slate-500">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {gameState === 'LEADERBOARD' && (
          <motion.div 
            key="leaderboard"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="z-10 w-full max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setGameState('HOME')}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-slate-400" />
              </button>
              <h2 className="text-3xl font-display font-bold text-slate-800">Bảng xếp hạng</h2>
            </div>

            <div className="card-playful overflow-hidden p-0">
              <div className="bg-sky-500 p-6 text-white text-center">
                <Medal className="w-12 h-12 mx-auto mb-2" />
                <h3 className="text-xl font-bold">Top 10 Nhà Thông Thái</h3>
              </div>

              <div className="p-4">
                {isLoadingLeaderboard ? (
                  <div className="py-12 text-center text-slate-400">
                    <div className="animate-spin w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full mx-auto mb-4" />
                    Đang tải dữ liệu...
                  </div>
                ) : leaderboardData.length === 0 ? (
                  <div className="py-12 text-center text-slate-400">
                    Chưa có kỷ lục nào. Hãy là người đầu tiên!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {leaderboardData.map((entry, index) => (
                      <div 
                        key={entry.id}
                        className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                          index === 0 ? 'bg-yellow-50 border-yellow-200' : 
                          index === 1 ? 'bg-slate-50 border-slate-200' :
                          index === 2 ? 'bg-orange-50 border-orange-200' : 'bg-white border-slate-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          index === 0 ? 'bg-yellow-400 text-white' : 
                          index === 1 ? 'bg-slate-400 text-white' :
                          index === 2 ? 'bg-orange-400 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-800">{entry.userName}</p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>{entry.levelTitle}</span>
                            <span>•</span>
                            <span className={`px-2 py-0.5 rounded-full text-white ${difficultyConfig[entry.difficulty as Difficulty]?.color || 'bg-slate-400'}`}>
                              {difficultyConfig[entry.difficulty as Difficulty]?.label || entry.difficulty}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-sky-600">{entry.score}/{entry.totalQuestions}</p>
                          <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400">
                            <Clock className="w-3 h-3" />
                            {entry.timestamp?.toDate().toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <button 
                  onClick={() => setGameState('HOME')}
                  className="btn-playful bg-sky-500 text-white w-full"
                >
                  Quay lại trang chủ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Notification */}
      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: '-50%' }}
            animate={{ opacity: 1, y: 20, x: '-50%' }}
            exit={{ opacity: 0, y: -100, x: '-50%' }}
            className="fixed top-0 left-1/2 z-[100] w-full max-w-sm px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-yellow-400 p-4 flex items-center gap-4">
              <div className={`p-3 rounded-xl text-white ${newAchievement.color}`}>
                {(() => {
                  const Icon = ICON_MAP[newAchievement.icon] || Star;
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider">Thành tích mới!</p>
                <h4 className="font-display font-bold text-slate-800 text-sm">{newAchievement.title}</h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <div className="fixed bottom-4 text-slate-400 text-sm font-medium flex items-center gap-2">
        <span>Tin học 3 • Kết nối tri thức</span>
      </div>

      {/* Quit Confirmation Modal */}
      <AnimatePresence>
        {showQuitConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <LogOut className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">Thoát trò chơi?</h3>
              <p className="text-slate-500 mb-8">Em có chắc chắn muốn thoát không? Kết quả hiện tại sẽ không được lưu lại đâu nhé!</p>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setShowQuitConfirm(false)}
                  className="px-6 py-3 rounded-2xl font-display font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Ở lại
                </button>
                <button 
                  onClick={confirmQuit}
                  className="px-6 py-3 rounded-2xl font-display font-semibold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200 transition-colors"
                >
                  Thoát
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
