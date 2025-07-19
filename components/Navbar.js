//导航栏组件
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const switchLocale = locale === "en" ? "zh" : "en";

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-pink-600">Annice Yang</div>
      <ul className="flex space-x-6 text-gray-700">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative text-pink-600 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={router.asPath}
            locale={switchLocale}
            className="ml-4 text-sm border border-pink-400 rounded px-2 py-1 text-pink-600 hover:bg-pink-50 transition"
          >
            {switchLocale === "en" ? "EN" : "中文"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
