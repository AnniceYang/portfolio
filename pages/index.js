import { useTranslations } from "next-intl";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import { ChevronDown } from "lucide-react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMqtt } from "react-icons/si";

export default function HomePage() {
  const t = useTranslations("homePage");

  // 技术栈数组，图标统一尺寸并居中
  const techStack = [
    { name: "React", icon: <FaReact className="text-sky-400 w-6 h-6" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
    {
      name: "Tailwind CSS",
      icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    },
    { name: "MQTT", icon: <SiMqtt className="w-6 h-6 text-orange-500" /> },
  ];

  // 最近项目
  const recentProjects = [
    {
      title: t("recent.0.title"),
      description: t("recent.0.description"),
      href: "/projects",
    },
    {
      title: t("recent.1.title"),
      description: t("recent.1.description"),
      href: "/projects",
    },
    {
      title: t("recent.2.title"),
      description: t("recent.2.description"),
      href: "/projects",
    },
  ];

  // 视差滚动效果
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 100]);
  const yStars = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
        {/* 星空背景 */}
        <motion.div style={{ y: yStars }} className="absolute inset-0 z-0">
          <Starfield />
        </motion.div>

        {/* Hero 区域 */}
        <motion.section
          style={{ y: yHero }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
        >
          {/* 标题：渐变 + 柔和发光动画 */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-purple-600 drop-shadow-xl leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              textShadow: [
                "0 0 10px rgba(255,182,193,0.6)",
                "0 0 18px rgba(186,85,211,0.7)",
                "0 0 10px rgba(255,182,193,0.6)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {t("hero_title")}
          </motion.h1>
          {/* 副标题 */}
          <motion.p
            className="mt-6 max-w-2xl text-white/90 text-lg drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("hero_subtitle")}
          </motion.p>
          {/* CTA 按钮 */}
          <motion.div
            className="mt-10 flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-full shadow-xl transition hover:shadow-[0_0_20px_rgba(255,182,193,0.7)] hover:scale-105"
            >
              {t("buttons.view_work")}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-white/70 text-white/90 hover:bg-white/10 rounded-full font-semibold shadow transition hover:shadow-[0_0_20px_rgba(255,182,193,0.5)] hover:scale-105"
            >
              {t("buttons.about_me")}
            </Link>
          </motion.div>
          {/* 技术栈区域 */}

          <div
            className="flex gap-4 mt-16 max-w-full overflow-x-auto no-scrollbar px-2"
            aria-label="Tech stack"
          >
            {techStack.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-shrink-0 items-center gap-2 px-5 py-2 min-w-max bg-white/10 rounded-lg border border-pink-200/30 text-white/90 backdrop-blur-sm hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,182,193,0.5)] transition cursor-default select-none"
                title={name}
              >
                <span className="flex-shrink-0">{icon}</span>
                <span className="font-medium whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
          {/* 滚动提示箭头 */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-pink-200" />
          </motion.div>
        </motion.section>

        {/* 最近项目区 */}
        <section className="relative z-10 bg-white/90 backdrop-blur-md py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t("recent_projects")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {recentProjects.map((proj, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-xl bg-white shadow hover:shadow-xl border border-transparent hover:border-pink-300 transition cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  tabIndex={0}
                  role="link"
                  onClick={() => (window.location.href = proj.href)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") window.location.href = proj.href;
                  }}
                >
                  <h3 className="font-semibold text-xl text-gray-800">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{proj.description}</p>
                  <Link
                    href={proj.href}
                    className="mt-4 inline-block text-pink-600 hover:underline"
                    tabIndex={-1}
                  >
                    {t("view_more")}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="relative z-10 py-20 text-center bg-gradient-to-r from-pink-100/70 to-purple-100/70">
          <h2 className="text-3xl font-bold text-pink-700 mb-4 drop-shadow leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full shadow-xl hover:from-pink-400 hover:to-pink-300 transition hover:shadow-[0_0_20px_rgba(255,182,193,0.7)] hover:scale-105"
          >
            {t("cta.button")}
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
