// ============================================================
// CẤU HÌNH DỮ LIỆU QUÀ TẶNG (BẠN CÓ THỂ TỰ DO CHỈNH SỬA Ở ĐÂY)
// ============================================================

window.GIFT_DATA = {
    // 1. Màn mở đầu (Intro Screen - Chữ ghép từ các trái tim bay)
    intro: {
        // Dòng chữ tiêu đề (có thể dùng \n để chủ động xuống dòng theo ý muốn)
        topic: "HAPPY VIETNAMESE WOMEN'S DAY!",
        
        // Tên người nhận (sẽ tự động ghép thêm icon trái tim đỏ ở cuối)
        recipientName: "Hoàng Hồng",

        // Tùy biến kiểu chữ và độ tinh tế của các trái tim ghép chữ (Tùy chọn):
        // - fontFamily: Phông chữ hiển thị ('Montserrat', 'Quicksand', 'Pacifico', 'Dancing Script', 'Arial'...)
        // - letterSpacing: Khoảng cách giữa các chữ cái (pixel). Mặc định tự động giãn đều đẹp mắt (~8px).
        // - heartSize: Kích thước từng trái tim nhỏ ghép nên chữ (pixel, khuyên dùng từ 6 đến 9 để chữ nét, thanh mảnh, không bị thô).
        fontFamily: "Montserrat",
        letterSpacing: 7,
        heartSize: 6,

        backgroundMusic: {
            url: "assets/musics/noinaycoanh.mp3"   // File nhạc nền (chọn các bài có sẵn trong assets/musics/)
        }
    },

    // 2. Cuốn sổ kỷ niệm 3D (Lật từng trang tương tác)
    book: {
        pages: [
            {
                pageNumber: 1,
                text: "Thật tình cờ khi vào mùa đông năm ấy, chúng mình lại có duyên gặp gỡ và quen biết nhau theo một cách đặc biệt đến vậy 🎉🎈",
                image: "assets/images/user/page1.jpg"
            },
            {
                pageNumber: 2,
                text: "Những ngày đầu tiên, ai nấy đều còn chút ngại ngùng, mở lời với nhau cũng chỉ dám dè dặt vài câu chuyện nhỏ 🌊☔",
                image: "assets/images/user/page2.jpg"
            },
            {
                pageNumber: 3,
                text: "Trải qua một năm gắn bó với biết bao buổi họp, cùng chạy qua từng chương trình lớn nhỏ, từ lúc nào không hay chúng ta đã trở thành một phần quen thuộc của nhau 💞",
                image: "assets/images/user/page3.jpg"
            },
            {
                pageNumber: 4,
                text: "Dù giờ đây mỗi người một hướng đi, những buổi tụ họp khó lòng đông đủ như trước, nhưng hãy nhớ rằng phía sau luôn có mọi người sẵn sàng sẻ chia mọi lúc mọi nơi 🎂💖",
                image: "assets/images/user/page4.jpg"
            },
            {
                pageNumber: 5,
                text: "Cảm ơn bạn vì đã đồng hành, cùng nhau đi qua một phần thanh xuân thật rực rỡ và trọn vẹn ❤️✨",
                image: "assets/images/user/page5.jpg"
            }
        ]
    },

    // 3. Quả cầu ảnh 3D & Các dòng chữ chúc bay lượn (Sphere & Orbiting Wishes)
    sphere: {
        // Danh sách ảnh tạo nên quả cầu 3D (bạn có thể thêm ảnh của bạn vào thư mục assets/images/user/)
        images: [
            "assets/images/sp/1.jpg",
            "assets/images/sp/2.jpg",
            "assets/images/sp/3.jpg",
            "assets/images/sp/4.jpg",
            "assets/images/sp/5.jpg",
            "assets/images/sp/6.jpg",
            "assets/images/sp/7.jpg",
            "assets/images/sp/8.jpg",
            "assets/images/sp/9.jpg",
            "assets/images/sp/10.jpg",
            "assets/images/sp/11.jpg"
        ],
        // Kích thước các dòng chữ chúc bay lượn (Tùy chọn: mặc định 2.9, tăng lên 3.2 - 3.8 nếu muốn chữ to hơn nữa)
        wishScale: 2.9,

        // Các dòng chữ chúc 3D bay lượn quanh không gian sau khi ấn vào quả cầu
        wishes: [
            "Happy Vietnamese Women's Day 💖",
            "Cảm ơn vì luôn đồng hành và sẻ chia cùng tụi mình ✨",
            "Chúc bạn luôn rạng rỡ, vui vẻ và thật nhiều hạnh phúc 💕",
            "Mãi yêu quý bạn rất nhiều 💓",
            "Ngày càng xinh đẹp và tự tin nhé 😘",
            "Cảm ơn vì đã luôn chu đáo và hết mình vì cả nhóm 🌸",
            "We are always with you 💖",
            "Hồng 🌹",
            "Kỷ niệm đẹp đong đầy từng khoảnh khắc 💞",
            "Cảm ơn bạn vì đã là một phần thanh xuân tuyệt vời của tụi mình 💐",
            "Ngày càng xinh đẹp"
        ],
        // Lá thư tâm sự (xuất hiện nút mở thư ở góc phải sau khi quả cầu nổ)
        letter: {
            enabled: true,
            title: "Gửi Hồng ❤️",
            text: "Nhân ngày 20/10, chúc Hồng lúc nào cũng rạng rỡ, xinh đẹp và luôn giữ được nguồn năng lượng tích cực ấy. Mong rằng chặng đường sắp tới của bạn sẽ ngập tràn may mắn, hạnh phúc và mọi dự định ấp ủ đều thành công rực rỡ nhé!\n\nMọi người luôn ở đây và ủng hộ bạn 💖"
        }
    }
};
