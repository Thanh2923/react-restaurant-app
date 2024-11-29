import React, { useEffect, useState,useRef } from "react";

const AnimotionItemPro = ({ children,animotion }) => {
  const [isVisible, setIsVisible] = useState(false); // Trạng thái xuất hiện của phần tử
  const sectionRef = useRef(null); // Tham chiếu đến phần tử

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Khi phần tử nằm trong viewport
        }
      },
      { threshold: 0.3 } // 10% của phần tử nằm trong viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Dọn dẹp observer
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-transform duration-500 ease-in-out ${
        isVisible ? `${animotion}` : "-translate-x-20 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};



export default AnimotionItemPro;
