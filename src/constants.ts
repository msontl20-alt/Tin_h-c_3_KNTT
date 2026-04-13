export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type QuestionType = 'MCQ' | 'ORDERING' | 'MATCHING' | 'FIND_ERROR' | 'DRAG_DROP';

export interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: any;
  explanation: string;
  difficulty: Difficulty;
  type?: QuestionType;
  items?: string[];
  targets?: string[];
  pairs?: { left: string; right: string }[];
  errorPart?: string;
  correction?: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "Thông tin và quyết định",
    description: "Khám phá thế giới thông tin xung quanh em.",
    icon: "Info",
    questions: [
      {
        id: 1,
        text: "Khi nghe tiếng chuông báo thức, em thức dậy. Tiếng chuông là gì?",
        options: ["Thông tin", "Quyết định", "Hành động", "Kết quả"],
        correctAnswer: 0,
        explanation: "Tiếng chuông là thông tin giúp em biết đã đến giờ thức dậy.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Em nhìn thấy đèn giao thông màu đỏ và dừng lại. Việc dừng lại là gì?",
        options: ["Thông tin", "Quyết định", "Vật mang tin", "Dữ liệu"],
        correctAnswer: 1,
        explanation: "Dừng lại là quyết định của em sau khi nhận được thông tin đèn đỏ.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Tiếng trống trường báo giờ ra chơi là gì?",
        options: ["Thông tin", "Vật mang tin", "Quyết định", "Hành động"],
        correctAnswer: 0,
        explanation: "Tiếng trống là âm thanh mang thông tin báo hiệu giờ ra chơi.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Quyển sách giáo khoa Tin học là gì?",
        options: ["Thông tin", "Vật mang tin", "Quyết định", "Bộ não"],
        correctAnswer: 1,
        explanation: "Quyển sách chứa đựng thông tin nên nó là vật mang tin.",
        difficulty: "Easy"
      },
      {
        id: 5,
        text: "Biển báo cấm đi ngược chiều cho em biết điều gì?",
        options: ["Được phép đi vào", "Không được đi vào đường này", "Đường cụt", "Bãi đỗ xe"],
        correctAnswer: 1,
        explanation: "Biển báo cung cấp thông tin để em đưa ra quyết định không đi vào đường cấm.",
        difficulty: "Easy"
      },
      {
        id: 6,
        text: "Em thấy mây đen kéo đến và quyết định mang ô. Mây đen là gì?",
        options: ["Quyết định", "Thông tin", "Hành động", "Vật mang tin"],
        correctAnswer: 1,
        explanation: "Mây đen là thông tin dự báo trời sắp mưa.",
        difficulty: "Medium"
      },
      {
        id: 7,
        text: "Thông tin giúp con người làm gì?",
        options: ["Làm việc mệt hơn", "Đưa ra quyết định phù hợp", "Không cần suy nghĩ", "Ngủ ngon hơn"],
        correctAnswer: 1,
        explanation: "Thông tin là cơ sở để chúng ta đưa ra các quyết định đúng đắn.",
        difficulty: "Medium"
      },
      {
        id: 8,
        text: "Đâu là vật mang tin trong các ví dụ sau?",
        options: ["Tiếng chim hót", "Mùi hương hoa", "Tờ báo", "Cảm giác nóng"],
        correctAnswer: 2,
        explanation: "Tờ báo là vật chứa đựng thông tin dạng chữ viết và hình ảnh.",
        difficulty: "Medium"
      },
      {
        id: 9,
        text: "Tiếng chim hót là loại thông tin nào?",
        options: ["Hình ảnh", "Âm thanh", "Chữ viết", "Con số"],
        correctAnswer: 1,
        explanation: "Tiếng chim hót là thông tin dạng âm thanh.",
        difficulty: "Medium"
      },
      {
        id: 10,
        text: "Hình ảnh trên tivi là loại thông tin nào?",
        options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Mùi vị"],
        correctAnswer: 2,
        explanation: "Tivi hiển thị các khung hình chuyển động, đó là thông tin dạng hình ảnh.",
        difficulty: "Medium"
      },
      {
        id: 11,
        text: "Dòng chữ trong vở bài tập là loại thông tin nào?",
        options: ["Hình ảnh", "Âm thanh", "Chữ viết", "Hành động"],
        correctAnswer: 2,
        explanation: "Các ký tự em viết trong vở là thông tin dạng chữ viết.",
        difficulty: "Hard"
      },
      {
        id: 12,
        text: "Khi xem phim hoạt hình, em nhận được thông tin dạng nào?",
        options: ["Chỉ âm thanh", "Chỉ hình ảnh", "Cả âm thanh và hình ảnh", "Chỉ chữ viết"],
        correctAnswer: 2,
        explanation: "Phim hoạt hình kết hợp cả hình ảnh chuyển động và âm thanh sống động.",
        difficulty: "Hard"
      },
      {
        id: 13,
        text: "Khi em đọc truyện tranh, thông tin em nhận được là gì?",
        options: ["Chỉ chữ viết", "Chỉ âm thanh", "Chữ viết và hình ảnh", "Mùi hương"],
        correctAnswer: 2,
        explanation: "Truyện tranh dùng cả lời thoại (chữ) và tranh vẽ (hình ảnh) để kể chuyện.",
        difficulty: "Hard"
      },
      {
        id: 14,
        text: "Tiếng còi xe cứu thương giúp người đi đường làm gì?",
        options: ["Đi chậm lại", "Nhường đường", "Dừng lại xem", "Tăng tốc"],
        correctAnswer: 1,
        explanation: "Tiếng còi báo hiệu xe ưu tiên để mọi người nhường đường.",
        difficulty: "Hard"
      },
      {
        id: 15,
        text: "Đâu là vật mang tin thường thấy trong lớp học?",
        options: ["Bảng đen", "Bàn ghế", "Cửa sổ", "Bóng đèn"],
        correctAnswer: 0,
        explanation: "Bảng đen là nơi thầy cô ghi nội dung bài học (thông tin) cho học sinh.",
        difficulty: "Hard"
      },
      {
        id: 16,
        text: "Em đọc dự báo thời tiết nói 'Trời nắng', nhưng nhìn ra cửa sổ thấy mây đen rất nhiều. Em nên làm gì?",
        options: ["Tin dự báo và không mang ô", "Tin vào mắt mình và mang theo ô", "Không đi học nữa", "Đợi đến khi mưa mới tính"],
        correctAnswer: 1,
        explanation: "Thông tin thực tế quan sát được (mây đen) giúp em đưa ra quyết định an toàn hơn.",
        difficulty: "Medium"
      },
      {
        id: 17,
        text: "Trong một trò chơi, bạn em ra hiệu bằng tay để em chạy. Hiệu tay đó là loại thông tin nào?",
        options: ["Âm thanh", "Hình ảnh/Hành động", "Chữ viết", "Con số"],
        correctAnswer: 1,
        explanation: "Cử chỉ điệu bộ là thông tin dạng hình ảnh mà mắt em thu nhận được.",
        difficulty: "Medium"
      },
      {
        id: 18,
        text: "Em nhận được một bức thư nhưng bị nhòe nước không đọc được chữ. Tại sao em không đưa ra được quyết định từ bức thư đó?",
        options: ["Vì em không thích đọc", "Vì thiếu thông tin hoặc thông tin không rõ ràng", "Vì bức thư quá ngắn", "Vì bức thư không có hình ảnh"],
        correctAnswer: 1,
        explanation: "Thông tin cần phải rõ ràng thì bộ não mới có thể xử lý và đưa ra quyết định đúng.",
        difficulty: "Hard"
      },
      {
        id: 19,
        text: "Một biển báo có hình chiếc còi và một dấu gạch chéo đỏ. Em nên quyết định thế nào khi đi qua đây?",
        options: ["Bấm còi thật to", "Không được bấm còi", "Chỉ bấm còi vào ban đêm", "Bấm còi khi thấy người quen"],
        correctAnswer: 1,
        explanation: "Biển báo cung cấp thông tin cấm, giúp em đưa ra quyết định tuân thủ luật lệ.",
        difficulty: "Hard"
      },
      {
        id: 20,
        text: "Nếu em muốn biết ngày mai có tiết Tin học không, em nên tìm thông tin ở đâu là chính xác nhất?",
        options: ["Hỏi bạn hàng xóm", "Xem Thời khóa biểu", "Đoán mò", "Nhìn vào cặp sách"],
        correctAnswer: 1,
        explanation: "Thời khóa biểu là vật mang tin chứa thông tin chính xác về lịch học.",
        difficulty: "Easy"
      },
      {
        id: 21,
        text: "Khi em thấy biển báo 'Cấm làm ồn' ở bệnh viện, em nên làm gì?",
        options: ["Nói chuyện to hơn", "Giữ trật tự, đi nhẹ nói khẽ", "Hát vang", "Chạy nhảy"],
        correctAnswer: 1,
        explanation: "Biển báo cung cấp thông tin giúp em đưa ra quyết định giữ trật tự.",
        difficulty: "Easy"
      },
      {
        id: 22,
        text: "Em nghe thấy tiếng loa phường thông báo lịch tiêm chủng. Loa phường là gì?",
        options: ["Thông tin", "Vật mang tin", "Quyết định", "Hành động"],
        correctAnswer: 1,
        explanation: "Loa là thiết bị phát ra âm thanh mang thông tin, nên nó là vật mang tin.",
        difficulty: "Easy"
      },
      {
        id: 23,
        text: "Dòng chữ 'Chúc mừng năm mới' trên tấm thiệp là loại thông tin nào?",
        options: ["Âm thanh", "Hình ảnh", "Chữ viết", "Con số"],
        correctAnswer: 2,
        explanation: "Lời chúc được viết bằng các ký tự chữ cái.",
        difficulty: "Easy"
      },
      {
        id: 24,
        text: "Khi nhìn thấy trời tối sầm, em quyết định bật đèn. Việc bật đèn là gì?",
        options: ["Thông tin", "Vật mang tin", "Quyết định", "Dữ liệu"],
        correctAnswer: 2,
        explanation: "Bật đèn là hành động em chọn thực hiện sau khi nhận thấy trời tối.",
        difficulty: "Easy"
      },
      {
        id: 25,
        text: "Em đang xem bản đồ để tìm đường đến nhà bạn. Bản đồ là gì?",
        options: ["Thông tin", "Vật mang tin", "Quyết định", "Bộ não"],
        correctAnswer: 1,
        explanation: "Bản đồ chứa các ký hiệu và hình ảnh chỉ đường, nên nó là vật mang tin.",
        difficulty: "Medium"
      },
      {
        id: 26,
        text: "Tiếng còi trọng tài báo hiệu trận đấu kết thúc là loại thông tin nào?",
        options: ["Hình ảnh", "Âm thanh", "Chữ viết", "Mùi vị"],
        correctAnswer: 1,
        explanation: "Tiếng còi là âm thanh mang thông tin báo hiệu.",
        difficulty: "Medium"
      },
      {
        id: 27,
        text: "Khi em đọc một bài toán và tìm ra cách giải. Cách giải đó là kết quả của việc gì?",
        options: ["Xử lý thông tin", "Thu nhận thông tin", "Lưu trữ thông tin", "Truyền thông tin"],
        correctAnswer: 0,
        explanation: "Bộ não em đã xử lý các dữ liệu từ đề bài để đưa ra cách giải.",
        difficulty: "Medium"
      },
      {
        id: 28,
        text: "Tại sao biển báo giao thông thường có màu sắc nổi bật (đỏ, vàng)?",
        options: ["Để cho đẹp", "Để mọi người dễ dàng nhận thấy thông tin", "Để trang trí đường phố", "Để tiết kiệm sơn"],
        correctAnswer: 1,
        explanation: "Màu sắc nổi bật giúp thông tin được truyền đi hiệu quả và nhanh chóng hơn.",
        difficulty: "Hard"
      },
      {
        id: 29,
        text: "Nếu em nhận được thông tin sai lệch, quyết định của em sẽ như thế nào?",
        options: ["Luôn đúng", "Có thể dẫn đến hành động sai", "Không ảnh hưởng gì", "Luôn tốt hơn"],
        correctAnswer: 1,
        explanation: "Thông tin là cơ sở của quyết định, thông tin sai sẽ dẫn đến quyết định sai.",
        difficulty: "Hard"
      },
      {
        id: 30,
        text: "Trong quá trình xử lý thông tin của con người, bộ phận nào đóng vai trò quan trọng nhất?",
        options: ["Đôi mắt", "Đôi tai", "Bộ não", "Bàn tay"],
        correctAnswer: 2,
        explanation: "Bộ não là nơi tiếp nhận, phân tích và đưa ra các quyết định từ thông tin.",
        difficulty: "Hard"
      }
    ]
  },
  {
    id: 2,
    title: "Làm quen với máy tính",
    description: "Tìm hiểu các bộ phận của máy tính.",
    icon: "Monitor",
    questions: [
      {
        id: 1,
        text: "Bộ phận nào của máy tính dùng để hiển thị kết quả làm việc?",
        options: ["Bàn phím", "Chuột", "Màn hình", "Thân máy"],
        correctAnswer: 2,
        explanation: "Màn hình giúp em nhìn thấy hình ảnh và chữ viết.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Bộ phận nào được coi là 'bộ não' của máy tính?",
        options: ["Màn hình", "Thân máy (CPU)", "Chuột", "Loa"],
        correctAnswer: 1,
        explanation: "Thân máy chứa bộ vi xử lý, điều khiển mọi hoạt động của máy tính.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Máy tính để bàn thường có mấy bộ phận chính?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "4 bộ phận chính: Thân máy, màn hình, bàn phím và chuột.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Chuột máy tính giúp em làm gì?",
        options: ["Nhập chữ", "Hiển thị hình ảnh", "Điều khiển máy tính dễ dàng", "Xử lý dữ liệu"],
        correctAnswer: 2,
        explanation: "Chuột dùng để thực hiện các lệnh điều khiển trên màn hình.",
        difficulty: "Easy"
      },
      {
        id: 5,
        text: "Bàn phím giúp em làm gì?",
        options: ["Nghe nhạc", "Nhập chữ và số", "Di chuyển con trỏ", "In tài liệu"],
        correctAnswer: 1,
        explanation: "Bàn phím có các phím chữ và số để em đưa dữ liệu vào máy tính.",
        difficulty: "Easy"
      },
      {
        id: 6,
        text: "Khi ngồi làm việc với máy tính, mắt nên cách màn hình khoảng bao nhiêu?",
        options: ["10-20 cm", "30-40 cm", "50-80 cm", "Trên 1 mét"],
        correctAnswer: 2,
        explanation: "Khoảng cách 50-80 cm giúp bảo vệ mắt khỏi mệt mỏi.",
        difficulty: "Medium"
      },
      {
        id: 7,
        text: "Tư thế ngồi đúng giúp em tránh được bệnh gì?",
        options: ["Đau bụng", "Cận thị và cong vẹo cột sống", "Đau tai", "Sổ mũi"],
        correctAnswer: 1,
        explanation: "Ngồi đúng tư thế rất quan trọng cho cột sống và thị lực của em.",
        difficulty: "Medium"
      },
      {
        id: 8,
        text: "Cách tắt máy tính đúng là gì?",
        options: ["Rút phích cắm điện", "Nhấn nút nguồn trên thân máy", "Vào Start -> Power -> Shut down", "Tắt màn hình"],
        correctAnswer: 2,
        explanation: "Tắt bằng phần mềm giúp máy tính bền hơn và không mất dữ liệu.",
        difficulty: "Medium"
      },
      {
        id: 9,
        text: "Không nên để máy tính ở nơi nào?",
        options: ["Bàn học sạch sẽ", "Phòng có điều hòa", "Nơi ẩm ướt hoặc có ánh nắng trực tiếp", "Nơi thoáng mát"],
        correctAnswer: 2,
        explanation: "Độ ẩm và nhiệt độ cao có thể làm hỏng các linh kiện điện tử.",
        difficulty: "Medium"
      },
      {
        id: 10,
        text: "Thiết bị nào dùng để nghe âm thanh từ máy tính?",
        options: ["Màn hình", "Loa hoặc tai nghe", "Chuột", "Bàn phím"],
        correctAnswer: 1,
        explanation: "Loa và tai nghe là thiết bị đưa âm thanh ra ngoài cho em nghe.",
        difficulty: "Medium"
      },
      {
        id: 11,
        text: "Khi bật máy tính, em nhấn nút nào trên thân máy?",
        options: ["Nút Enter", "Nút nguồn (Power)", "Nút Reset", "Nút Shift"],
        correctAnswer: 1,
        explanation: "Nút nguồn dùng để khởi động máy tính.",
        difficulty: "Hard"
      },
      {
        id: 12,
        text: "Để bảo vệ mắt, em nên làm gì khi dùng máy tính?",
        options: ["Nhìn sát màn hình", "Dùng trong bóng tối", "Nghỉ ngơi sau mỗi 30 phút", "Không bao giờ chớp mắt"],
        correctAnswer: 2,
        explanation: "Nghỉ ngơi giúp mắt thư giãn sau thời gian tập trung.",
        difficulty: "Hard"
      },
      {
        id: 13,
        text: "Máy tính xách tay (Laptop) có các bộ phận chính giống máy tính để bàn không?",
        options: ["Không có gì giống", "Có, nhưng được tích hợp gọn lại", "Chỉ có màn hình", "Chỉ có bàn phím"],
        correctAnswer: 1,
        explanation: "Laptop tích hợp thân máy, màn hình, bàn phím và chuột vào một khối.",
        difficulty: "Hard"
      },
      {
        id: 14,
        text: "Thiết bị nào giúp em đưa hình ảnh của mình vào máy tính?",
        options: ["Máy in", "Webcam", "Loa", "Chuột"],
        correctAnswer: 1,
        explanation: "Webcam chụp và truyền hình ảnh trực tiếp vào máy tính.",
        difficulty: "Hard"
      },
      {
        id: 15,
        text: "Tại sao không nên vừa ăn uống vừa dùng máy tính?",
        options: ["Vì máy tính sẽ đói", "Dễ làm đổ nước, rơi vụn thức ăn hỏng máy", "Vì thức ăn sẽ mất ngon", "Vì máy tính sẽ chạy chậm"],
        correctAnswer: 1,
        explanation: "Giữ vệ sinh giúp máy tính sạch sẽ và tránh chập điện.",
        difficulty: "Hard"
      },
      {
        id: 16,
        text: "Nếu máy tính không có loa hoặc tai nghe, em sẽ gặp khó khăn gì?",
        options: ["Không nhìn thấy hình ảnh", "Không nghe được âm thanh", "Không gõ được chữ", "Không di chuyển được chuột"],
        correctAnswer: 1,
        explanation: "Loa là thiết bị đưa thông tin dạng âm thanh ra ngoài.",
        difficulty: "Easy"
      },
      {
        id: 17,
        text: "Khi em đang gõ văn bản mà màn hình bỗng nhiên tắt đen, bộ phận nào có thể đang gặp sự cố?",
        options: ["Bàn phím", "Chuột", "Màn hình hoặc dây nguồn", "Loa"],
        correctAnswer: 2,
        explanation: "Màn hình tắt có thể do hỏng màn hình hoặc mất nguồn điện cấp cho nó.",
        difficulty: "Medium"
      },
      {
        id: 18,
        text: "Máy tính bảng (Tablet) khác máy tính để bàn ở điểm nào nhất?",
        options: ["Không có bộ não", "Dùng màn hình cảm ứng thay cho chuột và bàn phím rời", "Không xem được phim", "To hơn máy tính để bàn"],
        correctAnswer: 1,
        explanation: "Máy tính bảng tích hợp mọi thứ vào một màn hình cảm ứng tiện lợi.",
        difficulty: "Medium"
      },
      {
        id: 19,
        text: "Tại sao Thân máy (CPU) được coi là bộ phận quan trọng nhất?",
        options: ["Vì nó đẹp nhất", "Vì nó chứa bộ vi xử lý điều khiển mọi hoạt động", "Vì nó nặng nhất", "Vì nó có nhiều nút bấm"],
        correctAnswer: 1,
        explanation: "Mọi thông tin đều được đưa về thân máy để xử lý trước khi hiển thị kết quả.",
        difficulty: "Hard"
      },
      {
        id: 20,
        text: "Nếu em muốn in một bức tranh em vừa vẽ trên máy tính ra giấy, em cần kết nối thêm thiết bị nào?",
        options: ["Máy in", "Webcam", "Loa", "Bàn phím"],
        correctAnswer: 0,
        explanation: "Máy in giúp chuyển thông tin từ máy tính ra giấy.",
        difficulty: "Hard"
      },
      {
        id: 21,
        text: "Khi em muốn nghe nhạc mà không làm phiền người khác, em nên dùng thiết bị nào?",
        options: ["Loa", "Tai nghe", "Màn hình", "Chuột"],
        correctAnswer: 1,
        explanation: "Tai nghe giúp em nghe âm thanh riêng tư.",
        difficulty: "Easy"
      },
      {
        id: 22,
        text: "Bộ phận nào của máy tính giúp em di chuyển con trỏ trên màn hình?",
        options: ["Bàn phím", "Chuột", "Thân máy", "Máy in"],
        correctAnswer: 1,
        explanation: "Chuột là thiết bị điều khiển con trỏ chính xác nhất.",
        difficulty: "Easy"
      },
      {
        id: 23,
        text: "Màn hình máy tính dùng để làm gì?",
        options: ["Nhập dữ liệu", "Xử lý dữ liệu", "Hiển thị thông tin", "Lưu trữ dữ liệu"],
        correctAnswer: 2,
        explanation: "Màn hình là thiết bị xuất, giúp em nhìn thấy kết quả.",
        difficulty: "Easy"
      },
      {
        id: 24,
        text: "Thân máy tính thường có hình dạng gì?",
        options: ["Hình tròn", "Hình khối hộp", "Hình tam giác", "Hình cầu"],
        correctAnswer: 1,
        explanation: "Thân máy thường là một khối hộp chứa các linh kiện bên trong.",
        difficulty: "Easy"
      },
      {
        id: 25,
        text: "Thiết bị nào sau đây không thuộc bộ phận chính của máy tính để bàn?",
        options: ["Màn hình", "Thân máy", "Máy in", "Bàn phím"],
        correctAnswer: 2,
        explanation: "Máy in là thiết bị ngoại vi, không phải là 1 trong 4 bộ phận chính bắt buộc.",
        difficulty: "Medium"
      },
      {
        id: 26,
        text: "Tại sao chúng ta cần cầm chuột đúng cách?",
        options: ["Để chuột không bị chạy mất", "Để thao tác nhanh và không bị mỏi tay", "Để chuột không bị hỏng", "Để máy tính chạy nhanh hơn"],
        correctAnswer: 1,
        explanation: "Cầm chuột đúng giúp em làm việc hiệu quả và bảo vệ sức khỏe cổ tay.",
        difficulty: "Medium"
      },
      {
        id: 27,
        text: "Khi máy tính đang hoạt động, em có nên tự ý tháo các dây cắm phía sau không?",
        options: ["Có, để kiểm tra", "Không, vì có thể gây chập điện hoặc hỏng máy", "Chỉ khi máy bị treo", "Có, nếu em thấy thích"],
        correctAnswer: 1,
        explanation: "An toàn điện và bảo vệ thiết bị là ưu tiên hàng đầu.",
        difficulty: "Medium"
      },
      {
        id: 28,
        text: "Sự khác biệt lớn nhất giữa máy tính xách tay và máy tính để bàn là gì?",
        options: ["Máy tính xách tay mạnh hơn", "Máy tính xách tay có thể mang đi dễ dàng", "Máy tính để bàn không có màn hình", "Máy tính xách tay không dùng điện"],
        correctAnswer: 1,
        explanation: "Tính di động là ưu điểm lớn nhất của máy tính xách tay.",
        difficulty: "Hard"
      },
      {
        id: 29,
        text: "Nếu em muốn lưu lại một đoạn video em đang nói chuyện để gửi cho bạn, em cần dùng thiết bị nào?",
        options: ["Máy in", "Webcam và Micro", "Loa", "Bàn phím"],
        correctAnswer: 1,
        explanation: "Webcam thu hình ảnh và Micro thu âm thanh của em.",
        difficulty: "Hard"
      },
      {
        id: 30,
        text: "Tại sao màn hình cảm ứng của điện thoại thông minh lại được coi là cả thiết bị vào và thiết bị ra?",
        options: ["Vì nó to", "Vì em vừa chạm để điều khiển (vào) vừa nhìn thấy kết quả (ra)", "Vì nó đắt tiền", "Vì nó có màu đẹp"],
        correctAnswer: 1,
        explanation: "Màn hình cảm ứng tích hợp cả chức năng nhập liệu và hiển thị.",
        difficulty: "Hard"
      },
      {
        id: 31,
        text: "Loa là thiết bị dùng để làm gì?",
        options: ["Nghe âm thanh", "Vẽ tranh", "Gõ chữ", "Di chuyển con trỏ"],
        correctAnswer: 0,
        explanation: "Loa phát ra âm thanh giúp em nghe nhạc, xem phim.",
        difficulty: "Easy"
      },
      {
        id: 32,
        text: "Máy tính có thể giúp em làm công việc nào sau đây?",
        options: ["Quét nhà", "Học tập và giải trí", "Nấu cơm", "Tưới cây"],
        correctAnswer: 1,
        explanation: "Máy tính là công cụ hỗ trợ đắc lực cho việc học và chơi.",
        difficulty: "Easy"
      },
      {
        id: 33,
        text: "Để bảo vệ máy tính, em nên làm gì?",
        options: ["Để nước gần máy tính", "Giữ vệ sinh máy tính sạch sẽ", "Vừa ăn vừa dùng máy", "Gõ bàn phím thật mạnh"],
        correctAnswer: 1,
        explanation: "Vệ sinh sạch sẽ giúp máy tính bền và hoạt động tốt hơn.",
        difficulty: "Easy"
      },
      {
        id: 34,
        text: "Phần mềm nào sau đây giúp em vẽ tranh trên máy tính?",
        options: ["Word", "Paint", "Excel", "PowerPoint"],
        correctAnswer: 1,
        explanation: "Paint là phần mềm vẽ đơn giản và phổ biến cho học sinh.",
        difficulty: "Easy"
      },
      {
        id: 35,
        text: "Máy tính để bàn có thể di chuyển dễ dàng như máy tính xách tay không?",
        options: ["Có", "Không", "Tùy lúc", "Chỉ khi tháo rời"],
        correctAnswer: 1,
        explanation: "Máy tính để bàn thường to và có nhiều dây cắm nên khó di chuyển.",
        difficulty: "Easy"
      },
      {
        id: 36,
        type: "DRAG_DROP",
        text: "Em hãy phân loại các mục sau vào nhóm Phần cứng hoặc Phần mềm:",
        items: ["Bàn phím", "Chuột", "Phần mềm Paint", "Màn hình", "Trò chơi điện tử", "Windows"],
        targets: ["Phần cứng", "Phần mềm"],
        correctAnswer: {
          "Bàn phím": "Phần cứng",
          "Chuột": "Phần cứng",
          "Màn hình": "Phần cứng",
          "Phần mềm Paint": "Phần mềm",
          "Trò chơi điện tử": "Phần mềm",
          "Windows": "Phần mềm"
        },
        explanation: "Phần cứng là những thứ em có thể chạm vào, phần mềm là các chương trình chạy trong máy.",
        difficulty: "Medium"
      },
      {
        id: 37,
        type: "DRAG_DROP",
        text: "Hãy phân loại các thiết bị sau theo kích thước:",
        items: ["Máy tính để bàn", "Điện thoại thông minh", "Máy tính xách tay", "Máy tính bảng"],
        targets: ["Thiết bị lớn", "Thiết bị nhỏ gọn"],
        correctAnswer: {
          "Máy tính để bàn": "Thiết bị lớn",
          "Máy tính xách tay": "Thiết bị lớn",
          "Điện thoại thông minh": "Thiết bị nhỏ gọn",
          "Máy tính bảng": "Thiết bị nhỏ gọn"
        },
        explanation: "Các thiết bị nhỏ gọn giúp em dễ dàng mang theo bên mình.",
        difficulty: "Easy"
      }
    ]
  },
  {
    id: 3,
    title: "Sử dụng chuột và bàn phím",
    description: "Rèn luyện kỹ năng tương tác với máy tính.",
    icon: "MousePointer2",
    questions: [
      {
        id: 1,
        text: "Để chọn một biểu tượng trên màn hình, em thực hiện thao tác nào?",
        options: ["Nháy chuột", "Nháy đúp chuột", "Kéo thả chuột", "Nháy chuột phải"],
        correctAnswer: 0,
        explanation: "Nháy chuột trái một lần để chọn đối tượng.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Hàng phím nào chứa các phím F và J có gờ nổi?",
        options: ["Hàng phím trên", "Hàng phím dưới", "Hàng phím cơ sở", "Hàng phím số"],
        correctAnswer: 2,
        explanation: "Hàng phím cơ sở là nơi đặt tay khi gõ phím.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Hai phím có gờ nổi trên bàn phím là phím nào?",
        options: ["A và S", "F và J", "G và H", "K và L"],
        correctAnswer: 1,
        explanation: "F và J giúp em định vị vị trí đặt tay mà không cần nhìn.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Ngón trỏ tay trái đặt lên phím nào ở hàng phím cơ sở?",
        options: ["A", "S", "D", "F"],
        correctAnswer: 3,
        explanation: "Ngón trỏ trái đặt lên phím F có gờ nổi.",
        difficulty: "Easy"
      },
      {
        id: 5,
        text: "Ngón trỏ tay phải đặt lên phím nào ở hàng phím cơ sở?",
        options: ["J", "K", "L", ";"],
        correctAnswer: 0,
        explanation: "Ngón trỏ phải đặt lên phím J có gờ nổi.",
        difficulty: "Easy"
      },
      {
        id: 6,
        text: "Phím dài nhất trên bàn phím là phím nào?",
        options: ["Phím Enter", "Phím Shift", "Phím cách (Spacebar)", "Phím Caps Lock"],
        correctAnswer: 2,
        explanation: "Phím cách dùng để tạo khoảng trắng giữa các chữ.",
        difficulty: "Medium"
      },
      {
        id: 7,
        text: "Phím dùng để xuống dòng khi gõ văn bản là phím nào?",
        options: ["Phím Esc", "Phím Enter", "Phím Ctrl", "Phím Alt"],
        correctAnswer: 1,
        explanation: "Nhấn Enter để kết thúc một đoạn và xuống dòng mới.",
        difficulty: "Medium"
      },
      {
        id: 8,
        text: "Thao tác nháy đúp chuột là gì?",
        options: ["Nhấn nút trái 1 lần", "Nhấn nút phải 1 lần", "Nhấn nhanh nút trái 2 lần liên tiếp", "Nhấn giữ nút trái"],
        correctAnswer: 2,
        explanation: "Nháy đúp thường dùng để mở một chương trình hoặc tệp.",
        difficulty: "Medium"
      },
      {
        id: 9,
        text: "Khi gõ phím, em nên đặt tay như thế nào?",
        options: ["Tì mạnh cổ tay xuống bàn", "Nhẹ nhàng, các ngón tay hơi khum", "Duỗi thẳng các ngón tay", "Chỉ dùng 2 ngón trỏ"],
        correctAnswer: 1,
        explanation: "Tư thế khum ngón tay giúp em gõ nhanh và linh hoạt hơn.",
        difficulty: "Medium"
      },
      {
        id: 10,
        text: "Phím Esc (Escape) thường dùng để làm gì?",
        options: ["Xóa chữ", "Thoát hoặc hủy bỏ một lệnh", "In đậm chữ", "Tắt máy tính"],
        correctAnswer: 1,
        explanation: "Esc nằm ở góc trên cùng bên trái, dùng để thoát nhanh.",
        difficulty: "Medium"
      },
      {
        id: 11,
        text: "Hàng phím trên nằm ở vị trí nào?",
        options: ["Dưới hàng phím cơ sở", "Trên hàng phím cơ sở", "Dưới hàng phím dưới", "Trên hàng phím số"],
        correctAnswer: 1,
        explanation: "Thứ tự: Hàng phím số -> Hàng phím trên -> Hàng phím cơ sở -> Hàng phím dưới.",
        difficulty: "Hard"
      },
      {
        id: 12,
        text: "Phím Backspace dùng để làm gì?",
        options: ["Xóa ký tự bên phải con trỏ", "Xóa ký tự bên trái con trỏ", "Viết hoa", "Cách chữ"],
        correctAnswer: 1,
        explanation: "Backspace xóa lùi về phía trước con trỏ.",
        difficulty: "Hard"
      },
      {
        id: 13,
        text: "Phím Delete dùng để làm gì?",
        options: ["Xóa ký tự bên trái con trỏ", "Xóa ký tự bên phải con trỏ", "Xuống dòng", "Thoát chương trình"],
        correctAnswer: 1,
        explanation: "Delete xóa ký tự nằm ngay sau con trỏ.",
        difficulty: "Hard"
      },
      {
        id: 14,
        text: "Khi cầm chuột, ngón trỏ tay phải nên đặt ở đâu?",
        options: ["Nút trái", "Nút phải", "Bánh lăn", "Thân chuột"],
        correctAnswer: 0,
        explanation: "Ngón trỏ dùng để nháy chuột trái - thao tác phổ biến nhất.",
        difficulty: "Hard"
      },
      {
        id: 15,
        text: "Để di chuyển một biểu tượng từ chỗ này sang chỗ khác, em dùng thao tác nào?",
        options: ["Nháy chuột", "Nháy đúp chuột", "Kéo thả chuột", "Nháy chuột phải"],
        correctAnswer: 2,
        explanation: "Nhấn giữ nút trái, di chuyển đến chỗ mới rồi thả ra.",
        difficulty: "Hard"
      },
      {
        id: 16,
        text: "Để mở một thư mục (folder) trên máy tính, em thường dùng thao tác nào?",
        options: ["Nháy chuột trái 1 lần", "Nháy đúp chuột trái", "Nháy chuột phải", "Kéo thả chuột"],
        correctAnswer: 1,
        explanation: "Nháy đúp chuột là thao tác tiêu chuẩn để mở tệp hoặc thư mục.",
        difficulty: "Easy"
      },
      {
        id: 17,
        text: "Khi muốn viết hoa tất cả các chữ cái trong một đoạn văn dài, em nên dùng phím nào?",
        options: ["Phím Shift", "Phím Caps Lock", "Phím Enter", "Phím Ctrl"],
        correctAnswer: 1,
        explanation: "Caps Lock giúp giữ chế độ viết hoa mà không cần nhấn giữ phím.",
        difficulty: "Medium"
      },
      {
        id: 18,
        text: "Nếu chuột của em bị hỏng, em có thể dùng bộ phận nào để thay thế tạm thời?",
        options: ["Màn hình", "Các phím mũi tên trên bàn phím", "Loa", "Nút nguồn"],
        correctAnswer: 1,
        explanation: "Bàn phím có các phím chức năng giúp điều khiển máy tính khi không có chuột.",
        difficulty: "Medium"
      },
      {
        id: 19,
        text: "Để viết một chữ hoa (ví dụ chữ 'A') mà không bật Caps Lock, em thực hiện thế nào?",
        options: ["Nhấn phím A rồi nhấn Shift", "Nhấn giữ phím Shift và nhấn phím A", "Nhấn phím A 2 lần", "Nhấn phím A thật mạnh"],
        correctAnswer: 1,
        explanation: "Nhấn giữ Shift kết hợp với phím chữ sẽ tạo ra chữ hoa.",
        difficulty: "Hard"
      },
      {
        id: 20,
        text: "Thao tác 'Kéo thả chuột' gồm những bước nào theo đúng thứ tự?",
        options: ["Di chuyển -> Nhấn giữ -> Thả", "Nhấn giữ nút trái -> Di chuyển -> Thả nút", "Nháy đúp -> Di chuyển", "Nhấn nút phải -> Thả"],
        correctAnswer: 1,
        explanation: "Đây là thao tác dùng để di chuyển các đối tượng trên màn hình.",
        difficulty: "Hard"
      },
      {
        id: 21,
        text: "Khi em muốn xóa một chữ cái nằm ngay trước con trỏ, em dùng phím nào?",
        options: ["Delete", "Backspace", "Enter", "Space"],
        correctAnswer: 1,
        explanation: "Phím Backspace xóa ký tự bên trái (phía trước) con trỏ.",
        difficulty: "Easy"
      },
      {
        id: 22,
        text: "Để tạo một khoảng trắng giữa hai từ, em dùng phím nào?",
        options: ["Enter", "Shift", "Phím cách (Spacebar)", "Tab"],
        correctAnswer: 2,
        explanation: "Phím cách là phím dài nhất, dùng để ngăn cách các từ.",
        difficulty: "Easy"
      },
      {
        id: 23,
        text: "Ngón cái của cả hai tay nên đặt ở đâu khi gõ phím?",
        options: ["Phím Enter", "Phím Shift", "Phím cách (Spacebar)", "Hàng phím số"],
        correctAnswer: 2,
        explanation: "Hai ngón cái phụ trách phím cách để gõ văn bản linh hoạt.",
        difficulty: "Easy"
      },
      {
        id: 24,
        text: "Thao tác nào dùng để mở một biểu tượng trên màn hình nhanh nhất?",
        options: ["Nháy chuột trái", "Nháy chuột phải", "Nháy đúp chuột trái", "Kéo thả chuột"],
        correctAnswer: 2,
        explanation: "Nháy đúp chuột trái là lệnh mở chương trình hoặc tệp tin.",
        difficulty: "Easy"
      },
      {
        id: 25,
        text: "Khi gõ phím, mắt em nên nhìn vào đâu là tốt nhất?",
        options: ["Nhìn vào bàn phím", "Nhìn vào màn hình", "Nhìn vào tay", "Nhìn ra ngoài cửa sổ"],
        correctAnswer: 1,
        explanation: "Luyện tập gõ phím không nhìn bàn phím giúp em gõ nhanh và chính xác hơn.",
        difficulty: "Medium"
      },
      {
        id: 26,
        text: "Phím nào giúp em viết hoa một chữ cái duy nhất?",
        options: ["Caps Lock", "Shift", "Ctrl", "Alt"],
        correctAnswer: 1,
        explanation: "Nhấn giữ Shift và gõ chữ cái đó để viết hoa.",
        difficulty: "Medium"
      },
      {
        id: 27,
        text: "Thao tác nháy chuột phải thường dùng để làm gì?",
        options: ["Mở tệp", "Xóa tệp", "Hiển thị bảng chọn (menu) các lệnh", "Tắt máy tính"],
        correctAnswer: 2,
        explanation: "Chuột phải mở ra các tùy chọn bổ sung cho đối tượng.",
        difficulty: "Medium"
      },
      {
        id: 28,
        text: "Tại sao bàn phím lại có hai phím Shift ở hai bên?",
        options: ["Để dự phòng khi một phím hỏng", "Để em có thể dùng ngón út của tay rảnh nhấn Shift khi tay kia gõ chữ", "Để bàn phím cân đối hơn", "Để gõ được hai chữ hoa cùng lúc"],
        correctAnswer: 1,
        explanation: "Thiết kế này giúp việc gõ phím bằng 10 ngón tay thuận tiện hơn.",
        difficulty: "Hard"
      },
      {
        id: 29,
        text: "Nếu em muốn di chuyển con trỏ xuống dòng mà không gõ thêm chữ nào, em dùng phím nào?",
        options: ["Space", "Enter", "Backspace", "Tab"],
        correctAnswer: 1,
        explanation: "Phím Enter tạo ra một dòng mới.",
        difficulty: "Hard"
      },
      {
        id: 30,
        text: "Khi luyện gõ 10 ngón, việc đặt tay đúng ở hàng phím cơ sở có lợi ích gì?",
        options: ["Làm cho bàn tay đẹp hơn", "Giúp các ngón tay vươn tới các phím khác nhanh và chính xác nhất", "Để bàn phím không bị trượt", "Để máy tính nhận diện được em"],
        correctAnswer: 1,
        explanation: "Hàng phím cơ sở là 'nhà' của các ngón tay, giúp định vị toàn bộ bàn phím.",
        difficulty: "Hard"
      }
    ]
  },
  {
    id: 4,
    title: "An toàn trên Internet",
    description: "Học cách bảo vệ bản thân khi dùng mạng.",
    icon: "ShieldCheck",
    questions: [
      {
        id: 1,
        text: "Em nên làm gì khi thấy một trang web lạ yêu cầu nhập tên và địa chỉ nhà?",
        options: ["Nhập ngay", "Hỏi ý kiến bố mẹ hoặc thầy cô", "Nhập tên giả", "Tắt máy tính"],
        correctAnswer: 1,
        explanation: "Luôn hỏi người lớn trước khi chia sẻ thông tin cá nhân trên mạng.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Mật khẩu máy tính nên được chia sẻ với ai?",
        options: ["Bạn thân", "Người lạ", "Chỉ bố mẹ hoặc người giám hộ", "Không ai cả"],
        correctAnswer: 2,
        explanation: "Chỉ nên chia sẻ mật khẩu với người thân tin cậy để được bảo vệ.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Internet giúp em làm gì?",
        options: ["Chỉ để chơi game", "Học tập, giải trí và tìm kiếm tin tức", "Làm hỏng máy tính", "Tốn thời gian"],
        correctAnswer: 1,
        explanation: "Internet là kho tàng kiến thức khổng lồ nếu biết dùng đúng cách.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Thông tin nào sau đây là thông tin cá nhân cần bảo mật?",
        options: ["Tên món ăn yêu thích", "Địa chỉ nhà và số điện thoại", "Màu sắc yêu thích", "Tên loài vật yêu thích"],
        correctAnswer: 1,
        explanation: "Kẻ xấu có thể dùng địa chỉ và số điện thoại để gây hại cho em.",
        difficulty: "Easy"
      },
      {
        id: 5,
        text: "Nếu thấy thông tin xấu hoặc đáng sợ trên mạng, em nên làm gì?",
        options: ["Xem tiếp một mình", "Gửi cho bạn bè xem", "Tắt máy và báo ngay cho người lớn", "Khóc một mình"],
        correctAnswer: 2,
        explanation: "Người lớn sẽ giúp em xử lý và tránh các nội dung không phù hợp.",
        difficulty: "Easy"
      },
      {
        id: 6,
        text: "Internet là mạng kết nối các máy tính trên toàn thế giới, đúng hay sai?",
        options: ["Đúng", "Sai", "Chỉ kết nối trong một nhà", "Chỉ kết nối trong một trường"],
        correctAnswer: 0,
        explanation: "Internet cho phép mọi người trên thế giới liên lạc với nhau.",
        difficulty: "Medium"
      },
      {
        id: 7,
        text: "Một mật khẩu mạnh nên bao gồm những gì?",
        options: ["Chỉ toàn số", "Chỉ toàn chữ cái", "Kết hợp chữ cái, chữ số và ký tự đặc biệt", "Tên của em"],
        correctAnswer: 2,
        explanation: "Mật khẩu phức tạp sẽ khó bị người khác đoán ra hơn.",
        difficulty: "Medium"
      },
      {
        id: 8,
        text: "Tại sao không nên dùng máy tính hoặc Internet quá lâu?",
        options: ["Vì máy tính sẽ mệt", "Hại mắt, mỏi lưng và thiếu vận động", "Vì sẽ hết điện", "Vì sẽ bị bố mẹ mắng"],
        correctAnswer: 1,
        explanation: "Cần cân bằng giữa việc dùng máy tính và các hoạt động ngoài trời.",
        difficulty: "Medium"
      },
      {
        id: 9,
        text: "Khi kết bạn trên mạng, em cần chú ý điều gì?",
        options: ["Kết bạn với càng nhiều người càng tốt", "Chỉ kết bạn với người mình biết rõ ngoài đời", "Kết bạn với bất kỳ ai gửi lời mời", "Chỉ kết bạn với người có ảnh đẹp"],
        correctAnswer: 1,
        explanation: "Người lạ trên mạng có thể giả mạo thông tin để lừa đảo.",
        difficulty: "Medium"
      },
      {
        id: 10,
        text: "Trang web nào sau đây giúp em tìm kiếm thông tin học tập?",
        options: ["Google", "Youtube (chỉ xem phim)", "Facebook", "Trò chơi điện tử"],
        correctAnswer: 0,
        explanation: "Google là công cụ tìm kiếm phổ biến để tra cứu kiến thức.",
        difficulty: "Medium"
      },
      {
        id: 11,
        text: "Em có thể học tiếng Anh trên Internet không?",
        options: ["Không thể", "Có, qua các trang web và ứng dụng học tập", "Chỉ học được toán", "Chỉ học được vẽ"],
        correctAnswer: 1,
        explanation: "Có rất nhiều tài liệu và video học ngoại ngữ bổ ích trên mạng.",
        difficulty: "Hard"
      },
      {
        id: 12,
        text: "Khi gặp người lạ trên mạng rủ đi chơi hoặc tặng quà, em nên làm gì?",
        options: ["Đồng ý ngay", "Rủ bạn đi cùng", "Từ chối và báo ngay cho bố mẹ", "Giữ bí mật"],
        correctAnswer: 2,
        explanation: "Đây là tình huống nguy hiểm, cần sự can thiệp của người lớn.",
        difficulty: "Hard"
      },
      {
        id: 13,
        text: "Tại sao cần đặt mật khẩu cho máy tính cá nhân?",
        options: ["Để cho đẹp", "Để bảo vệ dữ liệu và thông tin cá nhân", "Để máy chạy nhanh hơn", "Để không ai dùng được máy"],
        correctAnswer: 1,
        explanation: "Mật khẩu là lớp khóa bảo vệ sự riêng tư của em.",
        difficulty: "Hard"
      },
      {
        id: 14,
        text: "Internet có giúp em liên lạc với bạn bè ở xa không?",
        options: ["Không", "Có, qua email hoặc gọi video", "Chỉ gửi được thư tay", "Chỉ nghe được tiếng"],
        correctAnswer: 1,
        explanation: "Internet giúp xóa tan khoảng cách địa lý.",
        difficulty: "Hard"
      },
      {
        id: 15,
        text: "Em nên sử dụng Internet vào việc gì là tốt nhất?",
        options: ["Chơi game cả ngày", "Học tập, tìm hiểu thế giới và giải trí lành mạnh", "Xem các video bạo lực", "Nói xấu người khác"],
        correctAnswer: 1,
        explanation: "Hãy là một người dùng Internet thông thái và văn minh.",
        difficulty: "Hard"
      },
      {
        id: 16,
        text: "Em thấy một quảng cáo hiện lên: 'Chúc mừng! Bạn đã trúng thưởng 1 chiếc điện thoại, bấm vào đây để nhận'. Em nên làm gì?",
        options: ["Bấm vào ngay", "Rủ bạn cùng bấm", "Không bấm vào và báo cho người lớn", "Tắt máy đi ngủ"],
        correctAnswer: 2,
        explanation: "Đây thường là các quảng cáo lừa đảo để lấy thông tin cá nhân của em.",
        difficulty: "Easy"
      },
      {
        id: 17,
        text: "Tại sao em không nên dùng tên thật, ngày sinh hoặc số điện thoại làm mật khẩu?",
        options: ["Vì nó quá dài", "Vì người khác dễ dàng đoán ra", "Vì máy tính không cho phép", "Vì nó không đẹp"],
        correctAnswer: 1,
        explanation: "Mật khẩu cần khó đoán để bảo vệ tài khoản của em an toàn.",
        difficulty: "Medium"
      },
      {
        id: 18,
        text: "Nếu một người bạn trên mạng yêu cầu em gửi ảnh cá nhân hoặc ảnh gia đình, em nên làm gì?",
        options: ["Gửi ngay vì là bạn", "Chỉ gửi ảnh của mình", "Từ chối và hỏi ý kiến bố mẹ", "Gửi ảnh của người khác"],
        correctAnswer: 2,
        explanation: "Không bao giờ gửi ảnh cá nhân cho người lạ hoặc người chưa tin tưởng trên mạng.",
        difficulty: "Medium"
      },
      {
        id: 19,
        text: "'Dấu chân số' trên Internet là gì?",
        options: ["Vết chân của em trên bàn phím", "Những thông tin em để lại khi sử dụng mạng", "Một loại trò chơi", "Tên một loại máy tính"],
        correctAnswer: 1,
        explanation: "Mọi hoạt động của em trên mạng đều để lại dấu vết, vì vậy cần hành động cẩn thận.",
        difficulty: "Hard"
      },
      {
        id: 20,
        text: "Khi tham gia một lớp học trực tuyến, hành động nào sau đây là an toàn và lịch sự?",
        options: ["Chia sẻ link lớp học cho người lạ", "Tắt micro khi không phát biểu và không nhắn tin linh tinh", "Mở nhạc to trong lúc học", "Vẽ bậy lên màn hình chung"],
        correctAnswer: 1,
        explanation: "Tuân thủ quy định lớp học giúp em và các bạn học tập hiệu quả và an toàn.",
        difficulty: "Hard"
      },
      {
        id: 21,
        text: "Khi em muốn tải một trò chơi từ Internet về máy tính, em nên làm gì?",
        options: ["Tải ngay lập tức", "Hỏi ý kiến và nhờ bố mẹ kiểm tra độ an toàn", "Tải ở bất kỳ trang web nào", "Giấu bố mẹ để tải"],
        correctAnswer: 1,
        explanation: "Các tệp tải về có thể chứa virus gây hại cho máy tính.",
        difficulty: "Easy"
      },
      {
        id: 22,
        text: "Nếu một trang web yêu cầu em bật camera để tham gia, em nên làm gì?",
        options: ["Bật ngay", "Che camera lại", "Hỏi ý kiến người lớn trước khi thực hiện", "Tắt màn hình"],
        correctAnswer: 2,
        explanation: "Bật camera có thể làm lộ hình ảnh riêng tư của em và gia đình.",
        difficulty: "Easy"
      },
      {
        id: 23,
        text: "Khi em nhận được tin nhắn từ một người bạn nhưng lời lẽ rất lạ và thô lỗ, em nên làm gì?",
        options: ["Cãi nhau với bạn", "Báo cho bố mẹ hoặc thầy cô biết", "Nói xấu lại bạn", "Xóa tin nhắn và im lặng"],
        correctAnswer: 1,
        explanation: "Có thể tài khoản của bạn em bị hack hoặc bạn đang gặp vấn đề, cần người lớn giúp đỡ.",
        difficulty: "Easy"
      },
      {
        id: 24,
        text: "Em có nên dùng chung một mật khẩu cho tất cả các tài khoản trên mạng không?",
        options: ["Có, cho dễ nhớ", "Không, nên dùng các mật khẩu khác nhau", "Chỉ dùng chung cho 2 cái", "Dùng chung cho 10 cái"],
        correctAnswer: 1,
        explanation: "Dùng chung mật khẩu rất nguy hiểm, nếu mất một cái sẽ mất tất cả.",
        difficulty: "Easy"
      },
      {
        id: 25,
        text: "Tại sao em không nên tin vào mọi thứ em đọc được trên Internet?",
        options: ["Vì Internet rất chậm", "Vì bất kỳ ai cũng có thể đăng thông tin lên mạng, kể cả thông tin sai", "Vì Internet không có hình ảnh", "Vì bố mẹ bảo thế"],
        correctAnswer: 1,
        explanation: "Cần biết chọn lọc và kiểm chứng thông tin từ các nguồn tin cậy.",
        difficulty: "Medium"
      },
      {
        id: 26,
        text: "Hành động nào sau đây là 'bắt nạt qua mạng'?",
        options: ["Khen ngợi bạn trên Facebook", "Gửi tin nhắn đe dọa hoặc nói xấu bạn trên mạng", "Chia sẻ bài học hay cho bạn", "Chúc mừng sinh nhật bạn"],
        correctAnswer: 1,
        explanation: "Bắt nạt qua mạng gây tổn thương tinh thần rất lớn cho người khác.",
        difficulty: "Medium"
      },
      {
        id: 27,
        text: "Khi em muốn đăng ảnh của một người bạn lên mạng, em nên làm gì?",
        options: ["Đăng luôn cho vui", "Hỏi mượn điện thoại bạn để đăng", "Hỏi xin phép bạn và nhận được sự đồng ý của bạn", "Chỉnh sửa ảnh cho xấu rồi mới đăng"],
        correctAnswer: 2,
        explanation: "Tôn trọng quyền riêng tư của người khác là quy tắc quan trọng trên mạng.",
        difficulty: "Medium"
      },
      {
        id: 28,
        text: "Nếu em vô tình bấm vào một đường link lạ và máy tính bắt đầu hiện ra nhiều cửa sổ quảng cáo liên tục, em nên làm gì?",
        options: ["Cố gắng tắt từng cái một", "Rút điện máy tính ngay lập tức", "Báo cho người lớn để quét virus và xử lý", "Cứ để thế mà dùng"],
        correctAnswer: 2,
        explanation: "Máy tính có thể đã bị nhiễm mã độc, cần người có chuyên môn xử lý.",
        difficulty: "Hard"
      },
      {
        id: 29,
        text: "Tại sao việc bảo mật thông tin cá nhân trên mạng lại quan trọng đối với trẻ em?",
        options: ["Để không bị mất máy tính", "Để tránh bị kẻ xấu theo dõi, lừa đảo hoặc bắt cóc", "Để học giỏi hơn", "Để tiết kiệm tiền mạng"],
        correctAnswer: 1,
        explanation: "An toàn cá nhân là trên hết khi tham gia môi trường mạng.",
        difficulty: "Hard"
      },
      {
        id: 30,
        text: "Em nên làm gì để trở thành một 'công dân số' văn minh?",
        options: ["Chỉ dùng mạng để chơi game", "Luôn lịch sự, tôn trọng người khác và tuân thủ pháp luật trên mạng", "Nói bất cứ điều gì mình thích mà không cần suy nghĩ", "Kết bạn với thật nhiều người lạ"],
        correctAnswer: 1,
        explanation: "Ứng xử văn minh trên mạng giúp tạo ra một môi trường Internet an toàn và bổ ích.",
        difficulty: "Hard"
      }
    ]
  },
  {
    id: 5,
    title: "Thuật toán cơ bản",
    description: "Học cách giải quyết vấn đề từng bước một.",
    icon: "GitBranch",
    questions: [
      {
        id: 1,
        text: "Thuật toán là gì?",
        options: [
          "Một danh sách các bước để hoàn thành một việc",
          "Một bộ phận của máy tính",
          "Một trò chơi trên mạng",
          "Một loại màn hình"
        ],
        correctAnswer: 0,
        explanation: "Thuật toán là một dãy các chỉ dẫn từng bước để thực hiện một nhiệm vụ hoặc giải quyết một vấn đề.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Để pha một cốc nước cam, bước nào nên thực hiện đầu tiên?",
        options: [
          "Uống nước cam",
          "Rót nước cam ra cốc",
          "Chuẩn bị cam và dụng cụ vắt",
          "Thêm đường vào cốc"
        ],
        correctAnswer: 2,
        explanation: "Trong mọi thuật toán, bước chuẩn bị luôn là bước quan trọng đầu tiên.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Sắp xếp các bước đánh răng: (1) Súc miệng, (2) Lấy kem vào bàn chải, (3) Chải răng. Thứ tự đúng là gì?",
        options: ["1 - 2 - 3", "2 - 3 - 1", "3 - 2 - 1", "2 - 1 - 3"],
        correctAnswer: 1,
        explanation: "Thứ tự đúng là lấy kem, chải răng rồi mới súc miệng sạch sẽ.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Một chú robot muốn đi từ ô A đến ô B. Chú cần đi thẳng 2 bước và rẽ phải 1 bước. Đây là ví dụ về gì?",
        options: [
          "Một bài hát",
          "Một thuật toán",
          "Một bức tranh",
          "Một thiết bị"
        ],
        correctAnswer: 1,
        explanation: "Các bước hướng dẫn robot di chuyển chính là một thuật toán đơn giản.",
        difficulty: "Easy"
      },
      {
        id: 5,
        text: "Trong thuật toán 'Rửa tay', bước nào nên làm sau khi đã xoa xà phòng vào tay?",
        options: [
          "Lau khô tay",
          "Xả sạch xà phòng với nước",
          "Lấy xà phòng",
          "Làm ướt tay"
        ],
        correctAnswer: 1,
        explanation: "Sau khi xoa xà phòng để diệt khuẩn, chúng ta cần xả sạch lại với nước trước khi lau khô.",
        difficulty: "Easy"
      },
      {
        id: 6,
        text: "Bước cuối cùng của việc đánh răng là gì?",
        options: ["Lấy kem", "Chải răng", "Súc miệng sạch", "Rửa bàn chải"],
        correctAnswer: 2,
        explanation: "Súc miệng giúp loại bỏ bọt kem đánh răng và làm sạch khoang miệng.",
        difficulty: "Medium"
      },
      {
        id: 7,
        text: "Để vẽ một hình vuông, em cần thực hiện mấy bước lặp lại việc 'đi thẳng và rẽ'?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.",
        difficulty: "Medium"
      },
      {
        id: 8,
        text: "Thuật toán giúp máy tính làm gì?",
        options: ["Chạy nhanh hơn", "Giải quyết vấn đề theo chỉ dẫn", "Tự học mọi thứ", "Không cần con người"],
        correctAnswer: 1,
        explanation: "Máy tính thực hiện các lệnh trong thuật toán để hoàn thành công việc.",
        difficulty: "Medium"
      },
      {
        id: 9,
        text: "Khi thực hiện một thuật toán, thứ tự các bước có quan trọng không?",
        options: ["Không quan trọng", "Rất quan trọng", "Tùy lúc", "Chỉ quan trọng bước đầu"],
        correctAnswer: 1,
        explanation: "Sai thứ tự có thể dẫn đến kết quả sai hoặc không hoàn thành được việc.",
        difficulty: "Medium"
      },
      {
        id: 10,
        text: "Ví dụ nào sau đây là một thuật toán trong đời sống?",
        options: ["Một bức ảnh đẹp", "Công thức nấu một món ăn", "Một tiếng động lạ", "Một màu sắc"],
        correctAnswer: 1,
        explanation: "Công thức nấu ăn liệt kê các bước cần làm theo thứ tự để có món ăn ngon.",
        difficulty: "Medium"
      },
      {
        id: 11,
        text: "Nếu thiếu một bước trong thuật toán, kết quả sẽ thế nào?",
        options: ["Vẫn đúng", "Có thể sai hoặc không hoàn thành", "Máy tính sẽ tự sửa", "Nhanh hơn"],
        correctAnswer: 1,
        explanation: "Mỗi bước trong thuật toán đều có vai trò riêng, thiếu bước sẽ gây lỗi.",
        difficulty: "Hard"
      },
      {
        id: 12,
        text: "Robot thực hiện công việc dựa trên cái gì?",
        options: ["Cảm xúc", "Sự may mắn", "Chương trình (Thuật toán)", "Thức ăn"],
        correctAnswer: 2,
        explanation: "Con người lập trình các bước thuật toán để robot thực hiện.",
        difficulty: "Hard"
      },
      {
        id: 13,
        text: "Bước đầu tiên khi em muốn gọi điện thoại cho người thân là gì?",
        options: ["Nói chuyện", "Mở danh bạ hoặc bấm số", "Tắt máy", "Sạc pin"],
        correctAnswer: 1,
        explanation: "Phải chọn đúng số điện thoại trước khi bắt đầu cuộc gọi.",
        difficulty: "Hard"
      },
      {
        id: 14,
        text: "Thuật toán 'Rửa bát' gồm các bước nào là đúng nhất?",
        options: ["Úp bát -> Rửa xà phòng", "Tráng nước -> Rửa xà phòng -> Tráng sạch -> Úp bát", "Chỉ cần tráng nước", "Rửa xà phòng -> Úp luôn"],
        correctAnswer: 1,
        explanation: "Đây là quy trình đầy đủ để bát đĩa sạch sẽ và khô ráo.",
        difficulty: "Hard"
      },
      {
        id: 15,
        text: "Thuật toán giúp em làm việc như thế nào?",
        options: ["Chậm hơn", "Lộn xộn hơn", "Khoa học và hiệu quả hơn", "Mệt hơn"],
        correctAnswer: 2,
        explanation: "Làm việc theo các bước rõ ràng giúp em không bị nhầm lẫn.",
        difficulty: "Hard"
      },
      {
        id: 16,
        text: "Trong thuật toán, khi một hành động được lặp đi lặp lại nhiều lần cho đến khi hoàn thành, ta gọi đó là gì?",
        options: ["Vòng lặp", "Dừng lại", "Bắt đầu", "Nhảy múa"],
        correctAnswer: 0,
        explanation: "Vòng lặp là cách chúng ta yêu cầu máy tính hoặc con người thực hiện lại một công việc nhiều lần một cách tự động.",
        difficulty: "Hard"
      },
      {
        id: 17,
        text: "Em đang xếp hàng để vào lớp. Cứ mỗi lần 1 bạn đi vào, em lại tiến lên 1 bước. Đây là ví dụ về gì?",
        options: ["Một bài hát", "Một quy luật lặp lại", "Một trò chơi trốn tìm", "Một bức tranh"],
        correctAnswer: 1,
        explanation: "Hành động 'tiến lên 1 bước' được lặp lại mỗi khi có một bạn vào lớp, tạo thành một quy luật trong thuật toán xếp hàng.",
        difficulty: "Hard"
      },
      {
        id: 18,
        text: "Nếu em đảo ngược bước 'Mặc quần áo' và 'Đi tắm' trong thuật toán chuẩn bị đi học, chuyện gì sẽ xảy ra?",
        options: ["Em sẽ đẹp hơn", "Quần áo sẽ bị ướt và em không thể đi học", "Tiết kiệm thời gian", "Không có chuyện gì"],
        correctAnswer: 1,
        explanation: "Thứ tự các bước trong thuật toán cực kỳ quan trọng để đạt được kết quả đúng.",
        difficulty: "Easy"
      },
      {
        id: 19,
        text: "Trong thuật toán 'Đi bộ qua đường', bước 'Nhìn trái, nhìn phải' nên thực hiện khi nào là an toàn nhất?",
        options: ["Khi đã sang đến bên kia đường", "Trước khi bước xuống lòng đường", "Vừa đi vừa nhìn", "Không cần nhìn"],
        correctAnswer: 1,
        explanation: "Kiểm tra an toàn trước khi thực hiện hành động nguy hiểm là một bước quan trọng.",
        difficulty: "Medium"
      },
      {
        id: 20,
        text: "Nếu một thuật toán bị lặp vô tận (không có điểm dừng), chuyện gì sẽ xảy ra với máy tính?",
        options: ["Máy tính sẽ chạy nhanh hơn", "Máy tính có thể bị treo hoặc không phản hồi", "Máy tính sẽ tự tắt", "Máy tính sẽ hát"],
        correctAnswer: 1,
        explanation: "Vòng lặp vô tận khiến máy tính tiêu tốn tài nguyên mà không hoàn thành được việc.",
        difficulty: "Hard"
      },
      {
        id: 21,
        text: "Để làm một chiếc máy bay giấy, em cần thực hiện các bước theo thứ tự. Đây gọi là gì?",
        options: ["Một bài hát", "Một thuật toán", "Một trò chơi", "Một bức tranh"],
        correctAnswer: 1,
        explanation: "Các bước gấp giấy chính là một thuật toán thủ công.",
        difficulty: "Easy"
      },
      {
        id: 22,
        text: "Trong thuật toán 'Nấu cơm', bước nào nên làm trước khi cho gạo vào nồi?",
        options: ["Bấm nút nấu", "Vo gạo sạch", "Đổ nước vào", "Ăn cơm"],
        correctAnswer: 1,
        explanation: "Vo gạo là bước chuẩn bị cần thiết trước khi nấu.",
        difficulty: "Easy"
      },
      {
        id: 23,
        text: "Nếu em muốn vẽ một hình tam giác đều, em cần lặp lại việc 'đi thẳng và rẽ' mấy lần?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Hình tam giác có 3 cạnh.",
        difficulty: "Easy"
      },
      {
        id: 24,
        text: "Bước đầu tiên của thuật toán 'Tưới cây' là gì?",
        options: ["Đổ nước vào gốc", "Chuẩn bị bình tưới và lấy nước", "Cất bình tưới", "Nhìn cây lớn"],
        correctAnswer: 1,
        explanation: "Phải có dụng cụ và nước trước khi tưới.",
        difficulty: "Easy"
      },
      {
        id: 25,
        text: "Tại sao chúng ta cần chia một việc lớn thành các bước nhỏ?",
        options: ["Để làm lâu hơn", "Để dễ dàng thực hiện và không bị nhầm lẫn", "Để máy tính chạy chậm lại", "Để tốn nhiều giấy hơn"],
        correctAnswer: 1,
        explanation: "Chia nhỏ vấn đề là cách tư duy thuật toán hiệu quả.",
        difficulty: "Medium"
      },
      {
        id: 26,
        text: "Trong thuật toán 'Tìm đường đi', nếu gặp ngõ cụt em nên làm gì?",
        options: ["Đứng im mãi mãi", "Quay lại bước trước đó và chọn hướng khác", "Khóc", "Đi xuyên qua tường"],
        correctAnswer: 1,
        explanation: "Đây là bước điều chỉnh trong thuật toán khi gặp lỗi hoặc vật cản.",
        difficulty: "Medium"
      },
      {
        id: 27,
        text: "Thuật toán 'Sắp xếp sách vở' giúp cặp sách của em như thế nào?",
        options: ["Nặng hơn", "Gọn gàng và dễ tìm đồ dùng hơn", "Lộn xộn hơn", "Nhiều sách hơn"],
        correctAnswer: 1,
        explanation: "Sắp xếp có hệ thống là một ứng dụng của thuật toán.",
        difficulty: "Medium"
      },
      {
        id: 28,
        text: "Nếu một thuật toán có bước 'Nếu trời mưa thì mang ô, nếu không thì đội mũ'. Đây là loại cấu trúc gì?",
        options: ["Cấu trúc lặp", "Cấu trúc rẽ nhánh (điều kiện)", "Cấu trúc thẳng", "Cấu trúc vòng tròn"],
        correctAnswer: 1,
        explanation: "Cấu trúc rẽ nhánh giúp đưa ra các hành động khác nhau tùy vào điều kiện.",
        difficulty: "Hard"
      },
      {
        id: 29,
        text: "Khi lập trình cho Robot, nếu em quên bước 'Dừng lại', Robot sẽ làm gì?",
        options: ["Tự động dừng", "Tiếp tục đi mãi cho đến khi hết pin hoặc đâm vào tường", "Sẽ quay lại", "Sẽ nhảy múa"],
        correctAnswer: 1,
        explanation: "Máy tính và Robot chỉ làm đúng những gì được hướng dẫn.",
        difficulty: "Hard"
      },
      {
        id: 30,
        text: "Lợi ích lớn nhất của việc học tư duy thuật toán là gì?",
        options: ["Để trở thành máy tính", "Để giải quyết các vấn đề trong cuộc sống một cách thông minh và hiệu quả", "Để không phải làm việc nhà", "Để chơi game giỏi hơn"],
        correctAnswer: 1,
        explanation: "Tư duy thuật toán là kỹ năng giải quyết vấn đề quan trọng trong mọi lĩnh vực.",
        difficulty: "Hard"
      },
      {
        id: 31,
        type: "ORDERING",
        text: "Hãy sắp xếp các bước để pha một cốc sữa bột:",
        items: ["Đổ nước nóng vào cốc", "Cho sữa bột vào", "Khuấy đều", "Chuẩn bị cốc và thìa"],
        correctAnswer: ["Chuẩn bị cốc và thìa", "Cho sữa bột vào", "Đổ nước nóng vào cốc", "Khuấy đều"],
        explanation: "Thứ tự đúng là chuẩn bị dụng cụ -> cho sữa -> đổ nước -> khuấy.",
        difficulty: "Medium"
      },
      {
        id: 32,
        type: "FIND_ERROR",
        text: "Tìm lỗi sai trong thuật toán 'Rửa tay' sau: 1. Làm ướt tay -> 2. Xoa xà phòng -> 3. Lau khô tay -> 4. Rửa sạch với nước.",
        errorPart: "3. Lau khô tay",
        correction: "Phải rửa sạch với nước trước khi lau khô.",
        options: ["1. Làm ướt tay", "2. Xoa xà phòng", "3. Lau khô tay", "4. Rửa sạch với nước"],
        correctAnswer: 2,
        explanation: "Bước 3 và 4 đang bị ngược nhau.",
        difficulty: "Medium"
      },
      {
        id: 33,
        type: "MATCHING",
        text: "Hãy nối các thiết bị với chức năng tương ứng của chúng:",
        pairs: [
          { left: "Bàn phím", right: "Nhập chữ" },
          { left: "Chuột", right: "Điều khiển con trỏ" },
          { left: "Màn hình", right: "Hiển thị hình ảnh" },
          { left: "Loa", right: "Phát âm thanh" }
        ],
        correctAnswer: null, // Logic handles this via pairs
        explanation: "Mỗi thiết bị máy tính đều có một chức năng riêng biệt.",
        difficulty: "Easy"
      },
      {
        id: 34,
        type: "DRAG_DROP",
        text: "Hãy phân loại các thiết bị sau vào đúng nhóm:",
        items: ["Bàn phím", "Màn hình", "Chuột", "Máy in", "Micro", "Loa"],
        targets: ["Thiết bị vào", "Thiết bị ra"],
        correctAnswer: {
          "Bàn phím": "Thiết bị vào",
          "Chuột": "Thiết bị vào",
          "Micro": "Thiết bị vào",
          "Màn hình": "Thiết bị ra",
          "Máy in": "Thiết bị ra",
          "Loa": "Thiết bị ra"
        },
        explanation: "Thiết bị vào giúp đưa dữ liệu vào máy tính, thiết bị ra giúp hiển thị kết quả.",
        difficulty: "Medium"
      },
      {
        id: 35,
        type: "DRAG_DROP",
        text: "Hãy phân loại các câu lệnh sau vào đúng nhóm cấu trúc:",
        items: ["Nếu... thì...", "Lặp lại 10 lần", "Nếu không... thì...", "Lặp lại cho đến khi"],
        targets: ["Cấu trúc rẽ nhánh", "Cấu trúc lặp"],
        correctAnswer: {
          "Nếu... thì...": "Cấu trúc rẽ nhánh",
          "Nếu không... thì...": "Cấu trúc rẽ nhánh",
          "Lặp lại 10 lần": "Cấu trúc lặp",
          "Lặp lại cho đến khi": "Cấu trúc lặp"
        },
        explanation: "Rẽ nhánh dùng để quyết định, lặp dùng để thực hiện nhiều lần một việc.",
        difficulty: "Hard"
      },
      {
        id: 36,
        type: "DRAG_DROP",
        text: "Hãy phân loại các ví dụ sau vào nhóm Dữ liệu số hoặc Dữ liệu chữ:",
        items: ["Số 100", "Họ và tên em", "Điểm thi toán", "Địa chỉ nhà", "Số điện thoại", "Tên trường"],
        targets: ["Dữ liệu số", "Dữ liệu chữ"],
        correctAnswer: {
          "Số 100": "Dữ liệu số",
          "Điểm thi toán": "Dữ liệu số",
          "Số điện thoại": "Dữ liệu số",
          "Họ và tên em": "Dữ liệu chữ",
          "Địa chỉ nhà": "Dữ liệu chữ",
          "Tên trường": "Dữ liệu chữ"
        },
        explanation: "Dữ liệu số dùng để tính toán, dữ liệu chữ dùng để mô tả thông tin.",
        difficulty: "Medium"
      }
    ]
  },
  {
    id: 6,
    title: "Tổ chức lưu trữ tệp",
    description: "Học cách quản lý dữ liệu trên máy tính.",
    icon: "FolderOpen",
    questions: [
      {
        id: 1,
        text: "Thư mục (Folder) dùng để làm gì?",
        options: ["Để chứa các tệp và thư mục con", "Để gõ chữ", "Để nghe nhạc", "Để vẽ tranh"],
        correctAnswer: 0,
        explanation: "Thư mục giúp em sắp xếp các tệp tin một cách ngăn nắp.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Tệp tin (File) có thể chứa loại thông tin nào?",
        options: ["Văn bản", "Hình ảnh", "Âm thanh", "Tất cả các loại trên"],
        correctAnswer: 3,
        explanation: "Tệp tin là đơn vị lưu trữ thông tin cơ bản trên máy tính.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Để tạo một thư mục mới, em nháy chuột phải rồi chọn lệnh nào?",
        options: ["Open", "Delete", "New -> Folder", "Rename"],
        correctAnswer: 2,
        explanation: "Lệnh New -> Folder giúp em tạo ra một ngăn chứa mới.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Khi muốn đổi tên một thư mục, em dùng lệnh nào?",
        options: ["Copy", "Paste", "Rename", "Cut"],
        correctAnswer: 2,
        explanation: "Rename có nghĩa là đặt lại tên cho đối tượng.",
        difficulty: "Medium"
      },
      {
        id: 5,
        text: "Thao tác xóa một tệp tin không cần thiết là gì?",
        options: ["Nháy chuột phải chọn Delete", "Nháy đúp chuột", "Kéo thả vào thùng rác", "Cả A và C đều đúng"],
        correctAnswer: 3,
        explanation: "Em có thể dùng lệnh Delete hoặc kéo thả vào Recycle Bin.",
        difficulty: "Medium"
      }
    ]
  },
  {
    id: 7,
    title: "Soạn thảo văn bản",
    description: "Làm quen với phần mềm Microsoft Word.",
    icon: "FileText",
    questions: [
      {
        id: 1,
        text: "Phần mềm nào dùng để soạn thảo văn bản?",
        options: ["Paint", "Microsoft Word", "PowerPoint", "Calculator"],
        correctAnswer: 1,
        explanation: "Word là phần mềm chuyên dụng để viết thư, làm báo cáo.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Để viết hoa một chữ cái, em nhấn giữ phím nào?",
        options: ["Ctrl", "Alt", "Shift", "Esc"],
        correctAnswer: 2,
        explanation: "Phím Shift giúp em gõ chữ hoa hoặc các ký tự trên.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Con trỏ soạn thảo có hình dạng gì?",
        options: ["Hình mũi tên", "Vạch đứng nhấp nháy", "Hình bàn tay", "Hình dấu cộng"],
        correctAnswer: 1,
        explanation: "Vạch đứng cho biết vị trí chữ sẽ xuất hiện khi em gõ.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Để lưu văn bản đã soạn thảo, em chọn lệnh nào?",
        options: ["New", "Open", "Save", "Print"],
        correctAnswer: 2,
        explanation: "Save giúp lưu lại kết quả làm việc của em vào máy tính.",
        difficulty: "Medium"
      },
      {
        id: 5,
        text: "Muốn thay đổi màu sắc của chữ, em dùng công cụ nào?",
        options: ["Font Size", "Font Color", "Bold", "Italic"],
        correctAnswer: 1,
        explanation: "Font Color cho phép em chọn màu sắc sinh động cho văn bản.",
        difficulty: "Medium"
      }
    ]
  },
  {
    id: 8,
    title: "Trình chiếu cơ bản",
    description: "Tạo bài thuyết trình với PowerPoint.",
    icon: "Presentation",
    questions: [
      {
        id: 1,
        text: "Phần mềm PowerPoint dùng để làm gì?",
        options: ["Vẽ tranh", "Tạo bài trình chiếu", "Tính toán", "Nghe nhạc"],
        correctAnswer: 1,
        explanation: "PowerPoint giúp em tạo các trang chiếu để thuyết trình.",
        difficulty: "Easy"
      },
      {
        id: 2,
        text: "Mỗi trang trong PowerPoint được gọi là gì?",
        options: ["Trang giấy", "Trang chiếu (Slide)", "Thư mục", "Tệp tin"],
        correctAnswer: 1,
        explanation: "Slide là đơn vị cơ bản của một bài trình chiếu.",
        difficulty: "Easy"
      },
      {
        id: 3,
        text: "Để bắt đầu trình chiếu từ trang đầu tiên, em nhấn phím nào?",
        options: ["F1", "F5", "F10", "Enter"],
        correctAnswer: 1,
        explanation: "Phím F5 là phím tắt nhanh để bắt đầu buổi thuyết trình.",
        difficulty: "Easy"
      },
      {
        id: 4,
        text: "Em có thể thêm gì vào trang chiếu?",
        options: ["Chữ viết", "Hình ảnh", "Âm thanh và Video", "Tất cả các loại trên"],
        correctAnswer: 3,
        explanation: "PowerPoint hỗ trợ đa phương tiện để bài thuyết trình hấp dẫn hơn.",
        difficulty: "Medium"
      },
      {
        id: 5,
        text: "Để tạo một trang chiếu mới, em dùng lệnh nào?",
        options: ["New Slide", "New File", "New Folder", "New Page"],
        correctAnswer: 0,
        explanation: "Lệnh New Slide thêm một trang trống vào bài của em.",
        difficulty: "Medium"
      }
    ]
  }
];
