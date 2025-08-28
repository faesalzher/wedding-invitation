import Prayer from "./Prayer";
import Countdown from "./Countdown"; // komponen kedua
const getImage = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const PrayerCountdown = () => {
  const bg = getImage("countdown-bg.jpg");

  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-scroll">
      {/* Bagian Atas 50% */}
      <div className="h-1/2 w-full flex justify-center items-center bg-bg">
        <Prayer />
      </div>

      {/* Bagian Bawah 50% */}
      <div className="h-1/2 w-full flex justify-center items-center bg-blue-200  bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          // backgroundPosition: "center top",
          backgroundPosition: "30% center top"
        }}>
        <Countdown />
      </div>
    </div>

  );
};

export default PrayerCountdown;
