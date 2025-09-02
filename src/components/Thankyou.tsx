const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Thankyou = () => {
  const bg = getImage("bg-thankyou.jpeg");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-scroll px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "90% center",
        // backgroundSize: "100%",
      }}
    >
      {/* Overlay supaya teks kontras */}
      <div className="absolute inset-0 bg-black/10"></div>
      <footer className="text-center text-sm text-bg font-semibold relative">
        {/* <img src="https://e7.pngegg.com/pngimages/851/435/png-clipart-two-tribal-java-wayang-shadow-play-ramayana-punokawan-rama-miscellaneous-culture.png" alt="Wayang" className="absolute right-4 bottom-4 h-20 opacity-70" /> */}
        {/* <p>Terima kasih atas doa dan restunya</p> */}
        <p>©Copyright By Faesal & Dewi 2025</p>
      </footer>
    </section>
  );
};

export default Thankyou;
