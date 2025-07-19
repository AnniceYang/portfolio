//首页（主页）页面组件

// pages/index.js
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-extrabold mb-4">{t("home_title")}</h1>
        <p className="text-lg text-gray-600 max-w-xl text-center">
          {t("home_description")}
        </p>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
