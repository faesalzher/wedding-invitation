import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "./components/LandingScreen";
import WeddingPage from "./components/WeddingPage";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isOpened ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <LandingScreen onOpen={() => setIsOpened(true)} />
        </motion.div>
      ) : (
        <WeddingPage />
      )}
    </AnimatePresence>
  );
}

export default App;
