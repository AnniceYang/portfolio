//项目顶层入口组件，统一注入全局样式和状态

// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield"; // 引入星星背景
import { NextIntlProvider } from "next-intl";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/components/Footer";

// 动态导入动画组件（避免 SSR 报错）
const OpeningAnimation = dynamic(
  () => import("@/components/OpeningAnimation"),
  {
    ssr: false,
    loading: () => null,
  }
);

const inter = Inter({ subsets: ["latin"] }); // Google 字体配置

export default function MyApp({ Component, pageProps }) {
  const [showAnimation, setShowAnimation] = useState(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowAnimation(false); // 不是第一次访问，跳过动画
    } else {
      sessionStorage.setItem("hasVisited", "true");
      setShowAnimation(true); // 第一次访问，播放动画
    }
  }, []);

  if (showAnimation === null) return null; // 阻止“闪现”

  if (showAnimation)
    return <OpeningAnimation onComplete={() => setShowAnimation(false)} />;

  // 动画结束后再渲染网站主内容
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <main className={inter.className}>
        <Starfield />
        <Navbar />

        <AnimatePresence mode="wait">
          {showAnimation ? (
            <OpeningAnimation
              key="opening"
              onComplete={() => setShowAnimation(false)}
            />
          ) : (
            <motion.div
              key="main-content"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <Component {...pageProps} />
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </main>
    </NextIntlProvider>
  );
}
