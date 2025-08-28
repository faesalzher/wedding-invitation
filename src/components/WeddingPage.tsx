import { motion } from "framer-motion";
import WeddingGift from "./WeddingGift";
import Gallery from "./Gallery";
import RSVPForm from "./RSVPForm";
import RSVPList from "./RSVPList";
import Event from "./Event";
import Hero from "./Hero";
// import Couple from "./Couple";
import PrayerCountdown from "./PrayerCountdown";
import Groom from "./Groom";
import Bride from "./Bride";
import Thankyou from "./Thankyou";

function WeddingPage() {
  return (
    <motion.div
      className="bg-bg text-primary-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Hero />
      <Groom />
      <Bride />
      <PrayerCountdown/>
      <Event />
         <Gallery />
      <RSVPForm />
      <RSVPList />
      <WeddingGift />
      <Thankyou /> 
    </motion.div>
  );
}

export default WeddingPage;
