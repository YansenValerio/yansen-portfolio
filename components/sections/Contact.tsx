"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import { slideLeft, slideRight, viewportConfig } from "@/lib/animations";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactElement> = {
  instagram: <FiInstagram className="w-4 h-4" />,
  linkedin: <FiLinkedin className="w-4 h-4" />,
  github: <FiGithub className="w-4 h-4" />,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Yansen,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`;
    const url = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const fields = [
    { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <section
      id="contact"
      className="bg-dark text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="font-fraunces italic text-gray-500 text-sm mb-3">Lets</p>
          <h2 className="font-black font-inter text-6xl md:text-7xl uppercase leading-[0.85] mb-6">
            GET IN<br />TOUCH
          </h2>
          <p className="text-gray-500 text-sm font-inter leading-relaxed max-w-xs mb-10">
            Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </p>

          {/* Social row */}
          <div className="flex items-center gap-3 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={`${social.name} · ${social.handle}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand transition-colors"
              >
                {iconMap[social.icon]}
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              title={`Email · ${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand transition-colors"
            >
              <FiMail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Direct contacts */}
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm font-inter text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-brand transition-colors">
                  <FiMail className="w-3.5 h-3.5" />
                </span>
                {personalInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-inter text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-brand transition-colors">
                  <FiPhone className="w-3.5 h-3.5" />
                </span>
                {personalInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm font-inter text-gray-400">
              <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
                <FiMapPin className="w-3.5 h-3.5" />
              </span>
              {personalInfo.location}
            </li>
          </ul>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          {fields.map(({ key, label, type, placeholder }) => (
            <motion.div key={key} className="relative">
              <label
                className={`absolute -top-5 text-xs font-inter transition-colors duration-200 ${
                  focused === key || form[key as keyof typeof form]
                    ? "text-brand"
                    : "text-gray-600"
                }`}
              >
                {label}
              </label>
              <input
                type={type}
                placeholder={focused === key ? "" : placeholder}
                value={form[key as keyof typeof form] as string}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                onFocus={() => setFocused(key)}
                onBlur={() => setFocused(null)}
                className="bg-transparent border-b border-gray-800 w-full py-3 text-white placeholder-gray-700 focus:outline-none focus:border-brand transition-colors duration-300 font-inter text-sm"
                required
              />
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-brand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === key ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0, width: "100%" }}
              />
            </motion.div>
          ))}

          <div className="relative">
            <label
              className={`absolute -top-5 text-xs font-inter transition-colors duration-200 ${
                focused === "message" || form.message ? "text-brand" : "text-gray-600"
              }`}
            >
              Message
            </label>
            <textarea
              placeholder={focused === "message" ? "" : "Tell me about your project..."}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              rows={3}
              className="bg-transparent border-b border-gray-800 w-full py-3 text-white placeholder-gray-700 focus:outline-none focus:border-brand transition-colors duration-300 font-inter resize-none text-sm"
              required
            />
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-brand"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: focused === "message" ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0, width: "100%" }}
            />
          </div>

          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, backgroundColor: "#7b6fff" }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand text-white rounded-full px-8 py-3.5 font-medium font-inter text-sm relative overflow-hidden inline-flex items-center gap-2"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    ✓ Opening WhatsApp...
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    Send via WhatsApp <FiArrowUpRight className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p className="text-xs text-gray-600 font-inter mt-4">
              Your message will open in WhatsApp with details pre-filled.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
