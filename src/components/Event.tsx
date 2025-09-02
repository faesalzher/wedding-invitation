import { motion } from "framer-motion";
import MapEmbed from "./MapEmbed";

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const textVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  },
};

const Event = () => {
  const bg = getImage("bg-overlay-colored.jpg");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-10 p-10 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "30% center",
        backgroundSize: "150%",
      }}
    >
      <div className="max-w-md w-full bg-white/70 rounded-4xl shadow-sm p-6 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Akad */}
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600"
            variants={textVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-4xl font-medium font-olivia">Akad Nikah</h4>
          </motion.div>

          <motion.div
            className="text-md text-primary leading-relaxed font-britannic"
            variants={textVariants.fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              Minggu, 28 September 2025
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              Pukul 09.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-primary text-xs italic">
              Villa Hamsa, Junrejo, Kota Batu
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600 mt-10"
            variants={textVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-4xl font-medium font-olivia">Resepsi</h4>
          </motion.div>

          <motion.div
            className="text-md text-primary leading-relaxed font-britannic"
            variants={textVariants.fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              Minggu, 28 September 2025
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              Pukul 13.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-primary text-xs italic">
              Villa Hamsa, Junrejo, Kota Batu
            </div>
          </motion.div>
        </div>

        {/* Lokasi */}
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600 mt-10"
            variants={textVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-4xl font-medium font-olivia">Lokasi</h4>
          </motion.div>

          <MapEmbed />

          <motion.p
            className="text-center text-sm text-gray-600 mt-3 font-belgiano"
            variants={textVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Jl. Martorejo No.339, Dadaprejo, Kec. Junrejo, Kota Batu, Jawa Timur
            65233 <br />
            <a
              href="https://maps.app.goo.gl/WEU3cYATbZH4Pafd9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Buka di Google Maps
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Event;
