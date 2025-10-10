// pages/projects/[id].js
// ✅ 动态路由页面（点进去看项目详情）

import { useRouter } from "next/router";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Globe } from "lucide-react";

const projectsData = {
  "cashier-pos": {
    id: "cashier-pos",
    images: [
      "/images/cashierly1.png",
      "/images/cashierly2.png",
      "/images/cashierly3.png",
    ],
    tech: ["Vue 3", "Vite", "Element Plus", "Pinia", "REST API", "i18n"],
    github: "https://github.com/AnniceYang/cashierly-pos.git",
    live: "https://cashierly-pos.vercel.app/login",
  },
  projects: {
    id: "projects",
    images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "i18n"],
    github: "https://github.com/AnniceYang/porfolio.git",
    live: "https://annice-portfolio.vercel.app/",
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("projectDetails");
  const { id } = router.query;
  const project = projectsData[id];

  // ✅ 切换语言逻辑
  const switchLocale = locale === "en" ? "zh" : "en";
  const handleLocaleSwitch = (e) => {
    e.preventDefault();
    router.push(router.asPath, router.asPath, { locale: switchLocale });
  };

  if (!project)
    return (
      <p className="text-center py-20 text-gray-500">Project not found.</p>
    );

  return (
    <div className="min-h-screen px-4 md:px-6 py-10 max-w-5xl mx-auto">
      {/* 顶部返回 + 语言切换 */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/projects"
          className="text-pink-600 font-semibold hover:underline"
        >
          ← {t("back")}
        </Link>
      </div>

      {/* 项目标题 */}
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
        {t(`${id}.title`)}
      </h1>

      {/* 简介 */}
      <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
        {t(`${id}.description`)}
      </p>

      {/* 技术栈 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((tch, i) => (
          <span
            key={i}
            className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tch}
          </span>
        ))}
      </div>

      {/* 项目截图 - 用 <img> 保证静态站显示 */}
      <div className="grid gap-6 mb-10">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="w-full h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform relative"
          >
            <img
              src={img} // ✅ 绝对路径
              alt={`${project.id} screenshot ${i + 1}`}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* 项目亮点 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ✨ {t("highlightsTitle")}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {Array.isArray(t.raw(`${id}.highlights`)) ? (
            t
              .raw(`${id}.highlights`)
              .map((point, index) => <li key={index}>{point}</li>)
          ) : (
            <li>{t(`${id}.highlights`)}</li>
          )}
        </ul>
      </section>

      {/* 个人思考 */}
      <section className="mb-10 bg-pink-50 p-6 rounded-2xl border border-pink-100 shadow-inner">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          💬 {t("reflectionTitle")}
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          {t(`${id}.reflection`)}
        </p>
      </section>

      {/* 链接按钮区域 */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm mt-10">
        <Link
          href={project.github}
          target="_blank"
          className="text-center sm:text-left bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
        >
          GitHub →
        </Link>
        <Link
          href={project.live}
          target="_blank"
          className="text-center sm:text-left bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Live Demo →
        </Link>
      </div>
    </div>
  );
}

/* ✅ 多语言路径生成 */
export async function getStaticPaths({ locales }) {
  const ids = ["projects", "cashier-pos"];
  const paths = [];

  locales.forEach((locale) => {
    ids.forEach((id) => {
      paths.push({ params: { id }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

/* ✅ 静态内容生成 */
export async function getStaticProps({ params, locale }) {
  return {
    props: {
      id: params.id,
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
