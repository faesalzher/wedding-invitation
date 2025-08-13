import React, { useState } from "react";
import { saveRSVP } from "../services/rsvpService";

const RSVPForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveRSVP({ name, message, attending });
      alert("Terima kasih atas ucapannya!");
      setName("");
      setMessage("");
      setAttending(true);
    } catch (error) {
      console.error("Gagal menyimpan RSVP", error);
    }
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama"
        required
      />
      <textarea
        className="border p-2 rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ucapan"
        required
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
        Hadir di acara
      </label>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? "Mengirim..." : "Kirim RSVP"}
      </button>
    </form>
  );
};

export default RSVPForm;
