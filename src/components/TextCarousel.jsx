import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextCarousel = () => {
  const text = "The Fastest Delivery in Your City"; // Chuỗi cần hiển thị
  const [currentIndex, setCurrentIndex] = useState(0); // Theo dõi vị trí ký tự hiện tại
  const [isPaused, setIsPaused] = useState(false); // Trạng thái tạm dừng
  const [showCursor, setShowCursor] = useState(true); // Hiển thị con trỏ nhấp nháy

  // Hiệu ứng chạy ký tự
  useEffect(() => {
    if (isPaused) return; // Nếu đang tạm dừng, không làm gì

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === text.length) {
          setIsPaused(true); // Dừng khi hết chuỗi
          setTimeout(() => {
            setCurrentIndex(0); // Reset về đầu sau 3s
            setIsPaused(false); // Tiếp tục chạy
          }, 3000); // Tạm dừng 3 giây
          return prevIndex; // Không thay đổi index
        }
        return prevIndex + 1; // Tiến tới ký tự tiếp theo
      });
    }, 100); // Thời gian hiển thị từng ký tự

    return () => clearInterval(interval); // Dọn dẹp interval
  }, [text, isPaused]);

  // Hiệu ứng con trỏ nhấp nháy
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // Đảo trạng thái con trỏ
    }, 500); // Tốc độ nhấp nháy của con trỏ

    return () => clearInterval(cursorInterval); // Dọn dẹp interval
  }, []);

  const displayedText = text.slice(0, currentIndex); // Lấy chuỗi hiện tại theo vị trí

  return (
    <div className="h-[350px]">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-[5rem] text-orange-600 font-bold"
      >
        {displayedText}
        <span style={{ opacity: showCursor ? 1 : 0,  marginLeft: "5px", }}>|</span>
      </motion.span>
    </div>
  );
};

export default TextCarousel;
