"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle perubahan input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit (sementara hanya alert, bisa diintegrasikan dengan backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan berhasil dikirim!\nNama: ${form.name}\nEmail: ${form.email}\nPesan: ${form.message}`);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hubungi Saya
      </motion.h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Jika Anda ingin berkolaborasi atau memiliki pertanyaan, silakan hubungi saya melalui informasi di bawah ini atau kirim pesan langsung melalui formulir.
      </p>

      {/* Informasi Kontak */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Email */}
        <ContactCard icon={<Mail className="text-blue-400 w-10 h-10" />} title="Email" info="maulharun@gmail.com" link="mailto:maulharun@gmail.com" />
        {/* Telepon */}
        <ContactCard icon={<Phone className="text-green-400 w-10 h-10" />} title="Telepon" info="0859-1068-9204" link="https://wa.me/62859106892004" />
        {/* Lokasi */}
        <ContactCard icon={<MapPin className="text-red-400 w-10 h-10" />} title="Lokasi" info="Bandung, Indonesia" link="https://maps.google.com" />
      </div>

      {/* Formulir Kontak */}
      <motion.div 
        className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold">Kirim Pesan</h3>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <motion.input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email Anda"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.textarea
            name="message"
            rows="4"
            placeholder="Pesan Anda"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.button
            type="submit"
            className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" /> Kirim Pesan
          </motion.button>
        </form>
      </motion.div>

      {/* Tombol Kembali ke Beranda */}
      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}

// Komponen Kartu Kontak
function ContactCard({ icon, title, info, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-64 flex flex-col items-center"
    >
      <div>{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{info}</p>
    </a>
  );
}
