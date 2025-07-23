//欢迎页（开场动画页)+Home主页
// pages/index.js

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// 动态导入动画组件（防止 SSR 报错）
const OpeningAnimation = dynamic(
  () => import("@/components/OpeningAnimation"),
  { ssr: false }
);

export default function HomePage() {
  const t = useTranslations();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      // 已经访问过本次会话，跳过动画
      setShowAnimation(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <OpeningAnimation onComplete={handleAnimationComplete} />;
  }

  // 动画结束后显示主页内容
  return (
    <div className="min-h-screen page-home-bg flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        {t("home_title")}
      </h1>
      <p className="text-lg text-secondary max-w-xl text-center">
        {t("home_description")}
      </p>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
