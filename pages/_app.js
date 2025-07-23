//项目顶层入口组件，统一注入全局样式和状态

// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { NextIntlProvider } from "next-intl";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); // Google 字体配置

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <main className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </NextIntlProvider>
  );
}
