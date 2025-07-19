// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "zh"], // 支持的语言
    defaultLocale: "zh", // 默认中文
  },
};

module.exports = nextConfig;
