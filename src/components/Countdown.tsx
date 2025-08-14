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
    <section className="text-center py-16 px-4 bg-green-50">
      <h3 className="text-2xl font-bold mb-6">Menuju Hari Bahagia</h3>

      <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto px-2 scrollbar-hide">
        {timeItems.map((item, index) => (
          <div
            key={index}
            className="bg-white min-w-[80px] sm:min-w-[100px] px-4 py-3 rounded-xl shadow-md border border-green-100 hover:scale-105 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-700">{item.value}</div>
            <div className="text-sm sm:text-base text-gray-600 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500 italic">
        Waktu terus berjalan menuju hari istimewa kami 🌿
      </p>
    </section>
  )
}

export default Countdown
