const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Bride = () => {
  const BrideBg = getImage("couple.jpg");

  return (
    <section className="h-screen w-full flex">
      {/* Kanan: Teks */}
      <div className="w-1/2 h-full flex flex-col justify-end p-10 pb-35 bg-bg">
        <p className="text-xl text-primary italic mb-2 text-left font-olivia text-bg ">
          The Bride
        </p>
        <h1 className="text-3xl text-primary mb-4 text-left font-britannic text-bg ">
          Dewi
          <br />
          Ayu
          <br />
          Fitriani
        </h1>
        <p className="text-xl font-abuget  text-primary italic mb-1 text-left">
          Putri dari
        </p>
        <p className="text-base text-xl text-primary text-left font-belgiano ">
          Bapak Ismail <br />
          Ibu Ulin Nusroh
        </p>
      </div>

      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${BrideBg})`,
            backgroundSize: "250%",
            backgroundPosition: "85% center",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Bride;
