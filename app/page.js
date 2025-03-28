"use client"; // Next.js App Router membutuhkan ini untuk event handling di client
import Link from "next/link";
import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Foto Profil */}
      <div className="profile">
        <Image
          src="./public/image/profile.JPG"  // Ganti dengan path gambar profil kamu
          alt="Profile Picture"
          width={200}
          height={200}
        />
      </div>


      {/* Nama & Profesi */}
      <h1 className="text-3xl md:text-5xl font-bold mt-4">Doni Rizki Maulana</h1>
      <h2 className="text-lg md:text-2xl text-gray-400">Mahasiswa</h2>

      {/* Deskripsi Singkat */}
      <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">
        Sebagai mahasiswa semester 4 di salah satu universitas swasta di Bandung Timur, saya memiliki ketertarikan yang mendalam dalam dunia website dan pengembangannya.
      </p>

   {/* Tombol CTA */}
  <div className="mt-6">
   <Link
      href="/contact"
      className="px-6 py-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300"
    >
    Hubungi Saya
    </Link>
    </div>
    </section>
  );
}
