import { motion } from "framer-motion";
import Countdown from "./Countdown";
import Couple from "./Couple";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Prayer from "./Prayer";
import RSVPForm from "./RSVPForm";
import RSVPList from "./RSVPList";
import WeddingGift from "./WeddingGift";
import Event from './Event';

function WeddingPage() {
  return (
    <motion.div
      className="bg-[#fdfbf6] text-green-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Hero />
      <Couple />
      <Prayer />
      <Countdown />
      <Event />
      <Gallery />
      <RSVPForm />
      <RSVPList />
      <WeddingGift />
      <Footer />
    </motion.div>
  );
}

export default WeddingPage;
