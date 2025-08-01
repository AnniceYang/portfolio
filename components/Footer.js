//页脚组件
//components/Footer.js

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const t = useTranslations();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ];

  //回到顶部
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white py-8 px-4 mt-16 relative   shadow-inner  border-white/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-pink-700 text-sm space-y-6 md:space-y-0">
        {/* 左侧版权 + 联系方式 */}
        <div className="mb-4 md:mb-0 select-none text-center md:text-left">
          <div>
            © {new Date().getFullYear()} Annice Yang. All rights reserved.
          </div>
          <div className="mt-1 text-xs text-pink-600">
            Email:{" "}
            <a
              href="mailto:shelleytt06@gmail.com"
              className="underline hover:text-pink-900"
            >
              shelleytt06@gmail.com
            </a>{" "}
            | Tel:{" "}
            <a
              href="tel:+8618899762987"
              className="underline hover:text-pink-900"
            >
              +86 18899762987
            </a>
          </div>
        </div>

        {/*中间 导航*/}
        <nav className="flex flex-wrap justify-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-pink-900 transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/*右侧 社交*/}
        <div className="flex space-x-4 text-pink-600">
          <a
            href="https://github.com/AnniceYang"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-pink-700 hover:scale-110 transform transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anniceyang/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-pink-700 hover:scale-110 transform transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:shelleytt06@gmail.com"
            className="group hover:text-pink-700 hover:scale-110 transform transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* 回到顶部按钮*/}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
