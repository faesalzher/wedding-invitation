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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bgVariants: Variants = {
  initial: { scale: 1, y: 0 },
  animate: {
    scale: 1.05,
    y: -20,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};

const LandingScreen = ({ onOpen }: { onOpen: () => void }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Tamu Undangan";

  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 md:px-10 py-20 overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${BASE_PATH}landing-bg.jpg')` }}
        variants={bgVariants}
      />

      {/* Main Text */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full">
        <motion.p
          className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] text-primary font-belgiano p-5"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="text-[clamp(3rem,8vw,6rem)] sm:text-[clamp(4rem,8vw,7rem)] font-perfume text-primary my-2"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          Faesal & Dewi
        </motion.h1>
      </div>

      {/* Guest & Date */}
      <div className="relative z-10 mb-4 flex flex-col items-center w-full max-w-3xl">
        <motion.p
          className="text-[clamp(1rem,3vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,1.75rem)] text-primary font-belgiano p-3"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Minggu, 28 September 2025
        </motion.p>

        <motion.p
          className="text-[clamp(0.9rem,2.5vw,1.3rem)] sm:text-[clamp(1rem,2.5vw,1.5rem)] text-primary font-britannic"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Kepada Yth. {guestName}
        </motion.p>

        <motion.div
          className="mt-5 flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.button
            onClick={onOpen}
            className="rounded-full border border-primary text-primary px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md relative overflow-hidden transition-colors font-belgiano text-[clamp(0.9rem,2.5vw,1.2rem)] sm:text-[clamp(1rem,2.5vw,1.25rem)]"
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
