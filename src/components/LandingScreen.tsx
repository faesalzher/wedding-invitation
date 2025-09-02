import { motion, type Variants } from "framer-motion";

const BASE_PATH = `${import.meta.env.BASE_URL}images/`;

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const nameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const bgVariants: Variants = {
  initial: { scale: 1, y: 0 },
  animate: { 
    scale: 1.05, 
    y: -20, 
    transition: { duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" } 
  },
};

const LandingScreen = ({ onOpen }: { onOpen: () => void }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Tamu Undangan";

  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-6 p-30 overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${BASE_PATH}landing-bg.jpg')` }}
        variants={bgVariants}
      />

      <div className="relative z-10 flex flex-col items-center pt-20">
        <motion.p
          className="text-3xl text-primary font-belgiano p-5"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          The Wedding of
        </motion.p>
        <motion.h1
          className="text-6xl font-perfume text-primary my-2"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          Faesal & Dewi
        </motion.h1>
      </div>

      <div className="relative z-10 mb-4">
        <motion.p
          className="text-primary text-lg font-belgiano p-3"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Minggu, 28 September 2025
        </motion.p>

        <motion.p
          className="text-primary font-britannic"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Kepada Yth. {guestName}
        </motion.p>

        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.button
            onClick={onOpen}
            className="rounded-full border border-primary text-primary px-8 py-3 font-semibold shadow-md relative overflow-hidden transition-colors font-belgiano"
            whileHover={{
              scale: 1.08,
              backgroundColor: "#d1fae5",
              color: "#065f46",
              boxShadow: "0 0 15px rgba(0, 255, 150, 0.3)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingScreen;
