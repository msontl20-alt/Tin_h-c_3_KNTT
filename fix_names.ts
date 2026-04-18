
import fs from 'fs';

let content = fs.readFileSync('./src/data/grade3.ts', 'utf8');

// Standardize topic references in questions
content = content.replace(/topic: "Máy tính & Em"/g, 'topic: "Máy tính và em"');
content = content.replace(/topic: "Mạng & Internet"/g, 'topic: "Mạng và Internet"');
content = content.replace(/topic: "Thông tin & Tìm kiếm"/g, 'topic: "Thông tin và tìm kiếm"');
content = content.replace(/topic: "Tìm kiếm & Trao đổi thông tin"/g, 'topic: "Thông tin và tìm kiếm"');

// Standardize level titles and topics
content = content.replace(/title: "Chủ đề 2: Mạng máy tính và Internet"/g, 'title: "Chủ đề 2: Mạng và Internet"');
content = content.replace(/title: "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm thông tin"/g, 'title: "Chủ đề 3: Thông tin và tìm kiếm"');
content = content.replace(/title: "Chủ đề 4: Virus máy tính và cách phòng tránh"/g, 'title: "Chủ đề 4: Virus máy tính"');
content = content.replace(/title: "Chủ đề 4: Đạo đức, pháp luật, văn hoá số"/g, 'title: "Chủ đề 5: Đạo đức số"');
content = content.replace(/title: "Chủ đề 5: Ứng dụng tin học"/g, 'title: "Chủ đề 6: Ứng dụng tin học"');

fs.writeFileSync('./src/data/grade3.ts', content);
