"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  // Data proyek
  const projects = [
    {
      title: "Landing Page Perusahaan",
      description: "Website profesional untuk perusahaan dengan desain modern dan responsif.",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "E-Commerce Website",
      description: "Platform e-commerce dengan fitur pembayaran online dan manajemen produk.",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Dashboard Admin",
      description: "Dashboard interaktif untuk mengelola data dan analitik bisnis.",
      image: "/portfolio/project3.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Saya</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan website dan aplikasi.
      </p>

      {/* Daftar Proyek */}
      <div className="mt-8 flex flex-col gap-10">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
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

// Komponen Kartu Portfolio
function PortfolioCard({ project }) {
  const [isInView, setIsInView] = useState(false);

  // Gunakan Intersection Observer untuk mendeteksi apakah elemen masuk ke viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // Ketika 30% dari elemen terlihat
    );

    const element = document.getElementById(project.title); // Id berdasarkan judul proyek
    if (element) {
      observer.observe(element);
    }

    // Cleanup observer ketika komponen di-unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [project.title]);

  return (
    <div
      id={project.title}
      className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-full max-w-xl"
    >
      <motion.div
        initial={{ scale: 0.9 }} // Dimulai dengan zoom-out sedikit
        animate={{ scale: isInView ? 1.1 : 0.9 }} // Zoom-in saat elemen masuk ke dalam viewport
        transition={{ duration: 0.6 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600} // Lebih besar
          height={400} // Lebih besar
          className="rounded-lg"
        />
      </motion.div>
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
    </div>
  );
}
