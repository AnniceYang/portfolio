import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";
import { Home, User, FolderKanban, Mail, Globe, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/about", label: t("about"), icon: User },
    { href: "/projects", label: t("projects"), icon: FolderKanban },
    { href: "/contact", label: t("contact"), icon: Mail },
  ];

  // ✅ 计算切换语言
  const switchLocale = locale === "en" ? "zh" : "en";

  useEffect(() => {
    // 页面预加载
    ["/", "/about", "/projects", "/contact"].forEach((path) =>
      router.prefetch(path)
    );

    // 滚动阴影效果
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  // ✅ 语言切换保持当前路径，不刷新整个应用
  const handleLocaleSwitch = (e) => {
    e.preventDefault();
    router.push(router.asPath, router.asPath, { locale: switchLocale });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-pink-700"
            : "bg-white/70 backdrop-blur text-pink-600"
        }
      `}
      >
        {/* 左侧 Logo */}
        <div
          className="text-xl font-bold text-pink-600 cursor-pointer select-none"
          onClick={() => router.push("/")}
        >
          Annice Yang
        </div>

        {/* 桌面菜单 */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-1 text-pink-600 hover:text-pink-700 font-medium transition"
              >
                <Icon size={16} />
                {label}
              </Link>
            </li>
          ))}

          {/* ✅ 手动切换语言按钮 */}
          <li>
            <button
              onClick={handleLocaleSwitch}
              className="flex items-center gap-1 text-sm border border-pink-300 rounded px-2 py-1 text-pink-600 hover:bg-pink-100 transition"
            >
              <Globe size={16} />
              <span>{locale === "en" ? "中文" : "English"}</span>
            </button>
          </li>
        </ul>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* 移动端下拉菜单 */}
      {menuOpen && (
        <ul
          className="fixed top-[64px] left-0 w-full bg-white/95 backdrop-blur-md px-6 py-6 space-y-4 z-40 text-pink-600 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 font-semibold hover:text-pink-700 transition"
              >
                <Icon size={20} />
                {label}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={handleLocaleSwitch}
              className="flex items-center gap-2 text-sm border border-pink-300 rounded px-3 py-1 hover:bg-pink-100 transition"
            >
              <Globe size={18} />
              <span>{locale === "en" ? "中文" : "English"}</span>
            </button>
          </li>
        </ul>
      )}

      <style jsx global>{`
        main,
        .page-content {
          padding-top: 64px;
        }
      `}</style>
    </>
  );
}
