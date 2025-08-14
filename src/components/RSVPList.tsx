import React, { useEffect, useState } from "react";
import { subscribeRSVPs } from "../services/rsvpService";
import type { RSVPMessage } from "../types/rsvp";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale"; // untuk bahasa Indonesia

const RSVPList: React.FC = () => {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getAllRSVP();
  //     setMessages(data);
  //   })();
  // }, []);

  useEffect(() => {
    const unsubscribe = subscribeRSVPs(setMessages);
    return () => unsubscribe();
  }, []);

  return (
    <section className="py-16 px-4 bg-green-50 text-center">
      <h2 className="text-3xl font-script text-green-800 mb-4">Ucapan & Doa</h2>
      <div className="mt-12 max-w-2xl mx-auto text-left">
        <div className="max-h-[60vh] overflow-y-auto pr-2"> {/* Scrollable wrapper */}
          <ul className="space-y-4">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="bg-white border border-green-100 rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-green-700">{msg.name}</span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${msg.attending
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    {msg.attending ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {msg.message || "Tanpa pesan"}
                </p>
                {msg.createdAt && (
                  <span className="text-xs text-gray-400 flex justify-end">
                    {formatDistanceToNow(msg.createdAt.toDate(), { addSuffix: true, locale: id })}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

};

export default RSVPList;
