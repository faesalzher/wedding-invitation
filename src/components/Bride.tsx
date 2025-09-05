import { motion } from "framer-motion";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Bride = () => {
  const BrideBg = getImage("Couple-2.jpg"); // beda foto biar balance
  const bgoverlay = getImage("bg-overlay-simple.jpg");

  return (
    <section className="h-screen w-full flex">
      {/* Kiri: Teks */}
      <motion.div
        className="w-1/2 h-full flex flex-col justify-end items-start p-7 pb-20 bg-[#f3f0eb] rounded-tl-3xl rounded-bl-3xl overflow-hidden relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgoverlay})`,
            backgroundSize: "180%",
            backgroundPosition: "90% bottom",
            // backgroundRepeat: "no-repeat",
            transform: "scaleY(-1)", // flip atas-bawah biar beda layer
          }}
        />

        <div className="relative z-8 text-left">
          {/* The Bride */}
          <motion.p
            className="text-3xl text-primary italic mb-2 font-olivia"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Bride
          </motion.p>

          {/* Nama */}
          <motion.h1
            className="text-3xl text-primary mb-4 font-britannic"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Dewi Ayu Fitriani
          </motion.h1>

          {/* Putri dari */}
          <motion.p
            className="text-3xl font-abuget text-primary italic mb-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Putri dari
          </motion.p>

          {/* Orang tua */}
          <motion.p
            className="text-base text-xl text-primary font-belgiano"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            viewport={{ once: true }}
          >
            Bapak Ismail <br />
            Ibu Ulin Nusroh
          </motion.p>
        </div>
      </motion.div>

      {/* Kanan: Gambar */}
      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${BrideBg})`,
            backgroundSize: "cover  ",
            backgroundPosition: "81% center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default Bride;
  