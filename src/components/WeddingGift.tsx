import { Copy } from 'lucide-react'
import { useState } from 'react'

const WeddingGift = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567890') // Ganti dengan nomor sebenarnya
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h3 className="text-3xl font-script text-green-800 mb-6">Wedding Gift</h3>

      <p className="max-w-xl mx-auto text-gray-700 mb-6">
        Doa dan restu Bapak/Ibu/Saudara/i sudah sangat berarti bagi kami. 
        Namun jika ingin memberikan tanda kasih, dapat disampaikan melalui rekening berikut:
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl max-w-md mx-auto p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-green-700 mb-1">BCA - Faesal Herlambang</h4>
        <div className="flex justify-center items-center gap-2">
          <span className="text-xl tracking-wide text-gray-800 font-mono">1234567890</span>
          <button
            onClick={handleCopy}
            className="text-green-600 hover:text-green-800 transition"
            aria-label="Salin Nomor Rekening"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
        {copied && (
          <p className="text-sm text-green-600 mt-2">Nomor rekening disalin ✔</p>
        )}
      </div>
    </section>
  )
}

export default WeddingGift
