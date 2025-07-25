import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";
import { Home, User, FolderKanban, Mail, Globe, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const switchLocale = locale === "en" ? "zh" : "en";

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/about", label: t("nav.about"), icon: User },
    { href: "/projects", label: t("nav.projects"), icon: FolderKanban },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  // 监听页面滚动，切换导航阴影效果
  useEffect(() => {
    // 👇 主动预加载所有导航页面
    router.prefetch("/");
    router.prefetch("/about");
    router.prefetch("/projects");
    router.prefetch("/contact");

    // 👇 页面滚动监听
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-[#fef0f5]/80 backdrop-blur shadow-sm px-8 py-4 flex items-center justify-between transition-all duration-300
    ${
      scrolled
        ? "bg-white/80 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-pink-700"
        : "bg-white text-pink-600"
    }
  `}
        style={{ borderBottom: "none" }}
      >
        {/* 左侧Logo，粉色字体 */}
        <div className="text-xl font-bold text-pink-600 cursor-pointer select-none">
          Annice Yang
        </div>

        {/* 桌面导航菜单 */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-1 text-pink-600 hover:text-pink-700 transition font-medium"
              >
                <Icon size={16} />
                {label}
              </Link>
            </li>
          ))}

          {/* 语言切换按钮，粉色边框和文字 */}
          <li>
            <Link
              href={router.asPath}
              locale={switchLocale}
              className="flex items-center gap-1 text-sm border border-pink-300 rounded px-2 py-1 text-pink-600 hover:bg-pink-100 transition"
            >
              <Globe size={16} />
              <span>{locale === "en" ? "English" : "中文"}</span>
            </Link>
          </li>
        </ul>

        {/* 移动端菜单按钮，右对齐，粉色 */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* 移动端菜单展开，白底粉色文字 */}
      {menuOpen && (
        <ul
          className="fixed top-[64px] left-0 w-full bg-white/95 backdrop-blur-md px-6 py-6 space-y-4 z-40 text-pink-600 md:hidden"
          onClick={() => setMenuOpen(false)} // 点击收起菜单
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

          {/* 移动端语言切换 */}
          <li>
            <Link
              href={router.asPath}
              locale={switchLocale}
              className="flex items-center gap-2 text-sm border border-pink-300 rounded px-3 py-1 hover:bg-pink-100 transition"
            >
              <Globe size={18} />
              <span>{locale === "en" ? "English" : "中文"}</span>
            </Link>
          </li>
        </ul>
      )}

      {/* 给内容区增加顶部内边距，防止被固定导航栏遮挡 */}
      <style jsx global>{`
        main,
        .page-content {
          padding-top: 64px; /* 导航栏高度 */
        }
      `}</style>
    </>
  );
}
