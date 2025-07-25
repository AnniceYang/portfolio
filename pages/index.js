//Home主页
// pages/index.js

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

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
