//导航栏组件
// components/Navbar.js
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";
import { Home, User, FolderKanban, Mail, Globe } from "lucide-react"; // 图标

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/about", label: t("nav.about"), icon: User },
    { href: "/projects", label: t("nav.projects"), icon: FolderKanban },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  const switchLocale = locale === "en" ? "zh" : "en";

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-pink-600">Annice Yang</div>

      <ul className="flex items-center gap-6 text-gray-700">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-1 text-pink-600 font-medium hover:text-pink-500 transition"
            >
              <Icon size={16} />
              {label}
            </Link>
          </li>
        ))}

        {/* 语言切换按钮 */}
        <li>
          <Link
            href={router.asPath}
            locale={switchLocale}
            className="flex items-center gap-1 text-sm border border-pink-400 rounded px-2 py-1 text-pink-600 hover:bg-pink-50 transition"
          >
            <Globe size={16} />
            {switchLocale === "en" ? "EN" : "中文"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
