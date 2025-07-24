import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

export default function About() {
  const t = useTranslations("about");
  const [flipped, setFlipped] = useState(false);

  // 经验，没变
  const experienceItems = [0, 1].map((i) => ({
    company: t(`experience.items_${i}_company`),
    position: t(`experience.items_${i}_position`),
    duration: t(`experience.items_${i}_duration`),
    description: t(`experience.items_${i}_description`),
  }));

  // hero.tags 从逗号字符串转数组
  const heroTags = t("hero.tags").split(",");

  // skills.list 转数组
  const skillList = t("skills.list").split(",");

  // values.points 转数组
  const valuePoints = t("values.points").split(",");

  return (
    <div className="page-home-bg min-h-screen px-6 py-16">
      {/* 背景装饰图形 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-100 rounded-full opacity-40 animate-spin-slow"></div>
      </div>

      {/* Avatar & Hero */}
      <div className="max-w-5xl mx-auto space-y-16 animate-fadeIn">
        <section className="text-center transition duration-700 delay-200">
          {/* 外层包裹加 group */}
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
              {/* 正面 */}
              <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-pink-300 shadow-xl">
                <Image
                  src="/cancan.jpg"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 背面 */}
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
          <h1 className="text-4xl font-bold text-pink-600 mb-2">
            {t("hero.name")}
          </h1>
          <p className="text-lg text-gray-700">{t("hero.subtitle")}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {heroTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-pink-100 text-pink-800 transition transform hover:scale-105 hover:bg-pink-200 shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="transition duration-700 delay-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skillList.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-pink-50 border border-pink-200 rounded-xl px-4 py-2 shadow hover:shadow-lg transition text-center text-pink-700 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="transition duration-700 delay-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">
            {t("experience.title")}
          </h2>
          <div className="border-l-4 border-pink-300 space-y-8 pl-6 relative">
            {experienceItems.map((job, i) => (
              <motion.div
                key={i}
                className="bg-white/80 p-4 rounded-lg shadow hover:shadow-md transition relative"
                whileHover={{ scale: 1.02 }}
              >
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
        </section>

        {/* Values */}
        <section className="transition duration-700 delay-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("values.title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {valuePoints.map((point, i) => (
              <li key={i} className="hover:text-pink-500 transition">
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="text-center transition duration-700 delay-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("contact.title")}
          </h2>
          <p>{t("contact.content")}</p>
        </section>
      </div>
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
