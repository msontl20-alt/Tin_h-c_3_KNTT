import { Level } from '../types';

export const LEVELS_GRADE_3: Level[] = [
  {
    "id": 1,
    "title": "Chủ đề 1: Máy tính và em",
    "topic": "Máy tính và em",
    "description": "Khám phá thế giới máy tính và cách sử dụng an toàn.",
    "longDescription": "Học sinh sẽ được làm quen với các bộ phận của máy tính, cách khởi động/tắt máy đúng cách và tư thế ngồi học an toàn để bảo vệ sức khỏe.",
    "keyConcepts": [
      "Bộ phận máy tính",
      "Thiết bị Vào/Ra",
      "Tư thế ngồi học",
      "Sử dụng an toàn"
    ],
    "icon": "Monitor",
    "questions": [
      {
        "id": 1,
        "text": "Máy tính để bàn có mấy bộ phận chính?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 2,
        "explanation": "4 bộ phận chính: Thân máy, màn hình, bàn phím và chuột.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 2,
        "text": "Bộ phận nào của máy tính dùng để nhập chữ và số?",
        "options": [
          "Chuột",
          "Bàn phím",
          "Màn hình",
          "Loa"
        ],
        "correctAnswer": 1,
        "explanation": "Bàn phím có các phím để em gõ dữ liệu vào máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 3,
        "text": "Thiết thiết bị nào giúp em điều khiển con trỏ trên màn hình?",
        "options": [
          "Bàn phím",
          "Chuột",
          "Thân máy",
          "Máy in"
        ],
        "correctAnswer": 1,
        "explanation": "Chuột giúp em di chuyển con trỏ và thực hiện các lệnh.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 4,
        "text": "Màn hình máy tính dùng để làm gì?",
        "options": [
          "Xử lý thông tin",
          "Hiển thị thông tin",
          "Nhập thông tin",
          "Lưu trữ thông tin"
        ],
        "correctAnswer": 1,
        "explanation": "Màn hình hiển thị kết quả làm việc của máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 5,
        "text": "Bộ phận nào được ví như 'bộ não' của máy tính?",
        "options": [
          "Màn hình",
          "Thân máy (CPU)",
          "Chuột",
          "Bàn phím"
        ],
        "correctAnswer": 1,
        "explanation": "Thân máy chứa CPU điều khiển mọi hoạt động của máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 6,
        "text": "Khi ngồi làm việc với máy tính, lưng em nên như thế nào?",
        "options": [
          "Còng xuống",
          "Thẳng",
          "Nghiêng sang trái",
          "Nghiêng sang phải"
        ],
        "correctAnswer": 1,
        "explanation": "Ngồi thẳng lưng giúp bảo vệ cột sống.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 7,
        "text": "Khoảng cách từ mắt đến màn hình nên là bao nhiêu?",
        "options": [
          "10-20cm",
          "30-40cm",
          "50-80cm",
          "Trên 100cm"
        ],
        "correctAnswer": 2,
        "explanation": "Khoảng cách 50-80cm giúp bảo vệ mắt.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 8,
        "text": "Nối các thiết bị máy tính với chức năng tương ứng của chúng:",
        "pairs": [
          {
            "left": "Màn hình",
            "right": "Hiển thị hình ảnh, văn bản"
          },
          {
            "left": "Bàn phím",
            "right": "Gõ chữ, số và ký tự"
          },
          {
            "left": "Chuột",
            "right": "Điều khiển và chọn lệnh"
          }
        ],
        "explanation": "Mỗi bộ phận của máy tính có một nhiệm vụ riêng.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 9,
        "text": "Sắp xếp các bước bật máy tính đúng cách:",
        "options": [
          "Cắm điện",
          "Bật màn hình",
          "Bật nút nguồn trên thân máy",
          "Đợi hiện màn hình nền"
        ],
        "correctAnswer": [
          "Cắm điện",
          "Bật màn hình",
          "Bật nút nguồn trên thân máy",
          "Đợi hiện màn hình nền"
        ],
        "explanation": "Quy trình chuẩn giúp máy tính bền bỉ.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "ORDERING"
      },
      {
        "id": 10,
        "text": "Phân loại các thiết bị sau vào đúng nhóm Thiết bị Vào hoặc Thiết bị Ra:",
        "items": [
          "Bàn phím",
          "Màn hình",
          "Chuột",
          "Loa"
        ],
        "targets": [
          "Thiết bị Vào",
          "Thiết bị Ra"
        ],
        "correctAnswer": {
          "Bàn phím": "Thiết bị Vào",
          "Chuột": "Thiết bị Vào",
          "Màn hình": "Thiết bị Ra",
          "Loa": "Thiết bị Ra"
        },
        "explanation": "Bàn phím và chuột đưa thông tin vào, màn hình và loa đưa thông tin ra.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 11,
        "text": "Tìm lỗi sai trong tư thế ngồi học sau:",
        "options": [
          "1. Ngồi thẳng lưng",
          "2. Tay đặt ngang bàn phím",
          "3. Mắt sát màn hình",
          "4. Khoảng cách mắt 50-80cm"
        ],
        "correctAnswer": 2,
        "errorPart": "Mắt sát màn hình",
        "correction": "Em nên để mắt cách màn hình từ 50-80cm để giữ an toàn cho mắt.",
        "explanation": "Ngồi quá sát màn hình sẽ gây mệt mỏi và hại mắt.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "FIND_ERROR"
      },
      {
        "id": 12,
        "text": "Máy tính xách tay không có bàn phím.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Máy tính xách tay có bàn phím tích hợp sẵn.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 13,
        "text": "Nối các bộ phận máy tính với tính chất của chúng:",
        "pairs": [
          {
            "left": "Thân máy",
            "right": "Nơi chứa CPU"
          },
          {
            "left": "Màn hình",
            "right": "Hình chữ nhật, phát sáng"
          },
          {
            "left": "Bàn phím",
            "right": "Có nhiều phím bấm"
          }
        ],
        "explanation": "Nhận biết đặc điểm các bộ phận chính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 14,
        "text": "Tìm lỗi sai trong quy trình tắt máy tính:",
        "options": [
          "1. Nháy chuột vào nút Start",
          "2. Chọn nút Power",
          "3. Chọn lệnh Sleep",
          "4. Đợi máy tắt hẳn"
        ],
        "correctAnswer": 2,
        "errorPart": "Chọn lệnh Sleep",
        "correction": "Nên chọn 'Shut down' để tắt máy hoàn toàn.",
        "explanation": "Sleep chỉ là chế độ ngủ tạm thời.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "FIND_ERROR"
      },
      {
        "id": 15,
        "text": "Phân loại các thiết bị sau vào nhóm Có dây hoặc Không dây:",
        "items": [
          "Chuột có dây",
          "Bàn phím Bluetooth",
          "Màn hình cắm cáp",
          "Tai nghe không dây"
        ],
        "targets": [
          "Có dây",
          "Không dây"
        ],
        "correctAnswer": {
          "Chuột có dây": "Có dây",
          "Màn hình cắm cáp": "Có dây",
          "Bàn phím Bluetooth": "Không dây",
          "Tai nghe không dây": "Không dây"
        },
        "explanation": "Hiện nay có nhiều loại thiết bị kết nối linh hoạt.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 16,
        "text": "Chuột máy tính thường có ít nhất mấy nút bấm?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 1,
        "explanation": "Chuột thường có nút trái và nút phải.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 17,
        "text": "Phím dài nhất trên bàn phím là phím nào?",
        "options": [
          "Enter",
          "Shift",
          "Space (phím cách)",
          "Ctrl"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Space dùng để tạo khoảng cách giữa các chữ.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 18,
        "text": "Nút cuộn trên chuột máy tính dùng để làm gì?",
        "options": [
          "Tắt máy",
          "Di chuyển trang web/văn bản lên xuống",
          "Gõ chữ",
          "Tô màu"
        ],
        "correctAnswer": 1,
        "explanation": "Nút cuộn giúp em xem nội dung dài dễ dàng hơn.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 19,
        "text": "Thiết bị nào giúp máy tính phát ra âm thanh?",
        "options": [
          "Màn hình",
          "Bàn phím",
          "Loa",
          "Chuột"
        ],
        "correctAnswer": 2,
        "explanation": "Loa hoặc tai nghe đưa âm thanh từ máy tính ra ngoài.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 20,
        "text": "Máy tính xách tay còn được gọi là gì?",
        "options": [
          "Desktop",
          "Laptop",
          "CPU",
          "Mainboard"
        ],
        "correctAnswer": 1,
        "explanation": "Laptop là tên tiếng Anh phổ biến của máy tính xách tay.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 21,
        "text": "Để nạp điện cho máy tính xách tay, em dùng thiết bị nào?",
        "options": [
          "Chuột",
          "Bộ sạc (Adapter)",
          "Loa",
          "Máy in"
        ],
        "correctAnswer": 1,
        "explanation": "Bộ sạc giúp cung cấp năng lượng cho pin máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 22,
        "text": "Khi không sử dụng máy tính nữa, em nên làm gì?",
        "options": [
          "Để nguyên máy",
          "Rút dây điện ngay lập tức",
          "Tắt máy bằng lệnh Shut down",
          "Lấy vải ướt lau màn hình"
        ],
        "correctAnswer": 2,
        "explanation": "Tắt máy đúng cách giúp bảo vệ phần mềm và phần cứng.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 23,
        "text": "Nơi nào trên máy tính hiển thị các biểu tượng phần mềm khi máy vừa khởi động xong?",
        "options": [
          "Thân máy",
          "Bàn phím",
          "Màn hình nền (Desktop)",
          "Chuột"
        ],
        "correctAnswer": 2,
        "explanation": "Màn hình nền là giao diện chính để em bắt đầu làm việc.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 24,
        "text": "Nối các thiết bị với kiểu kết nối của chúng:",
        "pairs": [
          {
            "left": "USB",
            "right": "Cắm vào cổng hình chữ nhật"
          },
          {
            "left": "Bluetooth",
            "right": "Kết nối không cần dây"
          },
          {
            "left": "Dây nguồn",
            "right": "Cung cấp điện năng"
          }
        ],
        "explanation": "Nhận biết các loại kết nối thiết bị.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 25,
        "text": "Sắp xếp các bước để tắt máy tính an toàn:",
        "options": [
          "Đóng các chương trình",
          "Chọn nút Start",
          "Chọn Power",
          "Chọn Shut down"
        ],
        "correctAnswer": [
          "Đóng các chương trình",
          "Chọn nút Start",
          "Chọn Power",
          "Chọn Shut down"
        ],
        "explanation": "Quy trình tắt máy chuẩn.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "ORDERING"
      },
      {
        "id": 26,
        "text": "Điện thoại thông minh (Smartphone) có được coi là một loại máy tính không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Nó có CPU, bộ nhớ và màn hình để xử lý thông tin.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 27,
        "text": "Thiết bị nào sau đây dùng để quét hình ảnh từ giấy vào máy tính?",
        "options": [
          "Máy in",
          "Máy quét (Scanner)",
          "Loa",
          "Bàn phím"
        ],
        "correctAnswer": 1,
        "explanation": "Máy quét giúp số hóa các hình ảnh giấy.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 28,
        "text": "Webcam là thiết bị giúp máy tính làm gì?",
        "options": [
          "In tài liệu",
          "Thu và truyền hình ảnh",
          "Phát nhạc",
          "Lưu trữ tệp"
        ],
        "correctAnswer": 1,
        "explanation": "Webcam giúp em gọi video.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 29,
        "text": "Ngồi học máy tính quá lâu mà không nghỉ ngơi có hại gì?",
        "options": [
          "Làm em cao lên",
          "Hại mắt và mỏi lưng",
          "Giúp máy tính chạy nhanh",
          "Hết pin điện thoại"
        ],
        "correctAnswer": 1,
        "explanation": "Cần nghỉ ngơi sau mỗi 20-30 phút dùng máy.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 30,
        "text": "Khoảng cách từ mắt đến màn hình máy tính nên là bao nhiêu?",
        "options": [
          "Rất gần (10cm)",
          "Từ 50cm đến 80cm",
          "Trên 2 mét",
          "Càng xa càng tốt"
        ],
        "correctAnswer": 1,
        "explanation": "Khoảng cách hợp lý bảo vệ thị lực của em.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 31,
        "text": "Phím nào dùng để xóa chữ nằm bên trái con trỏ soạn thảo?",
        "options": [
          "Delete",
          "Backspace",
          "Space",
          "Enter"
        ],
        "correctAnswer": 1,
        "explanation": "Backspace xóa lùi về phía trước.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 32,
        "text": "Phím nào dùng để xóa chữ nằm bên phải con trỏ soạn thảo?",
        "options": [
          "Delete",
          "Backspace",
          "Shift",
          "Ctrl"
        ],
        "correctAnswer": 0,
        "explanation": "Delete xóa ký tự ngay sau con trỏ.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 33,
        "text": "Khi gõ phím, hai bàn tay nên đặt ở hàng phím nào làm chuẩn?",
        "options": [
          "Hàng phím trên",
          "Hàng phím dưới",
          "Hàng phím cơ sở",
          "Hàng phím số"
        ],
        "correctAnswer": 2,
        "explanation": "Hàng phím cơ sở có hai phím có gai F và J.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 34,
        "text": "Nháy đúp chuột (Double click) là hành động như thế nào?",
        "options": [
          "Nhấn phím trái 1 lần",
          "Nhấn phím trái 2 lần liên tiếp nhanh",
          "Nhấn phím phải 1 lần",
          "Giữ chuột và kéo"
        ],
        "correctAnswer": 1,
        "explanation": "Nháy đúp thường dùng để mở phần mềm hoặc tệp.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 35,
        "text": "Sử dụng máy tính trong môi trường thiếu ánh sáng sẽ gây ra điều gì?",
        "options": [
          "Máy tính nhanh hỏng",
          "Tiết kiệm điện",
          "Mắt nhanh bị mỏi và cận thị",
          "Máy tính tỏa nhiều nhiệt"
        ],
        "correctAnswer": 2,
        "explanation": "Cần đủ ánh sáng khi học tập với máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 36,
        "text": "Phím nào dùng để gõ các chữ in hoa khi nhấn giữ cùng lúc?",
        "options": [
          "Alt",
          "Shift",
          "Tab",
          "Space"
        ],
        "correctAnswer": 1,
        "explanation": "Shift kết hợp với phím chữ sẽ tạo ra chữ in hoa.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 37,
        "text": "Máy tính để bàn gồm mấy phần chính?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 2,
        "explanation": "Gồm: Màn hình, Thân máy, Bàn phím và Chuột.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 38,
        "text": "Tại sao không nên vừa ăn uống vừa sử dụng máy tính?",
        "options": [
          "Sợ làm máy tính đói",
          "Đồ ăn rơi vào kẽ phím gây hỏng hoặc chập điện",
          "Làm đồ ăn mất ngon",
          "Máy tính sẽ bị béo"
        ],
        "correctAnswer": 1,
        "explanation": "Cần giữ vệ sinh khu vực làm việc để bảo vệ máy.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 39,
        "text": "Biểu tượng thùng rác trên màn hình máy tính gọi là gì?",
        "options": [
          "My Documents",
          "Recycle Bin",
          "This PC",
          "Network"
        ],
        "correctAnswer": 1,
        "explanation": "Nơi chứa các tệp tin đã bị xóa tạm thời.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 40,
        "text": "Nối phím với chức năng đặc biệt của nó:",
        "pairs": [
          {
            "left": "Enter",
            "right": "Xuống dòng hoặc thực hiện lệ"
          },
          {
            "left": "Caps Lock",
            "right": "Bật/Tắt chế độ gõ chữ hoa"
          },
          {
            "left": "Esc",
            "right": "Thoát hoặc hủy bỏ lệnh"
          }
        ],
        "explanation": "Nhận biết chức năng của các phím điều khiển.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 41,
        "text": "Phân loại các thiết bị sau vào nhóm Thiết bị Vào hoặc Thiết bị Ra:",
        "items": [
          "Chuột",
          "Bàn phím",
          "Màn hình",
          "Máy in"
        ],
        "targets": [
          "Thiết bị Vào",
          "Thiết bị Ra"
        ],
        "correctAnswer": {
          "Chuột": "Thiết bị Vào",
          "Bàn phím": "Thiết bị Vào",
          "Màn hình": "Thiết bị Ra",
          "Máy in": "Thiết bị Ra"
        },
        "explanation": "Hiểu cách dữ liệu đi vào và đi ra khỏi máy tính.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 42,
        "text": "Tư thế ngồi đúng khi dùng máy tính là lưng phải thẳng và dựa vào ghế.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Ngồi đúng giúp chống cong vẹo cột sống.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 43,
        "text": "Chuột không dây cần có pin để hoạt động đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Pin cung cấp năng lượng cho chuột truyền tín hiệu.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 44,
        "text": "Màn hình cảm ứng có thể vừa là thiết bị vào vừa là thiết bị ra.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Màn hình cảm ứng giúp em chạm để nhập dữ liệu và xem kết quả.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 45,
        "text": "Thiết bị nào sau đây vừa có thể là thiết bị vào, vừa có thể là thiết bị ra?",
        "options": [
          "Chuột máy tính",
          "Bàn phím",
          "Màn hình cảm ứng",
          "Loa"
        ],
        "correctAnswer": 2,
        "explanation": "Màn hình cảm ứng hiển thị hình ảnh (ra) và nhận lệnh chạm từ tay (vào).",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 46,
        "text": "Khi bật máy tính, thùng máy có đèn sáng và quạt quay nhưng màn hình vẫn tối đen. Em nên kiểm tra bộ phận nào đầu tiên?",
        "options": [
          "Bàn phím",
          "Chuột",
          "Dây cáp nối màn hình với thân máy",
          "Loa"
        ],
        "correctAnswer": 2,
        "explanation": "Màn hình không hiện hình ảnh thường do lỏng cáp truyền tín hiệu.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 47,
        "text": "Phím nào trên bàn phím thường được dùng để thoát khỏi một chương trình hoặc hủy bỏ một lệnh đang thực hiện?",
        "options": [
          "Enter",
          "Space",
          "Esc",
          "Shift"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Esc (Escape) dùng để thoát hoặc hủy lệnh nhanh.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 48,
        "text": "Nếu tháo bỏ thành phần này bên trong thân máy, máy tính sẽ không thể khởi động được hệ điều hành. Đó là gì?",
        "options": [
          "Ổ cứng",
          "Loa",
          "Chuột",
          "Máy in"
        ],
        "correctAnswer": 0,
        "explanation": "Ổ cứng là nơi lưu trữ hệ điều hành và mọi dữ liệu của máy tính.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 49,
        "text": "Bộ phận nào của máy tính để bàn giúp em xem được các bộ phim hoạt hình?",
        "options": [
          "Thân máy",
          "Chuột",
          "Màn hình",
          "Bàn phím"
        ],
        "correctAnswer": 2,
        "explanation": "Màn hình hiển thị hình ảnh và video cho em xem.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 50,
        "text": "Để nhập tên của mình vào máy tính, em sử dụng thiết bị nào?",
        "options": [
          "Màn hình",
          "Bàn phím",
          "Loa",
          "Chuột"
        ],
        "correctAnswer": 1,
        "explanation": "Bàn phím có các phím chữ để em gõ văn bản.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 51,
        "text": "Khi học với máy tính, mắt em nên đặt như thế nào so với màn hình?",
        "options": [
          "Thấp hơn",
          "Cao hơn",
          "Ngang tầm mắt",
          "Sát vào màn hình"
        ],
        "correctAnswer": 2,
        "explanation": "Đặt màn hình ngang tầm mắt giúp em không bị mỏi cổ.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 52,
        "text": "Máy tính bảng khác máy tính để bàn ở điểm nào?",
        "options": [
          "Không có màn hình",
          "Màn hình cảm ứng, gọn nhẹ",
          "Không thể vào mạng",
          "Chỉ dùng để nghe nhạc"
        ],
        "correctAnswer": 1,
        "explanation": "Máy tính bảng có thiết kế gọn nhẹ và dùng cảm ứng.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 53,
        "text": "Thao tác cầm chuột bằng tay nào là đúng?",
        "options": [
          "Tay trái",
          "Tay phải",
          "Cả hai tay",
          "Tay nào cũng được"
        ],
        "correctAnswer": 1,
        "explanation": "Quy chuẩn thông thường là cầm chuột bằng tay phải.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 54,
        "text": "Máy tính xách tay có bộ phận nào thay thế cho chuột của máy tính để bàn?",
        "options": [
          "Bàn phím",
          "Vùng cảm ứng chuột (Touchpad)",
          "Màn hình",
          "Loa"
        ],
        "correctAnswer": 1,
        "explanation": "Touchpad giúp em điều khiển con trỏ mà không cần chuột rời.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 55,
        "text": "Tại sao không nên để nước gần máy tính?",
        "options": [
          "Máy tính sẽ bị khát",
          "Nước đổ vào gây hỏng linh kiện và giật điện",
          "Màn hình sẽ bị ướt",
          "Nước sẽ làm máy chạy chậm"
        ],
        "correctAnswer": 1,
        "explanation": "Nước là kẻ thù của các thiết bị điện tử.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 56,
        "text": "Phím dài nhất trên bàn phím dùng để làm gì?",
        "options": [
          "Xuống dòng",
          "Xóa chữ",
          "Tạo khoảng cách giữa các chữ",
          "Viết hoa"
        ],
        "correctAnswer": 2,
        "explanation": "Đây là phím Space (phím cách).",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 57,
        "text": "Khi thấy máy tính có mùi khét, em nên làm gì?",
        "options": [
          "Tiếp tục dùng",
          "Tự sửa",
          "Rời xa máy và báo ngay cho người lớn",
          "Lấy nước đổ vào"
        ],
        "correctAnswer": 2,
        "explanation": "An toàn phòng chống cháy nổ là trên hết.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 58,
        "text": "Màn hình máy tính bảng có thể dùng để nhập dữ liệu không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Màn hình cảm ứng cho phép em chạm để nhập lệnh.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 59,
        "text": "Nối các thiết bị với nhóm tương ứng:",
        "pairs": [
          {
            "left": "Bàn phím",
            "right": "Thiết bị vào"
          },
          {
            "left": "Máy in",
            "right": "Thiết bị ra"
          },
          {
            "left": "Ổ cứng",
            "right": "Thiết bị lưu trữ"
          }
        ],
        "explanation": "Phân biệt chức năng các thiết bị.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 60,
        "text": "Sắp xếp các bước để vệ sinh bàn phím máy tính:",
        "options": [
          "Tắt máy tính",
          "Dùng chổi mềm quét bụi",
          "Lau bằng khăn khô",
          "Bật máy kiểm tra"
        ],
        "correctAnswer": [
          "Tắt máy tính",
          "Dùng chổi mềm quét bụi",
          "Lau bằng khăn khô",
          "Bật máy kiểm tra"
        ],
        "explanation": "Vệ sinh đúng cách giúp bền máy.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "ORDERING"
      },
      {
        "id": 61,
        "text": "Hành động nào sau đây là SAI khi sử dụng máy tính?",
        "options": [
          "Tắt máy đúng quy trình",
          "Vừa ăn bánh kẹo vừa gõ phím",
          "Ngồi thẳng lưng",
          "Giữ khoảng cách với màn hình"
        ],
        "correctAnswer": 1,
        "explanation": "Vụn bánh kẹo có thể làm hỏng bàn phím.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 62,
        "text": "Bộ phận nào giúp em nghe được âm thanh từ máy tính?",
        "options": [
          "Màn hình",
          "Thân máy",
          "Loa hoặc tai nghe",
          "Bàn phím"
        ],
        "correctAnswer": 2,
        "explanation": "Âm thanh được phát ra qua loa.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 63,
        "text": "Chuột máy tính giúp em làm gì?",
        "options": [
          "Gõ văn bản",
          "Điều khiển con trỏ và chọn lệnh",
          "Hiển thị hình ảnh",
          "Lưu trữ tài liệu"
        ],
        "correctAnswer": 1,
        "explanation": "Chuột là thiết bị điều khiển.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 64,
        "text": "Vì sao phải tắt máy tính đúng cách?",
        "options": [
          "Để máy không bị buồn",
          "Để bảo vệ phần mềm và linh kiện",
          "Để tiết kiệm thời gian",
          "Không cần thiết"
        ],
        "correctAnswer": 1,
        "explanation": "Tắt đúng cách giúp hệ điều hành không bị lỗi.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 65,
        "text": "Tư thế ngồi nào sau đây là ĐÚNG?",
        "options": [
          "Cúi sát màn hình",
          "Nằm ra ghế",
          "Lưng thẳng, mắt cách màn hình 50-80cm",
          "Gác chân lên bàn"
        ],
        "correctAnswer": 2,
        "explanation": "Ngồi đúng giúp bảo vệ cột sống và mắt.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 66,
        "text": "Để tắt máy tính hoàn toàn, em chọn lệnh nào?",
        "options": [
          "Sleep",
          "Restart",
          "Shut down",
          "Lock"
        ],
        "correctAnswer": 2,
        "explanation": "Shut down là lệnh tắt máy hoàn toàn.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 67,
        "text": "Thiết bị nào sau đây dùng để quét ảnh giấy vào máy tính?",
        "options": [
          "Máy in",
          "Máy quét (Scanner)",
          "Webcam",
          "Chuột"
        ],
        "correctAnswer": 1,
        "explanation": "Scanner giúp số hóa tài liệu giấy.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 68,
        "text": "Phím Enter dùng để làm gì?",
        "options": [
          "Xóa chữ",
          "Xuống dòng hoặc thực hiện lệ",
          "Tắt máy",
          "Mở Internet"
        ],
        "correctAnswer": 1,
        "explanation": "Enter là phím xác nhận hoặc xuống dòng.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 69,
        "text": "Máy tính có thể giúp em làm những gì?",
        "options": [
          "Học tập",
          "Gửi thư",
          "Nghe nhạc",
          "Tất cả các phương án trên"
        ],
        "correctAnswer": 3,
        "explanation": "Máy tính là công cụ đa năng.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 70,
        "text": "Nối phím với chức năng của nó:",
        "pairs": [
          {
            "left": "Backspace",
            "right": "Xóa chữ bên trái con trỏ"
          },
          {
            "left": "Delete",
            "right": "Xóa chữ bên phải con trỏ"
          },
          {
            "left": "Caps Lock",
            "right": "Bật/tát gõ chữ hoa"
          }
        ],
        "explanation": "Sử dụng phím đúng cách.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 71,
        "text": "Bộ phận nào xử lý mọi hoạt động của máy tính?",
        "options": [
          "Chuột",
          "Màn hình",
          "CPU (trong thân máy)",
          "Bàn phím"
        ],
        "correctAnswer": 2,
        "explanation": "CPU được coi là bộ não của máy tính.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 72,
        "text": "Khi học xong, em có nên để máy tính sáng cả đêm không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Nên tắt máy để tiết kiệm điện và bền máy.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 73,
        "text": "Sắp xếp các bước khởi động máy tính để bàn:",
        "options": [
          "Bật nút nguồn màn hình",
          "Bật nút nguồn thân máy",
          "Kiểm tra dây điện",
          "Chờ máy hiện màn hình nền"
        ],
        "correctAnswer": [
          "Kiểm tra dây điện",
          "Bật nút nguồn màn hình",
          "Bật nút nguồn thân máy",
          "Chờ máy hiện màn hình nền"
        ],
        "explanation": "Quy trình khởi động chuẩn.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "ORDERING"
      },
      {
        "id": 74,
        "text": "Thiết bị nào giúp em đưa hình ảnh của mình lên mạng khi gọi điện?",
        "options": [
          "Loa",
          "Webcam",
          "Máy in",
          "Chuột"
        ],
        "correctAnswer": 1,
        "explanation": "Webcam thu hình ảnh trực tiếp.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 75,
        "text": "Bàn phím có hai phím có gờ nổi (phím có gai) là phím nào?",
        "options": [
          "F và J",
          "G và H",
          "S và D",
          "K và L"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là hai phím mốc để đặt ngón trỏ.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 76,
        "text": "Máy tính không thể thiếu bộ phận nào sau đây để hoạt động?",
        "options": [
          "Loa",
          "Thân máy",
          "Máy in",
          "Webcam"
        ],
        "correctAnswer": 1,
        "explanation": "Thân máy chứa các linh kiện cốt yếu.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 77,
        "text": "Khi tay đang ướt, em có nên chạm vào dây điện máy tính không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tuyệt đối không để tránh bị điện giật.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 78,
        "text": "Phân loại các thiết bị sau vào đúng nhóm:",
        "items": [
          "Chuột",
          "Loa",
          "Màn hình",
          "Bàn phím"
        ],
        "targets": [
          "Thiết bị Vào",
          "Thiết bị Ra"
        ],
        "correctAnswer": {
          "Chuột": "Thiết bị Vào",
          "Bàn phím": "Thiết bị Vào",
          "Màn hình": "Thiết bị Ra",
          "Loa": "Thiết bị Ra"
        },
        "explanation": "Hiểu về dòng dữ liệu.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 79,
        "text": "Lợi ích của việc sử dụng máy tính trong học tập là gì?",
        "options": [
          "Tìm tài liệu nhanh",
          "Chơi game cả ngày",
          "Lười suy nghĩ",
          "Làm hỏng mắt"
        ],
        "correctAnswer": 0,
        "explanation": "Máy tính hỗ trợ tra cứu kiến thức.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 80,
        "text": "Trong các thiết bị sau, thiết bị nào KHÔNG phải của máy tính?",
        "options": [
          "Màn hình",
          "Nồi cơm điện",
          "Bàn phím",
          "Thân máy"
        ],
        "correctAnswer": 1,
        "explanation": "Nồi cơm điện là đồ gia dụng.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 81,
        "text": "Bộ phận nào của máy tính có nhiều phím bấm?",
        "options": [
          "Chuột",
          "Loa",
          "Bàn phím",
          "Màn hình"
        ],
        "correctAnswer": 2,
        "explanation": "Bàn phím chứa các phím ký tự.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 82,
        "text": "Thao tác nháy chuột trái dùng để làm gì?",
        "options": [
          "Chọn một đối tượng",
          "Mở menu lệnh",
          "Tắt máy",
          "Xóa tệp"
        ],
        "correctAnswer": 0,
        "explanation": "Nháy trái là thao tác chọn cơ bản.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 83,
        "text": "Để di chuyển một biểu tượng trên màn hình, em dùng thao tác nào với chuột?",
        "options": [
          "Nháy chuột",
          "Nháy đúp chuột",
          "Kéo thả chuột",
          "Xoay nút cuộn"
        ],
        "correctAnswer": 2,
        "explanation": "Kéo thả dùng để di chuyển đối tượng.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 84,
        "text": "Màn hình máy tính để bàn thường có dạng hình gì?",
        "options": [
          "Hình tròn",
          "Hình chữ nhật",
          "Hình tam giác",
          "Hình thoi"
        ],
        "correctAnswer": 1,
        "explanation": "Màn hình phổ biến là hình chữ nhật.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 85,
        "text": "Trong phòng máy tính, em có nên tự ý cắm rút các dây điện không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Rất nguy hiểm và dễ làm hỏng máy.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 86,
        "text": "Nối thiết bị với vị trí đặt chúng trên máy tính xách tay:",
        "pairs": [
          {
            "left": "Màn hình",
            "right": "Phần phía trên"
          },
          {
            "left": "Bàn phím",
            "right": "Phần phía dưới"
          },
          {
            "left": "Webcam",
            "right": "Phía trên màn hình"
          }
        ],
        "explanation": "Nhận biết cấu trúc laptop.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 87,
        "text": "Khi học máy tính, em nên nghỉ ngơi sau mỗi bao nhiêu phút?",
        "options": [
          "5 phút",
          "20-30 phút",
          "5 tiếng",
          "Cả ngày"
        ],
        "correctAnswer": 1,
        "explanation": "Nghỉ ngắn giúp bảo vệ mắt và cơ thể.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 88,
        "text": "Thiết bị nào sau đây dùng để lưu trữ dữ liệu bền lâu và có thể mang theo dễ dàng?",
        "options": [
          "Loa",
          "USB",
          "Cáp sạc",
          "Máy in"
        ],
        "correctAnswer": 1,
        "explanation": "USB là thiết bị lưu trữ di động.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 89,
        "text": "Thao tác nháy chuột phải dùng để làm gì?",
        "options": [
          "Mở một chương trình",
          "Hiển thị danh sách các lệnh (Menu context)",
          "Xóa tệp",
          "Tắt màn hình"
        ],
        "correctAnswer": 1,
        "explanation": "Nháy phải mở các tùy chọn lệnh.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 90,
        "text": "Chuột máy tính có nút cuộn dùng để làm gì?",
        "options": [
          "Lăn trang web lên xuống",
          "Gõ chữ",
          "Thay đổi màu màn hình",
          "Tắt máy"
        ],
        "correctAnswer": 0,
        "explanation": "Nút cuộn giúp duyệt nội dung nhanh.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 91,
        "text": "Máy tính để bàn cần có nguồn điện để hoạt động đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Nó dùng điện trực tiếp từ ổ cắm.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 92,
        "text": "Máy tính xách tay có pin để dùng khi không cắm điện đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Pin giúp laptop sử dụng linh hoạt.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 93,
        "text": "Phân loại các thiết bị sau vào nhóm Di động hoặc Cố định:",
        "items": [
          "Máy tính bảng",
          "Máy tính để bàn",
          "Điện thoại thông minh",
          "Máy in lớn"
        ],
        "targets": [
          "Di động",
          "Cố định"
        ],
        "correctAnswer": {
          "Máy tính bảng": "Di động",
          "Điện thoại thông minh": "Di động",
          "Máy tính để bàn": "Cố định",
          "Máy in lớn": "Cố định"
        },
        "explanation": "Phân biệt tính linh hoạt của thiết bị.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 94,
        "text": "Thiết bị nào giúp máy tính nhận diện giọng nói của em?",
        "options": [
          "Bàn phím",
          "Microphone",
          "Loa",
          "Chuột"
        ],
        "correctAnswer": 1,
        "explanation": "Micro thu âm thanh vào máy.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 95,
        "text": "Khi dùng máy tính, khoảng cách từ mắt đến màn hình chuẩn là?",
        "options": [
          "Sát mắt",
          "Cánh tay (khoảng 50-80cm)",
          "3 mét",
          "10 mét"
        ],
        "correctAnswer": 1,
        "explanation": "Khoảng cách an toàn cho mắt.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 96,
        "text": "Để gõ phím đúng cách, ngón tay trỏ tay trái đặt ở phím nào?",
        "options": [
          "J",
          "F",
          "D",
          "S"
        ],
        "correctAnswer": 1,
        "explanation": "Phím F là mốc cho tay trái.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 97,
        "text": "Để gõ phím đúng cách, ngón tay trỏ tay phải đặt ở phím nào?",
        "options": [
          "F",
          "J",
          "K",
          "L"
        ],
        "correctAnswer": 1,
        "explanation": "Phím J là mốc cho tay phải.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 98,
        "text": "Ổ cắm điện trong phòng máy rất an toàn, em có thể sờ vào đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Rất nguy hiểm, tuyệt đối không chạm vào.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 99,
        "text": "Sắp xếp các bước để tắt máy tính xách tay (Laptop):",
        "options": [
          "Lưu các bài đang làm",
          "Nhấn nút Start",
          "Chọn Shut down",
          "Gập màn hình lại khi máy tắt hẳn"
        ],
        "correctAnswer": [
          "Lưu các bài đang làm",
          "Nhấn nút Start",
          "Chọn Shut down",
          "Gập màn hình lại khi máy tắt hẳn"
        ],
        "explanation": "Quy trình bảo quản laptop.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "ORDERING"
      },
      {
        "id": 100,
        "text": "Tìm lỗi sai trong tư thế ngồi học máy tính:",
        "options": [
          "1. Chân đặt thoải mái trên sàn",
          "2. Khuỷu tay tạo góc vuông",
          "3. Ngồi bắt chéo chân lâu",
          "4. Lưng tựa vào ghế"
        ],
        "correctAnswer": 2,
        "errorPart": "Ngồi bắt chéo chân lâu",
        "correction": "Em nên đặt hai chân thoải mái trên mặt sàn để máu lưu thông tốt.",
        "explanation": "Ngồi bắt chéo chân lâu không tốt cho sức khỏe.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "FIND_ERROR"
      },
      {
        "id": 101,
        "text": "Máy in là thiết bị giúp đưa thông tin từ máy tính ra giấy đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Máy in là thiết bị ra.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 102,
        "text": "Chuột quang là loại chuột như thế nào?",
        "options": [
          "Có viên bi bên dưới",
          "Dùng tia sáng để nhận diện chuyển động",
          "Làm bằng pha lê",
          "Không thể di chuyển"
        ],
        "correctAnswer": 1,
        "explanation": "Chuột quang hiện đại dùng cảm biến ánh sáng.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 103,
        "text": "Nối các phím chức năng với tên gọi của chúng:",
        "pairs": [
          {
            "left": "Shift",
            "right": "Phím dùng để viết hoa"
          },
          {
            "left": "Space",
            "right": "Phím cách"
          },
          {
            "left": "Enter",
            "right": "Phím thực hiện lệnh"
          }
        ],
        "explanation": "Tên gọi các phím thông dụng.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MATCHING"
      },
      {
        "id": 104,
        "text": "Hàng phím cơ sở là hàng phím nằm ở đâu?",
        "options": [
          "Trên cùng",
          "Dưới cùng",
          "Giữa hàng phím trên và hàng phím dưới",
          "Bên phải bàn phím"
        ],
        "correctAnswer": 2,
        "explanation": "Hàng phím chuẩn để đặt tay gõ.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 105,
        "text": "Trong thân máy tính có chứa bộ nhớ để lưu dữ liệu đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Thân máy chứa ổ cứng để lưu trữ.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 106,
        "text": "Nếu màn hình bị bẩn, em nên dùng thứ gì để lau?",
        "options": [
          "Khăn ướt đẫm nước",
          "Khăn khô mềm sạch",
          "Giấy nhám",
          "Bàn chải cứng"
        ],
        "correctAnswer": 1,
        "explanation": "Khăn mềm giúp tránh trầy xước màn hình.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 107,
        "text": "Khi học xong, em cần dọn dẹp bàn học máy tính gọn gàng đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Giữ vệ sinh góc học tập là thói quen tốt.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 108,
        "text": "Để bảo vệ máy tính khỏi bụi bẩn khi không dùng lâu, em nên làm gì?",
        "options": [
          "Để cửa sổ mở",
          "Dùng khăn che hoặc túi bọc chuyên dụng",
          "Lấy vải nhúng nước phủ lên",
          "Mặc kệ"
        ],
        "correctAnswer": 1,
        "explanation": "Che đậy giúp máy tránh bụi bẩn.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 109,
        "text": "Khi học với máy tính, em nên nghỉ ngơi và nhìn ra xa sau khoảng bao lâu?",
        "options": [
          "5 phút",
          "20-30 phút",
          "2 tiếng",
          "Khi nào thấy đau mắt mới nghỉ"
        ],
        "correctAnswer": 1,
        "explanation": "Quy tắc 20-20-20 (hoặc nghỉ sau mỗi 20-30 phút) giúp bảo vệ thị lực của em.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 110,
        "text": "Hành động nào sau đây là AN TOÀN khi sử dụng máy tính?",
        "options": [
          "Vừa ăn bánh kẹo vừa gõ phím",
          "Tự ý tháo dây cắm điện khi máy đang chạy",
          "Sử dụng máy tính dưới sự hướng dẫn của người lớn",
          "Để nước uống ngay cạnh bàn phím"
        ],
        "correctAnswer": 2,
        "explanation": "Luôn tuân thủ hướng dẫn để sử dụng máy tính an toàn và bền bỉ.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 111,
        "text": "Khi muốn rút phích cắm điện máy tính, em nên cầm vào bộ phận nào là đúng và an toàn?",
        "options": [
          "Cầm vào dây điện và kéo mạnh",
          "Cầm vào phần nhựa đầu phích cắm",
          "Cầm vào cả dây và phích cắm",
          "Dùng vật kim loại để khều ra"
        ],
        "correctAnswer": 1,
        "explanation": "Cầm vào phần nhựa giúp em không bị điện giật hay làm đứt dây điện.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 112,
        "text": "Phân loại các hành động sau vào nhóm Nên làm hoặc Không nên làm để bảo vệ máy tính:",
        "items": [
          "Dùng khăn khô mềm lau máy",
          "Để máy tính ở nơi nắng gắt",
          "Tắt máy đúng quy trình",
          "Lấy bút vẽ lên màn hình"
        ],
        "targets": [
          "Nên làm",
          "Không nên làm"
        ],
        "correctAnswer": {
          "Dùng khăn khô mềm lau máy": "Nên làm",
          "Tắt máy đúng quy trình": "Nên làm",
          "Để máy tính ở nơi nắng gắt": "Không nên làm",
          "Lấy bút vẽ lên màn hình": "Không nên làm"
        },
        "explanation": "Sử dụng và bảo quản đúng cách giúp máy tính hoạt động tốt hơn.",
        "difficulty": "Medium",
        "topic": "Máy tính và em",
        "type": "DRAG_DROP"
      },
      {
        "id": 113,
        "text": "Cái gì được ví như 'đôi mắt' của máy tính, giúp em thu hình ảnh của mình để gửi cho bạn bè?",
        "options": [
          "Màn hình",
          "Webcam",
          "Chuột",
          "Bàn phím"
        ],
        "correctAnswer": 1,
        "explanation": "Webcam là thiết bị giúp thu hình ảnh trực tiếp vào máy tính.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 114,
        "text": "Thiết bị nào sau đây là bộ phận chính của máy tính để bàn giúp hiển thị thông tin?",
        "options": [
          "Màn hình",
          "Thân máy",
          "Bàn phím",
          "Chuột"
        ],
        "correctAnswer": 0,
        "explanation": "Màn hình giúp em nhìn thấy kết quả làm việc.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 115,
        "text": "Máy tính có thể nghe được âm thanh nếu có thiết bị nào sau đây?",
        "options": [
          "Loa hoặc tai nghe",
          "Bàn phím",
          "Chuột",
          "Màn hình"
        ],
        "correctAnswer": 0,
        "explanation": "Loa và tai nghe là thiết bị phát âm thanh.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 116,
        "text": "Để chọn một biểu tượng trên màn hình, em thường dùng nút nào của chuột?",
        "options": [
          "Nút trái",
          "Nút phải",
          "Nút giữa",
          "Tất cả các nút"
        ],
        "correctAnswer": 0,
        "explanation": "Nháy chuột trái là thao tác chọn cơ bản.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 117,
        "text": "Khi gõ bàn phím, em nên đặt bàn tay và cánh tay như thế nào?",
        "options": [
          "Thả lỏng, không tì tay vào mép bàn quá mạnh",
          "Gồng cứng tay",
          "Để tay dưới gầm bàn",
          "Đặt chồng hai tay lên nhau"
        ],
        "correctAnswer": 0,
        "explanation": "Tư thế thả lỏng giúp em gõ nhanh và không bị mỏi.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 118,
        "text": "Em có thể vừa sử dụng máy tính để học toán, vừa để luyện gõ bàn phím đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Máy tính hỗ trợ đa nhiệm và nhiều ứng dụng học tập.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 119,
        "text": "Bộ phận nào của máy tính chứa các linh kiện xử lý chính và bộ nhớ?",
        "options": [
          "Thân máy",
          "Màn hình",
          "Bàn phím",
          "Chuột"
        ],
        "correctAnswer": 0,
        "explanation": "Thân máy là bộ phận quan trọng nhất, nơi xử lý thông tin.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 120,
        "text": "Máy tính xách tay (laptop) có thể hoạt động mà không cần cắm điện nhờ vào linh kiện nào?",
        "options": [
          "Pin",
          "Màn hình",
          "Bàn phím",
          "Loa"
        ],
        "correctAnswer": 0,
        "explanation": "Pin lưu trữ năng lượng cho máy tính xách tay.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 121,
        "text": "Để tắt máy tính đúng cách và an toàn, em nên thực hiện thao tác nào?",
        "options": [
          "Chọn nút Start -> Power -> Shut down",
          "Rút trực tiếp dây điện",
          "Nhấn giữ nút nguồn trên thân máy",
          "Tắt màn hình là đủ"
        ],
        "correctAnswer": 0,
        "explanation": "Shut down giúp hệ điều hành đóng các chương trình an toàn.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 122,
        "text": "Ngồi quá sát màn hình máy tính sẽ có tác hại gì cho em?",
        "options": [
          "Làm mắt bị mỏi và dễ bị cận thị",
          "Làm em thông minh hơn",
          "Làm máy tính nhanh hỏng",
          "Không có tác hại gì"
        ],
        "correctAnswer": 0,
        "explanation": "Khoảng cách an toàn bảo vệ thị lực của em.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 123,
        "text": "Bàn phím máy tính dùng để làm gì chính yếu?",
        "options": [
          "Nhập văn bản và các lệnh điều khiển",
          "Di chuyển con trỏ",
          "Hiển thị hình ảnh",
          "Phát âm thanh"
        ],
        "correctAnswer": 0,
        "explanation": "Bàn phím là thiết bị nhập dữ liệu chữ và số.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 124,
        "text": "Chuột máy tính thường có ít nhất là bao nhiêu nút bấm chính?",
        "options": [
          "1 nút",
          "2 nút (trái và phải)",
          "10 nút",
          "Không có nút nào"
        ],
        "correctAnswer": 1,
        "explanation": "Nút trái và nút phải là hai nút cơ bản trên chuột.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 125,
        "text": "Thiết bị nào giúp em xem được các đoạn phim hoạt hình và hình ảnh trên máy tính?",
        "options": [
          "Màn hình",
          "Thân máy",
          "Bàn phím",
          "Chuột"
        ],
        "correctAnswer": 0,
        "explanation": "Màn hình hiển thị thông tin dạng hình ảnh.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 126,
        "text": "Máy tính có thể giúp em tìm kiếm các thông tin bổ ích cho bài học trên Internet đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Internet là kho tàng kiến thức khổng lồ.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "TRUE_FALSE"
      },
      {
        "id": 127,
        "text": "Khi ngồi học với máy tính, lưng của em nên ở tư thế như thế nào?",
        "options": [
          "Thẳng, tựa vào lưng ghế",
          "Cúi gập xuống bàn",
          "Nằm ra ghế",
          "Vặn người sang một bên"
        ],
        "correctAnswer": 0,
        "explanation": "Tư thế thẳng lưng giúp bảo vệ cột sống.",
        "difficulty": "Easy",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 128,
        "text": "Nếu virus máy tính làm hỏng 'bộ não' CPU của máy tính, điều gì sẽ xảy ra?",
        "options": [
          "Máy tính chạy nhanh hơn",
          "Máy tính không thể thực hiện bất kỳ lệnh nào",
          "Loa sẽ kêu to hơn",
          "Màn hình sẽ hiện hình ảnh đẹp hơn"
        ],
        "correctAnswer": 1,
        "explanation": "CPU xử lý mọi hoạt động, nếu nó bị lỗi do phần mã độc can thiệp nặng nề, máy sẽ ngừng hoạt động.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 129,
        "text": "Bộ phận nào trong thân máy giúp CPU không bị quá nóng khi làm việc nhiều?",
        "options": [
          "Ổ cứng",
          "Quạt tản nhiệt",
          "Ram",
          "Card đồ họa"
        ],
        "correctAnswer": 1,
        "explanation": "Quạt tản nhiệt giúp hạ nhiệt độ cho CPU để nó không bị cháy hỏng.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 130,
        "text": "Tại sao không nên tự ý tháo vỏ thân máy (case) khi máy đang cắm điện?",
        "options": [
          "Sợ bị bẩn tay",
          "Nguy cơ bị điện giật và hỏng linh kiện do tĩnh điện",
          "Làm máy chạy chậm",
          "Làm loa bị rè"
        ],
        "correctAnswer": 1,
        "explanation": "An toàn điện và bảo vệ linh kiện nhạy cảm bên trong.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 131,
        "text": "Nếu em muốn kết nối máy tính với một chiếc tivi lớn, em thường sử dụng cổng kết nối nào?",
        "options": [
          "Cổng USB",
          "Cổng HDMI",
          "Cổng sạc",
          "Cổng tai nghe"
        ],
        "correctAnswer": 1,
        "explanation": "HDMI là cổng truyền hình ảnh và âm thanh chất lượng cao.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 132,
        "text": "Thiết bị nào sau đây vừa lưu trữ dữ liệu lâu dài ngay cả khi tắt máy?",
        "options": [
          "RAM",
          "Bộ nhớ đệm",
          "Ổ cứng (HDD/SSD)",
          "Màn hình"
        ],
        "correctAnswer": 2,
        "explanation": "Ổ cứng giữ lại dữ liệu, còn RAM sẽ mất dữ liệu khi mất điện.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 133,
        "text": "Thao tác 'Click chuột phải' thường được dùng để làm gì?",
        "options": [
          "Chọn đối tượng",
          "Mở thực đơn (menu) các lệnh bổ sung",
          "Tắt máy",
          "Xóa tệp ngay lập tức"
        ],
        "correctAnswer": 1,
        "explanation": "Chuột phải mở menu ngữ cảnh.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 134,
        "text": "Khi bàn phím bị kẹt một phím và gõ liên tục một chữ, cách xử lý thông minh nhất là?",
        "options": [
          "Lấy búa đập",
          "Nhấn nhẹ phím đó vài lần để nó nảy lên hoặc báo người lớn",
          "Rút màn hình",
          "Cứ để kệ nó"
        ],
        "correctAnswer": 1,
        "explanation": "Cần xử lý nhẹ nhàng hoặc nhờ hỗ trợ chuyên môn.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      },
      {
        "id": 135,
        "text": "Tại sao không nên vừa ăn uống vừa sử dụng máy tính?",
        "options": [
          "Vì làm bẩn tay",
          "Vì thức ăn/nước có thể rơi vào linh kiện gây hỏng hóc hoặc chập điện",
          "Vì làm thức ăn mất ngon",
          "Vì tốn thời gian"
        ],
        "correctAnswer": 1,
        "explanation": "Vệ sinh và an toàn thiết bị là rất quan trọng khi sử dụng máy tính.",
        "difficulty": "Hard",
        "topic": "Máy tính và em",
        "type": "MCQ"
      }
    ]
  },
  {
    "id": 2,
    "title": "Chủ đề 2: Mạng và Internet",
    "topic": "Mạng và Internet",
    "description": "Khám phá thế giới kết nối toàn cầu.",
    "icon": "Globe",
    "questions": [
      {
        "id": 136,
        "text": "Internet là gì?",
        "options": [
          "Một trò chơi",
          "Mạng kết nối các máy tính toàn cầu",
          "Một loại tivi",
          "Một phần mềm vẽ"
        ],
        "correctAnswer": 1,
        "explanation": "Internet giúp kết nối mọi người trên thế giới.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 137,
        "text": "Để truy cập Internet, em cần thiết bị nào?",
        "options": [
          "Bàn chải",
          "Máy tính hoặc điện thoại có kết nối mạng",
          "Quyển vở",
          "Cái bút"
        ],
        "correctAnswer": 1,
        "explanation": "Máy tính và điện thoại là thiết bị giúp em vào mạng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 138,
        "text": "Nối biểu tượng với ứng dụng tương ứng:",
        "pairs": [
          {
            "left": "Zalo",
            "right": "Nhắn tin, gọi điện miễn phí"
          },
          {
            "left": "Youtube",
            "right": "Xem video giải trí, học tập"
          },
          {
            "left": "Google",
            "right": "Tìm kiếm thông tin"
          }
        ],
        "explanation": "Nhận biết các dịch vụ Internet quen thuộc.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 139,
        "text": "Khi dùng Internet, em có thể làm gì?",
        "options": [
          "Học tập",
          "Xem phim hoạt hình",
          "Tìm kiếm thông tin",
          "Tất cả các phương án trên"
        ],
        "correctAnswer": 3,
        "explanation": "Internet mang lại rất nhiều lợi ích.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 140,
        "text": "Phân loại các hành động sau vào nhóm Nên làm hoặc Không nên làm khi dùng Internet:",
        "items": [
          "Giữ bí mật mật khẩu",
          "Nói tên thật cho người lạ",
          "Chào hỏi lịch sự",
          "Xúc phạm bạn bè"
        ],
        "targets": [
          "Nên làm",
          "Không nên làm"
        ],
        "correctAnswer": {
          "Giữ bí mật mật khẩu": "Nên làm",
          "Chào hỏi lịch sự": "Nên làm",
          "Nói tên thật cho người lạ": "Không nên làm",
          "Xúc phạm bạn bè": "Không nên làm"
        },
        "explanation": "Cần cư xử văn minh và bảo mật thông tin trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 141,
        "text": "Tìm lỗi sai trong mô tả về Internet sau:",
        "options": [
          "1. Internet là mạng toàn cầu",
          "2. Internet chỉ dùng để chơi game",
          "3. Có thể dùng Internet để học tập",
          "4. Cần mật khẩu để vào email"
        ],
        "correctAnswer": 1,
        "errorPart": "Internet chỉ dùng để chơi game",
        "correction": "Internet có rất nhiều công dụng như học tập, trao đổi thông tin, không chỉ để giải trí.",
        "explanation": "Internet mang lại kho tàng kiến thức khổng lồ.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 142,
        "text": "Em có nên cho người lạ trên mạng biết địa chỉ nhà mình không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Cần giữ bí mật thông tin cá nhân để an toàn.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 143,
        "text": "Nối tên phần mềm với biểu tượng tương ứng:",
        "pairs": [
          {
            "left": "Lá cờ",
            "right": "Scratch"
          },
          {
            "left": "Chữ W",
            "right": "Word"
          },
          {
            "left": "Chữ P",
            "right": "PowerPoint"
          }
        ],
        "explanation": "Nhận biết biểu tượng phần mềm quen thuộc.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 144,
        "text": "Phân loại các website sau vào nhóm Học tập hoặc Giải trí:",
        "items": [
          "Violympic",
          "Poki",
          "Youtube Kids",
          "Trochoivui"
        ],
        "targets": [
          "Học tập",
          "Giải trí"
        ],
        "correctAnswer": {
          "Violympic": "Học tập",
          "Poki": "Học tập",
          "Youtube Kids": "Giải trí",
          "Trochoivui": "Giải trí"
        },
        "explanation": "Sử dụng Internet vào mục đích lành mạnh.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 145,
        "text": "Tìm lỗi sai trong quy trình truy cập trang web:",
        "options": [
          "1. Mở trình duyệt",
          "2. Gõ địa chỉ vào ô tìm kiếm",
          "3. Nhấn phím Space",
          "4. Xem nội dung trang web"
        ],
        "correctAnswer": 2,
        "errorPart": "Nhấn phím Space",
        "correction": "Sau khi gõ địa chỉ, em cần nhấn phím 'Enter' để truy cập.",
        "explanation": "Phím Enter thực hiện lệnh truy cập.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 146,
        "text": "Trang web đầu tiên em nhìn thấy khi mở trình duyệt gọi là gì?",
        "options": [
          "Trang cuối",
          "Trang chủ",
          "Trang giữa",
          "Trang liên hệ"
        ],
        "correctAnswer": 1,
        "explanation": "Trang chủ (Homepage) là cửa ngõ của website.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 147,
        "text": "Biểu tượng hình ngôi sao trên trình duyệt thường dùng để làm gì?",
        "options": [
          "Xóa trang web",
          "Lưu trang web vào mục yêu thích (Bookmark)",
          "Tải lại trang",
          "In trang web"
        ],
        "correctAnswer": 1,
        "explanation": "Bookmark giúp em truy cập lại trang web nhanh hơn sau này.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 148,
        "text": "Để nghe nhạc trên mạng, em có thể truy cập trang web nào?",
        "options": [
          "Zing MP3",
          "Paint",
          "Calculator",
          "Notepad"
        ],
        "correctAnswer": 0,
        "explanation": "Nhiều website cung cấp dịch vụ nghe nhạc trực tuyến.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 149,
        "text": "Khi gặp thông báo 'Máy tính của bạn bị nhiễm virus, hãy bấm vào đây', em nên làm gì?",
        "options": [
          "Bấm vào ngay",
          "Tắt trình duyệt và báo người lớn",
          "Gửi cho bạn bè",
          "Xóa máy tính"
        ],
        "correctAnswer": 1,
        "explanation": "Đây thường là thông báo lừa đảo nhằm cài mã độc.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 150,
        "text": "Internet có thể giúp em liên lạc với người ở xa bằng cách nào?",
        "options": [
          "Gửi thư tay",
          "Gọi điện video (Video call)",
          "Đi bộ đến nhà",
          "Nói to ngoài cửa"
        ],
        "correctAnswer": 1,
        "explanation": "Công nghệ giúp xóa nhòa khoảng cách địa lý.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 151,
        "text": "Nối biểu tượng trình duyệt với tên của nó:",
        "pairs": [
          {
            "left": "Chữ E xanh quay tròn",
            "right": "Microsoft Edge"
          },
          {
            "left": "Vòng tròn đỏ vàng xanh",
            "right": "Google Chrome"
          },
          {
            "left": "Con cáo lửa",
            "right": "Firefox"
          }
        ],
        "explanation": "Nhận biết các trình duyệt phổ biến.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 152,
        "text": "Để quay lại trang web vừa xem trước đó, em nhấn nút nào trên trình duyệt?",
        "options": [
          "Forward",
          "Reload",
          "Back",
          "Home"
        ],
        "correctAnswer": 2,
        "explanation": "Nút Back (mũi tên trái) giúp quay lại lịch sử duyệt web.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 153,
        "text": "Nên làm gì khi muốn tìm kiếm một bài hát trên Internet?",
        "options": [
          "Gõ tên bài hát vào ô tìm kiếm",
          "Đợi nó tự hiện ra",
          "Bấm ngẫu nhiên các nút",
          "Tắt máy"
        ],
        "correctAnswer": 0,
        "explanation": "Sử dụng từ khóa chính xác giúp tìm thấy thông tin nhanh hơn.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 154,
        "text": "Thông tin trên Internet có thể bao gồm những gì?",
        "options": [
          "Chỉ có chữ",
          "Chỉ có ảnh",
          "Chữ, ảnh, âm thanh, video",
          "Chỉ có trò chơi"
        ],
        "correctAnswer": 2,
        "explanation": "Internet chứa đa dạng các loại thông tin.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 155,
        "text": "Tìm lỗi sai trong hành vi dùng Internet:",
        "options": [
          "1. Tìm tài liệu học tập",
          "2. Gửi lời chúc mừng bạn",
          "3. Lấy tên bạn để đăng tin giả",
          "4. Xem lịch thi đấu bóng đá"
        ],
        "correctAnswer": 2,
        "errorPart": "Lấy tên bạn để đăng tin giả",
        "correction": "Giả mạo người khác trên mạng là hành vi xấu và vi phạm đạo đức.",
        "explanation": "Tôn trọng danh tính của người khác trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 156,
        "text": "Để phóng to một trang web trên trình duyệt, em làm gì?",
        "options": [
          "Lắc màn hình",
          "Nhấn giữ Ctrl và xoay con cuộn chuột lên",
          "Dùng kính lúp soi vào",
          "Tắt bớt đèn"
        ],
        "correctAnswer": 1,
        "explanation": "Phím Ctrl kết hợp cuộn chuột giúp thay đổi kích thước hiển thị.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 157,
        "text": "Wifi là loại kết nối gì?",
        "options": [
          "Kết nối bằng dây cáp đồng",
          "Kết nối không dây bằng sóng vô tuyến",
          "Kết nối qua đường ống nước",
          "Kết nối bằng vệ tinh"
        ],
        "correctAnswer": 1,
        "explanation": "Wifi giúp các thiết bị kết nối mạng mà không cần dây cáp.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 158,
        "text": "Khi trang web bị đứng (không tải được), em nên nhấn phím nào để tải lại?",
        "options": [
          "F1",
          "F5",
          "Esc",
          "Shift"
        ],
        "correctAnswer": 1,
        "explanation": "F5 là phím tắt làm mới (Refresh) trang web.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 159,
        "text": "Website nào sau đây là từ điển trực tuyến nổi tiếng?",
        "options": [
          "Google Translate",
          "Paint",
          "Windows",
          "Task Manager"
        ],
        "correctAnswer": 0,
        "explanation": "Các công cụ dịch thuật giúp em học ngoại ngữ tốt hơn.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 160,
        "text": "Trang web nào chuyên cung cấp các video hướng dẫn tự làm đồ chơi (DIY)?",
        "options": [
          "Youtube",
          "Word",
          "Calculator",
          "Power Manager"
        ],
        "correctAnswer": 0,
        "explanation": "Youtube là kho video khổng lồ với nhiều bài hướng dẫn bổ ích.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 161,
        "text": "Dấu hiệu nào cho thấy em đang truy cập một trang web an toàn (có bảo mật)?",
        "options": [
          "Có hình con ma",
          "Có biểu tượng ổ khóa ở đầu địa chỉ",
          "Có màu đỏ chói",
          "Không có chữ nào"
        ],
        "correctAnswer": 1,
        "explanation": "Ổ khóa biểu thị trang web được mã hóa bảo mật.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 162,
        "text": "Internet có thể thay thế hoàn toàn việc đến trường học đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Internet hỗ trợ học tập nhưng không thay thế được môi trường giáo dục trực tiếp tại trường.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 163,
        "text": "Em có thể mua hàng hóa trên mạng mà không cần trả tiền không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Mua hàng trực tuyến vẫn phải thanh toán bằng tiền (tiền mặt hoặc chuyển khoản).",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 164,
        "text": "Mọi thông tin trên mạng đều hoàn toàn chính xác.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Có nhiều tin giả hoặc thông tin sai lệch, em cần kiểm chứng kỹ.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 165,
        "text": "Nối các thuật ngữ mạng với ý nghĩa của nó:",
        "pairs": [
          {
            "left": "Account",
            "right": "Tài khoản người dùng"
          },
          {
            "left": "Password",
            "right": "Mật khẩu bảo vệ"
          },
          {
            "left": "Login",
            "right": "Đăng nhập vào hệ thống"
          }
        ],
        "explanation": "Hiểu các từ ngữ thông dụng khi dùng mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 166,
        "text": "Sắp xếp các bước để tìm kiếm hình ảnh con hổ trên Google:",
        "options": [
          "Vào google.com",
          "Gõ chữ 'con hổ'",
          "Chọn mục Hình ảnh",
          "Nhấn Enter"
        ],
        "correctAnswer": [
          "Vào google.com",
          "Gõ chữ 'con hổ'",
          "Nhấn Enter",
          "Chọn mục Hình ảnh"
        ],
        "explanation": "Các bước tìm kiếm thông tin nhanh chóng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 167,
        "text": "Thư điện tử (Email) có thể gửi đi những gì?",
        "options": [
          "Chỉ có chữ",
          "Chữ và tệp đính kèm (ảnh, văn bản)",
          "Thức ăn",
          "Đồ chơi"
        ],
        "correctAnswer": 1,
        "explanation": "Email là phương tiện trao đổi dữ liệu số.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 168,
        "text": "Để bảo mật tài khoản mạng, mật khẩu em đặt nên như thế nào?",
        "options": [
          "Càng ngắn càng tốt",
          "Dễ đoán như 123456",
          "Kết hợp chữ, số và khó đoán",
          "Cho tất cả các bạn cùng biết"
        ],
        "correctAnswer": 2,
        "explanation": "Mật khẩu mạnh bảo vệ thông tin riêng tư của em.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 169,
        "text": "Khi nhận được lời mời kết bạn từ người hoàn toàn xa lạ trên mạng, em nên làm gì?",
        "options": [
          "Đồng ý ngay",
          "Tò mò hỏi chuyện",
          "Từ chối và báo người lớn nếu họ làm phiền",
          "Gửi địa chỉ nhà cho họ"
        ],
        "correctAnswer": 2,
        "explanation": "Cảnh giác với người lạ trên Internet để bảo đảm an toàn.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 170,
        "text": "Trang web Wikipedia chủ yếu cung cấp loại thông tin gì?",
        "options": [
          "Trò chơi hành động",
          "Phim hoạt hình",
          "Kiến thức từ điển bách khoa",
          "Mua sắm quần áo"
        ],
        "correctAnswer": 2,
        "explanation": "Wikipedia là kho tàng kiến thức đa lĩnh vực.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 171,
        "text": "Mạng LAN là loại mạng kết nối trong phạm vi như thế nào?",
        "options": [
          "Kết nối toàn cầu",
          "Kết nối trong một phòng hoặc một tòa nhà",
          "Kết nối giữa các quốc gia",
          "Kết nối qua mặt trăng"
        ],
        "correctAnswer": 1,
        "explanation": "LAN là mạng máy tính nội bộ.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 172,
        "text": "Nối các biểu tượng mạng với ý nghĩa của nó:",
        "pairs": [
          {
            "left": "Chữ f trắng trên nền xanh",
            "right": "Facebook"
          },
          {
            "left": "Hình chiếc phong bì",
            "right": "Gmail/Thư điện tử"
          },
          {
            "left": "Hình đám mây",
            "right": "Lưu trữ trực tuyến"
          }
        ],
        "explanation": "Nhận biết các dịch vụ phổ biến trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 173,
        "text": "Phân loại các thiết bị sau vào nhóm Có khả năng kết nối Wifi hoặc Không có khả năng kết nối Wifi:",
        "items": [
          "Điện thoại thông minh",
          "Máy tính xách tay",
          "Bàn phím cơ",
          "Máy tính để bàn đời cũ (không card wifi)"
        ],
        "targets": [
          "Có Wifi",
          "Không có Wifi"
        ],
        "correctAnswer": {
          "Điện thoại thông minh": "Có Wifi",
          "Máy tính xách tay": "Có Wifi",
          "Bàn phím cơ": "Không có Wifi",
          "Máy tính để bàn đời cũ (không card wifi)": "Không có Wifi"
        },
        "explanation": "Cần phần cứng hỗ trợ để bắt sóng Wifi.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 174,
        "text": "Em có thể tải một trò chơi từ Internet về máy tính đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Internet giúp chia sẻ và phân phối phần mềm.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 175,
        "text": "Mạng Internet do một người duy nhất làm chủ và quản lý đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Mạng Internet là mạng công cộng toàn cầu, không thuộc quyền sở hữu riêng của ai.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 176,
        "text": "Việc kết nối Internet có thể giúp em tiết kiệm tiền điện thoại khi gọi đi xa đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Các ứng dụng OTT giúp liên lạc miễn phí qua mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 177,
        "text": "Tìm lỗi sai trong mô tả về lợi ích của mạng xã hội:",
        "options": [
          "1. Kết nối bạn bè",
          "2. Chia sẻ ảnh đẹp",
          "3. Học được nhiều điều hay",
          "4. Giúp em lười vận động hơn"
        ],
        "correctAnswer": 3,
        "errorPart": "Giúp em lười vận động hơn",
        "correction": "Đây là tác hại nếu quá lạm dụng, không phải lợi ích.",
        "explanation": "Cần dùng mạng xã hội một cách thông minh.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 178,
        "text": "Để tìm thông tin về 'Hồ Hoàn Kiếm' chính xác nhất, em nên gõ từ khóa nào?",
        "options": [
          "hồ",
          "kiếm",
          "Hồ Hoàn Kiếm",
          "hà nội"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa cụ thể giúp Google trả về kết quả chính xác.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 179,
        "text": "Sắp xếp thứ tự để gửi một bức ảnh qua Email:",
        "options": [
          "Nhấn Soạn thư",
          "Nhập địa chỉ người nhận",
          "Đính kèm ảnh",
          "Nhấn Gửi"
        ],
        "correctAnswer": [
          "Nhấn Soạn thư",
          "Nhập địa chỉ người nhận",
          "Đính kèm ảnh",
          "Nhấn Gửi"
        ],
        "explanation": "Quy trình gửi thư điện tử cơ bản.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 180,
        "text": "Em có thể sử dụng Internet để tra cứu từ điển đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Internet có nhiều trang từ điển trực tuyến miễn phí.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 181,
        "text": "Nên sử dụng mạng Wifi công cộng không có mật khẩu để giao dịch ngân hàng đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Mạng Wifi công cộng tiềm ẩn nguy cơ bị đánh cắp thông tin.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 182,
        "text": "Để phóng to một trang web, em nhấn phím Ctrl và phím nào?",
        "options": [
          "+",
          "-",
          "0",
          "Z"
        ],
        "correctAnswer": 0,
        "explanation": "Ctrl + giúp thu phóng nội dung trang web.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 183,
        "text": "Để thu nhỏ một trang web, em nhấn phím Ctrl và phím nào?",
        "options": [
          "+",
          "-",
          "0",
          "Z"
        ],
        "correctAnswer": 1,
        "explanation": "Ctrl - giúp thu nhỏ nội dung trang web.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 184,
        "text": "Để đưa trang web về kích thước 100%, em nhấn phím Ctrl và phím nào?",
        "options": [
          "+",
          "-",
          "0",
          "A"
        ],
        "correctAnswer": 2,
        "explanation": "Ctrl 0 đặt lại tỷ lệ hiển thị mặc định.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 185,
        "text": "Nối loại mạng với phạm vi kết nối của nó:",
        "pairs": [
          {
            "left": "Mạng Internet",
            "right": "Toàn cầu"
          },
          {
            "left": "Mạng LAN",
            "right": "Trong nhà, trường học"
          },
          {
            "left": "Mạng 4G/5G",
            "right": "Di động toàn quốc"
          }
        ],
        "explanation": "Hiểu về các loại mạng máy tính khác nhau.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 186,
        "text": "Trình duyệt web (ví dụ như Chrome, Edge) dùng để làm gì?",
        "options": [
          "Để vẽ tranh",
          "Để xem phim",
          "Để truy cập và xem nội dung các trang web",
          "Để gõ văn bản"
        ],
        "correctAnswer": 2,
        "explanation": "Trình duyệt là công cụ giúp em khám phá thế giới Internet.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 187,
        "text": "Khi muốn tìm kiếm thông tin về một loài động vật trên mạng, em nên sử dụng công cụ nào?",
        "options": [
          "Thùng rác",
          "Máy tính bỏ túi",
          "Công cụ tìm kiếm (như Google)",
          "Phần mềm vẽ Paint"
        ],
        "correctAnswer": 2,
        "explanation": "Công cụ tìm kiếm giúp em tìm thấy thông tin nhanh chóng từ hàng tỷ trang web.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 188,
        "text": "Tại sao em cần giữ bí mật mật khẩu của mình?",
        "options": [
          "Để mật khẩu không bị cũ",
          "Để bảo vệ tài khoản của em không bị người khác sử dụng trái phép",
          "Để máy tính không bị nóng",
          "Để mạng Internet chạy nhanh hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Mật khẩu giống như chìa khóa nhà, em chỉ nên chia sẻ với bố mẹ thôi nhé.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 189,
        "text": "Nếu em thấy một trang web yêu cầu cung cấp số điện thoại hoặc địa chỉ nhà, em nên làm gì?",
        "options": [
          "Điền ngay thông tin",
          "Hỏi ý kiến và xin phép bố mẹ trước khi điền",
          "Nhờ bạn điền hộ",
          "Tự nghĩ ra một địa chỉ giả"
        ],
        "correctAnswer": 1,
        "explanation": "Bảo vệ thông tin cá nhân là quy tắc an toàn quan trọng nhất khi dùng Internet.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 190,
        "text": "Thư điện tử (Email) giúp em trao đổi thông tin với bạn bè ở xa thông qua điều kiện gì?",
        "options": [
          "Phải có tem thư",
          "Phải có mạng Internet",
          "Phải có máy in",
          "Phải có tivi"
        ],
        "correctAnswer": 1,
        "explanation": "Email là dịch vụ trao đổi thư qua mạng Internet rất nhanh chóng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 191,
        "text": "Trong một địa chỉ trang web như 'www.google.com.vn', phần đuôi '.vn' thường cho biết điều gì?",
        "options": [
          "Trang web này rất vui",
          "Trang web thuộc về Việt Nam",
          "Trang web có video",
          "Trang web chỉ có chữ"
        ],
        "correctAnswer": 1,
        "explanation": "Kí hiệu quốc gia giúp phân biệt nguồn gốc của trang web.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 192,
        "text": "Để tìm kiếm về 'Hổ' nhưng muốn loại bỏ các kết quả về 'Hổ báo', em nên gõ từ khóa vào Google như thế nào?",
        "options": [
          "Hổ cộng báo",
          "Hổ trừ báo (Hổ -báo)",
          "Hổ và báo",
          "Hổ hoặc báo"
        ],
        "correctAnswer": 1,
        "explanation": "Dấu trừ (-) trước một từ giúp loại bỏ các kết quả chứa từ đó.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 193,
        "text": "Tại sao việc sử dụng Wifi công cộng không có mật khẩu (Free Wifi) có thể không an toàn?",
        "options": [
          "Làm tốn pin máy tính",
          "Máy tính sẽ bị chậm",
          "Người lạ có thể theo dõi và lấy trộm thông tin của em",
          "Làm hỏng màn hình"
        ],
        "correctAnswer": 2,
        "explanation": "Mạng không bảo mật dễ bị kẻ xấu lợi dụng để đánh cắp dữ liệu.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 194,
        "text": "Biểu tượng hình ngôi sao (Bookmark) trên trình duyệt có tác dụng chính là gì?",
        "options": [
          "Để trang trí",
          "Để lưu lại địa chỉ các trang web yêu thích để mở lại nhanh",
          "Để tắt máy tính",
          "Để tăng tốc độ mạng"
        ],
        "correctAnswer": 1,
        "explanation": "Bookmark giúp em quản lý các trang web hay dùng một cách khoa học.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 195,
        "text": "Làm thế nào để biết máy tính hoặc điện thoại đã được kết nối Internet?",
        "options": [
          "Nhìn thấy biểu tượng cột sóng Wifi hoặc biểu tượng mạng",
          "Nhìn thấy bàn phím sáng đèn",
          "Nhìn thấy loa đang bật",
          "Nhìn thấy chuột đang di chuyển"
        ],
        "correctAnswer": 0,
        "explanation": "Các biểu tượng mạng giúp em nhận biết trạng thái kết nối của thiết bị.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 196,
        "text": "Nếu muốn tìm hình ảnh về 'các loài hoa' trên Internet, em nên sử dụng công cụ nào?",
        "options": [
          "Phần mềm vẽ Paint",
          "Thùng rác Recycle Bin",
          "Công cụ tìm kiếm (như Google)",
          "Phần mềm gõ văn bản"
        ],
        "correctAnswer": 2,
        "explanation": "Công cụ tìm kiếm giúp em tìm thấy mọi loại thông tin trên toàn thế giới.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 197,
        "text": "Trình duyệt web giống như cái gì giúp em đi tham quan các 'ngôi nhà' (trang web) trên Internet?",
        "options": [
          "Cái chổi",
          "Một con tàu hoặc chiếc xe",
          "Một cái bút",
          "Một cục tẩy"
        ],
        "correctAnswer": 1,
        "explanation": "Trình duyệt là phương tiện đưa em đến các địa chỉ trang web khác nhau.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 198,
        "text": "Tại sao em không nên ngồi dùng Internet liên tục trong nhiều giờ?",
        "options": [
          "Làm hỏng bàn phím",
          "Làm máy tính bị đói",
          "Gây mỏi mắt và đau lưng",
          "Làm mất mạng Internet"
        ],
        "correctAnswer": 2,
        "explanation": "Cần nghỉ ngơi sau khoảng 30 phút dùng máy tính để bảo vệ sức khỏe.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 199,
        "text": "Khi có một người lạ trên mạng hỏi tên trường và lớp của em, em nên làm gì?",
        "options": [
          "Nói thật cho họ biết",
          "Không trả lời và báo ngay cho bố mẹ hoặc thầy cô",
          "Rủ bạn cùng nói",
          "Tự nghĩ ra một cái tên trường khác"
        ],
        "correctAnswer": 1,
        "explanation": "Luôn bảo vệ thông tin cá nhân và báo cho người lớn khi gặp tình huống lạ trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 200,
        "text": "Thiết bị nào trong nhà thường có 'râu' và phát ra sóng Wifi cho các máy khác kết nối?",
        "options": [
          "Tủ lạnh",
          "Cục phát Wifi (Router)",
          "Máy giặt",
          "Nồi cơm điện"
        ],
        "correctAnswer": 1,
        "explanation": "Router Wifi là thiết bị trung tâm giúp kết nối Internet không dây trong nhà.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 201,
        "text": "Mạng máy tính giúp em và bạn bè có thể làm gì cùng nhau dù ở xa?",
        "options": [
          "Cùng chơi bóng đá ngoài sân",
          "Cùng làm bài tập nhóm trực tuyến",
          "Cùng ăn chung một chiếc bánh",
          "Cùng tưới cây trong vườn"
        ],
        "correctAnswer": 1,
        "explanation": "Mạng máy tính giúp chúng ta cộng tác và học tập từ xa.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 202,
        "text": "Tại sao em không nên tự ý bấm vào các biểu tượng lạ, nhấp nháy trên trang web?",
        "options": [
          "Vì nó sẽ làm hỏng bàn phím",
          "Vì nó có thể dẫn đến các trang web xấu hoặc chứa virus",
          "Vì nó làm máy tính hết pin nhanh",
          "Vì nó làm loa bị hỏng"
        ],
        "correctAnswer": 1,
        "explanation": "Cần cẩn thận với các quảng cáo hoặc liên kết lạ để bảo vệ máy tính.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 203,
        "text": "Ứng dụng nào giúp em tìm đường đi và xem bản đồ thế giới trên Internet?",
        "options": [
          "Microsoft Word",
          "Google Maps",
          "Paint",
          "Thùng rác"
        ],
        "correctAnswer": 1,
        "explanation": "Google Maps là công cụ bản đồ số rất hữu ích.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 204,
        "text": "Khi thấy một tin nhắn đe dọa hoặc làm em sợ hãi trên mạng, em nên làm gì?",
        "options": [
          "Sợ hãi và khóc một mình",
          "Nhắn tin cãi nhau với họ",
          "Chụp ảnh màn hình làm bằng chứng và báo ngay cho người lớn",
          "Xóa máy tính"
        ],
        "correctAnswer": 2,
        "explanation": "Luôn tìm kiếm sự giúp đỡ từ người lớn khi gặp sự cố trên môi trường số.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 205,
        "text": "Mạng máy tính giúp chúng ta làm gì?",
        "options": [
          "Chia sẻ dữ liệu và kết nối mọi người",
          "Làm máy tính chạy nhanh hơn",
          "Máy tính không bao giờ bị hỏng",
          "Tăng dung lượng ổ cứng"
        ],
        "correctAnswer": 0,
        "explanation": "Mạng máy tính giúp kết nối và chia sẻ thông tin giữa các thiết bị.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 206,
        "text": "Internet là một mạng máy tính khổng lồ kết nối toàn thế giới, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Internet là mạng toàn cầu kết nối hàng tỷ thiết bị.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 207,
        "text": "Phát biểu nào sau đây đúng về lợi ích của Internet?",
        "options": [
          "Giúp tìm kiếm thông tin nhanh chóng",
          "Làm tốn thời gian",
          "Làm hỏng mắt",
          "Máy tính dễ bị virus"
        ],
        "correctAnswer": 0,
        "explanation": "Internet là kho tàng kiến thức giúp tra cứu thông tin hiệu quả.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 208,
        "text": "Để truy cập Internet, em cần sử dụng phần mềm nào?",
        "options": [
          "Trình duyệt web",
          "Microsoft Word",
          "Paint",
          "Calculator"
        ],
        "correctAnswer": 0,
        "explanation": "Chrome, Edge, Firefox... là các trình duyệt dùng để lướt web.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 209,
        "text": "Khi dùng Internet, em có thể làm gì để học tập?",
        "options": [
          "Xem video bài giảng",
          "Chơi game suốt ngày",
          "Xem phim hoạt hình quá nhiều",
          "Tải phần mềm độc hại"
        ],
        "correctAnswer": 0,
        "explanation": "Internet cung cấp nhiều nguồn tài liệu học tập phong phú.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 210,
        "text": "Nối các biểu tượng trình duyệt với tên tương ứng:",
        "pairs": [
          {
            "left": "Chrome",
            "right": "Vòng tròn đỏ, vàng, lục"
          },
          {
            "left": "Edge",
            "right": "Chữ E cách điệu màu xanh dương"
          },
          {
            "left": "Firefox",
            "right": "Con cáo lửa ôm trái đất"
          }
        ],
        "explanation": "Nhận biết các trình duyệt web phổ biến.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 211,
        "text": "Khi thấy một trang web yêu cầu nhập thông tin cá nhân như địa chỉ nhà, em nên làm gì?",
        "options": [
          "Nhập ngay lập tức",
          "Hỏi ý kiến cha mẹ hoặc thầy cô",
          "Tự bịa ra một địa chỉ",
          "Để lại số điện thoại thay thế"
        ],
        "correctAnswer": 1,
        "explanation": "An toàn thông tin cá nhân là vô cùng quan trọng trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 212,
        "text": "Sắp xếp các bước để mở một trang web học tập:",
        "options": [
          "Mở trình duyệt web",
          "Gõ địa chỉ trang web vào thanh địa chỉ",
          "Nhấn phím Enter",
          "Bắt đầu học"
        ],
        "correctAnswer": [
          "Mở trình duyệt web",
          "Gõ địa chỉ trang web vào thanh địa chỉ",
          "Nhấn phím Enter",
          "Bắt đầu học"
        ],
        "explanation": "Quy trình cơ bản để truy cập một trang web.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 213,
        "text": "Mạng máy tính chỉ có thể kết nối bằng dây cáp, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Có cả mạng không dây (Wi-Fi) và mạng có dây.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 214,
        "text": "Khi muốn tìm kiếm thông tin về loài rùa biển trên Internet, em nên làm gì?",
        "options": [
          "Gõ từ khóa 'rùa biển' vào ô tìm kiếm",
          "Đợi trang web tự hiện ra",
          "Gõ 'tôi muốn biết về rùa'",
          "Tắt máy tính"
        ],
        "correctAnswer": 0,
        "explanation": "Công cụ tìm kiếm (Google, Bing) giúp tra cứu thông tin nhanh chóng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 215,
        "text": "Website là gì?",
        "options": [
          "Một tập hợp các trang web liên quan",
          "Cái xác máy tính",
          "Dây cáp mạng",
          "Màn hình tivi"
        ],
        "correctAnswer": 0,
        "explanation": "Website gồm nhiều trang nội dung liên kết với nhau.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 216,
        "text": "Địa chỉ của trang web Google là gì?",
        "options": [
          "google.com",
          "google.book",
          "search.google",
          "máy tính.com"
        ],
        "correctAnswer": 0,
        "explanation": "Mỗi website có một địa chỉ định danh duy nhất.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 217,
        "text": "Biểu tượng hình ngôi nhà thường dùng để làm gì trên trình duyệt?",
        "options": [
          "Về trang chủ",
          "Tắt trình duyệt",
          "In trang web",
          "Lưu ảnh"
        ],
        "correctAnswer": 0,
        "explanation": "Nút Home giúp quay về trang mặc định của trình duyệt.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 218,
        "text": "Việc liên lạc qua Internet có lợi ích gì so với thư tay?",
        "options": [
          "Nhanh chóng và miễn phí (nếu có mạng)",
          "Chậm hơn",
          "Đắt hơn",
          "Khó thực hiện hơn"
        ],
        "correctAnswer": 0,
        "explanation": "Email, chat giúp gửi thông tin tức thời.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 219,
        "text": "Thông tin trên Internet luôn luôn đúng 100%, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Thông tin mạng rất đa dạng, cần kiểm chứng từ nguồn tin cậy.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 220,
        "text": "Nối các hành động với mục đích tương ứng trên mạng:",
        "pairs": [
          {
            "left": "Gửi Email",
            "right": "Trao đổi thư điện tử"
          },
          {
            "left": "Youtube",
            "right": "Xem các video giáo dục"
          },
          {
            "left": "Wikipedia",
            "right": "Tra cứu bách khoa toàn thư"
          }
        ],
        "explanation": "Nhận biết công dụng của các dịch vụ trực tuyến.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 221,
        "text": "Khi dùng Internet, nếu thấy máy tính hiện thông báo 'Bạn đã trúng thưởng 1 tỷ đồng', em nên làm gì?",
        "options": [
          "Bấm vào nhận ngay",
          "Tắt cửa sổ đó và báo cho người lớn",
          "Nhập thông tin nhận thưởng",
          "Đi kể với các bạn"
        ],
        "correctAnswer": 1,
        "explanation": "Đó thường là những thông báo lừa đảo nhằm lấy thông tin của em.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 222,
        "text": "Sắp xếp thứ tự các bước để xem một video trên Youtube:",
        "options": [
          "Mở trình duyệt",
          "Vào trang youtube.com",
          "Gõ tên video vào ô tìm kiếm",
          "Nhấn nút xem"
        ],
        "correctAnswer": [
          "Mở trình duyệt",
          "Vào trang youtube.com",
          "Gõ tên video vào ô tìm kiếm",
          "Nhấn nút xem"
        ],
        "explanation": "Cách sử dụng các nền tảng video trực tuyến.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 223,
        "text": "Phân loại các thiết bị sau vào nhóm Có thể kết nối Internet hoặc Không thể:",
        "items": [
          "Điện thoại thông minh",
          "Cái ghế gỗ",
          "Máy tính bảng",
          "Bút chì"
        ],
        "targets": [
          "Có thể kết nối",
          "Không thể"
        ],
        "correctAnswer": {
          "Điện thoại thông minh": "Có thể kết nối",
          "Máy tính bảng": "Có thể kết nối",
          "Cái ghế gỗ": "Không thể",
          "Bút chì": "Không thể"
        },
        "explanation": "Chỉ các thiết bị điện tử có phần cứng mạng mới kết nối được Internet.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 224,
        "text": "Wi-Fi là gì?",
        "options": [
          "Một loại mạng máy tính có dây",
          "Kết nối mạng không dây",
          "Một loại vi-rút máy tính",
          "Phần mềm vẽ tranh"
        ],
        "correctAnswer": 1,
        "explanation": "Wi-Fi cho phép các thiết bị kết nối mạng mà không cần dùng cáp.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 225,
        "text": "Để quay lại trang web vừa xem trước đó, em nhấn vào nút nào trên trình duyệt?",
        "options": [
          "Mũi tên sang phải",
          "Mũi tên sang trái (Back)",
          "Nút X",
          "Nút F5"
        ],
        "correctAnswer": 1,
        "explanation": "Nút Back giúp em quay lại trang trước.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 226,
        "text": "Mạng Internet giúp em trò chuyện với bạn bè ở xa như thế nào?",
        "options": [
          "Gọi điện video",
          "Gửi tin nhắn chat",
          "Gửi Email",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Internet cung cấp nhiều phương thức giao tiếp đa dạng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 227,
        "text": "Tìm lỗi sai trong câu sau: 'Internet là mạng lưới chỉ dành riêng cho các chú công an sử dụng.'",
        "options": [
          "Internet",
          "chỉ dành riêng",
          "công an",
          "sử dụng"
        ],
        "correctAnswer": 1,
        "errorPart": "chỉ dành riêng",
        "correction": "Internet dành cho tất cả mọi người trên thế giới sử dụng.",
        "explanation": "Internet là mạng công cộng toàn cầu.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 228,
        "text": "Nối thiết bị mạng với mô tả tương ứng:",
        "pairs": [
          {
            "left": "Cáp mạng",
            "right": "Dây dẫn truyền tín hiệu"
          },
          {
            "left": "Bộ định tuyến (Router)",
            "right": "Thiết bị phát Wi-Fi và quản lý mạng"
          },
          {
            "left": "Máy chủ",
            "right": "Máy tính lưu trữ dữ liệu website"
          }
        ],
        "explanation": "Các thành phần cơ bản của hệ thống mạng.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 229,
        "text": "Em có thể dùng Internet để tải các phần mềm học tập về máy không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Cần chọn nguồn tải tin cậy để tránh virus.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 230,
        "text": "Để tải một hình ảnh từ trên mạng về máy tính, em thường nháy chuột vào đâu?",
        "options": [
          "Nháy chuột trái",
          "Nháy chuột phải và chọn Save Image As...",
          "Nhấn phím Delete",
          "Nháy đúp chuột vào màn hình"
        ],
        "correctAnswer": 1,
        "explanation": "Menu chuột phải cung cấp các tùy chọn lưu trữ.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 231,
        "text": "Một trang web có thể chứa những gì?",
        "options": [
          "Chữ viết",
          "Hình ảnh",
          "Âm thanh, video",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Thông tin trên web rất đa dạng về hình thức thể hiện.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 232,
        "text": "Mạng không dây Wi-Fi có ưu điểm gì?",
        "options": [
          "Di chuyển thuận tiện",
          "Dễ bị đứt dây",
          "Chạy nhanh hơn cáp quang",
          "Không cần pin"
        ],
        "correctAnswer": 0,
        "explanation": "Giúp thiết bị di động kết nối mạng linh hoạt.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 233,
        "text": "Khi học trực tuyến, em cần thiết bị nào để nghe và nói?",
        "options": [
          "Loa và Micro",
          "Bàn phím",
          "Máy in",
          "Chuột"
        ],
        "correctAnswer": 0,
        "explanation": "Loa giúp nghe và Micro giúp truyền giọng nói.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 234,
        "text": "Mật khẩu máy tính nên được giữ bí mật với tất cả bạn bè, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Không bao giờ chia sẻ mật khẩu để bảo vệ tài khoản.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 235,
        "text": "Nối thuật ngữ với giải thích:",
        "pairs": [
          {
            "left": "Download",
            "right": "Tải dữ liệu từ mạng về máy"
          },
          {
            "left": "Upload",
            "right": "Đưa dữ liệu từ máy lên mạng"
          },
          {
            "left": "Online",
            "right": "Đang kết nối mạng"
          }
        ],
        "explanation": "Các thuật ngữ cơ bản khi dùng mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 236,
        "text": "Để tìm thông tin về lịch sử Việt Nam, em nên truy cập trang web nào?",
        "options": [
          "Trang web mua sắm",
          "Trang web tin tức chính thống/giáo dục",
          "Trang web chơi game",
          "Trang web phim hoạt hình"
        ],
        "correctAnswer": 1,
        "explanation": "Lựa chọn nguồn tin cẩn trọng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 237,
        "text": "Thanh chứa địa chỉ trang web thường nằm ở đâu trong trình duyệt?",
        "options": [
          "Phía dưới cùng",
          "Phía trên cùng",
          "Bên phải",
          "Bên trái"
        ],
        "correctAnswer": 1,
        "explanation": "Thanh Address bar nằm ở phần đầu của bộ duyệt.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 238,
        "text": "Internet có giúp em tiết kiệm phí bưu điện không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Gửi thư điện tử (email) không tốn tiền tem phiếu như thư giấy.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 239,
        "text": "Trình duyệt web nào sau đây là của Việt Nam phát triển?",
        "options": [
          "Chrome",
          "Cốc Cốc",
          "Safari",
          "Opera"
        ],
        "correctAnswer": 1,
        "explanation": "Cốc Cốc là trình duyệt phổ biến do người Việt tạo ra.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 240,
        "text": "Khi sử dụng mạng Wi-Fi công cộng, em cần chú ý điều gì?",
        "options": [
          "Luôn an toàn tuyệt đối",
          "Cẩn thận không nhập thông tin quan trọng",
          "Dùng thoải mái không cần lo",
          "Chỉ dùng để chơi game"
        ],
        "correctAnswer": 1,
        "explanation": "Mạng công cộng có rủi ro bị đánh cắp dữ liệu.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 241,
        "text": "Sắp xếp quy trình tìm kiếm một hình ảnh trên Google:",
        "options": [
          "Truy cập google.com",
          "Chọn thẻ 'Hình ảnh'",
          "Gõ tên hình ảnh cần tìm",
          "Nhấn Enter"
        ],
        "correctAnswer": [
          "Truy cập google.com",
          "Chọn thẻ 'Hình ảnh'",
          "Gõ tên hình ảnh cần tìm",
          "Nhấn Enter"
        ],
        "explanation": "Sử dụng tính năng tìm kiếm chuyên sâu.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 242,
        "text": "Phân loại các website sau vào mục Giải trí hoặc Học tập:",
        "items": [
          "Youtube Kids",
          "Khan Academy",
          "Olm.vn",
          "Cartoon Network"
        ],
        "targets": [
          "Giải trí",
          "Học tập"
        ],
        "correctAnswer": {
          "Youtube Kids": "Giải trí",
          "Cartoon Network": "Giải trí",
          "Khan Academy": "Học tập",
          "Olm.vn": "Học tập"
        },
        "explanation": "Website được thiết kế cho các mục đích khác nhau.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 243,
        "text": "Dấu hiệu nào cho thấy máy tính của em đã được kết nối Internet?",
        "options": [
          "Màn hình sáng lên",
          "Biểu tượng mạng ở góc màn hình hiện xanh/sóng",
          "Chuột di chuyển được",
          "Loa phát ra tiếng"
        ],
        "correctAnswer": 1,
        "explanation": "Quan sát biểu tượng mạng ở thanh Taskbar.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 244,
        "text": "Virus máy tính có thể lây lan qua Internet không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Không nên click link lạ vì dễ bị virus.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 245,
        "text": "Địa chỉ email thường có ký hiệu đặc trưng nào?",
        "options": [
          "#",
          "$",
          "@",
          "&"
        ],
        "correctAnswer": 2,
        "explanation": "Dấu @ ngăn cách tên tài khoản và tên miền nhà cung cấp.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 246,
        "text": "Để đọc một trang web bằng tiếng nước ngoài, trình duyệt có thể hỗ trợ tính năng gì?",
        "options": [
          "Dịch tự động",
          "Tắt trang web",
          "Tăng âm lượng",
          "Đổi màu nền"
        ],
        "correctAnswer": 0,
        "explanation": "Công cụ Google Translate được tích hợp vào trình duyệt.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 247,
        "text": "Internet giúp mọi người trên thế giới xích lại gần nhau hơn, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Xóa tan khoảng cách địa lý nhờ kết nối trực tuyến.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 248,
        "text": "Tìm lỗi sai: 'Em nên dùng Internet để nói xấu bạn bè cho cả trường biết.'",
        "options": [
          "nên dùng",
          "nói xấu",
          "biết",
          "cả trường"
        ],
        "correctAnswer": 1,
        "errorPart": "nói xấu",
        "correction": "Em nên dùng Internet để giao lưu vui vẻ và học tập, không được nói xấu người khác.",
        "explanation": "Quy tắc ứng xử trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "FIND_ERROR"
      },
      {
        "id": 249,
        "text": "Nối hành động với biểu tượng trên trình duyệt:",
        "pairs": [
          {
            "left": "Tải lại trang",
            "right": "Mũi tên xoay tròn"
          },
          {
            "left": "Dừng tải trang",
            "right": "Dấu X"
          },
          {
            "left": "Thêm dấu trang (Bookmark)",
            "right": "Ngôi sao"
          }
        ],
        "explanation": "Làm quen với giao diện trình duyệt web.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 250,
        "text": "Để lưu một website yêu thích để lần sau xem nhanh hơn, em dùng tính năng nào?",
        "options": [
          "Tắt máy",
          "Bookmark (Dấu trang)",
          "Xóa lịch sử",
          "In trang"
        ],
        "correctAnswer": 1,
        "explanation": "Dấu trang giúp ghi nhớ địa chỉ các trang hữu ích.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 251,
        "text": "Sử dụng Internet vào ban đêm quá muộn có tác hại gì?",
        "options": [
          "Giúp học giỏi hơn",
          "Ảnh hưởng đến giấc ngủ và sức khỏe",
          "Máy tính nhanh hỏng hơn",
          "Tăng dung lượng pin"
        ],
        "correctAnswer": 1,
        "explanation": "Cần phân bổ thời gian dùng mạng hợp lý.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 252,
        "text": "Internet là nơi không ai quản lý nên em có thể làm bất cứ điều gì em thích.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Vẫn có các quy định pháp luật và đạo đức cần tuân thủ trên mạng.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 253,
        "text": "Hành động nào giúp bảo vệ mắt khi dùng máy tính lướt web?",
        "options": [
          "Nhìn sát màn hình",
          "Giữ khoảng cách phù hợp và có đủ ánh sáng",
          "Tắt hết đèn trong phòng",
          "Vừa nằm vừa dùng"
        ],
        "correctAnswer": 1,
        "explanation": "Tư thế sử dụng máy tính đúng cách bảo vệ sức khỏe.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 254,
        "text": "Trình duyệt Safari thường xuất hiện trên các thiết bị của hãng nào?",
        "options": [
          "Microsoft",
          "Apple",
          "Samsung",
          "Dell"
        ],
        "correctAnswer": 1,
        "explanation": "Safari là trình duyệt mặc định trên iPhone, iPad, Mac.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 255,
        "text": "Nối tính năng với tên gọi tiếng Anh tương ứng:",
        "pairs": [
          {
            "left": "Lịch sử duyệt web",
            "right": "History"
          },
          {
            "left": "Chế độ ẩn danh",
            "right": "Incognito"
          },
          {
            "left": "Tài liệu tải xuống",
            "right": "Downloads"
          }
        ],
        "explanation": "Mở rộng vốn từ vựng tin học.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MATCHING"
      },
      {
        "id": 256,
        "text": "Việc kết nối Internet thông qua sim điện thoại được gọi là gì?",
        "options": [
          "Mạng cáp quang",
          "Mạng dữ liệu di động (3G/4G/5G)",
          "Kết nối Bluetooth",
          "Điện thoại dây"
        ],
        "correctAnswer": 1,
        "explanation": "Kết nối mạng qua trạm phát sóng viễn thông.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 257,
        "text": "Khi trang web load quá lâu không hiện nội dung, em có thể nhấn phím nào để thử lại?",
        "options": [
          "F1",
          "F5",
          "F12",
          "ESC"
        ],
        "correctAnswer": 1,
        "explanation": "F5 là phím tắt để Refresh (tải lại) trang web.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 258,
        "text": "Em có thể trao đổi các tệp tin bài tập với cô giáo qua Internet, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Tính năng đính kèm tệp giúp trao đổi dữ liệu dễ dàng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 259,
        "text": "Sắp xếp để gửi một món quà ảo (ví dụ: thiệp chúc mừng) qua mạng:",
        "options": [
          "Truy cập trang web tạo thiệp",
          "Thiết kế thiệp",
          "Nhập tên người nhận",
          "Nhấn nút 'Gửi'"
        ],
        "correctAnswer": [
          "Truy cập trang web tạo thiệp",
          "Thiết kế thiệp",
          "Nhập tên người nhận",
          "Nhấn nút 'Gửi'"
        ],
        "explanation": "Ứng dụng Internet trong giao lưu tình cảm.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "ORDERING"
      },
      {
        "id": 260,
        "text": "Phân loại các nội dung sau vào nhóm An toàn hoặc Nguy hiểm khi gặp trên mạng:",
        "items": [
          "Video dạy làm thủ công",
          "Cửa sổ yêu cầu mật khẩu ngân hàng",
          "Trang web học toán",
          "Link trúng thưởng điện thoại iPhone"
        ],
        "targets": [
          "An toàn",
          "Nguy hiểm"
        ],
        "correctAnswer": {
          "Video dạy làm thủ công": "An toàn",
          "Trang web học toán": "An toàn",
          "Cửa sổ yêu cầu mật khẩu ngân hàng": "Nguy hiểm",
          "Link trúng thưởng điện thoại iPhone": "Nguy hiểm"
        },
        "explanation": "Cảnh giác với các mối đe dọa trực tuyến.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "DRAG_DROP"
      },
      {
        "id": 261,
        "text": "Mạng Internet không bao giờ bị 'sập' hay mất kết nối, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Có thể gián đoạn do sự cố cáp hoặc thiết bị phát.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "TRUE_FALSE"
      },
      {
        "id": 262,
        "text": "Hành động nào là tiết kiệm tài nguyên mạng nhất?",
        "options": [
          "Xem video độ phân giải cao nhất liên tục",
          "Tải những thứ không cần thiết",
          "Chỉ truy cập khi cần và tắt khi dùng xong",
          "Để máy tính mở web cả đêm"
        ],
        "correctAnswer": 2,
        "explanation": "Sử dụng có trách nhiệm giúp mạng ổn định hơn.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 263,
        "text": "Câu nào mô tả đúng nhất về Internet?",
        "options": [
          "Một kho trò chơi khổng lồ",
          "Mạng lưới kết nối thông tin toàn cầu",
          "Một chiếc máy tính siêu to",
          "Chương trình vẽ tranh của Windows"
        ],
        "correctAnswer": 1,
        "explanation": "Internet là hạ tầng thông tin toàn thế giới.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 264,
        "text": "Internet có lợi ích gì khi em muốn tìm hiểu về các vì sao trong vũ trụ?",
        "options": [
          "Không giúp ích gì",
          "Cung cấp hình ảnh và kiến thức từ các nhà khoa học",
          "Làm máy tính bị hỏng",
          "Chỉ để chơi game"
        ],
        "correctAnswer": 1,
        "explanation": "Internet là kho tàng kiến thức khổng lồ về mọi lĩnh vực.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 265,
        "text": "Để bảo vệ mình trên mạng, em nên làm gì khi có người lạ hỏi số điện thoại của bố mẹ?",
        "options": [
          "Nói ngay cho họ",
          "Từ chối và báo cho bố mẹ biết",
          "Nghĩ ra một số giả",
          "Hỏi lại số của họ"
        ],
        "correctAnswer": 1,
        "explanation": "Tuyệt đối không chia sẻ thông tin cá nhân của gia đình cho người lạ.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 266,
        "text": "Theo em, mạng Internet có thể kết nối những loại thiết bị nào sau đây?",
        "options": [
          "Bàn học, ghế gỗ",
          "Máy tính, điện thoại, máy tính bảng",
          "Nồi cơm điện (loại thường), ấm nước",
          "Giá sách, tủ quần áo"
        ],
        "correctAnswer": 1,
        "explanation": "Internet kết nối các thiết bị điện tử có khả năng truyền nhận dữ liệu.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 267,
        "text": "Lợi ích của việc sử dụng các trang web học tập trực tuyến là gì?",
        "options": [
          "Để tốn thời gian",
          "Giúp em ôn tập và làm bài tập mọi lúc, mọi nơi",
          "Để máy tính bị virus",
          "Để được chơi game"
        ],
        "correctAnswer": 1,
        "explanation": "Các trang web học tập giúp em rèn luyện kiến thức rất tiện lợi.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 268,
        "text": "Khi lướt web, nếu thấy một quảng cáo nhấp nháy 'Bạn là người may mắn nhất thế giới', em nên:",
        "options": [
          "Bấm vào xem là gì",
          "Bỏ qua và không được bấm vào",
          "Gửi cho bạn bè",
          "Đợi nó tự biến mất"
        ],
        "correctAnswer": 1,
        "explanation": "Cảnh giác với các quảng cáo lạ để tránh các mối nguy hiểm trên mạng.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 269,
        "text": "Em có thể sử dụng Internet để gửi lời chúc mừng sinh nhật đến một người bạn đang ở nước ngoài không?",
        "options": [
          "Có, rất nhanh chóng",
          "Không, chỉ gửi được trong lớp",
          "Không, Internet không gửi được lời chúc",
          "Chỉ gửi được qua bưu điện"
        ],
        "correctAnswer": 0,
        "explanation": "Internet giúp kết nối mọi người không giới hạn khoảng cách.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 270,
        "text": "Thiết bị nào giúp em nhận tín hiệu Internet không dây trong nhà?",
        "options": [
          "Cái bát ăn cơm",
          "Bộ định tuyến Wi-Fi (Router)",
          "Cái gương",
          "Đèn học"
        ],
        "correctAnswer": 1,
        "explanation": "Router phát ra sóng Wi-Fi để thiết bị của em truy cập mạng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 271,
        "text": "Một trong những mối nguy hiểm khi sử dụng Internet không cẩn thận là gì?",
        "options": [
          "Em sẽ thông minh hơn",
          "Bị lộ thông tin cá nhân hoặc nhiễm virus",
          "Máy tính sẽ đẹp hơn",
          "Pin máy tính sẽ đầy mãi mãi"
        ],
        "correctAnswer": 1,
        "explanation": "Cần tuân thủ các quy tắc an toàn để tránh rủi ro.",
        "difficulty": "Medium",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 272,
        "text": "Để vào một trang web, em cần biết điều gì của trang web đó?",
        "options": [
          "Cân nặng của trang web",
          "Màu sắc của trang web",
          "Địa chỉ của trang web (URL)",
          "Tên người tạo ra trang web"
        ],
        "correctAnswer": 2,
        "explanation": "Mỗi trang web đều có một địa chỉ riêng để em truy cập.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 273,
        "text": "Nên làm gì nếu em cảm thấy lo lắng về một nội dung nào đó em vừa thấy trên mạng?",
        "options": [
          "Giữ bí mật một mình",
          "Tắt máy và đi ngủ",
          "Nói ngay với bố mẹ hoặc thầy cô",
          "Xóa nó đi và coi như chưa thấy"
        ],
        "correctAnswer": 2,
        "explanation": "Luôn chia sẻ với người lớn tin cậy khi gặp vấn đề lo lắng trên mạng.",
        "difficulty": "Easy",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 274,
        "text": "Địa chỉ IP (Internet Protocol) của máy tính dùng để làm gì?",
        "options": [
          "Định danh duy nhất máy tính trong mạng để truyền nhận dữ liệu",
          "Để biết giá tiền của máy tính",
          "Để máy tính chạy nhanh hơn",
          "Để đổi màu màn hình"
        ],
        "correctAnswer": 0,
        "explanation": "Mỗi thiết bị trên mạng cần một địa chỉ để 'liên lạc'.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 275,
        "text": "Sự khác biệt chính giữa Internet và World Wide Web (WWW) là gì?",
        "options": [
          "Internet là hạ tầng mạng, WWW là hệ thống các trang web chạy trên đó",
          "Internet là một trang web",
          "WWW là tên của máy tính",
          "Không có sự khác biệt"
        ],
        "correctAnswer": 0,
        "explanation": "Internet giống như con đường, còn WWW giống như các ngôi nhà trên con đường đó.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 276,
        "text": "Dữ liệu được truyền đi xuyên đại dương giữa các châu lục chủ yếu qua con đường nào?",
        "options": [
          "Hệ thống cáp quang biển đặc biệt",
          "Sóng Wi-Fi từ đất liền",
          "Gửi qua đường bưu điện",
          "Qua các vệ tinh bay rất thấp"
        ],
        "correctAnswer": 0,
        "explanation": "Mạng lưới cáp quang biển khổng lồ kết nối cả thế giới.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 277,
        "text": "Router (Bộ định tuyến) trong mạng gia đình có vai trò gì?",
        "options": [
          "Chuyển tiếp và phân phối dữ liệu đến các thiết bị trong nhà",
          "Tăng dung lượng ổ cứng",
          "Chụp ảnh màn hình",
          "Tiết kiệm tiền điện"
        ],
        "correctAnswer": 0,
        "explanation": "Router giúp nhiều thiết bị cùng dùng chung một đường mạng.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 278,
        "text": "Tại sao cần đặt mật khẩu Wi-Fi phức tạp (bao gồm chữ, số và ký hiệu)?",
        "options": [
          "Để tránh bị người lạ truy cập trái phép và đánh cắp thông tin",
          "Để dễ nhớ hơn",
          "Để sóng Wi-Fi mạnh hơn",
          "Để máy tính không bị nóng"
        ],
        "correctAnswer": 0,
        "explanation": "Bảo mật mạng là bước đầu tiên để bảo vệ dữ liệu cá nhân.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 279,
        "text": "Khái niệm 'Cloud Computing' (Điện toán đám mây) có nghĩa là gì?",
        "options": [
          "Lưu trữ và sử dụng dữ liệu qua mạng Internet thay vì chỉ trên máy mình",
          "Dùng máy tính để dự báo thời tiết có mây",
          "Dữ liệu bay lơ lửng trên trời",
          "Máy tính có hình đám mây"
        ],
        "correctAnswer": 0,
        "explanation": "Cho phép truy cập dữ liệu ở bất cứ đâu có mạng.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 280,
        "text": "Làm thế nào để biết một trang web đang sử dụng kết nối bảo mật an toàn?",
        "options": [
          "Địa chỉ bắt đầu bằng https:// và có biểu tượng hình ổ khóa",
          "Trang web có màu xanh lá cây",
          "Trang web có nhiều hình ảnh",
          "Địa chỉ trang web rất ngắn"
        ],
        "correctAnswer": 0,
        "explanation": "HTTPS giúp mã hóa thông tin truyền đi giữa trình duyệt và máy chủ.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 281,
        "text": "Nguy cơ lớn nhất khi em truy cập vào các mạng Wi-Fi công cộng không có mật khẩu (Free Wi-Fi) là gì?",
        "options": [
          "Dữ liệu truyền đi có thể bị kẻ xấu đánh chặn và đánh cắp",
          "Không vào được Facebook",
          "Máy tính sẽ bị hết pin",
          "Làm hỏng bàn phím"
        ],
        "correctAnswer": 0,
        "explanation": "Kẻ xấu có thể tạo ra các trạm Wi-Fi giả để lừa người dùng.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 282,
        "text": "Hệ thống DNS (Domain Name System) giúp máy tính của em điều gì?",
        "options": [
          "Chuyển đổi tên miền dễ nhớ (như google.com) sang địa chỉ IP để máy hiểu",
          "Lọc virus trên mạng",
          "Tăng độ sáng màn hình",
          "Thay đổi ngôn ngữ trang web"
        ],
        "correctAnswer": 0,
        "explanation": "Con người nhớ tên, máy tính nhớ số (IP).",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 283,
        "text": "Tại sao Internet lại được ví là 'mạng của các mạng'?",
        "options": [
          "Vì nó kết nối hàng triệu mạng máy tính nhỏ khác nhau trên toàn thế giới",
          "Vì nó có hình mạng nhện",
          "Vì nó rất to",
          "Vì nó có nhiều màu sắc"
        ],
        "correctAnswer": 0,
        "explanation": "Cấu trúc mạng lưới khổng lồ kết nối mọi nơi.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 284,
        "text": "Việc tải phần mềm từ các nguồn không chính thống (trang web lạ) ẩn chứa nguy cơ gì?",
        "options": [
          "Phần mềm có thể chứa mã độc, virus hoặc bị thay đổi nội dung",
          "Làm máy tính đẹp hơn",
          "Tăng tốc độ Internet",
          "Không có nguy cơ gì"
        ],
        "correctAnswer": 0,
        "explanation": "Luôn ưu tiên tải từ trang chủ của nhà sản xuất.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 285,
        "text": "Cơ chế hoạt động cơ bản nhất của thư điện tử (Email) là gì?",
        "options": [
          "Gửi dữ liệu từ máy client lên máy chủ thư, rồi máy chủ gửi đến người nhận",
          "Dữ liệu bay thẳng qua không gian",
          "Gửi qua cáp tivi",
          "Gửi qua bưu điện truyền thống"
        ],
        "correctAnswer": 0,
        "explanation": "Email đi qua các máy chủ trung gian để đến đích.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 286,
        "text": "Băng thông (Bandwidth) trong mạng Internet ảnh hưởng trực tiếp đến điều gì?",
        "options": [
          "Tăng tốc độ truyền tải dữ liệu (tải nhanh hay chậm)",
          "Làm máy tính nhẹ hơn",
          "Làm đổi phông chữ",
          "Tiết kiệm bộ nhớ RAM"
        ],
        "correctAnswer": 0,
        "explanation": "Băng thông giống như độ rộng của đường ống nước.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      },
      {
        "id": 287,
        "text": "Khi em mở một trang web, máy tính của em đóng vai trò gì?",
        "options": [
          "Client (Máy khách) gửi yêu cầu đến Server (Máy chủ)",
          "Server (Máy chủ) cung cấp dữ liệu",
          "Là một chiếc ti vi đơn thuần",
          "Là một bộ phát Wi-Fi"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là mô hình Client-Server cơ bản của Internet.",
        "difficulty": "Hard",
        "topic": "Mạng và Internet",
        "type": "MCQ"
      }
    ]
  },
  {
    "id": 3,
    "title": "Chủ đề 3: Thông tin và tìm kiếm",
    "topic": "Thông tin và tìm kiếm",
    "description": "Sắp xếp và tìm kiếm dữ liệu hiệu quả.",
    "icon": "FolderSearch",
    "questions": [
      {
        "id": 288,
        "text": "Biểu tượng thư mục thường có hình dạng như thế nào?",
        "options": [
          "Hình tờ giấy",
          "Hình kẹp giấy màu vàng",
          "Hình cái loa",
          "Hình ngôi sao"
        ],
        "correctAnswer": 1,
        "explanation": "Thư mục dùng để chứa các tệp tin bài học.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 289,
        "text": "Để tìm kiếm thông tin trên Google, em gõ nội dung cần tìm vào đâu?",
        "options": [
          "Thanh tiêu đề",
          "Ô tìm kiếm",
          "Màn hình",
          "Thân máy"
        ],
        "correctAnswer": 1,
        "explanation": "Nhập từ khóa vào ô tìm kiếm để Google hiển thị kết quả.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 290,
        "text": "Sắp xếp các bước để tạo một thư mục mới:",
        "options": [
          "Nháy chuột phải",
          "Chọn New",
          "Chọn Folder",
          "Gõ tên và nhấn Enter"
        ],
        "correctAnswer": [
          "Nháy chuột phải",
          "Chọn New",
          "Chọn Folder",
          "Gõ tên và nhấn Enter"
        ],
        "explanation": "Các bước tạo nơi lưu trữ dữ liệu mới.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 291,
        "text": "Nối loại dữ liệu với tệp tin tương ứng:",
        "pairs": [
          {
            "left": "Hình ảnh",
            "right": "Ảnh chụp lớp học"
          },
          {
            "left": "Âm thanh",
            "right": "Bài hát thiếu nhi"
          },
          {
            "left": "Văn bản",
            "right": "Bài thơ em yêu"
          }
        ],
        "explanation": "Mỗi loại thông tin được lưu dưới một dạng tệp khác nhau.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 292,
        "text": "Phân loại các đối tượng sau vào nhóm Tệp tin hoặc Thư mục:",
        "items": [
          "Bài vẽ (ảnh)",
          "Thư mục Toán",
          "Bài soạn thảo",
          "Thư mục Nhạc"
        ],
        "targets": [
          "Tệp tin",
          "Thư mục"
        ],
        "correctAnswer": {
          "Bài vẽ (ảnh)": "Tệp tin",
          "Bài soạn thảo": "Tệp tin",
          "Thư mục Toán": "Thư mục",
          "Thư mục Nhạc": "Thư mục"
        },
        "explanation": "Tệp tin chứa dữ liệu, thư mục chứa tệp và thư mục khác.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 293,
        "text": "Tìm lỗi sai trong các bước tắt máy tính sau:",
        "options": [
          "1. Đóng các phần mềm đang dùng",
          "2. Chọn nút Start",
          "3. Chọn lệnh Restart",
          "4. Đợi máy tắt hẳn mới rút điện"
        ],
        "correctAnswer": 2,
        "errorPart": "Chọn lệnh Restart",
        "correction": "Em nên chọn lệnh 'Shut down' để tắt máy, 'Restart' là để máy khởi động lại.",
        "explanation": "Shut down là lệnh dùng để tắt máy tính hoàn toàn.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "FIND_ERROR"
      },
      {
        "id": 294,
        "text": "Sắp xếp các bước để mở một thư mục có sẵn:",
        "options": [
          "Di chuyển chuột đến thư mục",
          "Nháy đúp chuột trái vào thư mục",
          "Xem các tệp bên trong"
        ],
        "correctAnswer": [
          "Di chuyển chuột đến thư mục",
          "Nháy đúp chuột trái vào thư mục",
          "Xem các tệp bên trong"
        ],
        "explanation": "Thao tác cơ bản để xem nội dung lưu trữ.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 295,
        "text": "Em có thể đổi tên cho tệp tin của mình được không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng lệnh Rename để thay đổi tên tệp.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 296,
        "text": "Nối thao tác chuột với công dụng tương ứng:",
        "pairs": [
          {
            "left": "Nháy đúp chuột trái",
            "right": "Mở một thư mục"
          },
          {
            "left": "Nháy chuột phải",
            "right": "Mở bảng menu lệnh"
          },
          {
            "left": "Kéo thả chuột",
            "right": "Di chuyển đối tượng"
          }
        ],
        "explanation": "Thao tác chuột là kỹ năng cơ bản khi quản lý thông tin.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 297,
        "text": "Phân loại các tệp tin sau vào nhóm Hình ảnh hoặc Văn bản:",
        "items": [
          "AnhLop.jpg",
          "BaiHoc.docx",
          "BienDep.png",
          "ThoHay.txt"
        ],
        "targets": [
          "Hình ảnh",
          "Văn bản"
        ],
        "correctAnswer": {
          "AnhLop.jpg": "Hình ảnh",
          "BienDep.png": "Hình ảnh",
          "BaiHoc.docx": "Văn bản",
          "ThoHay.txt": "Văn bản"
        },
        "explanation": "Tên tệp giúp em biết loại thông tin chứa bên trong.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 298,
        "text": "Tìm lỗi sai trong quy trình copy thư mục:",
        "options": [
          "1. Chọn thư mục",
          "2. Nháy chuột phải chọn Paste",
          "3. Mở thư mục mới",
          "4. Nháy chuột phải chọn Paste"
        ],
        "correctAnswer": 1,
        "errorPart": "Nháy chuột phải chọn Paste",
        "correction": "Bước 2 phải là chọn lệnh 'Copy' thay vì 'Paste'.",
        "explanation": "Copy trước, Paste sau.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "FIND_ERROR"
      },
      {
        "id": 299,
        "text": "Để chọn tất cả các tệp trong một thư mục, em nhấn phím nào?",
        "options": [
          "Ctrl + A",
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + X"
        ],
        "correctAnswer": 0,
        "explanation": "A viết tắt của All (Tất cả).",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 300,
        "text": "Thư mục nào thường dùng để chứa các bài tập soạn thảo của em?",
        "options": [
          "Recycle Bin",
          "Documents",
          "Program Files",
          "Windows"
        ],
        "correctAnswer": 1,
        "explanation": "Documents là nơi mặc định để lưu trữ tài liệu cá nhân.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 301,
        "text": "Khi em xóa một tệp tin, nó biến mất hoàn toàn ngay lập tức đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Nó thường được đưa vào Recycle Bin để em có thể khôi phục lại.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 302,
        "text": "Em có thể tạo một thư mục ngay trên màn hình nền (Desktop) không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Desktop cũng là một không gian lưu trữ của máy tính.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 303,
        "text": "Nối loại tệp với ví dụ tương ứng:",
        "pairs": [
          {
            "left": "Tệp trình chiếu",
            "right": "BaiThuyetTrinh.pptx"
          },
          {
            "left": "Tệp hình ảnh",
            "right": "AnhLop.png"
          },
          {
            "left": "Tệp nén",
            "right": "TaiLieu.zip"
          }
        ],
        "explanation": "Nhận biết các định dạng tệp nâng cao.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 304,
        "text": "Để xem thuộc tính của một tệp (kích thước, ngày tạo), em chọn lệnh nào?",
        "options": [
          "Open",
          "Share",
          "Properties",
          "Delete"
        ],
        "correctAnswer": 2,
        "explanation": "Properties hiển thị mọi thông tin chi tiết về tệp.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 305,
        "text": "Sắp xếp các bước để khôi phục tệp từ thùng rác:",
        "options": [
          "Mở Recycle Bin",
          "Chọn tệp muốn lấy lại",
          "Nháy chuột phải",
          "Chọn Restore"
        ],
        "correctAnswer": [
          "Mở Recycle Bin",
          "Chọn tệp muốn lấy lại",
          "Nháy chuột phải",
          "Chọn Restore"
        ],
        "explanation": "Cách lấy lại dữ liệu lỡ tay xóa nhầm.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 306,
        "text": "Địa chỉ một tệp tin được biểu diễn bằng đường dẫn (Path) đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Ví dụ: C:\\User\\Documents\\baitap.docx.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 307,
        "text": "Mỗi tệp tin đều có kích cỡ, đơn vị thường dùng là MB hoặc KB đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dung lượng tệp cho biết tệp đó nặng bao nhiêu.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 308,
        "text": "Nối hành động với tổ hợp phím tắt nhanh:",
        "pairs": [
          {
            "left": "Lưu tệp",
            "right": "Ctrl + S"
          },
          {
            "left": "Mở tệp",
            "right": "Ctrl + O"
          },
          {
            "left": "In tệp",
            "right": "Ctrl + P"
          }
        ],
        "explanation": "Phím tắt giúp thao tác với tệp nhanh hơn.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 309,
        "text": "Thư mục 'Trash' hoặc 'Recycle Bin' chứa các tệp đã bị xóa đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là nơi lưu trữ tạm thời các tệp bị xóa.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 310,
        "text": "Sắp xếp các bước để gửi tệp cho bạn qua Zalo/Email:",
        "options": [
          "Chọn tệp cần gửi",
          "Nhấn nút đính kèm (hình kẹp giấy)",
          "Chọn người nhận",
          "Nhấn nút Gửi"
        ],
        "correctAnswer": [
          "Chọn tệp cần gửi",
          "Nhấn nút đính kèm (hình kẹp giấy)",
          "Chọn người nhận",
          "Nhấn nút Gửi"
        ],
        "explanation": "Các bước chia sẻ dữ liệu số.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 311,
        "text": "Phân loại các thiết bị sau vào nhóm Lưu trữ được hoặc Không lưu trữ được:",
        "items": [
          "USB",
          "Đĩa CD",
          "Cáp sạc",
          "Chuột máy tính"
        ],
        "targets": [
          "Lưu trữ được",
          "Không lưu trữ"
        ],
        "correctAnswer": {
          "USB": "Lưu trữ được",
          "Đĩa CD": "Lưu trữ được",
          "Cáp sạc": "Không lưu trữ",
          "Chuột máy tính": "Không lưu trữ"
        },
        "explanation": "Cần các thiết bị có bộ nhớ để lưu tệp.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 312,
        "text": "Một ổ đĩa có thể chứa hàng nghìn thư mục con đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Khả năng lưu trữ của ổ đĩa hiện nay rất lớn.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 313,
        "text": "Để phóng to thu nhỏ các biểu tượng tệp trong thư mục, em giữ phím Ctrl và làm gì?",
        "options": [
          "Lăn nút cuộn chuột",
          "Nháy đúp chuột",
          "Nháy chuột phải",
          "Nhấn Enter"
        ],
        "correctAnswer": 0,
        "explanation": "Ctrl + cuộn chuột giúp thay đổi kích thước hiển thị biểu tượng.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 314,
        "text": "Thư mục nào sau đây thường được dùng để cài đặt các phần mềm của máy tính?",
        "options": [
          "Documents",
          "Program Files",
          "Pictures",
          "Music"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là thư mục hệ thống bảo mật cao.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 315,
        "text": "Nối loại thiết bị lưu trữ với đặc điểm của nó:",
        "pairs": [
          {
            "left": "Ổ cứng (HDD/SSD)",
            "right": "Lưu dữ liệu chính trong máy"
          },
          {
            "left": "Thẻ nhớ",
            "right": "Nhỏ gọn, dùng cho điện thoại"
          },
          {
            "left": "Google Drive",
            "right": "Lưu trữ trên 'đám mây' qua mạng"
          }
        ],
        "explanation": "Nhận biết các giải pháp lưu trữ hiện đại.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 316,
        "text": "Dữ liệu dạng văn bản trong máy tính được gọi là gì?",
        "options": [
          "Text",
          "Image",
          "Sound",
          "Video"
        ],
        "correctAnswer": 0,
        "explanation": "Text là thuật ngữ chỉ dữ liệu chữ.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 317,
        "text": "Để tạo một bản sao của tệp tin, em dùng lệnh gì?",
        "options": [
          "Cut",
          "Delete",
          "Copy",
          "Rename"
        ],
        "correctAnswer": 2,
        "explanation": "Copy tạo ra bản sao giống hệt.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 318,
        "text": "Em có thể đổi biểu tượng (icon) cho thư mục được không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng mục Customize trong thuộc tính thư mục.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 319,
        "text": "Tên tệp tin không được chứa các ký tự đặc biệt nào sau đây?",
        "options": [
          "A, B, C",
          "1, 2, 3",
          "*, /, <, >",
          "_, -"
        ],
        "correctAnswer": 2,
        "explanation": "Các ký tự này dành cho hệ thống điều khiển.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 320,
        "text": "Nối hành động với tình huống sử dụng:",
        "pairs": [
          {
            "left": "Dùng Search",
            "right": "Khi không nhớ vị trí tệp"
          },
          {
            "left": "Dùng Rename",
            "right": "Khi muốn thay tên tệp"
          },
          {
            "left": "Dùng Delete",
            "right": "Khi tệp không còn tác dụng"
          }
        ],
        "explanation": "Sử dụng các công cụ quản lý tệp thông minh.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 321,
        "text": "Phân loại các đối tượng sau vào nhóm Đơn vị đo dung lượng hoặc Không phải đơn vị đo dung lượng:",
        "items": [
          "Gigabyte",
          "Kilogam",
          "Megabyte",
          "Met"
        ],
        "targets": [
          "Đơn vị dung lượng",
          "Không phải"
        ],
        "correctAnswer": {
          "Gigabyte": "Đơn vị dung lượng",
          "Megabyte": "Đơn vị dung lượng",
          "Kilogam": "Không phải",
          "Met": "Không phải"
        },
        "explanation": "Đơn vị đo dữ liệu khác với đơn vị đo khối lượng hay chiều dài.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 322,
        "text": "Khi em nén một thư mục, tệp nén sẽ có phần mở rộng là gì?",
        "options": [
          ".docx",
          ".exe",
          ".zip hoặc .rar",
          ".mp3"
        ],
        "correctAnswer": 2,
        "explanation": "Định dạng tệp nén thông dụng.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 323,
        "text": "Có thể tạo thư mục con lồng nhau qua nhiều cấp độ không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Hệ thống cây thư mục cho phép phân nhánh sâu.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 324,
        "text": "Sắp xếp thứ tự các ổ đĩa máy tính thường gặp trên PC:",
        "options": [
          "Ổ đĩa C",
          "Ổ đĩa D",
          "Ổ USB (thường là E hoặc F)",
          "Ổ đĩa CD (nếu có)"
        ],
        "correctAnswer": [
          "Ổ đĩa C",
          "Ổ đĩa D",
          "Ổ USB (thường là E hoặc F)",
          "Ổ đĩa CD (nếu có)"
        ],
        "explanation": "Nhận diện danh sách thiết bị lưu trữ.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 325,
        "text": "Phát biểu nào sau đây là SAI về thư mục?",
        "options": [
          "A. Một thư mục có thể để trống",
          "B. Thư mục chứa được video",
          "C. Thư mục con phải to hơn thư mục mẹ",
          "D. Tên thư mục nên ngắn gọn"
        ],
        "correctAnswer": 2,
        "explanation": "Thư mục không có khái niệm 'to' hay 'nhỏ' về kích thước hình học, chỉ có khái niệm chứa bao nhiêu dữ liệu.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 326,
        "text": "Để dán (Paste) dữ liệu đã chọn, em dùng phím tắt nào?",
        "options": [
          "Ctrl + C",
          "Ctrl + X",
          "Ctrl + V",
          "Ctrl + P"
        ],
        "correctAnswer": 2,
        "explanation": "V dùng để dán thông tin.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 327,
        "text": "Em nên đặt tên thư mục như thế nào để dễ tìm kiếm?",
        "options": [
          "Gõ đại các phím",
          "Đặt tên theo nội dung chứa bên trong",
          "Đặt tên thật dài",
          "Để tên mặc định"
        ],
        "correctAnswer": 1,
        "explanation": "Tên gợi nhớ giúp tiết kiệm thời gian tìm kiếm.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 328,
        "text": "Lệnh 'Cut' khác 'Copy' ở điểm nào?",
        "options": [
          "Không khác nhau",
          "Cut di chuyển tệp gốc đi, Copy tạo thêm một bản sao",
          "Cut làm tệp to hơn",
          "Copy xóa tệp gốc"
        ],
        "correctAnswer": 1,
        "explanation": "Cut dành cho việc di chuyển, Copy dành cho việc tạo thêm bản.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 329,
        "text": "Nối loại tệp với ví dụ minh họa:",
        "pairs": [
          {
            "left": "Tệp video",
            "right": "PhimHoatHinh.mp4"
          },
          {
            "left": "Tệp âm thanh",
            "right": "NhacThieuNhi.mp3"
          },
          {
            "left": "Tệp tài liệu",
            "right": "BaiTapTinHoc.pdf"
          }
        ],
        "explanation": "Nhận biết các đuôi tệp phổ biến.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 330,
        "text": "Phân loại các thao tác sau vào nhóm Quản lý tệp hoặc Tìm kiếm thông tin:",
        "items": [
          "Đổi tên thư mục",
          "Gõ từ khóa vào Google",
          "Xóa tệp cũ",
          "Chọn mục Hình ảnh khi tìm kiếm"
        ],
        "targets": [
          "Quản lý tệp",
          "Tìm kiếm thông tin"
        ],
        "correctAnswer": {
          "Đổi tên thư mục": "Quản lý tệp",
          "Xóa tệp cũ": "Quản lý tệp",
          "Gõ từ khóa vào Google": "Tìm kiếm thông tin",
          "Chọn mục Hình ảnh khi tìm kiếm": "Tìm kiếm thông tin"
        },
        "explanation": "Hiểu hai kỹ năng quan trọng khi làm việc với dữ liệu.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 331,
        "text": "Dung lượng 1 GB lớn hơn 1 MB đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "1 GB bằng 1024 MB.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 332,
        "text": "Khi tìm kiếm trên Google, nếu em muốn kết quả chứa chính xác cụm từ nào đó, em nên bao quanh nó bằng ký tự gì?",
        "options": [
          "Dấu ngoặc đơn ()",
          "Dấu ngoặc kép \" \"",
          "Dấu cộng +",
          "Dấu thăng #"
        ],
        "correctAnswer": 1,
        "explanation": "Dấu ngoặc kép giúp tìm kiếm chính xác cụm từ.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 333,
        "text": "Máy tính có thể tự động sắp xếp các tệp theo ngày tháng hoặc kích thước đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng tính năng Sort by trong thư mục.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 334,
        "text": "Sắp xếp thứ tự các bước để tìm một tệp có tên 'Hoa đào' trên máy tính:",
        "options": [
          "Nhấn vào ô Search ở trên cùng thư mục",
          "Gõ chữ 'Hoa đào'",
          "Nhấn Enter hoặc đợi máy tìm",
          "Nháy đúp vào tệp vừa tìm thấy"
        ],
        "correctAnswer": [
          "Nhấn vào ô Search ở trên cùng thư mục",
          "Gõ chữ 'Hoa đào'",
          "Nhấn Enter hoặc đợi máy tìm",
          "Nháy đúp vào tệp vừa tìm thấy"
        ],
        "explanation": "Cách tìm tệp nhanh khi quên vị trí lưu.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 335,
        "text": "Thư mục có thể chứa hàng trăm tệp tin bên trong hay không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Thư mục có khả năng chứa rất nhiều dữ liệu.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 336,
        "text": "Để chọn nhiều tệp nằm cách xa nhau, em nhấn giữ phím nào khi nháy chuột?",
        "options": [
          "Shift",
          "Ctrl",
          "Alt",
          "Caps Lock"
        ],
        "correctAnswer": 1,
        "explanation": "Phím Ctrl giúp chọn các mục riêng lẻ.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 337,
        "text": "Tìm lỗi sai trong nhận định về lưu trữ thông tin:",
        "options": [
          "1. Nên để tất cả tệp ra màn hình nền",
          "2. Nên tạo thư mục theo môn học",
          "3. Nên đặt tên tệp dễ nhớ",
          "4. Nên xóa tệp rác thường xuyên"
        ],
        "correctAnswer": 0,
        "errorPart": "Nên để tất cả tệp ra màn hình nền",
        "correction": "Để quá nhiều tệp ở màn hình nền sẽ làm máy khởi động chậm và khó tìm kiếm.",
        "explanation": "Cần sắp xếp tệp vào các thư mục chuyên biệt.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "FIND_ERROR"
      },
      {
        "id": 338,
        "text": "Em hãy tưởng tượng Thư mục giống như đồ vật nào trong đời sống?",
        "options": [
          "Chiếc bút chì",
          "Chiếc cặp sách (để đựng sách vở)",
          "Cái tivi",
          "Con chuột máy tính"
        ],
        "correctAnswer": 1,
        "explanation": "Thư mục giúp em sắp xếp và chứa các tệp tin giống như cặp sách chứa sách vở vậy.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 339,
        "text": "Bên trong một thư mục có thể chứa những gì?",
        "options": [
          "Chỉ chứa được tệp tin",
          "Chỉ chứa được các thư mục con",
          "Chứa được cả tệp tin và các thư mục con",
          "Không chứa được gì cả"
        ],
        "correctAnswer": 2,
        "explanation": "Thư mục giống như một chiếc ngăn kéo lớn có thể đựng nhiều hộp nhỏ (thư mục con) và giấy tờ (tệp tin).",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 340,
        "text": "Vì sao em nên đặt tên cho các thư mục và tệp tin một cách rõ ràng?",
        "options": [
          "Để máy tính trông đẹp hơn",
          "Để em dễ dàng tìm kiếm lại khi cần",
          "Để máy tính không bị hỏng",
          "Để tiết kiệm điện"
        ],
        "correctAnswer": 1,
        "explanation": "Tên gọi rõ ràng (như 'Bài tập Toán', 'Ảnh gia đình') giúp em nhận ra nội dung bên trong mà không cần mở ra xem.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 341,
        "text": "Khi em xóa một tệp tin, nó thường được chuyển đến đâu trước khi biến mất hoàn toàn?",
        "options": [
          "Thư mục Documents",
          "Thùng rác (Recycle Bin)",
          "Màn hình nền Desktop",
          "Mạng Internet"
        ],
        "correctAnswer": 1,
        "explanation": "Thùng rác là nơi lưu tạm các tệp em đã xóa, giúp em có thể lấy lại nếu lỡ tay xóa nhầm.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 342,
        "text": "Biểu tượng nào thường được dùng để đại diện cho chức năng Tìm kiếm (Search)?",
        "options": [
          "Hình quyển sách",
          "Hình chiếc bút",
          "Hình chiếc kính lúp",
          "Hình cái hộp"
        ],
        "correctAnswer": 2,
        "explanation": "Hình ảnh chiếc kính lúp tượng trưng cho việc soi tìm các thông tin đang ẩn giấu.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 343,
        "text": "Để tìm nhanh một tệp tin trên máy tính khi em chỉ nhớ tên của nó, em nên gõ tên vào đâu?",
        "options": [
          "Thanh địa chỉ",
          "Ô Tìm kiếm (Search)",
          "Màn hình nền Desktop",
          "Nút Start"
        ],
        "correctAnswer": 1,
        "explanation": "Ô Tìm kiếm giúp máy tính quét qua các thư mục để tìm đúng tên tệp em cần.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 344,
        "text": "Thế nào được gọi là một 'Thư mục con'?",
        "options": [
          "Thư mục nằm bên ngoài màn hình",
          "Thư mục nằm bên trong một thư mục khác",
          "Thư mục không có tên",
          "Thư mục chứa ảnh hoạt hình"
        ],
        "correctAnswer": 1,
        "explanation": "Cũng giống như hộp nhỏ đặt trong hộp lớn, thư mục nằm trong thư mục khác gọi là thư mục con.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 345,
        "text": "Hành động 'Kéo và thả' một tệp tin vào trong một thư mục có tác dụng gì?",
        "options": [
          "Xóa tệp tin đó",
          "Di chuyển tệp tin vào trong thư mục đó",
          "Đổi màu tệp tin",
          "Làm tệp tin to lên"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là cách nhanh nhất để em sắp xếp các tệp tin vào đúng chỗ của chúng.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 346,
        "text": "Nếu em muốn xem danh sách các tệp tin được sắp xếp theo ngày em vừa tạo, em chọn cách sắp xếp nào?",
        "options": [
          "Sắp xếp theo Tên (Name)",
          "Sắp xếp theo Ngày (Date)",
          "Sắp xếp theo Kích thước (Size)",
          "Sắp xếp theo Loại (Type)"
        ],
        "correctAnswer": 1,
        "explanation": "Sắp xếp theo Ngày giúp em thấy ngay những tệp mình vừa mới lưu gần đây nhất.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 347,
        "text": "Khi em nhìn vào danh sách các biểu tượng, làm sao để nhận ra một Thư mục một cách nhanh nhất?",
        "options": [
          "Nó luôn có màu vàng và hình cái kẹp tài liệu",
          "Nó luôn có hình tròn",
          "Nó luôn có hình ngôi sao",
          "Nó luôn có màu đỏ"
        ],
        "correctAnswer": 0,
        "explanation": "Hình ảnh cái kẹp tài liệu màu vàng là ký hiệu quen thuộc nhất của thư mục trên máy tính.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 348,
        "text": "Nếu em đổi phần mở rộng của một tệp văn bản từ '.docx' sang '.jpg', tệp đó sẽ như thế nào?",
        "options": [
          "Biến thành một bức ảnh",
          "Trở thành tệp nhạc",
          "Không thể mở được bằng phần mềm xem ảnh vì nội dung vẫn là văn bản",
          "Máy tính sẽ bị hỏng"
        ],
        "correctAnswer": 2,
        "explanation": "Việc đổi tên đuôi không làm thay đổi bản chất dữ liệu bên trong tệp.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 349,
        "text": "Ưu điểm lớn nhất của lưu trữ dữ liệu trên 'đám mây' (như Google Drive) là gì?",
        "options": [
          "Lưu được nhiều ảnh hoạt hình hơn",
          "Có thể truy cập và sửa dữ liệu ở bất kỳ máy tính nào có mạng",
          "Không cần dùng đến màn hình",
          "Làm tệp tin nhẹ hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Đám mây giúp em làm việc linh hoạt ở mọi nơi.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 350,
        "text": "Khi em xóa một 'Thư mục mẹ', điều gì sẽ xảy ra với các tệp tin bên trong nó?",
        "options": [
          "Các tệp tin vẫn còn nguyên",
          "Tệp tin sẽ tự di chuyển sang thư mục khác",
          "Tất cả tệp tin và thư mục con bên trong đều bị xóa theo",
          "Thư mục mẹ sẽ to ra"
        ],
        "correctAnswer": 2,
        "explanation": "Thư mục chứa mọi thứ bên trong nó, nên khi xóa 'vỏ' thì 'ruột' cũng mất.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 351,
        "text": "Để tìm các tệp tin đã tạo từ một năm trước trên máy tính, em nên dùng cách sắp xếp nào?",
        "options": [
          "Sắp xếp theo Tên",
          "Sắp xếp theo Ngày (Date modified)",
          "Sắp xếp theo Kích thước",
          "Sắp xếp theo Loại"
        ],
        "correctAnswer": 1,
        "explanation": "Sắp xếp theo thời gian giúp em lọc tệp theo năm tháng dễ dàng.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 352,
        "text": "Tệp tin (file) là gì?",
        "options": [
          "Một đơn vị lưu trữ dữ liệu trên máy tính",
          "Một cái túi đựng bút",
          "Một thiết bị phần cứng",
          "Một loại màn hình"
        ],
        "correctAnswer": 0,
        "explanation": "Tệp tin chứa thông tin như văn bản, hình ảnh, âm thanh.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 353,
        "text": "Thư mục (folder) dùng để làm gì?",
        "options": [
          "Để chứa và tổ chức các tệp tin",
          "Để làm máy tính đẹp hơn",
          "Để tăng tốc độ internet",
          "Để vẽ tranh"
        ],
        "correctAnswer": 0,
        "explanation": "Thư mục giúp chúng ta sắp xếp dữ liệu khoa học.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 354,
        "text": "Biểu tượng của thư mục thường có hình gì?",
        "options": [
          "Hình cái kẹp giấy màu vàng",
          "Hình ngôi sao",
          "Hình quả táo",
          "Hình tam giác"
        ],
        "correctAnswer": 0,
        "explanation": "Màu vàng và hình tệp hồ sơ là biểu tượng đặc trưng của folder.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 355,
        "text": "Một thư mục có thể chứa các thư mục con bên trong, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Thư mục có cấu trúc phân cấp, cho phép chứa nhiều lớp thư mục.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 356,
        "text": "Để tạo một thư mục mới, em nháy chuột phải vào chỗ trống rồi chọn lệnh nào?",
        "options": [
          "New -> Folder",
          "New -> File",
          "Cut",
          "Delete"
        ],
        "correctAnswer": 0,
        "explanation": "New -> Folder là cách tạo ngăn chứa mới.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 357,
        "text": "Nối các loại tệp tin với biểu tượng thường gặp:",
        "pairs": [
          {
            "left": "Tệp văn bản",
            "right": "Biểu tượng chữ W hoặc tờ giấy"
          },
          {
            "left": "Tệp hình ảnh",
            "right": "Biểu tượng bức tranh"
          },
          {
            "left": "Tệp âm thanh",
            "right": "Biểu tượng nốt nhạc"
          }
        ],
        "explanation": "Nhận biết các loại định dạng tệp cơ bản.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 358,
        "text": "Để đặt lại tên cho một thư mục, em chọn thư mục đó rồi nhấn phím nào?",
        "options": [
          "F1",
          "F2",
          "F5",
          "Enter"
        ],
        "correctAnswer": 1,
        "explanation": "F2 là phím tắt để Rename (đổi tên).",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 359,
        "text": "Sắp xếp các bước để tạo một thư mục mới trên màn hình nền:",
        "options": [
          "Nháy chuột phải vào vùng trống",
          "Chọn lệnh New",
          "Chọn lệnh Folder",
          "Gõ tên và nhấn Enter"
        ],
        "correctAnswer": [
          "Nháy chuột phải vào vùng trống",
          "Chọn lệnh New",
          "Chọn lệnh Folder",
          "Gõ tên và nhấn Enter"
        ],
        "explanation": "Kỹ năng thao tác thư mục cơ bản.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 360,
        "text": "Khi xóa một thư mục, tất cả tệp tin bên trong nó cũng sẽ bị xóa, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Cần cẩn thận khi xóa thư mục cha.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 361,
        "text": "Dữ liệu trong máy tính được lưu trữ ở đâu lâu dài?",
        "options": [
          "Ổ cứng",
          "Bàn phím",
          "Chuột",
          "Màn hình"
        ],
        "correctAnswer": 0,
        "explanation": "Hard drive (ổ cứng) là thiết bị lưu trữ chính.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 362,
        "text": "Hành động 'Copy' một tệp tin có nghĩa là gì?",
        "options": [
          "Xóa tệp tin đó",
          "Di chuyển tệp sang chỗ khác",
          "Tạo ra một bản sao mới giống hệt",
          "Đổi tên tệp"
        ],
        "correctAnswer": 2,
        "explanation": "Copy dùng để nhân bản dữ liệu.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 363,
        "text": "Tổ hợp phím tắt để dán (Paste) một tệp tin là gì?",
        "options": [
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + Z",
          "Ctrl + S"
        ],
        "correctAnswer": 1,
        "explanation": "Paste đưa dữ liệu từ bộ nhớ đệm ra vị trí đích.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 364,
        "text": "Tìm kiếm thông tin trên máy tính giúp em làm gì?",
        "options": [
          "Tìm lại tệp tin bị thất lạc",
          "Xóa virus",
          "In ảnh",
          "Vẽ tranh"
        ],
        "correctAnswer": 0,
        "explanation": "Công cụ tìm kiếm giúp tiết kiệm thời gian lọc dữ liệu.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 365,
        "text": "Em có thể đổi màu cho biểu tượng thư mục trong Windows không?",
        "options": [
          "Có (dùng phần mềm hỗ trợ)",
          "Không bao giờ"
        ],
        "correctAnswer": 0,
        "explanation": "Mặc định là màu vàng nhưng có thể tùy chỉnh.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 366,
        "text": "Nối hành động với tổ hợp phím tắt tương ứng:",
        "pairs": [
          {
            "left": "Sao chép (Copy)",
            "right": "Ctrl + C"
          },
          {
            "left": "Cắt/Di chuyển (Cut)",
            "right": "Ctrl + X"
          },
          {
            "left": "Chọn tất cả (Select All)",
            "right": "Ctrl + A"
          }
        ],
        "explanation": "Thao tác nhanh trên tệp và thư mục.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 367,
        "text": "Khi tìm kiếm tệp tin, em nên gõ điều gì vào ô tìm kiếm?",
        "options": [
          "Tên của tệp tin đó",
          "Số lượng tệp",
          "Màu sắc của tệp",
          "Kích thước tệp"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa là tên tệp sẽ cho kết quả chính xác nhất.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 368,
        "text": "Sắp xếp quy trình để di chuyển một tệp từ thư mục A sang thư mục B:",
        "options": [
          "Chọn tệp ở thư mục A",
          "Nhấn Ctrl + X",
          "Mở thư mục B",
          "Nhấn Ctrl + V"
        ],
        "correctAnswer": [
          "Chọn tệp ở thư mục A",
          "Nhấn Ctrl + X",
          "Mở thư mục B",
          "Nhấn Ctrl + V"
        ],
        "explanation": "Hành động Cut & Paste dùng để di chuyển dữ liệu.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 369,
        "text": "Phân loại các hành động sau vào nhóm Nên làm hoặc Không nên làm để quản lý dữ liệu tốt:",
        "items": [
          "Đặt tên thư mục rõ nghĩa",
          "Lưu mọi thứ ra màn hình nền",
          "Xóa bớt tệp rác",
          "Để tên tệp là 123456"
        ],
        "targets": [
          "Nên làm",
          "Không nên làm"
        ],
        "correctAnswer": {
          "Đặt tên thư mục rõ nghĩa": "Nên làm",
          "Xóa bớt tệp rác": "Nên làm",
          "Lưu mọi thứ ra màn hình nền": "Không nên làm",
          "Để tên tệp là 123456": "Không nên làm"
        },
        "explanation": "Thói quen tốt giúp quản lý thông tin hiệu quả.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 370,
        "text": "Em có thể thay đổi cách hiển thị các biểu tượng trong thư mục (to, nhỏ, danh sách) không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng tính năng View trong File Explorer.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 371,
        "text": "Để chọn nhiều tệp tin nằm liền kề nhau, em nhấn giữ phím nào?",
        "options": [
          "Shift",
          "Alt",
          "Enter",
          "Space"
        ],
        "correctAnswer": 0,
        "explanation": "Shift + Click giúp chọn một dải tệp.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 372,
        "text": "Để chọn nhiều tệp tin nằm rời rạc nhau, em nhấn giữ phím nào?",
        "options": [
          "Ctrl",
          "Tab",
          "ESC",
          "Delete"
        ],
        "correctAnswer": 0,
        "explanation": "Ctrl + Click giúp chọn từng tệp riêng lẻ.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 373,
        "text": "Tìm lỗi sai trong câu: 'Tên tệp tin có thể chứa các ký tự đặc biệt như / \\ : * ? \" < > |'",
        "options": [
          "Tên tệp tin",
          "có thể chứa",
          "ký tự đặc biệt",
          "như"
        ],
        "correctAnswer": 1,
        "errorPart": "có thể chứa",
        "correction": "Tên tệp tin KHÔNG ĐƯỢC chứa các ký tự đặc biệt này.",
        "explanation": "Quy tắc đặt tên của hệ thống Windows.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "FIND_ERROR"
      },
      {
        "id": 374,
        "text": "Nối phần mở rộng tệp với loại dữ liệu tương ứng:",
        "pairs": [
          {
            "left": ".mp3",
            "right": "Nhạc"
          },
          {
            "left": ".png",
            "right": "Ảnh"
          },
          {
            "left": ".mp4",
            "right": "Phim/Video"
          }
        ],
        "explanation": "Nhận biết phần định dạng tệp tin.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 375,
        "text": "Thiết bị nào sau đây dùng để trao đổi dữ liệu trực tiếp giữa hai máy tính không có mạng?",
        "options": [
          "USB",
          "Máy in",
          "Loa",
          "Màn hình"
        ],
        "correctAnswer": 0,
        "explanation": "USB là thiết bị lưu trữ và di chuyển dữ liệu phổ biến.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 376,
        "text": "Khi em đổi tên một tệp tin, nội dung bên trong tệp đó có bị thay đổi không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Đổi tên chỉ thay đổi định danh bên ngoài, không ảnh hưởng nội dung.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 377,
        "text": "Để tìm kiếm tất cả tệp ảnh trên máy tính, em dùng ký tự đại diện nào?",
        "options": [
          "*.jpg",
          "?.jpg",
          "#.jpg",
          "@.jpg"
        ],
        "correctAnswer": 0,
        "explanation": "Dấu sao (*) đại diện cho chuỗi ký tự bất kỳ.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 378,
        "text": "Sắp xếp các thư mục thông dụng có sẵn trong Windows:",
        "options": [
          "Documents",
          "Pictures",
          "Music",
          "Videos"
        ],
        "correctAnswer": [
          "Documents",
          "Pictures",
          "Music",
          "Videos"
        ],
        "explanation": "Các ngăn chứa dữ liệu mặc định của người dùng.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 379,
        "text": "Phân loại các thiết bị sau vào nhóm Thiết bị lưu trữ ngoài hoặc Thiết bị lưu trữ trong:",
        "items": [
          "Ổ cứng gắn máy",
          "Thẻ nhớ",
          "Đĩa CD",
          "Ram"
        ],
        "targets": [
          "Thiết bị lưu trữ ngoài",
          "Thiết bị lưu trữ trong"
        ],
        "correctAnswer": {
          "Ổ cứng gắn máy": "Thiết bị lưu trữ trong",
          "Ram": "Thiết bị lưu trữ trong",
          "Thẻ nhớ": "Thiết bị lưu trữ ngoài",
          "Đĩa CD": "Thiết bị lưu trữ ngoài"
        },
        "explanation": "Các loại bộ nhớ máy tính.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 380,
        "text": "Tên tệp tin nên ngắn gọn và liên quan đến nội dung, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Điều này giúp em tìm kiếm tệp dễ dàng hơn sau này.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 381,
        "text": "Để mở một thư mục, em thực hiện thao tác chuột nào?",
        "options": [
          "Nháy chuột trái 1 lần",
          "Nháy đúp chuột (nháy 2 lần nhanh)",
          "Nháy chuột phải",
          "Kéo và thả"
        ],
        "correctAnswer": 1,
        "explanation": "Double click để mở tệp hoặc thư mục.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 382,
        "text": "Ổ đĩa nào thường là nơi cài đặt hệ điều hành và phần mềm?",
        "options": [
          "Ổ C",
          "Ổ D",
          "Ổ E",
          "Ổ F"
        ],
        "correctAnswer": 0,
        "explanation": "Mặc định hệ thống Windows nằm ở ổ đĩa C.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 383,
        "text": "Dung lượng tệp tin thường được đo bằng đơn vị gì?",
        "options": [
          "kg",
          "mét",
          "Byte/Kilobyte/Megabyte",
          "lít"
        ],
        "correctAnswer": 2,
        "explanation": "Byte là đơn vị đo lường thông tin kỹ thuật số.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 384,
        "text": "Một thư mục có thể chứa tối đa bao nhiêu tệp tin?",
        "options": [
          "100",
          "1000",
          "Rất nhiều (không giới hạn cụ thể)",
          "Chỉ 1"
        ],
        "correctAnswer": 2,
        "explanation": "Tùy thuộc vào dung lượng ổ đĩa.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 385,
        "text": "Em có thể tạo một thư mục trùng tên hoàn toàn với một thư mục khác trong cùng một vị trí không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Mỗi đối tượng trong cùng một thư mục cha phải có tên khác nhau.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 386,
        "text": "Nối phím tắt với công dụng khi làm việc với File Explorer:",
        "pairs": [
          {
            "left": "Alt + Enter",
            "right": "Xem thuộc tính tệp"
          },
          {
            "left": "Shift + Delete",
            "right": "Xóa vĩnh viễn (không vào rác)"
          },
          {
            "left": "Ctrl + N",
            "right": "Mở cửa sổ mới"
          }
        ],
        "explanation": "Thao tác nâng cao với tệp tin.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 387,
        "text": "Khi tìm kiếm thông tin trên Internet, em nhận được quá nhiều kết quả không liên quan. Em nên làm gì?",
        "options": [
          "Sử dụng từ khóa cụ thể hơn",
          "Đọc hết hàng triệu kết quả",
          "Tắt máy đi ngủ",
          "Chờ trang web tự sửa"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa chính xác giúp lọc dữ liệu hiệu quả.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 388,
        "text": "Sắp xếp để tìm kiếm tệp 've-con-meo.png' trong máy tính:",
        "options": [
          "Mở This PC hoặc File Explorer",
          "Nhấn vào ô Search",
          "Gõ 've-con-meo'",
          "Nhấn Enter hoặc đợi kết quả"
        ],
        "correctAnswer": [
          "Mở This PC hoặc File Explorer",
          "Nhấn vào ô Search",
          "Gõ 've-con-meo'",
          "Nhấn Enter hoặc đợi kết quả"
        ],
        "explanation": "Cách sử dụng công cụ tìm kiếm trong Windows.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 389,
        "text": "Phân loại các loại thông tin sau vào nhóm Văn bản, Hình ảnh hoặc Âm thanh:",
        "items": [
          "Tiếng chim hót",
          "Bức ảnh gia đình",
          "Bài thơ",
          "Sách giáo khoa"
        ],
        "targets": [
          "Văn bản",
          "Hình ảnh",
          "Âm thanh"
        ],
        "correctAnswer": {
          "Tiếng chim hót": "Âm thanh",
          "Bức ảnh gia đình": "Hình ảnh",
          "Bài thơ": "Văn bản",
          "Sách giáo khoa": "Văn bản"
        },
        "explanation": "Các dạng thể hiện thông tin cơ bản.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 390,
        "text": "Lợi ích của việc tổ chức thư mục khoa học là gì?",
        "options": [
          "Tìm kiếm thông tin nhanh hơn",
          "Máy tính tiêu thụ ít điện hơn",
          "Bàn phím không bị mờ chữ",
          "Màn hình sáng hơn"
        ],
        "correctAnswer": 0,
        "explanation": "Giúp em quản lý bài học và dữ liệu cá nhân tốt hơn.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 391,
        "text": "Thư mục 'Recycle Bin' trên màn hình dùng để làm gì?",
        "options": [
          "Lưu bài tập",
          "Chứa các tệp và thư mục đã bị xóa tạm thời",
          "Chơi game",
          "Truy cập Internet"
        ],
        "correctAnswer": 1,
        "explanation": "Thùng rác là nơi lưu giữ tạm đồ vật đã xóa để có thể khôi phục.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 392,
        "text": "Lệnh 'Undo' (Ctrl + Z) giúp em làm gì khi nhỡ tay xóa nhầm tệp?",
        "options": [
          "Khôi phục lại thao tác vừa làm",
          "Xóa tệp đó mãi mãi",
          "Nhân đôi tệp",
          "Đổi tên tệp"
        ],
        "correctAnswer": 0,
        "explanation": "Undo là lệnh quay lại bước trước đó.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 393,
        "text": "Em có thể sao chép một tệp tin từ máy tính vào điện thoại qua dây cáp không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Trao đổi dữ liệu đa thiết bị.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 394,
        "text": "Khi nháy chuột phải vào một tệp tin, biểu tượng hình cái kéo có tác dụng gì?",
        "options": [
          "Xóa tệp",
          "Di chuyển tệp (Cut)",
          "Sao chép tệp",
          "Đóng tệp"
        ],
        "correctAnswer": 1,
        "explanation": "Cái kéo tượng trưng cho lệnh Cut.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 395,
        "text": "Tìm lỗi sai: 'Trong Windows, em có thể lưu tệp văn bản vào một thư mục âm thanh.'",
        "options": [
          "Trong Windows",
          "có thể lưu",
          "văn bản",
          "thư mục âm thanh"
        ],
        "correctAnswer": 4,
        "errorPart": "thư mục âm thanh",
        "correction": "Em KIÊU CẦN đặt vào thư mục phù hợp nhưng hệ thống VẪN CHO PHÉP lưu bất cứ loại tệp nào vào thư mục.",
        "explanation": "Windows không giới hạn loại tệp trong thư mục, nhưng em nên sắp xếp đúng nhóm.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "FIND_ERROR"
      },
      {
        "id": 396,
        "text": "Nối tên phím với công dụng khi chọn tệp:",
        "pairs": [
          {
            "left": "Phím Ctrl",
            "right": "Chọn tệp rời rạc"
          },
          {
            "left": "Phím Shift",
            "right": "Chọn tệp liên tiếp"
          },
          {
            "left": "Phím Enter",
            "right": "Mở tệp đã chọn"
          }
        ],
        "explanation": "Thao tác bàn phím kết hợp chuột.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 397,
        "text": "Để xóa vĩnh viễn dữ liệu trong Thùng rác (Recycle Bin), em chọn lệnh nào?",
        "options": [
          "Empty Recycle Bin",
          "Restore",
          "Delete",
          "Close"
        ],
        "correctAnswer": 0,
        "explanation": "Lệnh dọn thùng rác giải phóng ổ cứng.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 398,
        "text": "Trước khi rút USB ra khỏi máy tính, em nên làm gì để bảo vệ dữ liệu?",
        "options": [
          "Giật mạnh USB ra",
          "Tắt máy tính",
          "Chọn lệnh Eject (Đẩy ra an toàn)",
          "Rút dây nguồn"
        ],
        "correctAnswer": 2,
        "explanation": "Đảm bảo các tiến trình ghi dữ liệu đã hoàn tất.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 399,
        "text": "Mạng máy tính giúp em trao đổi thông tin với bạn bè ở khắp mọi nơi.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Xóa tan khoảng cách địa lý.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 400,
        "text": "Thư mục mẹ chứa thư mục con, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là mối quan hệ cha-con trong hệ thống tệp.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 401,
        "text": "Biểu tượng nào trong File Explorer giúp em quay lại thư mục cha?",
        "options": [
          "Mũi tên lên (Up)",
          "Mũi tên sang trái",
          "Mũi tên sang phải",
          "Dấu X"
        ],
        "correctAnswer": 0,
        "explanation": "Nút Up giúp lên một cấp thư mục.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 402,
        "text": "Để xem thông tin về ngày tạo và dung lượng tệp, em chọn chế độ xem nào?",
        "options": [
          "Icons",
          "Details",
          "Tiles",
          "Content"
        ],
        "correctAnswer": 1,
        "explanation": "Chế độ Details liệt kê đầy đủ thông số tệp.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 403,
        "text": "Nối biểu tượng tệp với phần mở rộng tương ứng:",
        "pairs": [
          {
            "left": "Microsoft Word",
            "right": ".docx"
          },
          {
            "left": "Microsoft Excel",
            "right": ".xlsx"
          },
          {
            "left": "Microsoft PowerPoint",
            "right": ".pptx"
          }
        ],
        "explanation": "Nhận diện định dạng tệp văn phòng.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MATCHING"
      },
      {
        "id": 404,
        "text": "Khi tìm kiếm thông tin trên sách báo khác gì so với trên Internet?",
        "options": [
          "Sách báo có tin cậy hơn (thường được kiểm duyệt)",
          "Internet nhanh hơn nhưng cần kiểm chứng",
          "Sách báo khó tìm kiếm hơn",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Mỗi nguồn tin có ưu và nhược điểm riêng.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 405,
        "text": "Việc lưu trữ thông tin đúng cách giúp em trở thành một người ngăn nắp hơn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Kỹ năng tổ chức là một phần của tư duy tin học.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 406,
        "text": "Sắp xếp để tạo một thư mục 'ANH-LOP' bên trong thư mục 'HINH-ANH':",
        "options": [
          "Mở thư mục HINH-ANH",
          "Nháy chuột phải và chọn New -> Folder",
          "Gõ ANH-LOP",
          "Nhấn Enter"
        ],
        "correctAnswer": [
          "Mở thư mục HINH-ANH",
          "Nháy chuột phải và chọn New -> Folder",
          "Gõ ANH-LOP",
          "Nhấn Enter"
        ],
        "explanation": "Kỹ năng tạo tổ chức thư mục lồng nhau.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "ORDERING"
      },
      {
        "id": 407,
        "text": "Phân loại các thao tác sau vào nhóm Sao chép hoặc Di chuyển:",
        "items": [
          "Lệnh Copy + Paste",
          "Lệnh Cut + Paste",
          "Giữ Ctrl khi kéo thả",
          "Kéo thả chuột từ ổ C sang ổ D"
        ],
        "targets": [
          "Sao chép",
          "Di chuyển"
        ],
        "correctAnswer": {
          "Lệnh Copy + Paste": "Sao chép",
          "Giữ Ctrl khi kéo thả": "Sao chép",
          "Lệnh Cut + Paste": "Di chuyển",
          "Kéo thả chuột từ ổ C sang ổ D": "Di chuyển"
        },
        "explanation": "Phân biệt bản chất của các thao tác dữ liệu.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "DRAG_DROP"
      },
      {
        "id": 408,
        "text": "Thông tin có thể tồn tại dưới dạng vật lý (sách) hoặc kỹ thuật số (tệp tin).",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dạng kỹ thuật số gọi là thông tin số.",
        "difficulty": "Easy",
        "topic": "Thông tin và tìm kiếm",
        "type": "TRUE_FALSE"
      },
      {
        "id": 409,
        "text": "Để bảo vệ dữ liệu quan trọng, em nên làm gì?",
        "options": [
          "Chỉ lưu ở 1 chỗ duy nhất",
          "Sao lưu sang nhiều thiết bị (USB, ổ cứng khác)",
          "Xóa đi sau khi dùng",
          "Để mật khẩu là tên mình"
        ],
        "correctAnswer": 1,
        "explanation": "Sao lưu (Backup) là cách an toàn nhất tránh mất dữ liệu.",
        "difficulty": "Hard",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      },
      {
        "id": 410,
        "text": "Trình quản lý tệp tin mặc định của Windows gọi là gì?",
        "options": [
          "Internet Explorer",
          "File Explorer",
          "My Computer",
          "Task Manager"
        ],
        "correctAnswer": 1,
        "explanation": "File Explorer (trước đây là Windows Explorer) là công cụ quản lý dữ liệu.",
        "difficulty": "Medium",
        "topic": "Thông tin và tìm kiếm",
        "type": "MCQ"
      }
    ]
  },
  {
    "id": 4,
    "title": "Chủ đề 4: Virus máy tính",
    "topic": "Virus máy tính",
    "description": "Nhận biết virus và cách bảo vệ máy tính của em.",
    "longDescription": "Học sinh sẽ được học về các dấu hiệu khi máy tính bị nhiễm virus, các thói quen duyệt web an toàn và các bước cần làm khi phát hiện máy tính có dấu hiệu bất thường.",
    "keyConcepts": [
      "Virus máy tính",
      "Phần mềm diệt virus",
      "Duyệt web an toàn",
      "Bảo mật thông tin"
    ],
    "icon": "ShieldAlert",
    "questions": [
      {
        "id": 411,
        "text": "Virus máy tính là gì?",
        "options": [
          "Một loại vi trùng gây bệnh cho người",
          "Một phần mềm độc hại do con người tạo ra để phá hoại máy tính",
          "Một loại thuốc cho máy tính",
          "Một linh kiện bên trong thân máy"
        ],
        "correctAnswer": 1,
        "explanation": "Virus máy tính là các chương trình phần mềm được tạo ra để lấy cắp thông tin hoặc phá hỏng dữ liệu.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 412,
        "text": "Dấu hiệu nào cho thấy máy tính có thể bị nhiễm virus?",
        "options": [
          "Máy tính chạy rất nhanh",
          "Màn hình hiển thị nhiều quảng cáo lạ và máy chạy chậm bất thường",
          "Bàn phím mới hơn",
          "Loa phát nhạc hay hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Máy chậm, đơ hoặc hiện thông báo lạ là biểu hiện phổ biến của virus.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 413,
        "text": "Khi gặp một liên kết (link) lạ từ một người em không quen biết trên mạng, em nên làm gì?",
        "options": [
          "Bấm vào xem là gì",
          "Gửi cho tất cả bạn bè",
          "Tuyệt đối không bấm vào và xóa tin nhắn đó",
          "Đợi đến tối mới bấm"
        ],
        "correctAnswer": 2,
        "explanation": "Các liên kết lạ thường chứa mã độc hoặc dẫn đến trang web lừa đảo.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 414,
        "text": "Phần mềm nào giúp máy tính tìm và loại bỏ các phần mềm độc hại?",
        "options": [
          "Phần mềm vẽ tranh Paint",
          "Phần mềm diệt virus (Antivirus)",
          "Trình xem video",
          "Máy tính bỏ túi Calculator"
        ],
        "correctAnswer": 1,
        "explanation": "Phần mềm diệt virus bảo vệ máy tính khỏi các mối đe dọa.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 415,
        "text": "Nếu nghi ngờ máy tính bị nhiễm virus, hành động nào là ĐÚNG nhất?",
        "options": [
          "Cứ tiếp tục sử dụng như bình thường",
          "Tự ý tháo máy ra sửa",
          "Thông báo ngay cho bố mẹ, thầy cô hoặc người lớn tin cậy",
          "Bấm vào các thông báo hiện ra"
        ],
        "correctAnswer": 2,
        "explanation": "Người lớn có kiến thức và công cụ để xử lý sự cố virus an toàn cho em.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 416,
        "text": "Em có nên tự ý tải các trò chơi từ những trang web lạ về máy tính không?",
        "options": [
          "Có, vì nó miễn phí",
          "Không, vì chúng có thể chứa virus",
          "Có, nếu bạn bảo hay",
          "Chỉ tải vào ban đêm"
        ],
        "correctAnswer": 1,
        "explanation": "Trang web không tin cậy thường gắn mã độc vào các tệp tải về.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 417,
        "text": "Máy tính có thể lây nhiễm virus từ thiết bị nào sau đây?",
        "options": [
          "Quyển sách",
          "Thẻ nhớ hoặc USB của người khác",
          "Cái bút chì",
          "Đôi giày"
        ],
        "correctAnswer": 1,
        "explanation": "Virus có thể lây lan qua các thiết bị lưu trữ ngoài.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 418,
        "text": "Biểu tượng của các phần mềm diệt virus thường có hình gì?",
        "options": [
          "Hình cái khiên hoặc dấu tích bảo vệ",
          "Hình bông hoa",
          "Hình cái kẹo",
          "Hình đám mây đen"
        ],
        "correctAnswer": 0,
        "explanation": "Hình cái khiên tượng trưng cho sự bảo vệ.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 419,
        "text": "Tại sao chúng ta cần thường xuyên cập nhật phần mềm diệt virus?",
        "options": [
          "Để nó có màu đẹp hơn",
          "Để nó nhận diện được các loại virus mới",
          "Để máy tính đỡ tốn điện",
          "Để loa kêu to hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Virus mới xuất hiện mỗi ngày, phần mềm cần cập nhật để biết cách chống lại chúng.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 420,
        "text": "Một tệp tin có biểu tượng lạ và tên lạ xuất hiện trên màn hình, em nên làm gì?",
        "options": [
          "Mở ra xem luôn",
          "Xóa ngay lập tức và không mở ra",
          "Đổi tên cho nó hay hơn",
          "Gửi cho bạn xem thử"
        ],
        "correctAnswer": 1,
        "explanation": "Đó có thể là file thực thi của virus.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 421,
        "text": "Virus máy tính có thể làm hỏng điều gì quan trọng nhất?",
        "options": [
          "Dòng điện trong nhà",
          "Dữ liệu, hình ảnh và tài liệu của em",
          "Cái bàn học",
          "Đôi mắt của em"
        ],
        "correctAnswer": 1,
        "explanation": "Virus tấn công phần mềm và dữ liệu lưu trữ.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 422,
        "text": "Khi duyệt web, nếu hiện lên bảng thông báo 'Bạn đã trúng thưởng 1 tỷ đồng, nhấn vào đây', em sẽ làm gì?",
        "options": [
          "Nhấn ngay để nhận tiền",
          "Tắt thông báo đó đi vì đó là lừa đảo/virus",
          "Ghi lại số điện thoại để gọi",
          "Mừng quá nhảy múa"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là chiêu dụ dỗ để cài virus hoặc lừa đảo.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 423,
        "text": "Virus máy tính có thể 'lây' từ máy này sang máy khác qua đâu?",
        "options": [
          "Nhìn nhau qua camera",
          "Sử dụng chung Internet hoặc USB",
          "Để hai máy cạnh nhau",
          "Nói chuyện qua micro"
        ],
        "correctAnswer": 1,
        "explanation": "Đường truyền dữ liệu là con đường lây lan của virus.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 424,
        "text": "Việc sao lưu (copy) dữ liệu sang một ổ cứng khác giúp ích gì khi bị virus?",
        "options": [
          "Làm máy chạy nhanh",
          "Giúp em không bị mất dữ liệu nếu virus xóa mất bản gốc",
          "Giúp máy tính đẹp hơn",
          "Để khoe với bạn"
        ],
        "correctAnswer": 1,
        "explanation": "Sao lưu là cách bảo vệ dữ liệu an toàn nhất.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 425,
        "text": "Phần mềm độc hại giả dạng một phần mềm hữu ích được gọi là gì?",
        "options": [
          "Virus",
          "Trojan (Ngựa gỗ Thành Troy)",
          "Sâu máy tính",
          "Phần mềm diệt virus"
        ],
        "correctAnswer": 1,
        "explanation": "Trojan là loại mã độc 'núp bóng' phần mềm tốt.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 426,
        "text": "Khi virus khóa máy tính và đòi tiền để mở lại, loại virus đó gọi là gì?",
        "options": [
          "Virus vui vẻ",
          "Ransomware (Virus tống tiền)",
          "Virus quảng cáo",
          "Virus dọn dẹp"
        ],
        "correctAnswer": 1,
        "explanation": "Ransomware mã hóa dữ liệu và đòi tiền chuộc.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 427,
        "text": "Cách tốt nhất để phòng tránh virus khi dùng email là gì?",
        "options": [
          "Mở tất cả thư",
          "Không mở thư và tệp đính kèm từ người lạ",
          "Trả lời mọi thư rác",
          "Xóa hết email"
        ],
        "correctAnswer": 1,
        "explanation": "Tệp đính kèm lạ là nguồn lây virus chính.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 428,
        "text": "Phần mềm diệt virus có thể diệt được 100% tất cả các loại virus trên thế giới không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Luôn có những virus mới mà phần mềm chưa cập nhật kịp.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 429,
        "text": "Nối các dấu hiệu với tình trạng máy tính tương ứng:",
        "pairs": [
          {
            "left": "Máy chạy rất chậm",
            "right": "Có thể bị virus chiếm tài nguyên"
          },
          {
            "left": "Hiện nhiều cửa sổ quảng cáo",
            "right": "Bị nhiễm virus quảng cáo"
          },
          {
            "left": "File bị đổi tên lạ",
            "right": "Dữ liệu bị virus tấn công"
          }
        ],
        "explanation": "Nhận biết các triệu chứng nhiễm mã độc.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MATCHING"
      },
      {
        "id": 430,
        "text": "Phân loại các hành động sau:",
        "items": [
          "Quét USB trước khi mở",
          "Mở mọi file đính kèm email",
          "Sử dụng phần mềm bản quyền",
          "Tắt tường lửa (Firewall)"
        ],
        "targets": [
          "An toàn",
          "Nguy hiểm"
        ],
        "correctAnswer": {
          "Quét USB trước khi mở": "An toàn",
          "Sử dụng phần mềm bản quyền": "An toàn",
          "Mở mọi file đính kèm email": "Nguy hiểm",
          "Tắt tường lửa (Firewall)": "Nguy hiểm"
        },
        "explanation": "Hình thành thói quen bảo mật.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "DRAG_DROP"
      },
      {
        "id": 431,
        "text": "Sắp xếp thứ tự các bước khi phát hiện máy tính có dấu hiệu nhiễm virus:",
        "options": [
          "Ngừng sử dụng",
          "Báo cho người lớn",
          "Dùng phần mềm quét virus",
          "Xóa các tệp độc hại nếu có"
        ],
        "correctAnswer": [
          "Ngừng sử dụng",
          "Báo cho người lớn",
          "Dùng phần mềm quét virus",
          "Xóa các tệp độc hại nếu có"
        ],
        "explanation": "Quy trình xử lý sự cố chuẩn.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "ORDERING"
      },
      {
        "id": 432,
        "text": "Virus máy tính có thể lây qua việc cắm sạc điện thoại vào máy tính không?",
        "options": [
          "Có, nếu điện thoại bị nhiễm",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Kết nối dữ liệu qua cáp sạc có thể truyền mã độc.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 433,
        "text": "Bật tính năng 'Tường lửa' (Firewall) giúp ích gì?",
        "options": [
          "Làm máy mát hơn",
          "Ngăn chặn sự xâm nhập trái phép từ mạng",
          "Giúp loa to hơn",
          "Thay đổi màu màn hình"
        ],
        "correctAnswer": 1,
        "explanation": "Tường lửa là lớp bảo vệ đầu tiên của mạng.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 434,
        "text": "Một người bạn gửi link bảo 'Nhấn vào đây để xem ảnh tớ nhé', nhưng link đó trông rất lạ (nhiều ký tự lạ), em nên làm gì?",
        "options": [
          "Nhấn luôn vì là bạn thân",
          "Hỏi lại bạn qua phương thức khác xem có đúng bạn gửi không",
          "Xóa bạn luôn",
          "Đưa cho bạn khác nhấn thử"
        ],
        "correctAnswer": 1,
        "explanation": "Tài khoản của bạn có thể đã bị virus chiếm quyền gởi link.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 435,
        "text": "Việc sử dụng phần mềm 'lậu' (không bản quyền) có nguy cơ gì?",
        "options": [
          "Không có nguy cơ gì",
          "Dễ bị cài sẵn virus hoặc mã độc",
          "Được tặng thêm quà",
          "Máy chạy nhanh hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Phần mềm không chính thống thường chứa rủi ro bảo mật.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 436,
        "text": "Nếu virus xóa mất một tệp quan trọng, em có thể lấy lại được không?",
        "options": [
          "Không bao giờ",
          "Có thể, nếu em có bản sao lưu (Backup)",
          "Chỉ cần khởi động lại máy",
          "Mua máy mới"
        ],
        "correctAnswer": 1,
        "explanation": "Bản sao lưu lưu giữ dữ liệu an toàn bên ngoài máy.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 437,
        "text": "Virus có thể tự sinh ra từ không khí xung quanh máy tính không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Virus là do con người viết ra và truyền qua dữ liệu.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 438,
        "text": "Khi đi máy bay, tắt máy tính có giúp tránh virus không?",
        "options": [
          "Có",
          "Không liên quan"
        ],
        "correctAnswer": 1,
        "explanation": "Virus lây qua dữ liệu, không phải qua việc bay.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 439,
        "text": "Em có nên cho người lạ mượn máy tính cá nhân không?",
        "options": [
          "Có",
          "Không, để tránh họ cài phần mềm lạ hoặc virus"
        ],
        "correctAnswer": 1,
        "explanation": "Bảo vệ truy cập vật lý cũng rất quan trọng.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 440,
        "text": "Cài đặt mật khẩu mạnh cho máy tính giúp gì?",
        "options": [
          "Làm máy đẹp hơn",
          "Hạn chế người lạ truy cập và cài phần mềm độc hại",
          "Giúp gõ nhanh hơn",
          "Tiết kiệm pin"
        ],
        "correctAnswer": 1,
        "explanation": "Mật khẩu là lớp bảo vệ truy cập.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 441,
        "text": "Nếu một trang web nói máy tính của bạn bị nhiễm 100 con virus và yêu cầu tải phần mềm dọn dẹp, em nên làm gì?",
        "options": [
          "Tải ngay",
          "Tắt trang đó đi, đó thường là quảng cáo lừa đảo để cài virus thật",
          "Gửi cho bố xem",
          "Lấy khăn lau máy"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là chiêu lừa cài mã độc phổ biến.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 442,
        "text": "Virus máy tính có thể tấn công điện thoại thông minh không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Smartphone cũng là một loại máy tính và có thể bị nhiễm mã độc.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 443,
        "text": "Dọn dẹp các tệp rác thường xuyên có giúp máy tính an toàn hơn không?",
        "options": [
          "Có, giúp máy gọn gàng và dễ phát hiện file lạ",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Quản lý file tốt giúp bảo mật tốt hơn.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 444,
        "text": "Phần mềm diệt virus miễn phí có tốt không?",
        "options": [
          "Cũng tốt nhưng thường thiếu các tính năng nâng cao so với bản trả phí",
          "Tốt nhất thế giới",
          "Không có tác dụng gì",
          "Rất nguy hiểm"
        ],
        "correctAnswer": 0,
        "explanation": "Phần mềm miễn phí vẫn cung cấp mức bảo vệ cơ bản.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 445,
        "text": "Việc tắt máy tính khi không sử dụng có giảm nguy cơ bị virus tấn công từ mạng không?",
        "options": [
          "Có, vì lúc đó máy không kết nối mạng",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Máy không hoạt động thì virus không thể xâm nhập qua mạng.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 446,
        "text": "Tìm lỗi sai: 'Virus máy tính là một loại vi khuẩn sinh học.'",
        "options": [
          "Virus",
          "máy tính",
          "vi khuẩn",
          "sinh học"
        ],
        "correctAnswer": 3,
        "errorPart": "sinh học",
        "correction": "Đó là một chương trình máy tính (phần mềm).",
        "explanation": "Virus máy tính không sống trong tự nhiên.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "FIND_ERROR"
      },
      {
        "id": 447,
        "text": "Nối loại mã độc với đặc điểm của nó:",
        "pairs": [
          {
            "left": "Spyware",
            "right": "Phần mềm theo dõi thông tin"
          },
          {
            "left": "Adware",
            "right": "Phần mềm hiện quảng cáo"
          },
          {
            "left": "Worm",
            "right": "Sâu máy tính tự nhân bản"
          }
        ],
        "explanation": "Phân biệt các loại mã độc cơ bản.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MATCHING"
      },
      {
        "id": 448,
        "text": "Nếu em lỡ nhấn vào link virus, em nên làm gì ngay lập tức?",
        "options": [
          "Tắt máy tính ngay",
          "Rút dây mạng/Tắt Wifi và báo người lớn",
          "Cứ để máy chạy",
          "Khóc"
        ],
        "correctAnswer": 1,
        "explanation": "Ngắt kết nối mạng giúp ngăn virus gửi dữ liệu đi hoặc tải thêm mã độc.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 449,
        "text": "Ổ đĩa CD/DVD có thể chứa virus không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Bất kỳ thiết bị lưu trữ dữ liệu nào cũng có thể mang virus.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 450,
        "text": "Để bảo vệ máy tính, em nên cài bao nhiêu phần mềm diệt virus một lúc?",
        "options": [
          "Càng nhiều càng tốt",
          "Chỉ nên cài 1 phần mềm chính để tránh xung đột làm máy chậm",
          "Không nên cài cái nào",
          "Cài 10 cái"
        ],
        "correctAnswer": 1,
        "explanation": "Cài nhiều phần mềm diệt virus một lúc sẽ làm máy rất đơ.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 451,
        "text": "Lớp vỏ bảo vệ bên ngoài của máy tính giúp chống lại các loại virus phần mềm đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Vỏ máy chỉ bảo vệ linh kiện vật lý.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 452,
        "text": "Khi dùng chung máy tính ở trường, em nên làm gì để tránh virus từ USB của các bạn?",
        "options": [
          "Không dùng USB",
          "Quét virus USB trước khi sao chép dữ liệu",
          "Phun nước vào USB",
          "Bọc USB bằng giấy"
        ],
        "correctAnswer": 1,
        "explanation": "Kiểm tra trước khi kết nối là an toàn nhất.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 453,
        "text": "Virus có thể làm màn hình máy tính bị nứt vỡ không?",
        "options": [
          "Có",
          "Không, nó chỉ làm hỏng phần mềm bên trong"
        ],
        "correctAnswer": 1,
        "explanation": "Virus không gây hỏng hóc vật lý trực tiếp như nứt vỡ.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 454,
        "text": "Dùng Internet công cộng (như ở quán cà phê) có nguy cơ bị nhiễm virus cao hơn ở nhà không?",
        "options": [
          "Có, vì tính bảo mật thấp hơn",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Mạng công cộng thường ít an toàn hơn mạng gia đình.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 455,
        "text": "Sắp xếp các bước cài đặt phần mềm diệt virus cho máy mới:",
        "options": [
          "Tải bộ cài từ trang chủ uy tín",
          "Chạy file cài đặt",
          "Nhập mã kích hoạt (nếu có)",
          "Quét toàn bộ máy lần đầu"
        ],
        "correctAnswer": [
          "Tải bộ cài từ trang chủ uy tín",
          "Chạy file cài đặt",
          "Nhập mã kích hoạt (nếu có)",
          "Quét toàn bộ máy lần đầu"
        ],
        "explanation": "Quy trình thiết lập bảo vệ cơ bản.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "ORDERING"
      },
      {
        "id": 456,
        "text": "Hành động nào sau đây giúp em an toàn khi duyệt web?",
        "options": [
          "Nhấn vào mọi quảng cáo xinh xắn",
          "Chỉ vào các trang web quen thuộc và có độ tin cậy cao",
          "Chia sẻ mật khẩu cho trang web lạ",
          "Gửi địa chỉ nhà cho người lạ"
        ],
        "correctAnswer": 1,
        "explanation": "Cẩn thận khi chọn trang web truy cập.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 457,
        "text": "Để biết máy tính có đang được bảo vệ không, em nên nhìn vào đâu?",
        "options": [
          "Màn hình nền",
          "Khay hệ thống (góc dưới bên phải) xem có icon phần mềm diệt virus không",
          "Bàn phím",
          "Chuột"
        ],
        "correctAnswer": 1,
        "explanation": "Trạng thái bảo vệ thường hiện ở khay hệ thống.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 458,
        "text": "Nếu virus tự động gửi email cho mọi người trong danh bạ của em, em nên làm gì?",
        "options": [
          "Mặc kệ",
          "Đổi mật khẩu email và báo cho mọi người biết tin nhắn đó là do virus",
          "Xóa email",
          "Bán máy tính"
        ],
        "correctAnswer": 1,
        "explanation": "Cần cảnh báo mọi người để họ không nhấn vào link độc.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 459,
        "text": "Việc đặt tên file quá dài có phải là nguyên nhân gây ra virus không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tên file dài không tạo ra virus.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 460,
        "text": "Nối phím tắt với hành động bảo mật nhanh:",
        "pairs": [
          {
            "left": "Windows + L",
            "right": "Khóa máy tính ngay lập tức"
          },
          {
            "left": "Ctrl + Alt + Del",
            "right": "Mở menu quản lý tác vụ/đổi mật khẩu"
          },
          {
            "left": "Alt + F4",
            "right": "Đóng cửa sổ đang chạy nhanh"
          }
        ],
        "explanation": "Kỹ năng sử dụng máy tính an toàn và nhanh chóng.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MATCHING"
      },
      {
        "id": 461,
        "text": "Phân loại các nguồn sau vào nhóm Tin cậy hoặc Không tin cậy:",
        "items": [
          "Trang web của Bộ Giáo dục",
          "Link nhận quà từ người lạ trên Facebook",
          "Đĩa phần mềm mua tại cửa hàng uy tín",
          "Trang web tải game 'lcrack'"
        ],
        "targets": [
          "Tin cậy",
          "Không tin cậy"
        ],
        "correctAnswer": {
          "Trang web của Bộ Giáo dục": "Tin cậy",
          "Đĩa phần mềm mua tại cửa hàng uy tín": "Tin cậy",
          "Link nhận quà từ người lạ trên Facebook": "Không tin cậy",
          "Trang web tải game 'lcrack'": "Không tin cậy"
        },
        "explanation": "Đánh giá độ an toàn của nguồn dữ liệu.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "DRAG_DROP"
      },
      {
        "id": 462,
        "text": "Virus có thể làm máy tính bị 'đơ' (không phản hồi) hay không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Virus chiếm dụng bộ nhớ làm máy không xử lý được việc khác.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 463,
        "text": "Tại sao không nên cắm nhiều USB lạ vào máy tính liên tục?",
        "options": [
          "Làm máy bị chật",
          "Tăng nguy cơ lây nhiễm virus chéo",
          "Làm máy nhanh hết pin",
          "Làm hỏng cổng USB"
        ],
        "correctAnswer": 1,
        "explanation": "Mỗi USB lạ là một nguồn nguy cơ tiềm ẩn.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 464,
        "text": "Khi thấy màn hình hiện thông báo 'Phần mềm của bạn đã hết hạn, hãy thanh toán để tiếp tục sử dụng' dù em chưa cài gì, đó có thể là gì?",
        "options": [
          "Thật sự cần trả tiền",
          "Quảng cáo lừa đảo hoặc virus",
          "Máy tính đang dặn dò em",
          "Hệ điều hành nhắc nhở"
        ],
        "correctAnswer": 1,
        "explanation": "Đừng vội tin các thông báo đòi tiền lạ.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 465,
        "text": "Sắp xếp để bật Windows Defender (phần mềm diệt virus có sẵn của Windows):",
        "options": [
          "Vào Settings",
          "Chọn Update & Security",
          "Chọn Windows Security",
          "Bật Virus & threat protection"
        ],
        "correctAnswer": [
          "Vào Settings",
          "Chọn Update & Security",
          "Chọn Windows Security",
          "Bật Virus & threat protection"
        ],
        "explanation": "Kích hoạt bảo vệ mặc định.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "ORDERING"
      },
      {
        "id": 466,
        "text": "Sâu máy tính (Worm) khác virus ở điểm nào chính?",
        "options": [
          "Nó to hơn",
          "Nó có thể tự lây lan qua mạng mà không cần sự can thiệp của con người",
          "Nó chỉ sống trong Word",
          "Nó có màu xanh"
        ],
        "correctAnswer": 1,
        "explanation": "Worm có khả năng tự nhân bản và lây lan cực nhanh qua mạng.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 467,
        "text": "Máy tính của em có nên cài 10 phần mềm diệt virus cùng lúc cho cực kỳ an toàn không?",
        "options": [
          "Có",
          "Không, vì chúng sẽ tranh chấp và làm hỏng máy"
        ],
        "correctAnswer": 1,
        "explanation": "Chỉ nên chọn 1 phần mềm uy tín duy nhất.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 468,
        "text": "Chụp ảnh màn hình (Screenshot) có giúp diệt virus không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Chụp ảnh chỉ lưu lại hình ảnh, không tác động đến phần mềm.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 469,
        "text": "Virus có thể tự đổi màu màn hình máy tính của em sang màu khác không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Virus có thể can thiệp vào cài đặt hiển thị.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 470,
        "text": "Tại sao phải quét virus cho máy tính định kỳ (hàng tuần/hàng tháng)?",
        "options": [
          "Để máy đỡ bụi",
          "Để phát hiện sớm các virus đang ẩn mình mà em chưa biết",
          "Để máy tính đỡ nóng",
          "Để gõ phím nhanh hơn"
        ],
        "correctAnswer": 1,
        "explanation": "Phòng bệnh hơn chữa bệnh.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 471,
        "text": "Khi chơi game online, em có nên tiết lộ mật khẩu cho bạn cùng chơi không?",
        "options": [
          "Có, để bạn chơi hộ",
          "Không, để tránh bạn lấy mất tài khoản hoặc cài mã độc",
          "Có, nếu bạn cho đồ",
          "Chỉ nói cho bạn thân nhất"
        ],
        "correctAnswer": 1,
        "explanation": "Mật khẩu là thông tin tuyệt mật.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 472,
        "text": "Sử dụng trình duyệt web bản mới nhất giúp bảo vệ máy tính tốt hơn đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Bản mới vá các lỗ hổng bảo mật mà virus hay lợi dụng.",
        "difficulty": "Medium",
        "topic": "Virus máy tính",
        "type": "TRUE_FALSE"
      },
      {
        "id": 473,
        "text": "Thiết bị nào sau đây KHÔNG THỂ lây nhiễm virus máy tính?",
        "options": [
          "USB",
          "Đĩa CD",
          "Chiếc lược chải đầu",
          "Ổ cứng ngoài"
        ],
        "correctAnswer": 2,
        "explanation": "Lược không chứa dữ liệu số nên không mang virus máy tính.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 474,
        "text": "Lợi ích của việc nén file (Zip/Rar) trước khi gửi qua mạng là gì?",
        "options": [
          "Làm file đẹp hơn",
          "Một số virus khó xâm nhập vào file nén hơn và truyền nhanh hơn",
          "Máy tính sẽ cười",
          "Làm file nặng thêm"
        ],
        "correctAnswer": 1,
        "explanation": "Nén file giúp quản lý và bảo vệ dữ liệu tốt hơn.",
        "difficulty": "Hard",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 475,
        "text": "Tìm lỗi sai: 'Khi máy tính bị virus, cách tốt nhất là đổ nước xà phòng vào thân máy để rửa.'",
        "options": [
          "máy tính",
          "bị virus",
          "nước xà phòng",
          "thân máy"
        ],
        "correctAnswer": 2,
        "errorPart": "nước xà phòng",
        "correction": "Dùng phần mềm diệt virus chuyên dụng.",
        "explanation": "Nước phá hỏng hoàn toàn máy tính.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "FIND_ERROR"
      },
      {
        "id": 476,
        "text": "Khi mượn máy tính của bạn để làm bài, em có nên tự ý cài đặt thêm các phần mềm lạ không?",
        "options": [
          "Có, để máy bạn xịn hơn",
          "Không, vì có thể vô tình cài virus vào máy bạn",
          "Có, nếu thấy hay",
          "Chỉ cài vào lúc bạn không để ý"
        ],
        "correctAnswer": 1,
        "explanation": "Cần xin phép và đảm bảo an toàn cho máy tính của người khác.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      },
      {
        "id": 477,
        "text": "USB của một người lạ nhặt được trên đường có nên cắm vào máy tính của em không?",
        "options": [
          "Có, để xem có gì hay không",
          "Không, đó là nguồn lây nhiễm virus cực kỳ nguy hiểm",
          "Có, nếu USB trông đẹp",
          "Chỉ cắm khi máy đang tắt"
        ],
        "correctAnswer": 1,
        "explanation": "Không bao giờ cắm thiết bị lạ vào máy tính.",
        "difficulty": "Easy",
        "topic": "Virus máy tính",
        "type": "MCQ"
      }
    ]
  },
  {
    "id": 5,
    "title": "Chủ đề 5: Đạo đức số",
    "topic": "Đạo đức số",
    "description": "Sử dụng công nghệ có trách nhiệm.",
    "icon": "ShieldCheck",
    "questions": [
      {
        "id": 478,
        "text": "Khi mượn máy tính của bạn, em nên làm gì?",
        "options": [
          "Tự ý xóa tệp của bạn",
          "Giữ giữ máy sạch sẽ và trả đúng hạn",
          "Đổi mật khẩu máy",
          "Làm đổ nước vào máy"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng đồ dùng của người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 479,
        "text": "Em nên làm gì khi thấy một nội dung xấu hoặc bắt nạt trên mạng?",
        "options": [
          "Tham gia cùng",
          "Im lặng",
          "Báo ngay cho bố mẹ hoặc thầy cô",
          "Chia sẻ cho bạn khác"
        ],
        "correctAnswer": 2,
        "explanation": "Cần tìm kiếm sự trợ giúp từ người lớn đáng tin cậy.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 480,
        "text": "Sử dụng máy tính quá lâu (trên 2 tiếng liên tục) có hại cho mắt không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Cần nghỉ ngơi để mắt được thư giãn.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 481,
        "text": "Nhắn tin lịch sự với bạn bè là một phần của văn hóa số.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Luôn tử tế và tôn trọng người khác trên không gian mạng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 482,
        "text": "Nối hành vi với đánh giá tương ứng:",
        "pairs": [
          {
            "left": "Giữ bí mật mật khẩu",
            "right": "An toàn"
          },
          {
            "left": "Nói xấu bạn trên mạng",
            "right": "Thiếu văn hóa"
          },
          {
            "left": "Tắt máy khi không dùng",
            "right": "Tiết kiệm"
          }
        ],
        "explanation": "Phân biệt hành vi đúng và sai khi dùng công nghệ.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 483,
        "text": "Phân loại các tình huống sau vào nhóm Nên kể với bố mẹ hoặc Có thể tự xử lý:",
        "items": [
          "Bị người lạ đe dọa",
          "Máy tính bị đơ nhẹ",
          "Thấy nội dung xấu",
          "Quên cách bật loa"
        ],
        "targets": [
          "Nên kể với bố mẹ",
          "Tự xử lý"
        ],
        "correctAnswer": {
          "Bị người lạ đe dọa": "Nên kể với bố mẹ",
          "Thấy nội dung xấu": "Nên kể với bố mẹ",
          "Máy tính bị đơ nhẹ": "Tự xử lý",
          "Quên cách bật loa": "Tự xử lý"
        },
        "explanation": "Người lớn sẽ giúp em giải quyết các vấn đề phức tạp trên mạng.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 484,
        "text": "Tìm lỗi sai trong chuẩn mực ứng xử sau:",
        "options": [
          "1. Chào hỏi lịch sự",
          "2. Cảm ơn khi nhận quà",
          "3. Quay lén bạn để đùa",
          "4. Giúp bạn học tập"
        ],
        "correctAnswer": 2,
        "errorPart": "Quay lén bạn để đùa",
        "correction": "Quay lén người khác mà không được phép là hành vi thiếu tôn trọng và vi phạm quyền riêng tư.",
        "explanation": "Tôn trọng quyền riêng tư của mọi người.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "FIND_ERROR"
      },
      {
        "id": 485,
        "text": "Nối các biểu tượng cảm xúc với ý nghĩa của chúng:",
        "pairs": [
          {
            "left": "😊",
            "right": "Vui vẻ"
          },
          {
            "left": "😢",
            "right": "Buồn bã"
          },
          {
            "left": "😮",
            "right": "Ngạc nhiên"
          }
        ],
        "explanation": "Sử dụng biểu tượng giúp trao đổi tình cảm dễ dàng hơn trên mạng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 486,
        "text": "Em nên chia sẻ mật khẩu máy tính của mình cho ai?",
        "options": [
          "Bạn thân",
          "Người lạ trên mạng",
          "Chỉ bố mẹ hoặc thầy cô",
          "Không cho ai biết"
        ],
        "correctAnswer": 2,
        "explanation": "Chỉ người lớn đáng tin cậy mới cần biết thông tin bảo mật của em.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 487,
        "text": "Hành động nào giúp em tiết kiệm điện khi không dùng máy tính?",
        "options": [
          "Để màn hình sáng",
          "Chạy nhiều phần mềm",
          "Tắt máy và rút phích cắm",
          "Mở nhạc to"
        ],
        "correctAnswer": 2,
        "explanation": "Tắt máy giúp tiết kiệm năng lượng và bảo vệ môi trường.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 488,
        "text": "Khi thấy một bạn bị bắt nạt qua tin nhắn, em nên làm gì?",
        "options": [
          "Tham gia bắt nạt cùng",
          "Im lặng coi như không biết",
          "Báo cáo với thầy cô hoặc bố mẹ",
          "Chia sẻ tin nhắn đó cho cả lớp xem"
        ],
        "correctAnswer": 2,
        "explanation": "Cần bảo vệ bạn và ngăn chặn hành vi xấu.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 489,
        "text": "Trang web nào sau đây em nên tránh truy cập?",
        "options": [
          "Trang web học tập của nhà trường",
          "Trang web chứa nhiều quảng cáo lạ và hình ảnh đáng sợ",
          "Trang web xem lịch thi đấu bóng đá",
          "Trang web tra điển trực tuyến"
        ],
        "correctAnswer": 1,
        "explanation": "Cần cảnh giác với các trang web không lành mạnh.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 490,
        "text": "Tại sao em không nên dùng máy tính liên tục trong nhiều giờ?",
        "options": [
          "Làm tốn điện nhà trường",
          "Gây mỏi mắt, đau vai gáy và ảnh hưởng sức khỏe",
          "Máy tính sẽ bị mệt",
          "Để dành máy cho người khác"
        ],
        "correctAnswer": 1,
        "explanation": "Sử dụng máy tính điều độ giúp bảo vệ sức khỏe.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 491,
        "text": "Khi muốn dùng ảnh của bạn để đăng lên mạng, em cần phải làm gì?",
        "options": [
          "Cứ đăng thoải mái",
          "Hỏi mượn điện thoại bạn",
          "Xin phép bạn và được bạn đồng ý",
          "Dùng phần mềm xóa mặt bạn"
        ],
        "correctAnswer": 2,
        "explanation": "Tôn trọng quyền riêng tư của người khác.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 492,
        "text": "Nối tình huống với cách xử lý đúng:",
        "pairs": [
          {
            "left": "Nhận được tin nhắn đe dọa",
            "right": "Báo cho người lớn ngay"
          },
          {
            "left": "Máy tính bị hỏng phần cứng",
            "right": "Nhờ thợ sửa chữa chuyên nghiệp"
          },
          {
            "left": "Muốn học thêm tin học",
            "right": "Đăng ký câu lạc bộ tin học"
          }
        ],
        "explanation": "Biết cách xử lý các tình huống thường gặp.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 493,
        "text": "Sử dụng ngôn ngữ lịch sự khi nhắn tin trên mạng thể hiện em là người văn minh.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Văn hóa ứng xử trên mạng cũng quan trọng như ngoài đời.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 494,
        "text": "Em có thể tự ý lấy tài liệu của người khác rồi ghi tên mình vào làm tác giả.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là hành vi đạo văn, vi phạm bản quyền.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 495,
        "text": "Phân loại các thông tin sau vào nhóm Nên chia sẻ hoặc Không nên chia sẻ lên mạng:",
        "items": [
          "Bài hát hay",
          "Mật khẩu email",
          "Ảnh phong cảnh đẹp",
          "Địa chỉ nhà riêng"
        ],
        "targets": [
          "Nên chia sẻ",
          "Không nên chia sẻ"
        ],
        "correctAnswer": {
          "Bài hát hay": "Nên chia sẻ",
          "Ảnh phong cảnh đẹp": "Nên chia sẻ",
          "Mật khẩu email": "Không nên chia sẻ",
          "Địa chỉ nhà riêng": "Không nên chia sẻ"
        },
        "explanation": "Bảo vệ thông tin cá nhân là rất quan trọng.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 496,
        "text": "Sử dụng máy tính trong thời gian dài có thể gây ra hiện tượng gì?",
        "options": [
          "Cận thị",
          "Cong vẹo cột sống",
          "Mệt mỏi, đau đầu",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Tác hại của việc lạm dụng máy tính.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 497,
        "text": "Để bảo vệ môi trường, em nên làm gì với pin cũ của máy tính?",
        "options": [
          "Vứt vào thùng rác sinh hoạt",
          "Vứt xuống sông",
          "Mang đến điểm thu gom rác thải điện tử",
          "Chôn xuống đất"
        ],
        "correctAnswer": 2,
        "explanation": "Pin chứa hóa chất độc hại cần xử lý riêng.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 498,
        "text": "Khi thấy bài vẽ của bạn rất đẹp, em nên làm gì?",
        "options": [
          "Sao chép về máy mình và nói là do mình vẽ",
          "Khen ngợi bạn và hỏi cách vẽ",
          "Xóa bài của bạn",
          "Tự ý sửa bài của bạn"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng thành quả của người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 499,
        "text": "Hành động nào thể hiện sự tôn trọng bản quyền?",
        "options": [
          "Dùng phần mềm bẻ khóa",
          "Ghi rõ nguồn khi trích dẫn tài liệu của người khác",
          "Tải phim lậu",
          "Chia sẻ nhạc mà chưa được phép"
        ],
        "correctAnswer": 1,
        "explanation": "Trích dẫn nguồn là tôn trọng tác giả.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 500,
        "text": "Nối hành vi với tác động của nó:",
        "pairs": [
          {
            "left": "Chơi game quá 3h/ngày",
            "right": "Hại sức khỏe, lơ là học tập"
          },
          {
            "left": "Học tin học mỗi ngày",
            "right": "Tăng cường kiến thức số"
          },
          {
            "left": "Giúp bạn tắt máy đúng cách",
            "right": "Hỗ trợ bạn bè bảo vệ máy"
          }
        ],
        "explanation": "Mỗi hành động đều đưa đến những kết quả khác nhau.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 501,
        "text": "Em có thể tin tưởng hoàn toàn vào một người bạn mới quen chỉ qua tin nhắn mạng xã hội.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Cần cảnh giác với các mối quan hệ ảo.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 502,
        "text": "Việc sử dụng máy tính giúp tiết kiệm giấy và bảo vệ rừng đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Lưu trữ số giảm nhu cầu in ấn trên giấy.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 503,
        "text": "Dùng máy tính để lan truyền tin đồn sai sự thật về một bạn khác là hành động vi phạm đạo đức số.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Bắt nạt qua mạng gây tổn thương sâu sắc cho người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 504,
        "text": "Sắp xếp các bước để xử lý khi gặp một trang web đáng sợ trên mạng:",
        "options": [
          "Tắt ngay trình duyệt",
          "Rời xa máy tính",
          "Báo cáo cho người lớn",
          "Quên nó đi và làm việc khác"
        ],
        "correctAnswer": [
          "Tắt ngay trình duyệt",
          "Rời xa máy tính",
          "Báo cáo cho người lớn",
          "Quên nó đi và làm việc khác"
        ],
        "explanation": "Kỹ năng thoát khỏi nội dung tiêu cực.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 505,
        "text": "Khi điền thông tin cá nhân vào các mẫu đăng ký trên mạng, em nên làm gì?",
        "options": [
          "Điền thật đầy đủ và chính xác",
          "Chỉ điền những gì bắt buộc và xin phép bố mẹ",
          "Điền thông tin của người khác",
          "Cố tình điền sai để trêu"
        ],
        "correctAnswer": 1,
        "explanation": "Luôn hỏi ý kiến người lớn trước khi cung cấp thông tin.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 506,
        "text": "Tại sao nên tắt máy tính khi trời đang có sấm sét lớn?",
        "options": [
          "Máy tính sợ tiếng sấm",
          "Để tránh bị sét đánh gây cháy nổ linh kiện",
          "Để đi ngủ cho sớm",
          "Tiết kiệm pin cho máy"
        ],
        "correctAnswer": 1,
        "explanation": "Sét có thể truyền qua đường dây điện gây hỏng máy.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 507,
        "text": "Khi muốn thoát khỏi một trò chơi trên mạng, em nên chọn nút nào?",
        "options": [
          "Home",
          "Exit hoặc Quit",
          "Start",
          "Pause"
        ],
        "correctAnswer": 1,
        "explanation": "Nút thoát giúp kết thúc trò chơi đúng cách.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 508,
        "text": "Việc sử dụng máy tính giúp em học tập tốt hơn nếu biết dùng đúng cách đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Máy tính là công cụ hỗ trợ học tập đắc lực.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 509,
        "text": "Hành động cho bạn mượn tài khoản học tập để bạn làm bài hộ là hành động trung thực đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là hành động gian lận trong học tập.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 510,
        "text": "Cần lau bụi bàn phím thường xuyên để máy sạch sẽ và hoạt động tốt đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Vệ sinh máy tính cũng là một phần của việc bảo quản tài sản số.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 511,
        "text": "Nối hành vi với cảm xúc tương ứng của người nhận:",
        "pairs": [
          {
            "left": "Gửi tin nhắn động viên",
            "right": "Vui vẻ, ấm áp"
          },
          {
            "left": "Gửi tin nhắn chê bai",
            "right": "Buồn bã, tự ti"
          },
          {
            "left": "Gửi tin nhắn rác liên tục",
            "right": "Phiền phức, khó chịu"
          }
        ],
        "explanation": "Suy nghĩ đến cảm xúc của người khác trước khi gửi tin.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 512,
        "text": "Phân loại các thiết bị sau vào nhóm Được phép mang vào phòng thi hoặc Không được phép mang vào phòng thi (theo quy định chung):",
        "items": [
          "Bút chì",
          "Điện thoại thông minh",
          "Máy tính cầm tay (loại được phép)",
          "Máy ghi âm có kết nối mạng"
        ],
        "targets": [
          "Được phép",
          "Không được phép"
        ],
        "correctAnswer": {
          "Bút chì": "Được phép",
          "Máy tính cầm tay (loại được phép)": "Được phép",
          "Điện thoại thông minh": "Không được phép",
          "Máy ghi âm có kết nối mạng": "Không được phép"
        },
        "explanation": "Tuân thủ quy định thi cử nghiêm túc.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 513,
        "text": "Khi thấy tin nhắn mời nạp tiền điện thoại từ một người lạ, em nên làm gì?",
        "options": [
          "Nạp ngay",
          "Nhắn tin hỏi kỹ",
          "Báo cho người lớn và bỏ qua",
          "Cho họ số tài khoản của mình"
        ],
        "correctAnswer": 2,
        "explanation": "Đề phòng lừa đảo trực tuyến.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 514,
        "text": "Hành động nào tiết kiệm điện năng cho máy tính nhất?",
        "options": [
          "Để màn hình sáng tối đa",
          "Dùng xong không tắt máy",
          "Sử dụng chế độ Sleep khi đi vệ sinh",
          "Chạy nhiều phần mềm cùng lúc"
        ],
        "correctAnswer": 2,
        "explanation": "Chế độ Sleep giảm tiêu thụ năng lượng khi không dùng máy tạm thời.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 515,
        "text": "Việc sử dụng phần mềm có bản quyền giúp máy tính an toàn hơn đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Phần mềm lậu thường chứa virus và mã độc.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 516,
        "text": "Em có nên tự ý đăng ảnh của bạn khác lên mạng mà không hỏi ý kiến bạn không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Cần tôn trọng quyền riêng tư về hình ảnh của người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 517,
        "text": "Nối hành vi với tác động tới sức khỏe:",
        "pairs": [
          {
            "left": "Nhìn sát màn hình",
            "right": "Gây cận thị"
          },
          {
            "left": "Ngồi vẹo sang một bên",
            "right": "Gây vẹo cột sống"
          },
          {
            "left": "Ngồi thẳng và nghỉ giải lao",
            "right": "Giúp cơ thể khỏe mạnh"
          }
        ],
        "explanation": "Thói quen tốt bảo vệ sức khỏe khi dùng máy tính.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 518,
        "text": "Hành động nào giúp em giữ cho bàn phím luôn sạch sẽ?",
        "options": [
          "Ăn bánh mì khi đang gõ",
          "Để nước ngọt bên cạnh máy",
          "Rửa tay sạch và khô trước khi dùng",
          "Lấy khăn ướt sũng lau phím"
        ],
        "correctAnswer": 2,
        "explanation": "Tay sạch giúp phím không bị bám bẩn và kẹt.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 519,
        "text": "Khi mượn tai nghe của bạn, em cần làm gì trước khi sử dụng?",
        "options": [
          "Cứ thế đeo vào",
          "Xin phép bạn",
          "Lấy kéo cắt dây",
          "Giấu đi"
        ],
        "correctAnswer": 1,
        "explanation": "Luôn hỏi mượn và được sự đồng ý của chủ sở hữu.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 520,
        "text": "Nối loại thông tin với mức độ an toàn khi chia sẻ:",
        "pairs": [
          {
            "left": "Tên trường học",
            "right": "Có thể chia sẻ công khai"
          },
          {
            "left": "Mật khẩu của bạn",
            "right": "Hoàn toàn không được biết hoặc hỏi"
          },
          {
            "left": "Số điện thoại bố mẹ",
            "right": "Chỉ chia sẻ cho người quen tin cậy"
          }
        ],
        "explanation": "Nhận biết các ranh giới riêng tư.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 521,
        "text": "Em thấy một bạn trong lớp bị người lạ trên mạng nhắn tin chêu chọc, em sẽ làm gì?",
        "options": [
          "Bỏ qua",
          "Rủ các bạn khác cùng chêu",
          "Báo ngay cho giáo viên chủ nhiệm",
          "Gửi tin nhắn mắng lại người lạ"
        ],
        "correctAnswer": 2,
        "explanation": "Giáo viên sẽ có biện pháp xử lý và bảo vệ học sinh.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 522,
        "text": "Sắp xếp các bước để bảo quản máy tính sau khi học xong:",
        "options": [
          "Tắt máy đúng cách",
          "Xếp bàn phím, chuột gọn gàng",
          "Dùng khăn che bụi (nếu có)",
          "Rút phích cắm điện (sau khi máy tắt hẳn)"
        ],
        "correctAnswer": [
          "Tắt máy đúng cách",
          "Xếp bàn phím, chuột gọn gàng",
          "Dùng khăn che bụi (nếu có)",
          "Rút phích cắm điện (sau khi máy tắt hẳn)"
        ],
        "explanation": "Cách giữ gìn tài sản nhà trường và cá nhân.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 523,
        "text": "Phân loại các hành động sau vào nhóm Tốt cho môi trường hoặc Hại cho môi trường:",
        "items": [
          "Dùng máy tính để làm bài thay vì in giấy",
          "Vứt pin máy tính vào thùng rác thường",
          "Tắt màn hình khi không dùng",
          "Để máy tính bật cả đêm"
        ],
        "targets": [
          "Tốt cho môi trường",
          "Hại cho môi trường"
        ],
        "correctAnswer": {
          "Dùng máy tính để làm bài thay vì in giấy": "Tốt cho môi trường",
          "Tắt màn hình khi không dùng": "Tốt cho môi trường",
          "Vứt pin máy tính vào thùng rác thường": "Hại cho môi trường",
          "Để máy tính bật cả đêm": "Hại cho môi trường"
        },
        "explanation": "Sử dụng công nghệ đi đôi với bảo vệ thiên nhiên.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 524,
        "text": "Việc sử dụng phần mềm có bản quyền là thể hiện sự tôn trọng công sức của người lập trình đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Mỗi phần mềm là một sản phẩm trí tuệ có giá trị.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 525,
        "text": "Tìm lỗi sai trong quy tắc an toàn khi dùng thiết bị điện:",
        "options": [
          "1. Tay khô khi cắm điện",
          "2. Không nghịch dây điện bị hở",
          "3. Dùng thìa inox chọc vào ổ cắm",
          "4. Báo cho người lớn khi thấy khói"
        ],
        "correctAnswer": 2,
        "errorPart": "Dùng thìa inox chọc vào ổ cắm",
        "correction": "Hành động này cực kỳ nguy hiểm có thể gây điện giật chết người.",
        "explanation": "Tuyệt đối không đưa vật kim loại vào ổ điện.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "FIND_ERROR"
      },
      {
        "id": 526,
        "text": "Khi gặp khó khăn trong việc cài đặt phần mềm học tập, em nên tự mình bẻ khóa phần mềm đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Nên hỏi thầy cô hoặc bố mẹ để được hỗ trợ dùng bản chính thức.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 527,
        "text": "Chúc mừng em hoàn thành 50 câu Đạo đức số! Cư xử tử tế trên mạng cũng giống như ngoài đời đúng không?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Luôn là một người có văn hóa ở bất cứ đâu em nhé.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 528,
        "text": "Khi lấy một bức ảnh từ Internet để làm bài thuyết trình, hành động nào là đúng đắn nhất?",
        "options": [
          "Tự nhận là mình vẽ",
          "Ghi rõ nguồn hoặc tên trang web nơi mình lấy ảnh",
          "Xóa tên tác giả trên ảnh",
          "Cố tình làm mờ ảnh"
        ],
        "correctAnswer": 1,
        "explanation": "Ghi nguồn thể hiện sự tôn trọng công sức của người khác và bản quyền.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 529,
        "text": "Mật khẩu nào dưới đây được coi là an toàn và khó bị người khác đoán ra nhất?",
        "options": [
          "123456",
          "tên của em",
          "Mật mã có cả chữ hoa, chữ thường, số và ký tự đặc biệt",
          "Ngày sinh của em"
        ],
        "correctAnswer": 2,
        "explanation": "Mật khẩu phức tạp bảo vệ tài khoản của em tốt hơn.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 530,
        "text": "Nếu có người lạ yêu cầu em gửi mật khẩu tài khoản để 'tặng quà' cho em, em nên làm gì?",
        "options": [
          "Gửi ngay để nhận quà",
          "Gửi mật khẩu giả",
          "Tuyệt đối không gửi và báo ngay cho bố mẹ hoặc thầy cô",
          "Hỏi bạn xem có nên gửi không"
        ],
        "correctAnswer": 2,
        "explanation": "Không bao giờ được chia sẻ mật khẩu cho người lạ dưới mọi hình thức.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 531,
        "text": "Hành động liên tục gửi tin nhắn xúc phạm hoặc chia sẻ tin đồn xấu về bạn trên nhóm lớp được gọi là gì?",
        "options": [
          "Giao lưu trực tuyến",
          "Bắt nạt qua mạng (Cyberbullying)",
          "Học nhóm",
          "Trao đổi thông tin"
        ],
        "correctAnswer": 1,
        "explanation": "Đây là hành vi xấu xa, gây tổn thương lớn và cần bị ngăn chặn.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 532,
        "text": "Em nên làm gì khi nhận được lời mời kết bạn từ một người lạ trên mạng?",
        "options": [
          "Đồng ý ngay",
          "Từ chối và hỏi ý kiến cha mẹ",
          "Cung cấp địa chỉ nhà",
          "Gửi ảnh cá nhân cho họ"
        ],
        "correctAnswer": 1,
        "explanation": "Luôn cẩn thận với người lạ trên môi trường trực tuyến.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 533,
        "text": "Việc sử dụng biệt danh xấu để gọi bạn trên mạng là hành động như thế nào?",
        "options": [
          "Vui vẻ",
          "Hài hước",
          "Thiếu tôn trọng và có thể là bắt nạt mạng",
          "Bình thường"
        ],
        "correctAnswer": 2,
        "explanation": "Tôn trọng bạn bè cả ngoài đời và trên mạng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 534,
        "text": "Bảo vệ thông tin cá nhân trên mạng bao gồm những gì?",
        "options": [
          "Giữ bí mật mật khẩu",
          "Không chia sẻ số điện thoại công khai",
          "Không nói địa chỉ nhà cho người lạ",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Thông tin cá nhân cần được bảo mật tuyệt đối.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 535,
        "text": "Khi thấy thông tin sai sự thật về một ai đó trên mạng, em có nên chia sẻ không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Không nên lan truyền tin đồn thất thiệt.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 536,
        "text": "Hành động nào sau đây thể hiện văn hóa khi tham gia lớp học trực tuyến?",
        "options": [
          "Bật mic nói leo",
          "Tắt mic khi giáo viên đang giảng",
          "Vừa học vừa ăn",
          "Vẽ bậy lên màn hình chia sẻ"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng nội quy lớp học online.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 537,
        "text": "Nối các hành động với nhóm tương ứng:",
        "pairs": [
          {
            "left": "Chào hỏi khi vào nhóm chat",
            "right": "Lịch sự"
          },
          {
            "left": "Dùng từ ngữ thô tục",
            "right": "Thiếu văn hóa"
          },
          {
            "left": "Giúp bạn sửa lỗi chính tả",
            "right": "Hăng hái"
          }
        ],
        "explanation": "Thực hiện ứng xử văn minh trên không gian mạng.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 538,
        "text": "Em có nên tự ý dùng máy tính của anh chị khi chưa được cho phép không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng quyền sở hữu cá nhân của người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 539,
        "text": "Sắp xếp các bước để xử lý khi gặp một trang web có nội dung không lành mạnh:",
        "options": [
          "Tắt cửa sổ trình duyệt",
          "Rời khỏi máy tính",
          "Kể cho bố mẹ hoặc thầy cô",
          "Nghe lời khuyên từ người lớn"
        ],
        "correctAnswer": [
          "Tắt cửa sổ trình duyệt",
          "Rời khỏi máy tính",
          "Kể cho bố mẹ hoặc thầy cô",
          "Nghe lời khuyên từ người lớn"
        ],
        "explanation": "Kỹ năng thoát khỏi nguy hiểm trực tuyến.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 540,
        "text": "Phân loại các nội dung sau vào nhóm Nên chia sẻ hoặc Không nên chia sẻ:",
        "items": [
          "Lời chúc mừng sinh nhật",
          "Mật khẩu máy tính",
          "Kiến thức tin học hay",
          "Ảnh nhạy cảm của người khác"
        ],
        "targets": [
          "Nên chia sẻ",
          "Không nên"
        ],
        "correctAnswer": {
          "Lời chúc mừng sinh nhật": "Nên chia sẻ",
          "Kiến thức tin học hay": "Nên chia sẻ",
          "Mật khẩu máy tính": "Không nên",
          "Ảnh nhạy cảm của người khác": "Không nên"
        },
        "explanation": "Lọc thông tin trước khi chia sẻ trực tuyến.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 541,
        "text": "Sử dụng phần mềm lậu (không bản quyền) có thể làm máy tính bị nhiễm virus, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Phần mềm không rõ nguồn gốc rất nguy hiểm.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 542,
        "text": "Để bảo vệ mắt, em nên nhìn vào màn hình máy tính liên tục trong bao lâu thì nghỉ?",
        "options": [
          "20 phút",
          "2 tiếng",
          "5 tiếng",
          "Cả ngày"
        ],
        "correctAnswer": 0,
        "explanation": "Quy tắc 20-20-20 giúp bảo vệ thị lực.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 543,
        "text": "Khi đăng ảnh của người khác lên mạng xã hội, em cần làm gì?",
        "options": [
          "Đăng luôn",
          "Xin phép ý kiến của họ",
          "Ghi tên mình làm tác giả",
          "Lưu về máy mình thôi"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng quyền riêng tư hình ảnh.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 544,
        "text": "Việc gian lận khi chơi game trực tuyến (dùng bản hack) có phải là hành vi tốt không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Đảm bảo tính công bằng trong môi trường số.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 545,
        "text": "Một mật khẩu mạnh thường bao gồm những gì?",
        "options": [
          "Chỉ có số",
          "Chỉ có tên mình",
          "Tên và năm sinh",
          "Hỗn hợp chữ hoa, chữ thường, số và ký tự đặc biệt"
        ],
        "correctAnswer": 3,
        "explanation": "Mật khẩu phức tạp giúp bảo vệ tài khoản tốt hơn.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 546,
        "text": "Em có nên tin tưởng mọi quảng cáo 'Miễn phí' trên trang web không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Quảng cáo thường chứa bẫy để lấy thông tin cá nhân.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 547,
        "text": "Nối các biểu tượng cảm xúc với quy tắc tương ứng:",
        "pairs": [
          {
            "left": "Dùng 😊",
            "right": "Thể hiện sự thân thiện"
          },
          {
            "left": "Không dùng 😡",
            "right": "Tránh gây xung đột, cãi vã"
          },
          {
            "left": "Dùng 👍",
            "right": "Đồng ý, khen ngợi bạn"
          }
        ],
        "explanation": "Giao tiếp bằng biểu tượng một cách văn minh.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 548,
        "text": "Khi gặp một tin nhắn đe dọa từ bạn trong lớp trên mạng, em nên làm gì?",
        "options": [
          "Nhắn tin mắng lại",
          "Im lặng và buồn bã",
          "Chụp màn hình và báo cho thầy cô",
          "Xóa tin nhắn đi"
        ],
        "correctAnswer": 2,
        "explanation": "Bằng chứng giúp người lớn xử lý vụ việc trơn tru.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 549,
        "text": "Hành động nào tiết kiệm năng lượng cho máy tính nhất?",
        "options": [
          "Tắt màn hình khi không dùng",
          "Mở nhiều cửa sổ web",
          "Để máy chạy cả đêm",
          "Vừa sạc vừa dùng điện thoại"
        ],
        "correctAnswer": 0,
        "explanation": "Tắt thiết bị khi không sử dụng giúp tiết kiệm điện.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 550,
        "text": "Sắp xếp để tạo một thói quen tốt khi dùng máy tính:",
        "options": [
          "Chỉnh ghế ngồi thẳng",
          "Bật đèn đủ sáng",
          "Học khoảng 30 phút",
          "Nghỉ ngơi vận động"
        ],
        "correctAnswer": [
          "Chỉnh ghế ngồi thẳng",
          "Bật đèn đủ sáng",
          "Học khoảng 30 phút",
          "Nghỉ ngơi vận động"
        ],
        "explanation": "Bảo vệ sức khỏe khi tiếp xúc với thiết bị số.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 551,
        "text": "Phân loại các hành động sau vào nhóm Tôn trọng bản quyền hoặc Vi phạm bản quyền:",
        "items": [
          "Ghi tên tác giả khi dùng bài vẽ",
          "Tự nhận bài của bạn là của mình",
          "Trích dẫn nguồn ảnh",
          "Sao chép phần mềm lậu"
        ],
        "targets": [
          "Tôn trọng",
          "Vi phạm"
        ],
        "correctAnswer": {
          "Ghi tên tác giả khi dùng bài vẽ": "Tôn trọng",
          "Trích dẫn nguồn ảnh": "Tôn trọng",
          "Tự nhận bài của bạn là của mình": "Vi phạm",
          "Sao chép phần mềm lậu": "Vi phạm"
        },
        "explanation": "Hiểu về quyền sở hữu trí tuệ.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 552,
        "text": "Em có nên tự ý thay đổi hình nền máy tính ở phòng máy trường không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tuân thủ nội quy nơi công cộng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 553,
        "text": "Khi thấy thiết bị điện (máy tính) có khói hoặc mùi khét, em nên làm gì?",
        "options": [
          "Lấy nước dập lửa",
          "Tiếp tục dùng",
          "Chạy ra xa và gọi người lớn cứu trợ",
          "Tự sửa dây điện"
        ],
        "correctAnswer": 2,
        "explanation": "An toàn điện là ưu tiên hàng đầu.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 554,
        "text": "Việc sử dụng máy tính giúp em bảo vệ rừng vì giảm dùng giấy, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Sách giáo khoa, vở ghi điện tử giúp giảm nhu cầu dùng gỗ làm giấy.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 555,
        "text": "Tìm lỗi sai trong câu: 'Em có thể chia sẻ số thẻ tín dụng của bố mẹ lên nhóm lớp để khoe.'",
        "options": [
          "chia sẻ",
          "số thẻ tín dụng",
          "lên nhóm lớp",
          "để khoe"
        ],
        "correctAnswer": 1,
        "errorPart": "số thẻ tín dụng",
        "correction": "KHÔNG BAO GIỜ được chia sẻ thông tin tài chính của gia đình lên mạng.",
        "explanation": "Bảo mật tài chính gia đình.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "FIND_ERROR"
      },
      {
        "id": 556,
        "text": "Nối hành động với hậu quả tương ứng:",
        "pairs": [
          {
            "left": "Dùng máy tính quá khuya",
            "right": "Mệt mỏi vào sáng hôm sau"
          },
          {
            "left": "Gõ phím quá mạnh",
            "right": "Làm hỏng bàn phím"
          },
          {
            "left": "Học tin học chăm chỉ",
            "right": "Có thêm nhiều kỹ năng số"
          }
        ],
        "explanation": "Mỗi hành động đều có kết quả tương xứng.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 557,
        "text": "Em có nên đưa mật khẩu cho bạn thân nhất của mình không?",
        "options": [
          "Có, vì là bạn",
          "Không, mật khẩu là riêng tư"
        ],
        "correctAnswer": 1,
        "explanation": "Giữ bảo mật cá nhân ngay cả với bạn bè.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 558,
        "text": "Nếu một trang web yêu cầu em nhập email để tải game, em nên làm gì?",
        "options": [
          "Nhập luôn",
          "Hỏi ý kiến của bố mẹ",
          "Bịa ra một email",
          "Tắt máy"
        ],
        "correctAnswer": 1,
        "explanation": "Cần sự giám sát của người lớn khi cung cấp email.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 559,
        "text": "Văn hóa số là ứng xử lịch sự và văn minh trên mạng, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng lời hay ý đẹp khi trò chuyện trực tuyến.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 560,
        "text": "Em có thể tải một bức ảnh trên mạng về làm hình nền cho máy tính của mình không?",
        "options": [
          "Được (nếu ảnh cho phép tải)",
          "Không bao giờ"
        ],
        "correctAnswer": 0,
        "explanation": "Sử dụng cho mục đích cá nhân thường được chấp nhận.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 561,
        "text": "Hành động nào giúp em phòng tránh bắt nạt qua mạng?",
        "options": [
          "Chỉ kết bạn với người quen",
          "Mở công khai trang cá nhân",
          "Cung cấp mật khẩu cho nhiều người",
          "Tham gia các hội nhóm lạ"
        ],
        "correctAnswer": 0,
        "explanation": "Giới hạn vòng kết nối giúp em an toàn hơn.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 562,
        "text": "Máy tính cũ hỏng không dùng nữa nên vứt vào đâu?",
        "options": [
          "Thùng rác nhà bếp",
          "Vứt ra ngoài đường",
          "Đưa đến điểm thu hồi rác điện tử",
          "Đốt đi"
        ],
        "correctAnswer": 2,
        "explanation": "Rác thải điện tử cần xử lý chuyên biệt để bảo vệ môi trường.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 563,
        "text": "Nối loại thông tin với cách bảo vệ:",
        "pairs": [
          {
            "left": "Mật khẩu",
            "right": "Không ghi ra giấy dán lên máy"
          },
          {
            "left": "Địa chỉ",
            "right": "Không đăng lên tường công khai"
          },
          {
            "left": "Ảnh cá nhân",
            "right": "Chế độ xem chỉ dành cho bạn bè"
          }
        ],
        "explanation": "Kỹ năng bảo mật thông tin đa dạng.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 564,
        "text": "Khi học trong phòng máy, em có được mang đồ ăn nước uống vào không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tránh đổ nước gây chập mạch hoặc vụn thức ăn làm tổ kiến.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 565,
        "text": "Dấu hiệu nhận biết mật khẩu của em bị người khác biết là gì?",
        "options": [
          "Máy chạy chậm",
          "Có những tin nhắn lạ gửi đi bằng tài khoản của em",
          "Màn hình sáng hơn",
          "Chuột bị đơ"
        ],
        "correctAnswer": 1,
        "explanation": "Hoạt động bất thường trên tài khoản là dấu hiệu bị hack.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 566,
        "text": "Internet có thể giúp em tìm kiếm sự giúp đỡ khi gặp khó khăn, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Có các số hotline hoặc trang web tư vấn tâm lý trẻ em.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 567,
        "text": "Hành động 'Spam' tin nhắn (gửi liên tục nội dung nhảm nhí) cho bạn là đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Gây phiền nhiễu và khó chịu cho người nhận.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 568,
        "text": "Khi làm bài kiểm tra tin học, em có nên nhìn bài bạn không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Trung thực là đạo đức hàng đầu trong học tập.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 569,
        "text": "Sắp xếp thứ tự để đăng một tin bài lịch sự lên nhóm lớp:",
        "options": [
          "Kiểm tra lỗi chính tả",
          "Suy nghĩ nội dung có ích",
          "Xin phép giáo viên",
          "Nhấn nút đăng"
        ],
        "correctAnswer": [
          "Suy nghĩ nội dung có ích",
          "Kiểm tra lỗi chính tả",
          "Xin phép giáo viên",
          "Nhấn nút đăng"
        ],
        "explanation": "Các bước để trở thành công dân số văn minh.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 570,
        "text": "Phân loại các thiết bị sau vào nhóm Được phép dùng phím tắt hoặc Không nên (hạn chế):",
        "items": [
          "Ctrl + S để lưu bài",
          "Alt + F4 liên tục để đóng ứng dụng",
          "F2 đổi tên",
          "Nút nguồn (Power) để tắt máy cứng"
        ],
        "targets": [
          "Khuyên dùng",
          "Hạn chế"
        ],
        "correctAnswer": {
          "Ctrl + S để lưu bài": "Khuyên dùng",
          "F2 đổi tên": "Khuyên dùng",
          "Alt + F4 liên tục": "Hạn chế",
          "Nút nguồn (Power)": "Hạn chế"
        },
        "explanation": "Sử dụng thiết bị đúng cách kéo dài tuổi thọ máy.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 571,
        "text": "Em có nên tự ý xóa phần mềm của người khác cài trên máy chung không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Tôn trọng dữ liệu và công cụ của người khác.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 572,
        "text": "Việc sử dụng máy tính giúp em kết nối với bạn bè quốc tế, từ đó học hỏi văn hóa nước bạn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Mở rộng tầm nhìn qua không gian số.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 573,
        "text": "Thông tin nào sau đây là an toàn để đặt làm tên tài khoản (Username)?",
        "options": [
          "Biệt danh đáng yêu",
          "Số căn cước công dân",
          "Mật khẩu của mình",
          "Địa chỉ nhà chính xác"
        ],
        "correctAnswer": 0,
        "explanation": "Tên tài khoản không nên chứa thông tin định danh nhạy cảm.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 574,
        "text": "Để tránh bị lừa đảo, em nên làm gì khi nhận được link lạ từ người không quen?",
        "options": [
          "Bấm vào nhanh kẻo hết hạn",
          "Bỏ qua và không bao giờ bấm vào",
          "Gửi link cho bạn khác xem thử",
          "Nhập thông tin cá nhân vào"
        ],
        "correctAnswer": 1,
        "explanation": "Cảnh giác với mã độc núp bóng đường link.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 575,
        "text": "Bố mẹ có quyền kiểm soát nội dung em xem trên mạng đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là cách bố mẹ bảo vệ em khỏi những nguy hiểm tiềm tàng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 576,
        "text": "Tìm lỗi sai: 'Em có thể dùng bài vẽ của bạn để nộp cho cô giáo nhận thưởng.'",
        "options": [
          "dùng bài vẽ",
          "của bạn",
          "cô giáo",
          "thưởng"
        ],
        "correctAnswer": 1,
        "errorPart": "của bạn",
        "correction": "Em phải dùng bài vẽ CHÍNH MÌNH tạo ra mới là trung thực.",
        "explanation": "Tự chủ và trung thực trong học tập.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "FIND_ERROR"
      },
      {
        "id": 577,
        "text": "Nối hành động với tên gọi tiếng Anh tương ứng:",
        "pairs": [
          {
            "left": "Bắt nạt qua mạng",
            "right": "Cyberbullying"
          },
          {
            "left": "Bản quyền",
            "right": "Copyright"
          },
          {
            "left": "Riêng tư",
            "right": "Privacy"
          }
        ],
        "explanation": "Thuật ngữ phổ biến trong đạo đức số.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 578,
        "text": "Để tiết kiệm giấy, em có thể làm bài tập trên ứng dụng nào thay vì viết vở?",
        "options": [
          "Google Forms",
          "Sách bài tập",
          "Giấy nháp",
          "Đ bảng viết"
        ],
        "correctAnswer": 0,
        "explanation": "Công cụ khảo sát trực tuyến giúp giảm thiểu rác thải giấy.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 579,
        "text": "Sử dụng máy tính trong điều kiện thiếu ánh sáng sẽ gây hại gì?",
        "options": [
          "Mắt bị mỏi và nhanh cận thị",
          "Máy tính nhanh hết pin",
          "Làm bàn phím bị hỏng",
          "Không có hại gì"
        ],
        "correctAnswer": 0,
        "explanation": "Đảm bảo môi trường học tập đủ sáng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 580,
        "text": "Em có nên trả lời các bình luận hung dữ, chửi bới mình trên mạng không?",
        "options": [
          "Có, phải mắng lại họ",
          "Nên phớt lờ và báo cho người lớn",
          "Phải tìm gặp họ để nói chuyện",
          "Chia sẻ cho bạn mình cùng chửi"
        ],
        "correctAnswer": 1,
        "explanation": "Đừng cuốn vào các cuộc tranh cãi tiêu cực.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 581,
        "text": "An toàn điện là việc em không được tự ý cắm phích điện khi tay đang ướt.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Nước dẫn điện cực tốt, gây nguy hiểm tính mạng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 582,
        "text": "Khi học xong buổi tin học, em nên làm gì để giúp các bạn lớp sau dùng máy tốt hơn?",
        "options": [
          "Xóa hết các tệp mình đã tạo trên máy chung",
          "Xếp bàn phím và chuột ngay ngắn",
          "Đẩy ghế vào gầm bàn",
          "Tất cả các ý trên"
        ],
        "correctAnswer": 3,
        "explanation": "Giữ gìn vệ sinh và ý thức chung.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 583,
        "text": "Nối hành động với biểu tượng cảnh báo:",
        "pairs": [
          {
            "left": "Ngắt kết nối",
            "right": "Biểu tượng gạch chéo màu đỏ"
          },
          {
            "left": "Dữ liệu nhạy cảm",
            "right": "Biểu tượng ổ khóa"
          },
          {
            "left": "Nguy hiểm điện",
            "right": "Hình tia chớp"
          }
        ],
        "explanation": "Nhận biết các ký hiệu cảnh báo an toàn.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MATCHING"
      },
      {
        "id": 584,
        "text": "Việc sử dụng phần mềm dịch thuật để làm hộ bài tập tiếng Anh một cách lười biếng là sai đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Nên dùng để tra cứu từ điển, không nên để máy làm hết phần việc của mình.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 585,
        "text": "Khi em đăng ký một tài khoản trò chơi, em nên dùng mật khẩu nào?",
        "options": [
          "111111",
          "Mật khẩu do bố mẹ gợi ý và bí mật",
          "Mật khẩu giống hệt tên tài khoản",
          "Ngày sinh của con chó nhà em"
        ],
        "correctAnswer": 1,
        "explanation": "Phụ huynh giúp em tạo mật khẩu an toàn và dễ nhớ với em nhưng khó với người khác.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 586,
        "text": "Máy tính xách tay (Laptop) có thể bị cháy nổ nếu sạc quá lâu trên đệm hoặc gối đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Đệm làm máy không thoát được nhiệt, dễ gây quá tải nhiệt.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 587,
        "text": "Sắp xếp quy trình để tắt máy tính ở phòng máy đúng nội quy:",
        "options": [
          "Đóng các ứng dụng",
          "Vào Start -> Power -> Shut down",
          "Đợi màn hình tắt hẳn",
          "Tắt công tắc màn hình (nếu có)"
        ],
        "correctAnswer": [
          "Đóng các ứng dụng",
          "Vào Start -> Power -> Shut down",
          "Đợi màn hình tắt hẳn",
          "Tắt công tắc màn hình (nếu có)"
        ],
        "explanation": "Quy trình tắt máy an toàn cho linh kiện.",
        "difficulty": "Medium",
        "topic": "Đạo đức số",
        "type": "ORDERING"
      },
      {
        "id": 588,
        "text": "Phân loại các tệp tin sau vào nhóm Được phép xóa hoặc Cần hỏi ý kiến thầy cô:",
        "items": [
          "Bản nháp vẽ Paint của em",
          "Thư mục cài đặt Windows",
          "Phần mềm Microsoft Word",
          "Tệp văn bản em vừa gõ xong"
        ],
        "targets": [
          "Có thể xóa",
          "Không được xóa/Cần hỏi"
        ],
        "correctAnswer": {
          "Bản nháp vẽ Paint của em": "Có thể xóa",
          "Tệp văn bản em vừa gõ xong": "Có thể xóa",
          "Thư mục cài đặt Windows": "Không được xóa/Cần hỏi",
          "Phần mềm Microsoft Word": "Không được xóa/Cần hỏi"
        },
        "explanation": "Phân biệt dữ liệu cá nhân rác và phần mềm hệ thống.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "DRAG_DROP"
      },
      {
        "id": 589,
        "text": "Cư xử tử tế với bạn bè trên mạng cũng chính là cư xử tử tế với chính mình.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Gieo mầm tử tế sẽ nhận lại sự tôn trọng.",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      },
      {
        "id": 590,
        "text": "Lợi ích của việc đặt mật khẩu cho thư mục riêng tư là gì?",
        "options": [
          "Làm tệp tin nhẹ hơn",
          "Ngăn người khác xem nội dung khi chưa được phép",
          "Máy tính không bị lag",
          "Tăng tốc độ mạng"
        ],
        "correctAnswer": 1,
        "explanation": "Thêm một lớp bảo vệ cho sự riêng tư.",
        "difficulty": "Hard",
        "topic": "Đạo đức số",
        "type": "MCQ"
      },
      {
        "id": 591,
        "text": "Em đã là một 'Công dân số' nhỏ tuổi nếu em biết dùng công nghệ có trách nhiệm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Chúc mừng em đã hoàn thành bộ câu hỏi về đạo đức số!",
        "difficulty": "Easy",
        "topic": "Đạo đức số",
        "type": "TRUE_FALSE"
      }
    ]
  },
  {
    "id": 6,
    "title": "Chủ đề 6: Ứng dụng tin học",
    "topic": "Ứng dụng tin học",
    "description": "Sử dụng các phần mềm soạn thảo và vẽ tranh đơn giản.",
    "icon": "Layout",
    "questions": [
      {
        "id": 592,
        "text": "Phần mềm Microsoft Word giúp em làm gì?",
        "options": [
          "Vẽ tranh",
          "Soạn thảo văn bản",
          "Nghe nhạc",
          "Tính toán"
        ],
        "correctAnswer": 1,
        "explanation": "Word dùng để gõ chữ và trình bày văn bản.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 593,
        "text": "Trong phần mềm Paint, công cụ nào dùng để tô màu?",
        "options": [
          "Bút chì",
          "Bình đổ màu",
          "Tẩy",
          "Thân máy"
        ],
        "correctAnswer": 1,
        "explanation": "Fill with color giúp tô màu nhanh một vùng.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 594,
        "text": "Để lưu bài vẽ hoặc bài soạn thảo, em vào thực đơn File rồi chọn lệnh nào?",
        "options": [
          "New",
          "Open",
          "Save",
          "Close"
        ],
        "correctAnswer": 2,
        "explanation": "Lệnh Save dùng để lưu lại dữ liệu.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 595,
        "text": "Nối công cụ với biểu tượng tương ứng trong Paint:",
        "pairs": [
          {
            "left": "Bút chì",
            "right": "Vẽ đường thẳng, cong mảnh"
          },
          {
            "left": "Cái tẩy",
            "right": "Xóa các chi tiết vẽ sai"
          },
          {
            "left": "Hình Oval",
            "right": "Vẽ hình tròn hoặc elip"
          }
        ],
        "explanation": "Mỗi công cụ vẽ hỗ trợ tạo hình khác nhau.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 596,
        "text": "Bàn phím chỉ có phím chữ, không có phím số.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Bàn phím có cả hàng phím số phía trên và bên phải.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 597,
        "text": "Phân loại các phím sau vào nhóm Phím chữ hoặc Phím số:",
        "items": [
          "A",
          "1",
          "G",
          "9"
        ],
        "targets": [
          "Phím chữ",
          "Phím số"
        ],
        "correctAnswer": {
          "1": "Phím số",
          "9": "Phím số",
          "A": "Phím chữ",
          "G": "Phím chữ"
        },
        "explanation": "Phân biệt các loại phím cơ bản trên bàn phím.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 598,
        "text": "Tìm lỗi sai trong mô tả về phần mềm Paint:",
        "options": [
          "1. Dùng để vẽ tranh",
          "2. Có bình đổ màu",
          "3. Dùng để soạn văn bản chuyên nghiệp",
          "4. Có thể vẽ hình tròn"
        ],
        "correctAnswer": 2,
        "errorPart": "Dùng để soạn văn bản chuyên nghiệp",
        "correction": "Phần mềm Paint chủ yếu dùng để vẽ tranh, Word mới dùng để soạn văn bản chuyên nghiệp.",
        "explanation": "Mỗi phần mềm có mục đích sử dụng riêng.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "FIND_ERROR"
      },
      {
        "id": 599,
        "text": "Nối phím tắt với công dụng trong Word:",
        "pairs": [
          {
            "left": "Ctrl + S",
            "right": "Lưu bài"
          },
          {
            "left": "Ctrl + N",
            "right": "Tạo bài mới"
          },
          {
            "left": "Ctrl + O",
            "right": "Mở bài có sẵn"
          }
        ],
        "explanation": "Sử dụng phím tắt giúp em thao tác nhanh hơn.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 600,
        "text": "Trong Paint, để vẽ một hình vuông hoàn hảo, em nhấn giữ phím nào khi kéo chuột?",
        "options": [
          "Ctrl",
          "Alt",
          "Shift",
          "Space"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Shift giúp cố định tỷ lệ các hình vẽ hình học.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 601,
        "text": "Phần mềm Paint có thể giúp em chỉnh sửa ảnh chụp được không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Em có thể mở tệp ảnh và vẽ thêm hoặc cắt bớt trong Paint.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 602,
        "text": "Trong Word, phím nào dùng để xóa chữ nằm sau con trỏ (bên phải)?",
        "options": [
          "Backspace",
          "Delete",
          "Enter",
          "Tab"
        ],
        "correctAnswer": 1,
        "explanation": "Phím Delete xóa ký tự phía sau.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 603,
        "text": "Để viết hoa toàn bộ các chữ cái khi gõ, em nhấn phím nào?",
        "options": [
          "Shift",
          "Caps Lock",
          "Alt",
          "Ctrl"
        ],
        "correctAnswer": 1,
        "explanation": "Caps Lock giúp bật chế độ gõ chữ hoa.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 604,
        "text": "Trong Paint, để đổ màu cho một hình khép kín, em dùng công cụ nào?",
        "options": [
          "Bút chì",
          "Bình đổ màu (Fill with color)",
          "Cục tẩy",
          "Cọ vẽ"
        ],
        "correctAnswer": 1,
        "explanation": "Bình đổ màu giúp tô màu nhanh cho vùng chọn.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 605,
        "text": "Để lưu bài vẽ trong Paint, em nhấn tổ hợp phím nào?",
        "options": [
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + S",
          "Ctrl + P"
        ],
        "correctAnswer": 2,
        "explanation": "Ctrl + S là lệnh lưu (Save) phổ biến.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 606,
        "text": "Nối công cụ trong Paint với công dụng của nó:",
        "pairs": [
          {
            "left": "Bút chì",
            "right": "Vẽ các nét mảnh tự do"
          },
          {
            "left": "Cục tẩy",
            "right": "Xóa các phần vẽ sai"
          },
          {
            "left": "Kính lúp",
            "right": "Phóng to hình để sửa chi tiết"
          }
        ],
        "explanation": "Nhận biết các công cụ vẽ cơ bản.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 607,
        "text": "Phần mềm Word chủ yếu dùng để làm gì?",
        "options": [
          "Vẽ tranh",
          "Soạn thảo văn bản",
          "Xem phim",
          "Chơi game"
        ],
        "correctAnswer": 1,
        "explanation": "Word là phần mềm xử lý văn bản chuyên dụng.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 608,
        "text": "Để bắt đầu một dòng mới trong Word, em nhấn phím nào?",
        "options": [
          "Space",
          "Shift",
          "Enter",
          "Alt"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Enter giúp em xuống dòng.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 609,
        "text": "Nối phím tắt với tác dụng trong Word:",
        "pairs": [
          {
            "left": "Ctrl + Z",
            "right": "Quay lại bước vừa làm (Undo)"
          },
          {
            "left": "Ctrl + A",
            "right": "Chọn toàn bộ văn bản"
          },
          {
            "left": "Ctrl + B",
            "right": "In đậm chữ"
          }
        ],
        "explanation": "Sử dụng phím tắt giúp soạn thảo thuận tiện hơn.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 610,
        "text": "Phần mềm Paint có sẵn trong Windows đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Paint là ứng dụng mặc định của hệ điều hành Windows.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 611,
        "text": "Em có thể vừa chèn hình vẽ, vừa gõ chữ trong Paint.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Paint hỗ trợ cả công cụ vẽ và công cụ văn bản (A).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 612,
        "text": "Trong Word, để thay đổi kích cỡ chữ, em dùng công cụ nào?",
        "options": [
          "Font Style",
          "Font Size",
          "Text Color",
          "Bold"
        ],
        "correctAnswer": 1,
        "explanation": "Font Size (số) cho phép chỉnh chữ to hay nhỏ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 613,
        "text": "Trên thanh công cụ Paint, biểu tượng hình đường thẳng zizac là vẽ đường gì?",
        "options": [
          "Đường thẳng",
          "Đường cong",
          "Đường tròn",
          "Hình sao"
        ],
        "correctAnswer": 1,
        "explanation": "Đường cong (Curve) yêu cầu kéo chuột 2 lần để tạo độ cong.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 614,
        "text": "Để in đậm một đoạn văn bản trong Word, em bôi đen rồi nhấn nút nào?",
        "options": [
          "I",
          "U",
          "B",
          "A"
        ],
        "correctAnswer": 2,
        "explanation": "B viết tắt của Bold (In đậm).",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 615,
        "text": "Trong Paint, để chọn một vùng hình ảnh bất kỳ theo ý thích, em dùng công cụ gì?",
        "options": [
          "Rectangular selection",
          "Free-form selection",
          "Eraser",
          "Pencil"
        ],
        "correctAnswer": 1,
        "explanation": "Free-form selection cho phép khoanh vùng tự do.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 616,
        "text": "Nối kiểu căn lề với tác dụng trong Word:",
        "pairs": [
          {
            "left": "Align Left",
            "right": "Căn lề bên trái"
          },
          {
            "left": "Center",
            "right": "Căn vào giữa trang"
          },
          {
            "left": "Align Right",
            "right": "Căn lề bên phải"
          }
        ],
        "explanation": "Căn lề giúp văn bản trông cân đối hơn.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 617,
        "text": "Phần mềm Paint có thể vẽ được hình lục giác không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Paint có sẵn nhóm Shapes chứa nhiều hình đa giác.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 618,
        "text": "Có thể chèn ảnh từ máy tính vào trong một file Word.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Sử dụng lệnh Insert -> Pictures.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 619,
        "text": "Sắp xếp các bước để thay đổi màu chữ trong Word:",
        "options": [
          "Bôi đen đoạn văn bản",
          "Chọn biểu tượng chữ A có gạch màu",
          "Chọn màu mong muốn",
          "Nhấn chuột ra ngoài để xem kết quả"
        ],
        "correctAnswer": [
          "Bôi đen đoạn văn bản",
          "Chọn biểu tượng chữ A có gạch màu",
          "Chọn màu mong muốn",
          "Nhấn chuột ra ngoài để xem kết quả"
        ],
        "explanation": "Các bước định dạng văn bản cơ bản.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 620,
        "text": "Phân loại các công cụ sau vào nhóm Vẽ hình hoặc Soạn thảo:",
        "items": [
          "Bàn chải vẽ",
          "Chèn bảng",
          "Đổ màu",
          "Căn lề"
        ],
        "targets": [
          "Vẽ hình",
          "Soạn thảo"
        ],
        "correctAnswer": {
          "Bàn chải vẽ": "Vẽ hình",
          "Đổ màu": "Vẽ hình",
          "Chèn bảng": "Soạn thảo",
          "Căn lề": "Soạn thảo"
        },
        "explanation": "Mỗi phần mềm có thế mạnh riêng.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 621,
        "text": "Trong Word, để chèn một bảng biểu, em vào thẻ nào?",
        "options": [
          "Home",
          "Insert",
          "Design",
          "Layout"
        ],
        "correctAnswer": 1,
        "explanation": "Thẻ Insert chứa các lệnh chèn đối tượng.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 622,
        "text": "Phím tắt Ctrl + I trong Word dùng để làm gì?",
        "options": [
          "In đậm",
          "In nghiêng",
          "Gạch chân",
          "Tô màu"
        ],
        "correctAnswer": 1,
        "explanation": "I viết tắt của Italic (In nghiêng).",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 623,
        "text": "Để vẽ một vòng tròn hoàn hảo trong Paint, em nhấn giữ phím nào?",
        "options": [
          "Shift",
          "Ctrl",
          "Alt",
          "Enter"
        ],
        "correctAnswer": 0,
        "explanation": "Phím Shift cố định tỷ lệ các hình vẽ.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 624,
        "text": "Trong Paint, công cụ hình cái ống hút dùng để làm gì?",
        "options": [
          "Pha màu",
          "Lấy màu (Color picker)",
          "Tẩy màu",
          "Vẽ nét đứt"
        ],
        "correctAnswer": 1,
        "explanation": "Nháy vào một màu có sẵn để chọn màu đó.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 625,
        "text": "Em có thể thay đổi hướng giấy trong Word từ dọc sang ngang không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Sử dụng tính năng Orientation trong Layout.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 626,
        "text": "Phần mềm Paint chủ yếu dùng để tính toán các con số đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 1,
        "explanation": "Paint là phần mềm đồ họa, nó không dùng để tính toán chuyên nghiệp.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 627,
        "text": "Nối lệnh với tổ hợp phím tắt trong Word:",
        "pairs": [
          {
            "left": "In văn bản",
            "right": "Ctrl + P"
          },
          {
            "left": "Mở tài liệu cũ",
            "right": "Ctrl + O"
          },
          {
            "left": "Tìm kiếm từ ngữ",
            "right": "Ctrl + F"
          }
        ],
        "explanation": "Phím tắt giúp tiết kiệm thời gian.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 628,
        "text": "Phân loại các đối tượng sau vào nhóm Hình dạng hoặc Màu sắc trong Paint:",
        "items": [
          "Hình sao 5 cánh",
          "Màu đỏ thắm",
          "Hình đa giác",
          "Màu xanh ngọc"
        ],
        "targets": [
          "Hình dạng",
          "Màu sắc"
        ],
        "correctAnswer": {
          "Hình sao 5 cánh": "Hình dạng",
          "Hình đa giác": "Hình dạng",
          "Màu đỏ thắm": "Màu sắc",
          "Màu xanh ngọc": "Màu sắc"
        },
        "explanation": "Các thành phần cơ bản của một bài vẽ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 629,
        "text": "Sắp xếp quy trình để in một tệp Word:",
        "options": [
          "Vào thẻ File",
          "Chọn lệnh Print",
          "Chọn máy in",
          "Nhấn nút Print"
        ],
        "correctAnswer": [
          "Vào thẻ File",
          "Chọn lệnh Print",
          "Chọn máy in",
          "Nhấn nút Print"
        ],
        "explanation": "Cách đưa dữ liệu từ máy tính ra giấy.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 630,
        "text": "Để chèn ký hiệu đặc biệt vào văn bản, em vào thẻ nào?",
        "options": [
          "Insert",
          "Design",
          "View",
          "Review"
        ],
        "correctAnswer": 0,
        "explanation": "Lệnh Symbol nằm trong thẻ Insert.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 631,
        "text": "Trong Word, để căn đoạn văn bản vào giữa trang, em chọn lệnh nào?",
        "options": [
          "Align Left",
          "Center",
          "Align Right",
          "Justify"
        ],
        "correctAnswer": 1,
        "explanation": "Center giúp tiêu đề hoặc đoạn văn nằm chính giữa.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 632,
        "text": "Để xóa một hình vẽ vừa vẽ sai trong Paint, em dùng công cụ gì?",
        "options": [
          "Eraser (Tẩy)",
          "Pencil",
          "Bucket",
          "Shapes"
        ],
        "correctAnswer": 0,
        "explanation": "Eraser giúp xóa các nét thừa.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 633,
        "text": "Trong Word, để bôi màu nền cho một đoạn văn (Highlight), em dùng công cụ có hình gì?",
        "options": [
          "Cái bút lông",
          "Chữ A có gạch màu",
          "Cái bút dạ quang",
          "Bình sơn"
        ],
        "correctAnswer": 2,
        "explanation": "Text Highlight Color giúp làm nổi bật đoạn văn.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 634,
        "text": "Có thể chèn âm thanh vào trong bài trình chiếu PowerPoint đúng hay sai?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 0,
        "explanation": "Slide có thể chứa cả hình ảnh, video và âm thanh.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 635,
        "text": "Phần mềm Mouse Skills giúp em luyện tập kỹ năng gì?",
        "options": [
          "Gõ phím",
          "Sử dụng chuột",
          "Vẽ tranh",
          "Lập trình"
        ],
        "correctAnswer": 1,
        "explanation": "Học cách di chuyển, nháy chuột trái, chuột phải.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 636,
        "text": "Nối tên phần mềm với biểu tượng đặc trưng của nó:",
        "pairs": [
          {
            "left": "Word",
            "right": "Chữ W màu xanh"
          },
          {
            "left": "Paint",
            "right": "Bảng màu và bút vẽ"
          },
          {
            "left": "PowerPoint",
            "right": "Chữ P màu cam"
          }
        ],
        "explanation": "Nhận diện phần mềm qua biểu tượng.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 637,
        "text": "Trong Word, để đổi phong cách chữ sang gạch chân, em dùng nút nào?",
        "options": [
          "B",
          "I",
          "U",
          "A"
        ],
        "correctAnswer": 2,
        "explanation": "U viết tắt của Underline (Gạch chân).",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 638,
        "text": "Lệnh New trong thẻ File dùng để làm gì?",
        "options": [
          "Tạo tệp tin mới trắng",
          "Mở tệp cũ",
          "Lưu tệp",
          "In tệp"
        ],
        "correctAnswer": 0,
        "explanation": "New tạo không gian làm việc mới.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 639,
        "text": "Sắp xếp các bước để vẽ hình vuông đỏ trong Paint:",
        "options": [
          "Chọn công cụ hình chữ nhật",
          "Chọn màu đỏ ở bảng màu",
          "Nhấn giữ phím Shift và kéo chuột",
          "Thả chuột để hoàn thành"
        ],
        "correctAnswer": [
          "Chọn công cụ hình chữ nhật",
          "Chọn màu đỏ ở bảng màu",
          "Nhấn giữ phím Shift và kéo chuột",
          "Thả chuột để hoàn thành"
        ],
        "explanation": "Kỹ năng kết hợp công cụ và phím bổ trợ.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 640,
        "text": "Phân loại các thao tác sau vào nhóm Word hoặc Paint:",
        "items": [
          "Chỉnh lề đoạn văn",
          "Dùng bình sơn đổ màu",
          "Định dạng phông chữ",
          "Dùng bút vẽ tự do"
        ],
        "targets": [
          "Word",
          "Paint"
        ],
        "correctAnswer": {
          "Chỉnh lề đoạn văn": "Word",
          "Định dạng phông chữ": "Word",
          "Dùng bình sơn đổ màu": "Paint",
          "Dùng bút vẽ tự do": "Paint"
        },
        "explanation": "Nhận diện tính năng đặc thù của mỗi phần mềm.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 641,
        "text": "Em có thể copy văn bản từ Word rồi dán vào một ô chữ trong Paint đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dữ liệu văn bản có thể trao đổi giữa các phần mềm Windows.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 642,
        "text": "Trong phần mềm Paint, để vẽ được một ngôi sao 5 cánh hoàn toàn cân đối, em cần nhấn giữ phím nào khi kéo chuột?",
        "options": [
          "Ctrl",
          "Alt",
          "Shift",
          "Backspace"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Shift giúp giữ tỷ lệ đều cho các hình vẽ.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 643,
        "text": "Để chọn nhanh toàn bộ văn bản trong Microsoft Word, em sử dụng tổ hợp phím tắt nào?",
        "options": [
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + A",
          "Ctrl + S"
        ],
        "correctAnswer": 2,
        "explanation": "Ctrl + A (All) giúp chọn tất cả nội dung văn bản cực nhanh.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 644,
        "text": "Khi gõ tiếng Việt kiểu Telex, để có chữ 'ư', em gõ chữ 'u' và phím chữ nào?",
        "options": [
          "s",
          "f",
          "w",
          "r"
        ],
        "correctAnswer": 2,
        "explanation": "Dùng 'w' để tạo dấu móc cho chữ u thành ư và o thành ơ.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 645,
        "text": "Trong Word, để một hình ảnh nằm bên dưới các dòng chữ (chữ đè lên ảnh), em chọn tính năng Wrap Text nào?",
        "options": [
          "In line with text",
          "Square",
          "Behind text",
          "In front of text"
        ],
        "correctAnswer": 2,
        "explanation": "Behind text giúp ảnh chìm xuống dưới lớp văn bản.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 646,
        "text": "Phần mềm Microsoft Word thuộc nhóm phần mềm nào?",
        "options": [
          "Phần mềm hệ thống",
          "Phần mềm soạn thảo văn bản",
          "Phần mềm đồ họa",
          "Phần mềm diệt virus"
        ],
        "correctAnswer": 1,
        "explanation": "Word là công cụ soạn thảo phổ biến nhất thế giới.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 647,
        "text": "Để mở phần mềm Paint, em tìm biểu tượng có hình gì?",
        "options": [
          "Chữ W màu xanh",
          "Bảng màu và bút vẽ",
          "Hình lá cờ Windows",
          "Hình cái thùng rác"
        ],
        "correctAnswer": 1,
        "explanation": "Paint là phần mềm dành cho hội họa đơn giản.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 648,
        "text": "Trong Word, để xóa một ký tự bên trái con trỏ soạn thảo, em dùng phím nào?",
        "options": [
          "Delete",
          "Backspace",
          "Space",
          "Enter"
        ],
        "correctAnswer": 1,
        "explanation": "Backspace xóa lùi về phía trước (bên trái).",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 649,
        "text": "Thanh Ribbon trong Word chứa các thẻ lệnh đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Ribbon tập hợp các nhóm lệnh như Home, Insert, Layout...",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 650,
        "text": "Để phóng to vùng vẽ trong Paint, em dùng công cụ có biểu tượng hình gì?",
        "options": [
          "Cái bút chì",
          "Cái tẩy",
          "Kính lúp",
          "Bình đổ màu"
        ],
        "correctAnswer": 2,
        "explanation": "Magnifier (Kính lúp) giúp làm rõ các chi tiết nhỏ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 651,
        "text": "Nối các công cụ Paint với tác dụng của chúng:",
        "pairs": [
          {
            "left": "Brushes",
            "right": "Nhiều loại bút vẽ (cọ, sơn, phun...)"
          },
          {
            "left": "Text (chữ A)",
            "right": "Gõ chữ lên hình vẽ"
          },
          {
            "left": "Shapes",
            "right": "Vẽ các hình cơ bản có sẵn"
          }
        ],
        "explanation": "Hiểu rõ chức năng các nhóm công cụ trong Paint.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 652,
        "text": "Em nên đặt tay như thế nào trên bàn phím khi gõ 10 ngón?",
        "options": [
          "Đặt tùy ý",
          "Đặt nhẹ lên hàng phím cơ sở (hàng có phím F và J)",
          "Chỉ dùng 2 ngón trỏ",
          "Dùng 1 tay"
        ],
        "correctAnswer": 1,
        "explanation": "Hàng phím cơ sở là 'nhà' của các ngón tay.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 653,
        "text": "Sắp xếp các bước để chèn một hình mẫu (Box) vào Word:",
        "options": [
          "Vào thẻ Insert",
          "Chọn Shapes",
          "Nhấn chọn hình chữ nhật",
          "Kéo chuột trên trang soạn thảo"
        ],
        "correctAnswer": [
          "Vào thẻ Insert",
          "Chọn Shapes",
          "Nhấn chọn hình chữ nhật",
          "Kéo chuột trên trang soạn thảo"
        ],
        "explanation": "Quy trình thêm hình ảnh minh họa cho văn bản.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 654,
        "text": "Phân loại các phím sau vào nhóm Phím chức năng hoặc Phím điều khiển:",
        "items": [
          "Ctrl",
          "F1",
          "Alt",
          "F5"
        ],
        "targets": [
          "Phím chức năng",
          "Phím điều khiển"
        ],
        "correctAnswer": {
          "F1": "Phím chức năng",
          "F5": "Phím chức năng",
          "Ctrl": "Phím điều khiển",
          "Alt": "Phím điều khiển"
        },
        "explanation": "Nhận biết các khu vực trên bàn phím.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 655,
        "text": "Trong Paint, để vẽ một đường thẳng thật thẳng, em nên làm gì?",
        "options": [
          "Cố gắng giữ tay thật đều",
          "Nhấn giữ phím Shift khi kéo chuột",
          "Nhắm mắt khi vẽ",
          "Vẽ thật nhanh"
        ],
        "correctAnswer": 1,
        "explanation": "Phím Shift là 'thước kẻ' trong các phần mềm đồ họa.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 656,
        "text": "Kích thước tờ giấy mặc định trong Word thường là loại nào?",
        "options": [
          "A4",
          "A0",
          "A3",
          "B5"
        ],
        "correctAnswer": 0,
        "explanation": "A4 là khổ giấy tiêu chuẩn cho văn phòng và học tập.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 657,
        "text": "Để lưu một bức tranh trong Paint với định dạng ảnh phổ biến nhất, em nên chọn?",
        "options": [
          "PNG hoặc JPG",
          "DOCX",
          "MP3",
          "EXE"
        ],
        "correctAnswer": 0,
        "explanation": "PNG và JPG là các định dạng ảnh kỹ thuật số.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 658,
        "text": "Gõ tiếng Việt kiểu Telex: Muốn có chữ 'ô', em gõ phím nào?",
        "options": [
          "oo",
          "aa",
          "ee",
          "uw"
        ],
        "correctAnswer": 0,
        "explanation": "Gõ hai chữ o liên tiếp để tạo chữ ô.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 659,
        "text": "Gõ tiếng Việt kiểu Telex: Muốn có chữ 'đ', em gõ phím nào?",
        "options": [
          "dd",
          "ee",
          "aa",
          "ss"
        ],
        "correctAnswer": 0,
        "explanation": "Gõ hai chữ d liên tiếp để tạo chữ đ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 660,
        "text": "Phím Space (phím dài nhất) dùng để làm gì?",
        "options": [
          "Xuống dòng",
          "Gõ dấu cách giữa các từ",
          "Xóa chữ",
          "Viết hoa"
        ],
        "correctAnswer": 1,
        "explanation": "Tạo khoảng trắng giữa các từ để dễ đọc.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 661,
        "text": "Nối các phím tắt soạn thảo cơ bản:",
        "pairs": [
          {
            "left": "Ctrl + Z",
            "right": "Hoàn tác (Undo)"
          },
          {
            "left": "Ctrl + Y",
            "right": "Làm lại (Redo)"
          },
          {
            "left": "Ctrl + F",
            "right": "Tìm kiếm từ ngữ"
          }
        ],
        "explanation": "Thao tác nhanh trên văn bản.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 662,
        "text": "Trong Paint, công cụ 'Rotate' dùng để làm gì?",
        "options": [
          "Đổi màu",
          "Xoay hình ảnh",
          "Phóng to hình",
          "Xóa hình"
        ],
        "correctAnswer": 1,
        "explanation": "Cho phép xoay hình 90 độ, 180 độ hoặc lật đối xứng.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 663,
        "text": "Sắp xếp thứ tự để gõ chữ 'Học tập' (Kiểu Telex):",
        "options": [
          "H-o-c-j",
          "Space",
          "t-a-p-s (hoặc t-a-p-l)",
          "t-a-p-j"
        ],
        "correctAnswer": [
          "H-o-c-j",
          "Space",
          "t-a-p-j"
        ],
        "explanation": "Quy tắc gõ dấu: j là dấu nặng.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 664,
        "text": "Phân loại các công cụ sau vào nhóm Tab Home hoặc Tab Insert trong Word:",
        "items": [
          "In đậm (B)",
          "Bảng (Table)",
          "Căn lề",
          "Hình ảnh (Pictures)"
        ],
        "targets": [
          "Tab Home",
          "Tab Insert"
        ],
        "correctAnswer": {
          "In đậm (B)": "Tab Home",
          "Căn lề": "Tab Home",
          "Bảng (Table)": "Tab Insert",
          "Hình ảnh (Pictures)": "Tab Insert"
        },
        "explanation": "Tổ chức các lệnh trong Microsoft Word.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 665,
        "text": "Paint có thể mở được các tập tin có đuôi .docx không?",
        "options": [
          "Có",
          "Không"
        ],
        "correctAnswer": 1,
        "explanation": "Paint chỉ mở được các tệp đồ họa, .docx là tệp văn bản.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 666,
        "text": "Để in một tài liệu Word, em nhấn tổ hợp phím nào?",
        "options": [
          "Ctrl + I",
          "Ctrl + P",
          "Ctrl + S",
          "Ctrl + O"
        ],
        "correctAnswer": 1,
        "explanation": "P viết tắt của Print (In).",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 667,
        "text": "Trong Paint, 'Color 1' thường dùng cho thao tác nào?",
        "options": [
          "Màu nền",
          "Màu vẽ (bút chì, cọ vẽ...)",
          "Màu của tẩy",
          "Màu của giấy"
        ],
        "correctAnswer": 1,
        "explanation": "Color 1 là màu tiền cảnh (Foreground color).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 668,
        "text": "Tìm lỗi sai trong câu: 'Để viết chữ hoa, em nhấn phím Tab.'",
        "options": [
          "Để viết",
          "chữ hoa",
          "nhấn phím",
          "Tab"
        ],
        "correctAnswer": 3,
        "errorPart": "Tab",
        "correction": "Phải dùng phím SHIFT hoặc CAPS LOCK.",
        "explanation": "Phím Tab dùng để thụt lề hoặc chuyển ô.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "FIND_ERROR"
      },
      {
        "id": 669,
        "text": "Nối hình vẽ Shapes trong Paint với phím Shift khi giữ:",
        "pairs": [
          {
            "left": "Đường thẳng",
            "right": "Giúp đường nằm ngang/dọc/chéo 45 độ"
          },
          {
            "left": "Hình Oval",
            "right": "Vẽ hình tròn hoàn hảo"
          },
          {
            "left": "Hình chữ nhật",
            "right": "Vẽ hình vuông hoàn hảo"
          }
        ],
        "explanation": "Phím Shift giúp tạo hình học chuẩn xác.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 670,
        "text": "Phần mềm gõ tiếng Việt phổ biến ở Việt Nam là gì?",
        "options": [
          "Unikey",
          "Paint",
          "Excel",
          "Chrome"
        ],
        "correctAnswer": 0,
        "explanation": "Unikey là công cụ hỗ trợ gõ dấu tiếng Việt.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 671,
        "text": "Khi gõ chữ Việt, nếu gõ sai dấu, em có thể gõ đè phím dấu khác ngay lập tức để sửa, đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Cơ chế thông minh của Unikey cho phép sửa dấu nhanh.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 672,
        "text": "Để căn đều hai bên cho đoạn văn bản trong Word, em chọn nút lệnh nào?",
        "options": [
          "Align Left",
          "Align Right",
          "Center",
          "Justify"
        ],
        "correctAnswer": 3,
        "explanation": "Justify giúp văn bản trông chuyên nghiệp như sách báo.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 673,
        "text": "Sắp xếp để đổi màu nền cho một hình vẽ khép kín trong Paint:",
        "options": [
          "Chọn công cụ Fill with color (bình đổ màu)",
          "Chọn màu mong muốn ở bảng màu",
          "Nháy chuột vào vùng muốn tô",
          "Hoàn thành tô màu"
        ],
        "correctAnswer": [
          "Chọn công cụ Fill with color (bình đổ màu)",
          "Chọn màu mong muốn ở bảng màu",
          "Nháy chuột vào vùng muốn tô",
          "Hoàn thành tô màu"
        ],
        "explanation": "Thao tác tô màu cơ bản.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 674,
        "text": "Phân loại các phím sau vào nhóm Hàng phím trên hoặc Hàng phím dưới:",
        "items": [
          "Q",
          "Z",
          "M",
          "P"
        ],
        "targets": [
          "Hàng phím trên",
          "Hàng phím dưới"
        ],
        "correctAnswer": {
          "Q": "Hàng phím trên",
          "P": "Hàng phím trên",
          "Z": "Hàng phím dưới",
          "M": "Hàng phím dưới"
        },
        "explanation": "Vị trí các phím so với hàng phím cơ sở.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 675,
        "text": "Trong Word, em có thể chèn các ký hiệu toán học như 1/2 hay √ đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Dùng tính năng Equation hoặc Symbol.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 676,
        "text": "Để xóa một đoạn văn bản lớn trong Word, em nên làm gì?",
        "options": [
          "Dùng Backspace xóa từng chữ",
          "Bôi đen toàn bộ đoạn văn rồi nhấn Delete",
          "Tắt máy tính",
          "Xóa toàn bộ file"
        ],
        "correctAnswer": 1,
        "explanation": "Bôi đen giúp thao tác hàng loạt cực nhanh.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 677,
        "text": "Biểu tượng chữ 'A' trên thanh công cụ Paint dùng để làm gì?",
        "options": [
          "Tô màu",
          "Vẽ bút chì",
          "Chèn và gõ văn bản",
          "Xóa hình"
        ],
        "correctAnswer": 2,
        "explanation": "Đây là công cụ Text trong đồ họa.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 678,
        "text": "Trong Word, để đổi màu toàn bộ chữ thành màu xanh, em dùng nút nào?",
        "options": [
          "Biểu tượng chữ A có gạch màu dưới chân",
          "Biểu tượng bình đổ màu",
          "Biểu tượng cái bút chì",
          "Biểu tượng hình ảnh"
        ],
        "correctAnswer": 0,
        "explanation": "Font Color nằm ở thẻ Home.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 679,
        "text": "Có thể vẽ thêm các hình vào sau khi đã gõ xong một đoạn văn bản trong Word.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Văn bản và hình ảnh có thể kết hợp linh hoạt.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 680,
        "text": "Khi học vẽ trong Paint, em nên dùng chuột hay bàn phím là chính?",
        "options": [
          "Chuột",
          "Bàn phím"
        ],
        "correctAnswer": 0,
        "explanation": "Chuột giúp điều khiển nét vẽ linh hoạt hơn bàn phím.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 681,
        "text": "Nối phím gõ Telex với dấu tương ứng:",
        "pairs": [
          {
            "left": "s",
            "right": "Dấu sắc"
          },
          {
            "left": "f",
            "right": "Dấu huyền"
          },
          {
            "left": "r",
            "right": "Dấu hỏi"
          }
        ],
        "explanation": "Quy tắc gõ dấu tiếng Việt phổ biến.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 682,
        "text": "Nối phím gõ Telex với dấu còn lại:",
        "pairs": [
          {
            "left": "x",
            "right": "Dấu ngã"
          },
          {
            "left": "j",
            "right": "Dấu nặng"
          },
          {
            "left": "z",
            "right": "Xóa dấu vừa gõ"
          }
        ],
        "explanation": "Quy tắc gõ dấu tiếng Việt phổ biến.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 683,
        "text": "Mỗi khi gõ hết một đoạn văn và muốn sang đoạn mới, em nhấn phím gì?",
        "options": [
          "Shift",
          "Ctrl",
          "Enter",
          "Tab"
        ],
        "correctAnswer": 2,
        "explanation": "Phím Enter ngắt đoạn.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 684,
        "text": "Sắp xếp để tìm kiếm một từ trong văn bản Word dài:",
        "options": [
          "Nhấn Ctrl + F",
          "Gõ từ cần tìm vào ô Navigation",
          "Quan sát các từ được highlight màu vàng",
          "Nhấn vào kết quả để di chuyển đến đó"
        ],
        "correctAnswer": [
          "Nhấn Ctrl + F",
          "Gõ từ cần tìm vào ô Navigation",
          "Quan sát các từ được highlight màu vàng",
          "Nhấn vào kết quả để di chuyển đến đó"
        ],
        "explanation": "Kỹ năng tìm kiếm trong văn bản.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 685,
        "text": "Phân loại các công cụ sau vào nhóm Định dạng văn bản hoặc Định dạng trang giấy:",
        "items": [
          "Font chữ",
          "Hướng giấy (Orientation)",
          "Màu chữ",
          "Căn lề (Margins)"
        ],
        "targets": [
          "Định dạng văn bản",
          "Định dạng trang giấy"
        ],
        "correctAnswer": {
          "Font chữ": "Định dạng văn bản",
          "Màu chữ": "Định dạng văn bản",
          "Hướng giấy (Orientation)": "Định dạng trang giấy",
          "Căn lề (Margins)": "Định dạng trang giấy"
        },
        "explanation": "Hiểu về cấu trúc trình bày trong Word.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 686,
        "text": "Để xóa một hình vẽ trong Paint mà không làm trắng vùng đó, em dùng công cụ tẩy đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Tẩy sẽ xóa và thay bằng Color 2 (thường là màu trắng).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 687,
        "text": "Trong Word, phím Home giúp em di chuyển con trỏ về đâu?",
        "options": [
          "Đầu dòng hiện tại",
          "Cuối dòng hiện tại",
          "Đầu văn bản",
          "Cuối văn bản"
        ],
        "correctAnswer": 0,
        "explanation": "Phím Home đưa về start line.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 688,
        "text": "Trong Word, phím End giúp em di chuyển con trỏ về đâu?",
        "options": [
          "Đầu dòng",
          "Cuối dòng hiện tại",
          "Lên trên",
          "Xuống dưới"
        ],
        "correctAnswer": 1,
        "explanation": "Phím End đưa về cuối line.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 689,
        "text": "Tính năng 'Undo' có thể quay lại bao nhiêu bước trước đó?",
        "options": [
          "Chỉ 1 bước",
          "Tối đa 5 bước",
          "Rất nhiều bước (tùy bộ nhớ máy)",
          "Không quay lại được"
        ],
        "correctAnswer": 2,
        "explanation": "Lịch sử Undo cho phép sửa sai nhiều lần.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 690,
        "text": "Tìm lỗi sai: 'Để vẽ đường thẳng cong, em nhấn vào công cụ hình cái bút chì.'",
        "options": [
          "Để vẽ",
          "đường thẳng cong",
          "công cụ",
          "bút chì"
        ],
        "correctAnswer": 3,
        "errorPart": "bút chì",
        "correction": "Phải dùng công cụ CURVE (đường cong).",
        "explanation": "Bút chì vẽ tự do, Curve vẽ cong chuẩn xác.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "FIND_ERROR"
      },
      {
        "id": 691,
        "text": "Nối kiểu chữ với tổ hợp phím tắt nhanh:",
        "pairs": [
          {
            "left": "In đậm",
            "right": "Ctrl + B"
          },
          {
            "left": "In nghiêng",
            "right": "Ctrl + I"
          },
          {
            "left": "Gạch chân",
            "right": "Ctrl + U"
          }
        ],
        "explanation": "Phím tắt định dạng chữ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 692,
        "text": "Để lưu bài vẽ sang một file khác với tên khác (không ghi đè lên file cũ), em chọn?",
        "options": [
          "Save",
          "Save As",
          "Save New",
          "Save File"
        ],
        "correctAnswer": 1,
        "explanation": "Save As dùng để lưu bản sao lưu mới.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 693,
        "text": "Có bao nhiêu phím Shift trên bàn phím tiêu chuẩn?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 1,
        "explanation": "Có 2 phím ở hai bên để tiện cho cả hai tay.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 694,
        "text": "Có bao nhiêu phím Enter trên bàn phím tiêu chuẩn (có bàn phím số riêng)?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctAnswer": 1,
        "explanation": "Một phím ở khu vực chữ và một phím ở khu vực số.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 695,
        "text": "Hàng phím số nằm ở vị trí nào trên bàn phím chính?",
        "options": [
          "Hàng dưới cùng",
          "Hàng trên cùng",
          "Bên trái",
          "Bên dưới phím cơ sở"
        ],
        "correctAnswer": 1,
        "explanation": "Nằm ngay dưới hàng phím chức năng F1-F12.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 696,
        "text": "Để gõ chữ 'Xinh xắn' bằng kiểu Telex, em gõ như thế nào?",
        "options": [
          "X-i-n-h x-a-s-n-s",
          "Xinh x-a-w-s-n",
          "Xinh xaans",
          "Xinh xans"
        ],
        "correctAnswer": 2,
        "explanation": "aa = â, s = sắc.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 697,
        "text": "Nối biểu tượng Word với các phần hiển thị trên màn hình:",
        "pairs": [
          {
            "left": "Con trỏ soạn thảo",
            "right": "Vạch đứng nhấp nháy"
          },
          {
            "left": "Thanh cuộn",
            "right": "Để xem phần bị khuất của trang"
          },
          {
            "left": "Thanh trạng thái",
            "right": "Hiện số trang, số từ"
          }
        ],
        "explanation": "Nhận biết các thành phần giao diện phần mềm.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MATCHING"
      },
      {
        "id": 698,
        "text": "Phím Caps Lock khi đang bật (đèn sáng) thì gõ chữ sẽ như thế nào?",
        "options": [
          "Chữ viết thường",
          "Chữ viết hoa",
          "Chữ bị mất",
          "Chữ màu đỏ"
        ],
        "correctAnswer": 1,
        "explanation": "Bật chế độ viết hoa toàn bộ.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 699,
        "text": "Trong Paint, để cắt một phần hình ảnh và đưa sang chỗ khác, em dùng lệnh gì?",
        "options": [
          "Select -> Crop",
          "Select -> Cut",
          "Select -> Delete",
          "Rotate"
        ],
        "correctAnswer": 1,
        "explanation": "Cut giúp lấy hình ảnh ra khỏi vị trí cũ.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 700,
        "text": "Vẽ tranh trên máy tính giúp em tiết kiệm màu vẽ và giấy lót đúng hay sai?",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswer": 0,
        "explanation": "Đây là ưu điểm của nghệ thuật số.",
        "difficulty": "Easy",
        "topic": "Ứng dụng tin học",
        "type": "TRUE_FALSE"
      },
      {
        "id": 701,
        "text": "Sắp xếp để đổi kiểu chữ (Font) cho đoạn văn trong Word:",
        "options": [
          "Bôi đen đoạn văn",
          "Bấm vào mũi tên ở ô chứa tên phông chữ",
          "Chọn phông chữ mong muốn (VD: Arial)",
          "Quan sát thay đổi"
        ],
        "correctAnswer": [
          "Bôi đen đoạn văn",
          "Bấm vào mũi tên ở ô chứa tên phông chữ",
          "Chọn phông chữ mong muốn (VD: Arial)",
          "Quan sát thay đổi"
        ],
        "explanation": "Các bước thay đổi diện mạo văn bản.",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "ORDERING"
      },
      {
        "id": 702,
        "text": "Phân loại các phím sau vào nhóm Có 1 ký tự hoặc Có 2 ký tự (phím có hình trên-dưới):",
        "items": [
          "Phím chữ A",
          "Phím dấu +/=",
          "Phím số 1/!",
          "Phím Enter"
        ],
        "targets": [
          "1 ký tự",
          "2 ký tự"
        ],
        "correctAnswer": {
          "Phim chữ A": "1 ký tự",
          "Phím Enter": "1 ký tự",
          "Phím dấu +/=": "2 ký tự",
          "Phím số 1/!": "2 ký tự"
        },
        "explanation": "Hiểu về cấu trúc bàn phím nâng cao.",
        "difficulty": "Hard",
        "topic": "Ứng dụng tin học",
        "type": "DRAG_DROP"
      },
      {
        "id": 703,
        "text": "Để căn lề phải cho văn bản, em dùng tổ hợp phím tắt nào?",
        "options": [
          "Ctrl + L",
          "Ctrl + R",
          "Ctrl + E",
          "Ctrl + J"
        ],
        "correctAnswer": 1,
        "explanation": "R viết tắt của Right (Phải).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 704,
        "text": "Để căn lề trái cho văn bản, em dùng tổ hợp phím tắt nào?",
        "options": [
          "Ctrl + L",
          "Ctrl + R",
          "Ctrl + E",
          "Ctrl + J"
        ],
        "correctAnswer": 0,
        "explanation": "L viết tắt của Left (Trái).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      },
      {
        "id": 705,
        "text": "Để căn giữa cho văn bản, em dùng tổ hợp phím tắt nào?",
        "options": [
          "Ctrl + L",
          "Ctrl + R",
          "Ctrl + E",
          "Ctrl + J"
        ],
        "correctAnswer": 2,
        "explanation": "E giúp căn giữa (Center).",
        "difficulty": "Medium",
        "topic": "Ứng dụng tin học",
        "type": "MCQ"
      }
    ]
  }
];
