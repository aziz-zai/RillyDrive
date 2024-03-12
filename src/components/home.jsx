import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import hero from "../assets/hero.json";
import nadel from "../assets/nadel.json";
import plane from "../assets/plane.json";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import Contact from "./form";
import Offer from "./offer";
const Home = () => {
  const uniqueRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      uniqueRef.play();
    }, 500);
  }, []);
  return (
    <div className="flex  w-full flex-col realtive">
      <NavBar />
      <div
        className=" translate-y-[5rem] flex items-start sm:items-center sm:h-[calc(100svh-5rem)] h-fit my-20 sm:my-0 justify-center md:justify-start pl-[2rem] lg:pl-[3rem] xl:pl-[8rem] 2xl:pl-72 z-1 flex-col md:flex-row"
        id="home">
        <div className="flex flex-row relative">
          <div className="flex max-w-[40rem] flex-col items-start justify-start gap-6 mt-10  sm:mr-0 mr-8">
            <div>
              <div className="absolute top-0 right-0 w-20">
                <Lottie animationData={plane} />
              </div>
              <h1 className="uppercase text-primary font-bold font-eudoxus bg-accent-100 px-2 w-fit rounded mb-1 text-base sm:text-sm md:text-base mx-0 md:mx-0 sm:mx-auto">
                Reisen ohne Sorgen
              </h1>
              <h2 className="font-eudoxus text-primaryText text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-bold text-start sm:text-center md:text-start">
                Ihr exklusiver
                <span className="text-gradient"> Flughafen-shuttle</span>
              </h2>
              <p className="mt-4 text-start sm:text-center md:text-start text-primaryText">
                Zuverlässige und komfortable Flughafentransfers zum Münchener
                Flughafen. Schnell, sicher, stressfrei – für den perfekten Start
                Ihrer Reise.
              </p>
            </div>
            <div className="flex flex-row  gap-3 pl-2 justify-start sm:justify-center md:justify-start w-fit sm:w-full text-primaryText">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-accent-0" />
                <p>100% Zuverlässig</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-accent-0" />
                <p>100% Preisfair</p>
              </div>
            </div>
            <div className="flex gap-3 lg:gap-5 pb-0 sm:pb-4 lg:pb-28 w-fit sm:w-full justify-start sm:justify-center md:justify-start ">
              <a
                href="/#contact"
                className="bg-primary-100 hover:bg-primary-200 rounded  sm:px-3 xl:px-6 px-6 sm:py-2 xl:py-3 py-3 font-bold text-white text-sm lg:text-base ">
                Jetzt loslegen
              </a>
              <a
                href="/#about"
                className="bg-secondary-0 hover:bg-secondary-100 text-primaryText rounded sm:px-3 xl:px-6 px-6 sm:py-2 xl:py-3 py-3 font-bold text-sm lg:text-base ">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block relative">
          <Lottie animationData={hero} loop={false} />
        </div>
      </div>
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
