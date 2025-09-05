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
  const urlParams = new URLSearchParams(window.location.search);
  const toParam = urlParams.get("to"); // contoh: "Tamu/Rizky+Putra+Abimana"

  let isTamu = false;
  let guestName = "Tamu Undangan";

  if (toParam) {
    const parts = toParam.split("/");
    if (parts[0] === "Tamu") {
      isTamu = true;
      guestName = decodeURIComponent((parts[1] || "").replace(/\+/g, " "));
    } else {
      guestName = decodeURIComponent(toParam.replace(/\+/g, " "));
    }
  }

  if (guestName == "Tamu Undangan") {
    isTamu = true;
  }

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
      <PrayerCountdown />
      <Event />
      {!isTamu && <Gallery />}
      <RSVPForm />
      <RSVPList />
      {!isTamu && <WeddingGift />}
      {!isTamu && <Thankyou />}
    </motion.div>
  );
}

export default WeddingPage;
