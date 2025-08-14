import { motion, type Variants } from "framer-motion";


const BASE_PATH = `${import.meta.env.BASE_URL}images/`;

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // easeOut cubic-bezier
  }),
};

const LandingScreen = ({ onOpen }: { onOpen: () => void }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get("to") || "Tamu Undangan";

    return (
        <motion.div
            className="h-screen w-full bg-center bg-cover relative"
            style={{
                backgroundImage: `url('${BASE_PATH}Salinan-DSC08848.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >

            <div className="absolute bottom-8 right-8 w-4/5 flex justify-between items-end text-yellow-400">
                {/* Kiri: Judul */}
                <div className="flex-3/4 text-left">
                    <motion.h2
                        className="text-3xl font-bold mb-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        The Wedding of
                    </motion.h2>

                    <motion.h1
                        className="text-4xl font-serif mb-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        Faesal & Dewi
                    </motion.h1>

                    <motion.p
                        className="mb-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        2 September 2025
                    </motion.p>

                    <motion.p
                        className="mb-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                    >
                        Kepada Yth. {guestName}
                    </motion.p>
                </div>
                {/* Kanan: Chevron Button */}
                <div className="flex-1 flex justify-end items-start">
                    <motion.button
                        onClick={onOpen}
                        className="flex items-center justify-center h-[48px] w-12 border border-yellow-400 bg-transparent text-yellow-400 rounded-lg hover:bg-yellow-400/20 transition -translate-y-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    >
                        {/* SVG Chevron */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>


            </div>
        </motion.div>


    );
};

export default LandingScreen;
