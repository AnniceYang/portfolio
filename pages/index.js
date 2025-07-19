//欢迎页（开场动画页)
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function Landing() {
  const router = useRouter();
  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000); //3s后跳转主页

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white animate-bounce">
          👋 {t("welcome")}
        </h1>
        <p className="mt-4 text-white text-lg animate-pulse">{t("loading")}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
