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
    }, // easeOut cubic-bezier
  }),
};

const LandingScreen = ({ onOpen }: { onOpen: () => void }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Tamu Undangan";

  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-end items-center text-center bg-cover bg-center bg-scroll px-6 pb-30"
      style={{
        backgroundImage: `url('${BASE_PATH}landing-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative z-10">
        <div className="mt-auto text-primary font-britannic">
          <motion.p
            className=""
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Kepada Yth. {guestName}
          </motion.p>
        </div>
 <div className="mt-5 flex justify-center">
  <motion.button
    onClick={onOpen}
    className="rounded-full border border-primary text-primary px-8 py-3 font-semibold shadow-md relative overflow-hidden transition-colors font-belgiano "
    variants={textVariants}
    initial="hidden"
    animate="visible"
    custom={4}
    whileHover={{
      scale: 1.08,
      backgroundColor: "#d1fae5", // bisa diganti warna pastel yang elegan
      color: "#065f46", // teks gelap agar kontras
      boxShadow: "0 0 15px rgba(0, 255, 150, 0.3)",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
    whileTap={{ scale: 0.95 }}
  >
    Buka Undangan
    {/* Optional: animasi glow tambahan */}
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-grey-200 via-grey-100 to-grey-500 opacity-20 pointer-events-none"></span>
  </motion.button>
</div>

      </div>
    </motion.div>
  );
};

export default LandingScreen;
