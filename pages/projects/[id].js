// pages/projects/[id].js
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("projectDetails");
  const { id } = router.query;

  if (!router.isReady) {
    return null;
  }

  const project = projects.find((p) => p.id === id);

  const [lightbox, setLightbox] = useState(null);

  // ✅ 关闭快捷键
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  if (!project) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Project not found.</p>

        <Link href="/projects" className="text-pink-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const title = t(`${id}.title`);
  const description = t(`${id}.description`);

  return (
    <>
      <Head>
        <title>{title} | Annice Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <div className="min-h-screen px-4 md:px-6 py-10 max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="text-pink-600 font-semibold hover:underline"
        >
          ← {t("back")}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 mt-6">
          {title}
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
          {description}
        </p>

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

        {/* ✅ 图片网格 + Lightbox 预览 */}
        <div className="grid gap-6 mb-10">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="w-full h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img}
                alt={`${project.id} screenshot ${i + 1}`}
                className="object-cover w-full h-full rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110"
            >
              ×
            </button>
          </div>
        )}

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

        <section className="mb-10 bg-pink-50 p-6 rounded-2xl border border-pink-100 shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            💬 {t("reflectionTitle")}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            {t(`${id}.reflection`)}
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 text-sm mt-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center sm:text-left bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
            >
              🐙 GitHub Repo
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center sm:text-left bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Live Demo →
            </a>
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="text-pink-600 hover:underline font-medium"
          >
            ← {t("back")}
          </Link>
        </div>
      </div>

      {/* ✅ 动画样式 */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  projects.forEach((p) => {
    locales.forEach((locale) => {
      paths.push({
        params: { id: p.id },
        locale,
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      id: params.id,
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
