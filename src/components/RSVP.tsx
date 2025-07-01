import { useState } from 'react'

type Tamu = {
  nama: string
  status: string
  pesan: string
}

const RSVP = () => {
  const [nama, setNama] = useState('')
  const [status, setStatus] = useState('')
  const [pesan, setPesan] = useState('')
  const [tamuList, setTamuList] = useState<Tamu[]>([])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data: Tamu = { nama, status, pesan }
    setTamuList([data, ...tamuList])
    setSubmitted(true)

    setNama('')
    setStatus('')
    setPesan('')

    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <section className="py-16 px-4 bg-green-50 text-center">
      <h3 className="text-3xl font-script text-green-800 mb-4">Konfirmasi Kehadiran</h3>
      <p className="mb-6 text-gray-600">Kami dengan senang hati menantikan kehadiran Anda 🙏</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-md mx-auto rounded-xl p-6 shadow border border-green-100 space-y-4 text-left"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kehadiran</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="" disabled>Pilih salah satu</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ucapan / Doa</label>
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            rows={3}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Tuliskan pesan atau doa..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
        >
          Kirim RSVP
        </button>

        {submitted && (
          <p className="text-green-600 text-sm mt-2 text-center">
            Terima kasih, RSVP Anda telah dikirim! 💌
          </p>
        )}
      </form>

      {/* Tampilkan daftar tamu */}
      {tamuList.length > 0 && (
        <div className="mt-12 max-w-2xl mx-auto text-left">
          <h4 className="text-2xl font-semibold text-green-800 mb-4 text-center">Ucapan & Kehadiran</h4>
          <ul className="space-y-4">
            {tamuList.map((tamu, index) => (
              <li
                key={index}
                className="bg-white border border-green-100 rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-green-700">{tamu.nama}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${tamu.status === 'Hadir' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                    {tamu.status}
                  </span>
                </div>
                <p className="text-gray-700 text-sm italic">{tamu.pesan || 'Tanpa pesan'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default RSVP
