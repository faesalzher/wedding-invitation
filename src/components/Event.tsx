import { CalendarDays, Clock3, MapPin } from 'lucide-react'

const Event = () => {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-6">Jadwal Acara</h3>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Akad */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
            <CalendarDays className="w-5 h-5" />
            <h4 className="text-lg font-medium">Akad Nikah</h4>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock3 className="w-4 h-4 text-green-400" />
              Minggu, 20 Oktober 2025 - 09.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs italic">
              <MapPin className="w-4 h-4 text-green-400" />
              Villa Mawar, Kota Batu
            </div>
          </div>
        </div>

        {/* Resepsi */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
            <CalendarDays className="w-5 h-5" />
            <h4 className="text-lg font-medium">Resepsi</h4>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock3 className="w-4 h-4 text-green-400" />
              Minggu, 20 Oktober 2025 - 11.00 – 15.00 WIB
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs italic">
              <MapPin className="w-4 h-4 text-green-400" />
              Villa Mawar, Kota Batu
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-500 italic">
        Mohon doa & kehadiran Bapak/Ibu/Saudara/i untuk momen bahagia ini 🌿
      </p>
    </section>
  )
}

export default Event
