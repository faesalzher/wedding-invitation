import React, { useState } from "react";
import { saveRSVP } from "../services/rsvpService";
import { motion } from "framer-motion";

const RSVPForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveRSVP({ name, message, attending });
      setName("");
      setMessage("");
      setAttending(true);
      setShowModal(true);
    } catch (error) {
      console.error("Gagal menyimpan RSVP", error);
    }
    setLoading(false);
  };

  return (
    <section className="py-20 px-6 bg-primary-50 text-center">
      {/* Heading */}
      <h3 className="text-4xl md:text-5xl font-olivia text-primary mb-4">
        RSVP
      </h3>
      <p className="mb-8 text-primary-700 font-belgiano">
        Dengan penuh kebahagiaan kami menantikan kehadiran Anda
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 backdrop-blur-md shadow-lg max-w-lg mx-auto rounded-2xl p-8 shadow-lg space-y-5 text-left "
      >
        <div>
          <label className="block text-lg font-britannic  text-primary mb-1 ">
            Nama
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Masukkan nama Anda"
            className="w-full border border-grey-100 rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-lg font-britannic  text-primary mb-1">
            Ucapan & Doa
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Tuliskan pesan atau doa..."
            className="w-full border border-primary rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <label className="text-md font-britannic text-primary">
            Hadir
          </label>
        </div>

<motion.button
  type="submit"
  disabled={loading}
  whileTap={{ scale: 0.95 }} // efek mengecil saat ditekan
  whileHover={{ scale: 1.02 }} // sedikit membesar saat hover
  className="w-full bg-primary text-white py-2.5 px-4 rounded-lg font-britannic tracking-wide shadow-sm hover:bg-primary-600 transition disabled:opacity-70"
>
  {loading ? "Mengirim..." : "Kirim RSVP"}
</motion.button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-80 text-center animate-fade-in">
            <h2 className="text-2xl font-olivia text-primary mb-2">
              Terima Kasih
            </h2>
            <p className="text-gray-600 font-belgiano mb-6 text-sm leading-relaxed">
              Ucapan dan konfirmasi Anda telah tersimpan dengan baik.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary text-white px-5 py-2 rounded-lg font-britannic tracking-wide hover:bg-primary-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default RSVPForm;
