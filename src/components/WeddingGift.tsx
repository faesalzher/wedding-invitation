import { Copy } from 'lucide-react'
import { useState } from 'react'
const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const WeddingGift = () => {
  const [copied, setCopied] = useState(false)
  const heroBg = getImage("wedding-gift-bg.jpg");

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567890') // Ganti dengan nomor sebenarnya
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
  <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-scroll px-15"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center" 
       }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <h3 className="font-olivia text-5xl mt-2 text-bg drop-shadow-lg">Wedding Gift</h3>
  
      <p className="max-w-xl mx-auto text-bg m-6 drop-shadow-lg font-britannic">
        Doa dan restu Bapak/Ibu/Saudara/i sudah sangat berarti bagi kami. 
        Namun jika ingin memberikan tanda kasih, dapat disampaikan melalui rekening berikut:
      </p>

      <div className="max-w-md w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
        <h4 className="text-lg font-semibold text-primary mb-1">BCA - Faesal Herlambang</h4>
        <div className="flex justify-center items-center gap-2">
          <span className="text-xl tracking-wide text-primary font-semibold">1234567890</span>
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
