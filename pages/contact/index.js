// pages/contact.js
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contactPage");
  const formRef = useRef();

  // 数学验证码：题目和答案
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // 初始化验证码
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${a} + ${b} = ?`);
    setCaptchaAnswer(String(a + b));
    setFormData({ ...formData, captcha: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, message, captcha } = formData;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!name.trim()) return t("form.name_required");
    if (!emailRegex.test(email)) return t("form.email_required");
    if (!message.trim()) return t("form.message_required");
    if (captcha.trim() !== captchaAnswer) return t("form.captcha_failed");
    return null;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    setStatus("sending");

    try {
      const result = await emailjs.send(
        "service_pg1ymsg", // 你的 Service ID
        "template_fs0b64q", // 你的 Template ID
        formData,
        "rztuMLogylVQ0Zq7s" // 你的 Public Key
      );
      console.log(result.text);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", captcha: "" });
      generateCaptcha();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className="min-h-screen page-home-bg px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-pink-700 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            className="text-pink-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("description")}
          </motion.p>

          <form
            onSubmit={sendEmail}
            className="bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6 text-left"
          >
            <div>
              <label className="text-pink-800 font-semibold">
                {t("form.name")}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="text-pink-800 font-semibold">
                {t("form.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="text-pink-800 font-semibold">
                {t("form.message")}
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>

              {/* 数学验证码 */}
              <div className="mt-4">
                <label className="text-pink-800 font-semibold">
                  {t("form.captcha_label")} ({captchaQuestion})
                </label>
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  placeholder={t("form.captcha_placeholder")}
                  className="w-full p-3 mt-1 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
              >
                {status === "sending" ? (
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse">...</span>{" "}
                    {t("form.sending")}
                  </div>
                ) : (
                  t("form.submit")
                )}
              </button>
            </div>

            {status === "success" && (
              <p className="text-green-600 text-center">{t("form.success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">{t("form.error")}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
