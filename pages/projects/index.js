//项目列表页面（展示多个卡片）
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");

  const projectList = [
    {
      id: "projects",
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      tech: ["React", "Next.js", "Tailwind", "i18n"],
      github: "https://github.com/AnniceYang/porfolio.git",
      live: "https://annice-portfolio.vercel.app/",
      images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    },
    {
      id: "cashier-pos",
      title: t("cashier-pos.title"),
      description: t("cashier-pos.description"),
      tech: ["Vite", "Vue 3", "Element PLUS", "Pinia", "REST API", "i18n"],
      github: "https://github.com/AnniceYang/cashierly-pos.git",
      live: "https://cashierly-pos.vercel.app/login", // 可用来部署个 mock demo
      images: [
        "/images/cashierly1.png",
        "/images/cashierly2.png",
        "/images/cashierly3.png",
      ],
    },
    {
      id: "energyvista",
      title: t("energyvista.title"),
      description: t("energyvista.description"),
      tech: ["Vue 2", "Echarts", "MQTT", "i18n"],
      github: "https://github.com/AnniceYang/energy-dashboard",
      live: "https://demo-energyvista.vercel.app", // 可部署 demo 或录屏链接
    },
    {
      id: "travelogue",
      title: t("travelogue.title"),
      description: t("travelogue.description"),
      tech: ["Next.js", "MDX", "Tailwind", "i18n"],
      github: "https://github.com/AnniceYang/travelogue",
      live: "https://travelogue.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen page-home-bg px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-pink-600 drop-shadow-sm">
        {t("pageTitle")}
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg rounded-3xl p-6 transition hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
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

            <div className="flex justify-start space-x-4 text-sm">
              <Link
                href={project.github}
                target="_blank"
                className="text-blue-500 hover:underline font-medium"
              >
                GitHub
              </Link>
              <Link
                href={project.live}
                target="_blank"
                className="text-blue-500 hover:underline font-medium"
              >
                Live
              </Link>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="text-pink-600 font-semibold hover:underline"
            >
              Details →
            </Link>
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
