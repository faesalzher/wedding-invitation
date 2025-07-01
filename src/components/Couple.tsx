const Couple = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h3 className="text-2xl font-bold text-green-800 mb-8">Mempelai</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        
        {/* Mempelai Wanita */}
        <div className="max-w-xs text-center">
          <img
            src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
            alt="Rani Anjani"
            className="rounded-full w-40 h-40 mx-auto object-cover border-4 border-green-200"
          />
          <h4 className="mt-4 text-xl font-semibold text-green-900">Rani Anjani</h4>
          <p className="text-sm text-gray-600">Putri dari Bpk. Ahmad & Ibu Siti</p>
        </div>

        <span className="text-3xl font-script text-green-600">&</span>

        {/* Mempelai Pria */}
        <div className="max-w-xs text-center">
          <img
            src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740"
            alt="Bima Pratama"
            className="rounded-full w-40 h-40 mx-auto object-cover border-4 border-green-200"
          />
          <h4 className="mt-4 text-xl font-semibold text-green-900">Bima Pratama</h4>
          <p className="text-sm text-gray-600">Putra dari Bpk. Joko & Ibu Dewi</p>
        </div>

      </div>
    </section>
  )
}

export default Couple
