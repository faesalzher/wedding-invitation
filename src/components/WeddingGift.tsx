import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const getImage = (name: string) =>
  `${import.meta.env.BASE_URL}images/${name}`;

const WeddingGift = () => {
  const [copied, setCopied] = useState(false);
  const heroBg = getImage("wedding-gift-bg.jpg");

  const handleCopy = () => {
    navigator.clipboard.writeText("4390820904"); // Ganti dengan nomor sebenarnya
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-scroll px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}   // ⬅️ animasi hanya sekali
        className="font-olivia text-5xl mt-2 text-bg drop-shadow-lg relative z-10"
      >
        Wedding Gift
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}   // ⬅️ sekali
        className="max-w-xl mx-auto text-bg m-6 drop-shadow-lg font-britannic relative z-10"
      >
        Doa dan restu Bapak/Ibu/Saudara/i sudah sangat berarti bagi kami.
        Namun jika ingin memberikan tanda kasih, dapat disampaikan melalui
        rekening berikut:
      </motion.p>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-md w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h4 className="text-lg font-semibold text-primary mb-1">
          BCA - Faesal Herlambang
        </h4>
        <div className="flex justify-center items-center gap-2">
          <span className="text-xl tracking-wide text-primary font-semibold">
            4390820904
          </span>
          <button
            onClick={handleCopy}
            className="text-primary hover:text-primary transition"
            aria-label="Salin Nomor Rekening"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
        {copied && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-primary mt-2"
          >
            Nomor rekening disalin ✔
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default WeddingGift;
