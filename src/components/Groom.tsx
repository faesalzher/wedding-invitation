import { motion } from "framer-motion";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Groom = () => {
  const GroomBg = getImage("Couple-2.jpg");

  return (
    <section className="h-screen w-full flex">
      {/* Kiri: Gambar */}
      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tr-3xl rounded-br-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${GroomBg})`,
            backgroundSize: "250%",
            backgroundPosition: "10% center",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Kanan: Teks */}
      <motion.div
        className="w-1/2 h-full flex flex-col justify-end items-end p-6 pb-30 bg-bg rounded-tr-3xl rounded-br-3xl overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // animasi hanya sekali saat 30% komponen masuk viewport
      >
        <motion.p
          className="text-xl text-primary italic mb-2 text-right font-olivia text-bg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Groom
        </motion.p>

        <motion.h1
          className="text-3xl text-primary mb-4 text-right font-britannic text-bg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Faesal Herlambang Krisandi Putra
        </motion.h1>

        <motion.p
          className="text-xl font-abuget text-primary italic mb-1 text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Putra dari
        </motion.p>

        <motion.p
          className="text-base text-xl text-primary font-belgiano text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Bapak Kuswandi <br />
          Ibu Lela Kristanti
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Groom;
