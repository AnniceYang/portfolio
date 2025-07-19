// pages/_app.js
import "@/styles/globals.css"; // 注意路径要对，@代表项目根目录（要取决于你设置的 alias）
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
