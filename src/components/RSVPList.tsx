import React, { useEffect, useState } from "react";
import { getAllRSVP } from "../services/rsvpService";
import type { RSVPMessage } from "../types/rsvp";

const RSVPList: React.FC = () => {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllRSVP();
      setMessages(data);
    })();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-3">Ucapan & RSVP</h2>
      {messages.length === 0 && <p>Belum ada ucapan</p>}
      <ul className="space-y-3">
        {messages.map((msg, idx) => (
          <li key={idx} className="border p-3 rounded bg-gray-50">
            <p className="font-semibold">{msg.name} {msg.attending ? "✅" : "❌"}</p>
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RSVPList;
