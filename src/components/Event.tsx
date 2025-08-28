import { Clock3, MapPin } from "lucide-react";
import MapEmbed from "./MapEmbed";

const Event = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-bg px-10 p-10">
      {/* <h3 className="text-2xl font-bold mb-6">Jadwal Acara</h3> */}
      <div className="max-w-md w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Akad */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            {/* <CalendarDays className="w-5 h-5" /> */}
            <h4 className="text-4xl font-medium font-olivia">Akad Nikah</h4>
          </div>
          <div className="text-md text-primary leading-relaxed font-britannic">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock3 className="w-4 h-4 text-gray-400" />
              Minggu, 28 September 2025
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              Pukul 09.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-primary text-xs italic">
              <MapPin className="w-4 h-4 text-gray-400" />
              Villa Hamsa, Junrejo, Kota Batu
            </div>
          </div>

          {/* Resepsi */}
          <div className="flex items-center justify-center gap-2 text-gray-600 mt-10">
            {/* <CalendarDays className="w-5 h-5" /> */}
            <h4 className="text-4xl font-medium font-olivia">Resepsi</h4>
          </div>
          <div className="text-md text-primary leading-relaxed font-britannic">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock3 className="w-4 h-4 text-gray-400" />
              Minggu, 28 September 2025
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              Pukul 13.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-primary text-xs italic">
              <MapPin className="w-4 h-4 text-gray-400" />
              Villa Hamsa, Junrejo, Kota Batu
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 text-gray-600 mt-10">
            {/* <CalendarDays className="w-5 h-5" /> */}
            <h4 className="text-4xl font-medium font-olivia">Lokasi</h4>
          </div>

          {/* Panggil komponen MapEmbed */}
          <MapEmbed />

          <p className="text-center text-sm text-gray-600 mt-3 font-belgiano">
            Jl. Martorejo No.339, Dadaprejo, Kec. Junrejo, Kota Batu, Jawa Timur
            65233 <br />
            <a
              href="https://maps.app.goo.gl/WEU3cYATbZH4Pafd9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Buka di Google Maps
            </a>
          </p>
        </div>
        {/* <p className="mt-10 text-sm text-gray-500 italic">
          Mohon doa & kehadiran Bapak/Ibu/Saudara/i untuk momen bahagia ini 🌿
        </p> */}
      </div>
    </section>
  );
};

export default Event;
