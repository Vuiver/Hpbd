/**
 * =========================================================================
 * CẤU HÌNH THIỆP CHÚC MỪNG 3D (THIEP-CHUC-MUNG CONFIG)
 * =========================================================================
 * Chủ đề: Chúc mừng sinh nhật Chị Huyền Trần 🎂
 */

const CARD_CONFIG = {
  // 1. THÔNG TIN NGƯỜI NHẬN & DỊP KỶ NIỆM
  recipientName: "Chị Huyền Trần",
  occasionTitle: "Chúc Mừng Sinh Nhật",

  // 2. NHẠC NỀN
  musicUrl: "happy-birthday.mp3",

  // 3. ẢNH KỶ NIỆM (Hiển thị dạng khung ảnh Polaroid 3D rơi lơ lửng)
  photos: [
    "anh-huyen-tran.png"
  ],

  // 4. BẬT / TẮT CÁC LOẠI QUÀ 3D
  giftSettings: {
    enableTeddyBear: true,     // 🧸 Gấu bông 3D dễ thương
    enableFlowerBouquet: true, // 💐 Bó hoa tươi rực rỡ
    enableBirthdayCake: true,  // 🎂 Bánh kem cắm nến
    enableGiftBox: true,       // 🎁 Hộp quà buộc nơ vàng
    enableHeart: true,         // ❤️ Trái tim 3D đỏ thắm
    enableBalloon: true,       // 🎈 Bóng bay đủ màu
    giftDensity: 28            // Số lượng quà cáp rơi đồng thời
  },

  // 5. DANH SÁCH LỜI CHÚC DÀNH RIÊNG CHO CHỊ HUYỀN TRẦN
  messages: [
    "🎂 HAPPY BIRTHDAY CHỊ HUYỀN TRẦN 🎂",
    "👑 Chúc Mừng Sinh Nhật Chị Huyền Trần! 👑",
    "✨ Tuổi Mới Xinh Đẹp Rực Rỡ - Vạn Sự Hanh Thông ✨",
    "🌸 Nhan Sắc Thăng Hạng - Trẻ Trung Bất Chấp Thời Gian 💖",
    "💰 Tiền Vào Như Nước Sông Đà - Đếm Tiền Mỏi Cả Tay 💵",
    "☕ Tiền Ra Nhỏ Giọt Cà Phê Phin ☕",
    "🚀 Sự Nghiệp Thăng Hoa - Đỉnh Cao Bứt Phá 📈",
    "🌟 Luôn Rạng Rỡ, Yêu Đời & Hạnh Phúc Trọn Vẹn 🌺",
    "💪 Sức Khỏe Dồi Dào - Năng Lượng Tươi Mới Mỗi Ngày 🌿",
    "🏆 Một Năm Rực Rỡ - Bội Thu Thắng Lợi & Niềm Vui 🏆",
    "⛵ Công Việc Thuận Buồm Xuôi Gió - Trăm Trận Trăm Thắng ⚔️",
    "📝 Dự Án Thành Công - Khách Hàng Yêu Quý 📑",
    "🍀 Vạn Sự Như Ý - Tỷ Sự Như Mơ 🍀",
    "💎 Tài Lộc Bùng Nổ - Số Dư Ting Ting Liên Tục 📲",
    "🚗 Xe Sang Nhà Đẹp - Cuộc Sống Nở Hoa 🏡",
    "👨‍👩‍👧‍👦 Gia Đình Ấm Êm - Tràn Ngập Tiếng Cười ❤️",
    "🥂 Hôm Nay Chị Huyền Là Ngôi Sao Sáng Nhất 🥂",
    "🎉 Tuổi Mới Bình An - Thêm Giàu - Cười Nhiều Hơn 🥳",
    "🕊️ Bình An Trong Tâm Hồn - An Nhiên Mỗi Ngày 🍃",
    "🌟 Quý Nhân Phù Trợ - Đi Đâu Cũng Được Yêu Thương 🌟",
    "🎁 Cầu Được Ước Thấy - Vạn Điều Tốt Lành 🎁",
    "✈️ Du Lịch Bốn Phương - Thảnh Thơi Hưởng Thụ 🏖️",
    "🛍️ Shopping Thả Ga - Không Cần Nhìn Giá 💳",
    "🌈 Đời Tươi Như Cầu Vồng - Nụ Cười Luôn Tỏa Nắng 🌈",
    "👑 Đẳng Cấp & Duyên Dáng - Chị Huyền Mãi Đỉnh 👑",
    "🎂 Tuổi Mới Ngọt Ngào Như Bánh Kem 🎂",
    "💐 Mãi Mãi Tuổi 20 - Tràn Trề Sức Sống 💐",
    "✨ Chúc Chị Một Ngày Sinh Nhật Thật Ý Nghĩa & Ngập Tràn Yêu Thương ✨"
  ]
};

// Xuất cấu hình ra window để index.html đọc được
if (typeof window !== 'undefined') {
  window.CARD_CONFIG = CARD_CONFIG;
}