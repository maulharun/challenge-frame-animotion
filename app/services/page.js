"use client";
import { Code, Brush, Server, Database } from "lucide-react";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Saya</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Saya menawarkan berbagai layanan dalam pengembangan web dan database untuk membantu bisnis dan proyek Anda berkembang.
      </p>

      {/* Daftar Layanan */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Web Development */}
        <ServiceCard
          icon={<Code className="text-blue-400 w-12 h-12" />}
          title="Web Development"
          description="Membangun website modern dengan teknologi terbaru seperti React.js dan Next.js."
        />
        {/* UI/UX Design */}
        <ServiceCard
          icon={<Brush className="text-pink-400 w-12 h-12" />}
          title="UI/UX Design"
          description="Membuat desain antarmuka yang menarik dan user-friendly menggunakan Figma dan Tailwind."
        />
        {/* Backend Development */}
        <ServiceCard
          icon={<Server className="text-yellow-400 w-12 h-12" />}
          title="Backend Development"
          description="Mengembangkan backend dengan Node.js, Express, dan API untuk mendukung aplikasi web."
        />
        {/* Database Management */}
        <ServiceCard
          icon={<Database className="text-green-400 w-12 h-12" />}
          title="Database Management"
          description="Mengelola database MySQL, PostgreSQL, dan PL/SQL untuk memastikan data yang aman dan terstruktur."
        />
        {/* SEO Optimization */}
        <ServiceCard
          icon={<Code className="text-purple-400 w-12 h-12" />}
          title="SEO Optimization"
          description="Mengoptimalkan website agar muncul di peringkat atas mesin pencari seperti Google."
        />
        {/* Maintenance & Support */}
        <ServiceCard
          icon={<Server className="text-red-400 w-12 h-12" />}
          title="Maintenance & Support"
          description="Memberikan dukungan teknis dan pemeliharaan website agar selalu berjalan optimal."
        />
      </div>

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

// Komponen Kartu Layanan
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-64">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
