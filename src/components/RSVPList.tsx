import React, { useEffect, useState } from "react";
import { subscribeRSVPs } from "../services/rsvpService";
import type { RSVPMessage } from "../types/rsvp";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale"; // untuk bahasa Indonesia

const RSVPList: React.FC = () => {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeRSVPs(setMessages);
    return () => unsubscribe();
  }, []);

  return (
    <section className="pb-20 px-6 bg-bg">
      <h3 className="text-4xl md:text-5xl font-olivia text-primary text-center mb-10">
        Greetings
      </h3>

      <div className="max-w-3xl mx-auto">
        <div className="max-h-[65vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          <ul className="space-y-5">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm transition hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-britannic text-lg text-primary">
                    {msg.name}
                  </span>
                  <span
                    className={`text-xs md:text-sm px-3 py-1 font-belgiano tracking-wide rounded-full border
    ${
      msg.attending
        ? "bg-primary text-white border-primary font-semibold"
        : "bg-gray-100 text-gray-500 border-gray-300"
    }`}
                  >
                    {msg.attending ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>

                {/* Message */}
                <p className="text-gray-700 font-light italic leading-relaxed">
                  {msg.message || "Tanpa pesan"}
                </p>

                {/* Time */}
                {msg.createdAt && (
                  <span className="text-xs text-gray-400 flex justify-end mt-2 font-belgiano">
                    {formatDistanceToNow(msg.createdAt.toDate(), {
                      addSuffix: true,
                      locale: id,
                    })}
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
