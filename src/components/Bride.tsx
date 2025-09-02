import { motion } from "framer-motion";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Bride = () => {
  const BrideBg = getImage("Couple-2.jpg");

  return (
    <section className="h-screen w-full flex">
      {/* Kiri: Teks */}
      <div className="w-1/2 h-full flex flex-col justify-end p-7 pb-35 bg-bg">
        {/* The Bride */}
        <motion.p
          className="text-3xl text-primary italic mb-2 text-left font-olivia text-bg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }} // animasi hanya sekali, saat 30% elemen terlihat
        >
          The Bride
        </motion.p>

        {/* Nama */}
        <motion.h1
          className="text-3xl text-primary mb-4 text-left font-britannic text-bg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Dewi <br />
          Ayu <br />
          Fitriani
        </motion.h1>

        {/* Putri dari */}
        <motion.p
          className="text-3xl font-abuget text-primary italic mb-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Putri dari
        </motion.p>

        {/* Orang tua */}
        <motion.p
          className="text-base text-xl text-primary text-left font-belgiano"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Bapak Ismail <br />
          Ibu Ulin Nusroh
        </motion.p>
      </div>

      {/* Kanan: Gambar */}
      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${BrideBg})`,
            backgroundSize: "250%",
            backgroundPosition: "85% center",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Bride;
