// pages/projects/index.js
import { useTranslations } from "next-intl";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  const t = useTranslations("projects");
  const [currentIndex, setCurrentIndex] = useState({});

  const projectList = projects.map((p) => ({
    ...p,
    title: t(`${p.id}.title`),
    description: t(`${p.id}.description`),
  }));

  // ✅ 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const updated = { ...prev };
        projectList.forEach((p) => {
          const total = p.images?.length || 1;
          const current = prev[p.id] || 0;
          updated[p.id] = (current + 1) % total;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Projects | Annice Portfolio</title>
        <meta
          name="description"
          content="A curated list of Annice's web development projects using React, Vue, and Next.js."
        />
      </Head>

      <div className="min-h-screen page-home-bg px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-pink-600 drop-shadow-sm">
          {t("pageTitle")}
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projectList.map((project) => {
            const activeIndex = currentIndex[project.id] || 0;
            return (
              <div
                key={project.id}
                className="bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* ✅ 自动轮播图片 */}
                {project.images?.length > 0 && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.images[activeIndex]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                    {/* 小圆点指示器 */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {project.images.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === activeIndex ? "bg-pink-500" : "bg-white/50"
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 内容 */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-semibold text-pink-500">
                      {project.title}
                    </h2>

                    {project.status === "WIP" && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                        WIP
                      </span>
                    )}

                    {project.status === "PLANNED" && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        Planned
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-start space-x-4 text-sm mb-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline font-medium"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700 hover:underline transition"
                      >
                        <Globe size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
