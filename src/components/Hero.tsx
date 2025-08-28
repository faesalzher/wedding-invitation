const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Hero = () => {
  const heroBg = getImage("Hero-1.jpg");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end items-center text-center bg-cover bg-center bg-scroll px-6 pb-20"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "30% center" 
       }}
    >
      {/* Overlay supaya teks kontras */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-olivia-dhorgent text-bg drop-shadow-lg">
          The Wedding of
        </h1>
        <h2 className="font-britannic-bold-regular text-5xl mt-2 text-bg drop-shadow-lg">
          Faesal & Dewi
        </h2>
        <p className="mt-4 text-lg text-bg drop-shadow">
          Minggu, 28 September 2025
        </p>
      </div>
    </section>
  );
};

export default Hero;
