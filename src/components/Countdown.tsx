import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const targetDate = dayjs('2025-09-28T09:00:00')

const Countdown = () => {
  const [remaining, setRemaining] = useState(targetDate.diff(dayjs()))

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(targetDate.diff(dayjs()))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remaining / (1000 * 60)) % 60)
  const seconds = Math.floor((remaining / 1000) % 60)

  const timeItems = [
    { label: 'Hari', value: days },
    { label: 'Jam', value: hours },
    { label: 'Menit', value: minutes },
    { label: 'Detik', value: seconds },
  ]

  return (
    <section className="text-center py-16 px-4 relative bg-bg-50">
      <h3 className="text-3xl mb-8 font-olivia-dhorgent text-white drop-shadow-md">
        Menuju Hari Bahagia
      </h3>

      <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto px-2 scrollbar-hide">
        {timeItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[80px] sm:min-w-[100px] px-4 py-3 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300 text-white"
          >
            <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
            <div className="text-sm sm:text-base mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <h1 className="mt-10 text-sm italic text-white/80">
        Waktu terus berjalan menuju hari istimewa kami 🌿
      </h1>
    </section>


  );
};

export default Countdown;
