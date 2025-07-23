//项目列表页面（展示多个卡片）
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");

  const projectList = [
    {
      id: "portfolio",
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      tech: ["React", "Next.js", "Tailwind", "i18n"],
      github: "https://github.com/AnniceYang/porfolio.git",
      live: "https://部署的vercel地址",
    },
    //后续可以追加
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">
        {t("pageTitle")}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4 text-sm">
              <Link
                href={project.github}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </Link>
              <Link
                href={project.live}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Live
              </Link>
            </div>
          </div>
        ))}
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
