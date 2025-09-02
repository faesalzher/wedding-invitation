import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const BASE_PATH = `${import.meta.env.BASE_URL}images/`;

const Gallery = () => {
  const images = [
    "gallery-8.jpg",
    "gallery-10.jpg",
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
    "gallery-4.jpg",
    "gallery-5.jpg",
    "gallery-6.jpg",
    "gallery-7.jpg",
    "gallery-9.jpg",
    "gallery-13.jpg",
    "gallery-14.jpg",
    "gallery-12.jpg",
    "gallery-15.jpg"

  ].map((file) => BASE_PATH + file);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

 const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

  return (
    <section className="relative min-h-screen bg-bg flex flex-col justify-center items-center text-center bg-cover bg-center bg-scroll px-6 pb-5">
      <h3 className="text-5xl mb-10 font-olivia text-primary">Our Moments</h3>

      <div className="max-h-[75vh] overflow-y-auto pr-2">
        {/* Grid Gallery dengan animasi */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // jalan saat masuk viewport
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="w-full h-full"
            >
              <img
                src={src}
                onClick={() => openModal(idx)}
                className="rounded-lg object-cover w-full cursor-pointer hover:opacity-80 shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              ‹
            </button>

            <div {...swipeHandlers}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                className="max-h-[80vh] max-w-[90vw] rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
