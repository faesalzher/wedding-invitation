import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const BASE_PATH = `${import.meta.env.BASE_URL}images/`;

const Gallery = () => {
  const images = [
    "Salinan 4.jpg",
    "Salinan 5.jpg",
    "Salinan 6.jpg",
    "Salinan-11.jpg",
       "Salinan 4.jpg",
    "Salinan 5.jpg",
    "Salinan 6.jpg"
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
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <section  className="relative min-h-screen bg-bg flex flex-col justify-center items-center text-center bg-cover bg-center bg-scroll px-6 pb-5">
      
      <h3 className="text-5xl mb-10 font-olivia text-primary">Our Moments</h3>
      <div className="max-h-[75vh] overflow-y-auto pr-2">
        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              onClick={() => openModal(idx)}
              className="rounded-lg object-cover w-full cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
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
