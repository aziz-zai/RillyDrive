import email from "../assets/email.png";
import link from "../assets/link.png";
import phone from "../assets/phone.png";

export const Footer = () => {
  return (
    <div className="bg-primary-200 py-[50px] font-[16px] flex justify-center items-center text-primary-0">
      <div className="flex justify-center items-center md:w-fit w-full md:gap-12 gap-16 flex-wrap p-1 ">
        <div className="h-[130px] flex flex-col md:m-auto">
          <h3 className="font-bold mb-1">Links</h3>
          <ul className="flex flex-col">
            <a href="/#top">Home</a>
            <a href="/#about">About</a>
            <a href="/#contact">Anfrage</a>
            <a href="/Impressum">Impressum</a>
          </ul>
        </div>
        <div className="h-[130px] flex flex-col md:m-auto">
          <h3 className=" font-bold mb-1">Kontakt</h3>
          <p>Ilhem Boughanmi</p>
          <p>Westring 9</p>
          <p>86565, Gachenbach</p>
          <p>Deutschland</p>
        </div>
        <div className="h-[130px] flex flex-col md:m-auto">
          <p className="flex gap-2">
            <img src={phone} alt="phone" className="w-5 h-5 text-secondary-0" />
            +49 176 80582352
          </p>
          <p className="flex gap-2">
            <img src={email} alt="email" className="w-5 h-5" />{" "}
            rilly-drive@outlook.de
          </p>
          <p className="flex gap-2">
            <img src={link} alt="website-link" className="w-5 h-5" />{" "}
            www.rilly-drive.com
          </p>
        </div>
      </div>
    </div>
  );
};
