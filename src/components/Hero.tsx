import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Hero = () => {
  const images = ["Hero-1.jpg", "Hero-2.jpg","Hero-3.jpg"]; // daftar background
  const [index, setIndex] = useState(0);
  const bgPositions = ["40% center", "40% center", "60% center"];

  // ganti gambar setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end items-center text-center px-6 pb-20 overflow-hidden">
      {/* Background slideshow */}
      <motion.div
        key={index}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getImage(images[index])})`,
           backgroundPosition: bgPositions[index],
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }} // zoom pelan
        transition={{
          opacity: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 5, ease: "easeInOut" }, // zoom selama 5 detik
        }}
      />

      {/* Overlay biar teks kontras */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Konten teks */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-olivia text-bg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Wedding of
        </motion.h1>

        <motion.h2
          className="font-britannic text-5xl mt-2 text-bg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Faesal & Dewi
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-bg font-belgiano"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Minggu, 28 September 2025
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
