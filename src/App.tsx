// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Couple from './components/Couple'
import Footer from './components/Footer'
import Event from './components/Event'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Prayer from './components/Prayer'
import WeddingGift from './components/WeddingGift'
import RSVPForm from './components/RSVPForm'
import RSVPList from './components/RSVPList'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-[#fdfbf6] text-green-800">
      <Hero />
      <Couple />
      <Prayer/>
      <Countdown />
      <Event />
      <Gallery />
      <RSVPForm />
      <RSVPList />
      <WeddingGift/>
      <Footer />
    </div>
  )
}

export default App
