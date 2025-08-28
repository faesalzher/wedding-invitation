const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const Groom = () => {
  const GroomBg = getImage("couple.jpg");

  return (
    <section className="h-screen w-full flex">
      <div className="w-1/2 h-full flex justify-center items-center relative">
        <div
          className="absolute inset-0 rounded-tr-3xl rounded-br-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${GroomBg})`,
            backgroundSize: "250%",
            backgroundPosition: "10% center",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-end items-end p-6 pb-30 bg-bg rounded-tr-3xl rounded-br-3xl overflow-hidden">
        <p className="text-xl text-primary italic mb-2 text-right font-olivia text-bg ">
          The Groom
        </p>
        <h1 className="text-3xl text-primary mb-4 text-right font-britannic text-bg ">
          Faesal Herlambang Krisandi Putra
        </h1>
        <p className="text-xl font-abuget  text-primary italic mb-1 text-right">
          Putra dari
        </p>
        <p className="text-base text-xl text-primary font-belgiano text-right">
          Bapak Kuswandi <br />
          Ibu Lela Kristanti
        </p>
      </div>
    </section>
  );
};

export default Groom;
