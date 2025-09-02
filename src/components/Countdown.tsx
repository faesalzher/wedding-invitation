import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";

const targetDate = dayjs("2025-09-28T09:00:00");

const Countdown = () => {
  const [remaining, setRemaining] = useState(targetDate.diff(dayjs()));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(targetDate.diff(dayjs()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const timeItems = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ];

  return (
    <section className="text-center py-16 px-4 relative bg-bg-50">
      <motion.h1
        className="mb-10 text-sm italic text-white/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Save The Date !
      </motion.h1>

      <motion.h3
        className="text-5xl mb-8 font-olivia text-white drop-shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Menuju Hari Bahagia
      </motion.h3>

      <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto px-2 scrollbar-hide">
        {timeItems.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[80px] sm:min-w-[100px] px-4 py-3 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md shadow-lg text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // biar muncul bergiliran
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* AnimatePresence supaya value animasi tiap detik */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.value} // penting supaya rerender tiap kali berubah
                className="text-2xl sm:text-3xl font-bold"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.value}
              </motion.div>
            </AnimatePresence>
            <div className="text-sm sm:text-base mt-1">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
