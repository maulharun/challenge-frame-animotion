"use client";
import { Briefcase, GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Saya</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Saya adalah mahasiswa semester 4 di salah satu universitas swasta di Bandung Timur, dengan minat besar dalam pengembangan website dan teknologi web. 
        Saya selalu antusias dalam mempelajari hal baru, terutama dalam dunia pemrograman dan desain web.
      </p>

      {/* Section Info */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Kartu Pengalaman */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Briefcase className="text-blue-400 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Pengalaman</h3>
          <p className="text-gray-400 mt-2">
            Memiliki pengalaman dalam membangun website dengan teknologi modern seperti Next.js dan Tailwind CSS.
          </p>
        </div>

        {/* Kartu Pendidikan */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <GraduationCap className="text-green-400 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Pendidikan</h3>
          <p className="text-gray-400 mt-2">
            Mahasiswa semester 4 di bidang Sistem Informasi, aktif mengikuti berbagai seminar dan Organisasi.
          </p>
        </div>

        {/* Kartu Skill */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Code className="text-yellow-400 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Keahlian</h3>
          <p className="text-gray-400 mt-2">
            Menguasai HTML, CSS, JavaScript, serta framework seperti React.js dan Next.js untuk pengembangan website modern.
          </p>
        </div>
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
