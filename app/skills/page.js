"use client";
import { useState, useEffect } from "react";
import { Code, Brush, Server, Database } from "lucide-react";

export default function Skills() {
  // Animasi progres bar
  const [progress, setProgress] = useState({
    html: 90,
    css: 85,
    javascript: 80,
    react: 75,
    nextjs: 70,
    database: 80, // Tambahkan skill Database / PL/SQL
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Keahlian Saya</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Saya memiliki pengalaman dalam pengembangan web dengan berbagai teknologi modern. Berikut adalah keterampilan utama saya:
      </p>

      {/* Kartu Keahlian */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* HTML */}
        <SkillCard
          icon={<Code className="text-red-400 w-12 h-12" />}
          title="HTML"
          level={progress.html}
        />
        {/* CSS */}
        <SkillCard
          icon={<Brush className="text-blue-400 w-12 h-12" />}
          title="CSS & Tailwind"
          level={progress.css}
        />
        {/* JavaScript */}
        <SkillCard
          icon={<Code className="text-yellow-400 w-12 h-12" />}
          title="JavaScript"
          level={progress.javascript}
        />
        {/* React */}
        <SkillCard
          icon={<Server className="text-blue-500 w-12 h-12" />}
          title="React.js"
          level={progress.react}
        />
        {/* Next.js */}
        <SkillCard
          icon={<Database className="text-gray-400 w-12 h-12" />}
          title="Next.js"
          level={progress.nextjs}
        />
        {/* Database / PL/SQL */}
        <SkillCard
          icon={<Database className="text-green-400 w-12 h-12" />}
          title="Database / PL/SQL"
          level={progress.database}
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

// Komponen Kartu Skill
function SkillCard({ icon, title, level }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-64">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-gray-400 mt-2">{level}%</p>
    </div>
  );
}
