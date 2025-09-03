import { motion } from "framer-motion";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Groom = () => {
  const GroomBg = getImage("Couple-2.jpg");
  const bgoverlay = getImage("bg-overlay-simple.jpg");

  return (
    <section className="h-screen w-full flex bg-cover bg-no-repeat">
      {/* Kiri: Gambar */}
      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tr-3xl rounded-br-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${GroomBg})`,
            // backgroundSize: "250%",
            backgroundPosition: "15% center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Kanan: Teks */}
      <motion.div
        className="w-1/2 h-full flex flex-col justify-end items-end p-6 pb-30 bg-[#f3f0eb] rounded-tr-3xl rounded-br-3xl overflow-hidden relative"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background overlay (flipped) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgoverlay})`,
            backgroundSize: "180%",
            // backgroundPosition: "20% top",
            // backgroundRepeat: "no-repeat",
            transform: "scaleY(-1)", // flip atas-bawah
          }}
        />

        {/* Konten */}
        <div className="relative z-10 text-right">
          <motion.p
            className="text-3xl text-primary italic mb-2 font-olivia text-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Groom
          </motion.p>

          <motion.h1
            className="text-3xl text-primary mb-4 font-britannic text-bg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Faesal Herlambang Krisandi Putra
          </motion.h1>

          <motion.p
            className="text-3xl font-abuget text-primary italic mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Putra dari
          </motion.p>

          <motion.p
            className="text-base xl text-primary font-belgiano"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Bapak Kuswandi <br />
            Ibu Lela Kristanti
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Groom;
