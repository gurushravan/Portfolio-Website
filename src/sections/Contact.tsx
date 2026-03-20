"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_9vifw1e",
        "template_del7y7r",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "w7mN3kyPuAKpQB3Nf"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-12 text-center">
          Contact
        </h2>

        {/* Form Card */}
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition mb-10">
          
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400 h-32 focus:outline-none focus:border-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status */}
          {status === "success" && (
            <p className="mt-4 text-green-400">Message sent successfully.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400">Failed to send message.</p>
          )}
        </div>

        {/* Contact Info Card */}
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition">

          <p className="text-gray-300 mt-2">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/guru-shravan"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/guru-shravan
            </a>
          </p>

          <p className="text-gray-300 mt-2">
            GitHub:{" "}
            <a
              href="https://github.com/gurushravan"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/gurushravan
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}