// pages/index.js
import { useTranslations } from "next-intl";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  const t = useTranslations("homePage");

  const techStack = ["React", "Next.js", "Tailwind CSS", "MQTT"];

  // recentProjects 从翻译文件读取
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

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 100]);
  const yStars = useTransform(scrollY, [0, 500], [0, 50]); // 星空错位

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
        {/* 星星背景 + parallax */}
        <motion.div style={{ y: yStars }} className="absolute inset-0 z-0">
          <Starfield />
        </motion.div>

        {/* Hero 区域 */}
        <motion.section
          style={{ y: yHero }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-purple-600 drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              textShadow: [
                "0px 0px 8px rgba(255, 182, 193, 0.7)",
                "0px 0px 20px rgba(186, 85, 211, 0.8)",
                "0px 0px 8px rgba(255, 182, 193, 0.7)",
              ],
            }}
            transition={{
              duration: 0.8,
              textShadow: { repeat: Infinity, duration: 2 },
            }}
          >
            {t("hero_title")}
          </motion.h1>

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
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-full shadow-xl transition hover:shadow-[0_0_20px_rgba(255,182,193,0.7)]"
            >
              {t("buttons.view_work")}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-white/70 text-white/90 hover:bg-white/10 rounded-full font-semibold shadow transition hover:shadow-[0_0_20px_rgba(255,182,193,0.5)]"
            >
              {t("buttons.about_me")}
            </Link>
          </motion.div>

          {/* 技术栈静态 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-white/5 rounded-lg border border-pink-200/30 text-white/90 backdrop-blur-sm hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,182,193,0.4)] transition"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* 滚动提示箭头 */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-pink-200" />
          </motion.div>
        </motion.section>

        {/* 最近项目 */}
        <section className="relative z-10 bg-white/90 backdrop-blur-md py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t("recent_projects")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {recentProjects.map((proj, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-xl text-gray-800">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{proj.description}</p>
                  <Link
                    href={proj.href}
                    className="mt-4 inline-block text-pink-600 hover:underline"
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
          <h2 className="text-3xl font-bold text-pink-700 mb-4 drop-shadow">
            {t("cta.title")}
          </h2>
          <p className="text-gray-700 mb-8">{t("cta.subtitle")}</p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full shadow-xl hover:from-pink-400 hover:to-pink-300 transition hover:shadow-[0_0_20px_rgba(255,182,193,0.7)]"
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
