import React, { useEffect, useState } from "react";
import { subscribeRSVPs } from "../services/rsvpService";
import type { RSVPMessage } from "../types/rsvp";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { motion } from "framer-motion"; // animasi 🎉

const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const RSVPList: React.FC = () => {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);
  const bgoverlay = getImage("bg-overlay-simple.jpg");

  useEffect(() => {
    const unsubscribe = subscribeRSVPs(setMessages);
    return () => unsubscribe();
  }, []);

  return (
    <section
      className="pb-20 pt-10 px-6 bg-bg bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgoverlay})`,
      }}
    >
      {/* Heading animasi */}
      <motion.h3
        className="text-4xl md:text-5xl font-olivia text-primary text-center m-10"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Greetings
      </motion.h3>

      <div className="max-w-3xl mx-auto">
        <div className="max-h-[65vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          <ul className="space-y-5">
            {messages.map((msg, index) => (
              <motion.li
                key={index}
                className="bg-white/70 rounded-4xl p-6 shadow-sm"
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
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
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RSVPList;
