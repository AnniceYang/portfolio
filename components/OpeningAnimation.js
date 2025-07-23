// components/OpeningAnimation.js
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function OpeningAnimation({ onComplete }) {
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
      onComplete();
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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* 星空背景 */}
      <ParticlesBackground />

      {/* 发光鼠标跟随光圈 */}
      <div
        className="mouse-glow"
        style={{ top: cursorPos.y, left: cursorPos.x }}
      ></div>

      {/* 内容遮罩层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12002f] via-[#7f5af0] to-[#ff8fab] bg-opacity-90 flex flex-col items-center justify-center text-center px-4 z-50">
        {/* Logo 标题 */}
        <div className="text-white text-5xl md:text-6xl font-extrabold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-scaleIn">
          MyLogo 🧠
        </div>

        {/* slogan 打字效果 + 光线文字效果 */}
        <p className="mt-8 text-white text-xl md:text-2xl font-mono h-6 tracking-wide">
          <span className="glow-text">{showText}</span>
          <span className="animate-pulse">|</span>
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-300 tracking-wide">
          Frontend Developer · Creative Coder · UI Enthusiast
        </p>

        {/* 进入按钮 */}
        {showButton && (
          <button
            onClick={onComplete}
            className="mt-12 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded-md text-sm tracking-wider"
          >
            Enter
          </button>
        )}
      </div>

      {/* 光线文字样式 */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 4px #fff, 0 0 10px #7f5af0, 0 0 20px #7f5af0;
        }
      `}</style>
    </div>
  );
}
