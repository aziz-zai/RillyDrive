import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";

const Offer = () => {
  return (
    <div className="h-fit " id="about">
      <div className="pt-20 h-fit lg:h-[calc(100%-8.75rem)] pb-20 lg:pb-2">
        <h2 className="font-eudoxus text-primaryText text-4xl lg:text-6xl font-bold text-center pt-14">
          Wie funktioniert es?
        </h2>
        <div className="flex justify-center items-center h-full flex-row-reverse md:flex-col gap-0 sm:gap-8 pt-20 py-0 md:py-24">
          <div className="md:w-[48rem] lg:w-[62rem] flex justify-between items-center flex-col md:flex-row gap-12 md:gap-0">
            <div className="shadow-xl rounded py-4 px-2 sm:py-9 sm:px-3 w-[12rem] sm:w-[15rem] h-[21rem] flex items-center flex-col bg-secondary-200">
              <img src={card1} alt="card image" className="w-[8rem] m-auto" />
              <div className="flex flex-col mt-4 justify-center ">
                <h2 className="font-eudoxus text-primaryText text-lg font-bold">
                  Anfrage verschicken
                </h2>
                <p className="text-sm pt-1 text-primaryText">
                  Einfach und unverbindliche Anfrage online vershicken
                </p>
                <a
                  className="w-fit bg-accent-0 hover:bg-accent-200 rounded px-2 py-1 font-bold text-secondaryText text-sm mt-2"
                  href="/#contact">
                  Jetzt loslegen
                </a>
              </div>
            </div>
            <div className="shadow-xl rounded py-4 px-2 sm:py-9 sm:px-3 w-[12rem] sm:w-[15rem] h-[21rem] flex items-center flex-col bg-secondary-200">
              <img src={card2} alt="card image" className="w-[8rem] m-auto" />
              <div className="flex flex-col mt-4 justify-center ">
                <h2 className="font-eudoxus text-primaryText text-lg font-bold">
                  Angebot erhalten
                </h2>
                <p className="text-sm pt-1 text-primaryText">
                  Sie erhalten das beste Angebot per Mail
                </p>
                <p className="bg-accent-100 rounded w-fit p-1 text-xs mt-2 ">
                  100% Garantierter Preis
                </p>
              </div>
            </div>
            <div className="shadow-xl rounded py-4 px-2 sm:py-9 sm:px-3 w-[12rem] sm:w-[15rem] h-[21rem] flex items-center flex-col bg-secondary-200">
              <img src={card3} alt="card image" className="w-[8rem] m-auto" />
              <div className="flex flex-col mt-4 justify-center ">
                <h2 className="font-eudoxus text-primaryText text-lg font-bold">
                  Fahrt genießen
                </h2>
                <p className="text-sm pt-1 text-primaryText">
                  Jetzt müssen sie nur noch Ihre Fahrt genießen
                </p>
                <p className="bg-accent-100 rounded w-fit p-1 text-xs mt-2 ">
                  Zahlung nach erfolgreicher Fahrt
                </p>
              </div>
            </div>
          </div>
          <div className="timeline flex justify-center relative flex-row md:flex-col">
            <div className="h-[48rem] md:h-[2px] w-[2px] md:w-[40rem] lg:w-[54rem] bg-primary-100" />
            <div className="flex justify-between w-[90%] m-0 md:m-auto flex-col md:flex-row md:h-full">
              <div className=" rounded-full w-10 h-10 flex justify-center items-center border-[2px] border-primary-100 translate-x-[-50%] md:translate-x-[0] md:translate-y-[-50%] z-2 bg-accent-0">
                <p className="font-bold text-xl font-eudoxus text-secondaryText ">
                  1
                </p>
              </div>
              <div className=" rounded-full w-10 h-10 flex justify-center items-center border-[2px] border-primary-100 translate-x-[-50%] md:translate-x-[0] md:translate-y-[-50%] z-2 bg-accent-0">
                <p className="font-bold text-xl font-eudoxus text-secondaryText ">
                  2
                </p>
              </div>
              <div className=" rounded-full w-10 h-10 flex justify-center items-center border-[2px] border-primary-100 translate-x-[-50%] md:translate-x-[0] md:translate-y-[-50%] z-2 bg-accent-0">
                <p className="font-bold text-xl font-eudoxus text-secondaryText ">
                  3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
