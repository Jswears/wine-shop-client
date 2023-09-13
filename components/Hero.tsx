import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex items-center w-screen h-screen mt-12"
      id="hero-section"
    >
      <div className="left-container w-3/5 h-full">
        <div className="text-container relative">
          <h1 className="text-white">Vinotique.</h1>
          <p className=" text-white">
            &quot;Uncorking Excellence, One Bottle at a Time&quot;
          </p>
        </div>
      </div>
      <div className="right-container h-full w-2/5 bg-orange-50">
        <div className="upper-container h-4/5 flex flex-col justify-center items-center relative">
          {/* TODO: This is going to be a carousel */}
          <h2 className="absolute top-5">Wines Of The Day</h2>
          <Image
            style={{ height: "100%", width: "auto" }}
            src="/2020-Santa-Cruz-de-Coya-RH5220.png"
            alt="Wine Bottle"
            width={800}
            height={1300}
          />
        </div>
        <div className="bottom-container h-1/5 flex flex-col items-center justify-center">
          {/* TODO: Wine-info, dynamic */}
          <p className="title-main">2020 SANTA CRUZ DE COYA</p>
          <p className="subtitle">ROBERTO HENRIQUEZ</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
