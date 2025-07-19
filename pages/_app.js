//项目顶层入口组件，统一注入全局样式和状态

// pages/_app.js
// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { NextIntlProvider } from "next-intl";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Navbar />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
