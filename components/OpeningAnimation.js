// components/OpeningAnimation.js
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningAnimation({ onComplete }) {
  const [show, setShow] = useState(true); // 控制显示/隐藏
  const [showText, setShowText] = useState("");
  const fullText = "Ideas Into Interfaces.";
  const [showButton, setShowButton] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText[index];
        setShowText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 800);
      }
    }, 100);

    const timer = setTimeout(() => {
      triggerExit();
    }, 6500);

    // 跟随鼠标的发光光圈
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const triggerExit = () => {
    setShow(false); // 触发退出动画
    setTimeout(onComplete, 800); // 动画时长后再移除组件
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <ParticlesBackground />

          <div
            className="mouse-glow"
            style={{ top: cursorPos.y, left: cursorPos.x }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-br from-[#12002f] via-[#7f5af0] to-[#ff8fab] bg-opacity-90 flex flex-col items-center justify-center text-center px-4 z-50">
            <div className="text-white text-5xl md:text-6xl font-extrabold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-scaleIn">
              MyLogo 🧠
            </div>

            <p className="mt-8 text-white text-3xl md:text-4xl font-mono tracking-normal leading-relaxed">
              <span className="glow-text">{showText}</span>
              <span className="animate-pulse">|</span>
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-300 tracking-wide">
              Frontend Developer · Creative Coder · UI Enthusiast
            </p>

            {showButton && (
              <motion.button
                onClick={triggerExit}
                className="mt-12 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded-md text-sm tracking-wider"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                Enter
              </motion.button>
            )}
          </div>

          <style jsx>{`
            .glow-text {
              text-shadow: 0 0 4px #fff, 0 0 10px #7f5af0, 0 0 20px #7f5af0;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
