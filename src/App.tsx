import { AnimatePresence, motion } from "framer-motion";
import BackgroundMusic, { type BackgroundMusicHandle } from "./BackgroundMusic";
import LandingScreen from "./components/LandingScreen";
import WeddingPage from "./components/WeddingPage";
import { useRef, useState } from "react";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const musicRef = useRef<BackgroundMusicHandle>(null);

  const handleOpen = () => {
    setIsOpened(true);
    musicRef.current?.play(); // play musik setelah tombol diklik
  };

  return (
    <>
      {/* BackgroundMusic selalu ada */}
      <BackgroundMusic ref={musicRef} />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <LandingScreen onOpen={handleOpen} />
          </motion.div>
        ) : (
          <WeddingPage />
        )}
      </AnimatePresence>
    </>
  );
}


export default App;