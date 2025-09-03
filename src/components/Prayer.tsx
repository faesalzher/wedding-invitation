import { motion } from "framer-motion";

const Prayer = () => {
  return (
    <section className="text-center text-primary">
      <div className="flex items-center justify-center m-10 p-9 shadow-sm bg-white/70 rounded-4xl ">
        <motion.p
          className="text-center text-2xl md:text-5xl font-abuget text-primary-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasang-pasangan dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang..."
          <br />
          <span className="mt-4 block font-abuget">(QS. Ar-Rum: 21)</span>
        </motion.p>
      </div>
    </section>
  )
}

export default Prayer;
