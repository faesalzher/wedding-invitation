import React, { useState } from "react";
import { saveRSVP } from "../services/rsvpService";

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
      // alert("Terima kasih atas ucapannya!");
      setName("");
      setMessage("");
      setAttending(true);
      setShowModal(true); // tampilkan modal
    } catch (error) {
      console.error("Gagal menyimpan RSVP", error);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 px-4 bg-green-50 text-center">
      <h3 className="text-2xl font-bold mb-6">Konfirmasi Kehadiran</h3>
      <p className="mb-6 text-gray-600">Kami dengan senang hati menantikan kehadiran Anda 🙏</p>
      <form className="bg-white max-w-md mx-auto rounded-xl p-6 shadow border border-green-100 space-y-4 text-left" onSubmit={handleSubmit}>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Nama"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ucapan & Doa</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan pesan atau doa..."
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
            className="w-4 h-4"
          />
          <label className="text-sm font-medium text-gray-700">
            Hadir
          </label>
        </div>


        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim RSVP"}
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center animate-fade-in">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Terima Kasih! 💚
            </h2>
            <p className="text-gray-600 mb-4">
              Ucapan dan konfirmasi Anda telah tersimpan.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
