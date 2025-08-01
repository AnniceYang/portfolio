import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiNextdotjs, SiMqtt } from "react-icons/si";

export default function About() {
  const t = useTranslations("about");
  const [flipped, setFlipped] = useState(false);

  // 经验数据
  const experienceItems = [0, 1].map((i) => ({
    company: t(`experience.items_${i}_company`),
    position: t(`experience.items_${i}_position`),
    duration: t(`experience.items_${i}_duration`),
    description: t(`experience.items_${i}_description`),
  }));

  const heroTags = t("hero.tags").split(",");
  const skillList = t("skills.list").split(",");
  const valuePoints = t("values.points").split(",");

  // 滚动进入时通用动画
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  // 技能图标映射
  const skillIcons = {
    React: <FaReact className="text-sky-500 w-5 h-5" />,

    "Tailwind CSS": <FaCss3Alt className="text-blue-500 w-5 h-5" />,
    "Next.js": <SiNextdotjs className="text-black w-5 h-5" />,
    MQTT: <SiMqtt className="text-orange-500 w-5 h-5" />,
  };

  // values 对应emoji
  const valueEmojis = ["🌱", "💡", "🤝", "🎯", "🚀"];

  return (
    <div className="page-home-bg min-h-screen px-6 py-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-100 rounded-full opacity-40 animate-spin-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-20 animate-fadeIn">
        {/* Avatar + Summary */}
        <motion.section {...fadeInUp} className="text-center">
          {/* 翻转头像 */}
          <div
            className="relative w-32 h-32 mx-auto mb-4 perspective cursor-pointer"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-pink-300 shadow-xl">
                <Image
                  src="/cancan.jpg"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl">
                <Image
                  src="/cat2.gif"
                  alt="Fun avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 姓名和副标题 */}
          <h1 className="text-4xl font-bold text-pink-600 mb-2">
            {t("hero.name")}
          </h1>
          <p className="text-lg text-gray-700">{t("hero.subtitle")}</p>

          {/* Summary 带emoji */}
          <div className="mt-8 mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🚀</span>
              {t("hero.summary_title")}
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              {t("hero.summary")}
            </p>
          </div>

          {/* 标签 */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {heroTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 transition transform hover:rotate-1 hover:scale-105 hover:from-pink-200 hover:to-purple-200 shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skillList.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl px-4 py-3 shadow hover:shadow-lg transition flex items-center justify-center gap-2 text-pink-700 font-medium"
                whileHover={{ scale: 1.1, rotate: -1 }}
              >
                {skillIcons[skill] || null}
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-pink-600 mb-8">
            {t("experience.title")}
          </h2>
          <div className="relative pl-8 border-l-4 border-gradient-pink">
            {experienceItems.map((job, i) => (
              <motion.div
                key={i}
                className="bg-white/80 p-5 mb-8 rounded-lg shadow hover:shadow-md transition relative"
                whileHover={{ scale: 1.02 }}
              >
                {/* 时间线圆点 */}
                <div className="absolute -left-[30px] top-5 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow"></div>
                <h3 className="text-xl font-bold text-pink-700">
                  {job.position}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{job.company}</span>
                  <span>{job.duration}</span>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("values.title")}
          </h2>
          <ul className="space-y-3 text-gray-700">
            {valuePoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 hover:text-pink-500 transition"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span>{valueEmojis[i % valueEmojis.length]}</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section {...fadeInUp} className="text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("contact.title")}
          </h2>
          <p className="mb-6">{t("contact.content")}</p>
          <div className="text-pink-700 font-medium space-y-2">
            <div className="flex items-center justify-center gap-2 hover:scale-105 transition">
              <FaEnvelope />{" "}
              <a
                href="mailto:shelleytt06@gmail.com"
                className="underline hover:text-pink-900"
              >
                shelleytt06@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 hover:scale-105 transition">
              <FaPhone />
              <a
                href="tel:+8618899762987"
                className="underline hover:text-pink-900"
              >
                +86 188 9976 2987
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// 渐变边框类，可在 global.css 中定义
// .border-gradient-pink { border-image: linear-gradient(to bottom, #ec4899, #a78bfa) 1; }

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
