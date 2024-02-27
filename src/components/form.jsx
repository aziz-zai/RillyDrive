import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import { TbSwitchHorizontal } from "react-icons/tb";
import contact from "../assets/form.json";
const Contact = () => {
  const formRef = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const abholStrRef = useRef(null);
  const abholPLZRef = useRef(null);
  const zielStrRef = useRef(null);
  const zielPLZRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    abholStr: "Flughafen, München",
    abholPLZ: "",
    zielStr: "",
    zielPLZ: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [switched, setSwitched] = useState(false);
  const focusFirstEmptyInput = () => {
    const refs = [
      nameRef,
      emailRef,
      phoneRef,
      abholStrRef,
      abholPLZRef,
      zielStrRef,
      zielPLZRef,
      dateRef,
      timeRef,
    ];
    const keys = [
      "name",
      "email",
      "phone",
      "abholStr",
      "abholPLZ",
      "zielStr",
      "zielPLZ",
      "date",
      "time",
    ];
    for (let i = 0; i < keys.length; i++) {
      if (!form[keys[i]]) {
        refs[i].current?.focus();
        break;
      }
    }
  };
  const switchBtnPressed = (isSwitched) => {
    setSwitched(isSwitched);
    if (isSwitched) {
      setForm({
        ...form,
        abholStr: "",
        zielStr: "Flughafen, München",
        abholPLZ: form.zielPLZ,
        zielPLZ: form.abholPLZ,
      });
    } else {
      setForm({ ...form, abholStr: "Flughafen, München", zielStr: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const isFormValid = Object.values(form).every(
      (value) => value.trim() !== ""
    );

    // If any field is empty, show an alert and stop the submission
    if (!isFormValid) {
      alert("Bitte fülle alle Felder aus, bevor du fortfährst.");
      focusFirstEmptyInput();
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_y8t43fi",
        "template_v5csknm",
        {
          from_name: form.name,
          to_name: "RobooDrive",
          from_email: form.email,
          phone: form.phone,
          abholStr: form.abholStr,
          abholPLZ: form.abholPLZ,
          zielStr: form.zielStr,
          zielPLZ: form.zielPLZ,
          date: form.date, // Fixed: was incorrectly using form.zielPLZ
          time: form.time, // Fixed: was incorrectly using form.zielPLZ
        },
        "2is6Tx3ONFnhLyN1c"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Danke für deine Anfrage. Wir werden innerhalb von 2h deine Anfrage beantworten."
          );
          // Reset the form
          setForm({
            name: "",
            email: "",
            phone: "",
            abholStr: "Flughafen, München",
            abholPLZ: "",
            zielStr: "",
            zielPLZ: "",
            date: "",
            time: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Da ist etwas Schief gelaufen.");
        }
      );
  };

  return (
    <div
      className="flex  justify-center items-center w-full mt-10 "
      id="contact">
      <div className="xl:mt-12 flex-col flex overflow-hidden ">
        <div className=" flex flex-col bg-primary-200 p-2 sm:p-8 rounded-2xl w-fit">
          <div>
            <p className="sm:text-[18px] text-[14px] text-accent-0 font-bold uppercase tracking-wider">
              MIN 24h DAVOR ANFRAGEN
            </p>
            <h3 className="text-secondaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[36px] ">
              Fahrt anfragen
            </h3>
            <p className="text-secondaryText max-w-[400px] md:max-w-[700px] text-[12px]">
              Für individuelle Anfragen, einschließlich Tagesbuchungen oder
              Langstreckenfahrten, kontaktieren Sie uns bitte direkt per E-Mail:{" "}
              <span className="text-secondaryText bg-accent-0 rounded-md p-1 w-fit">
                rilly-drive@outlook.de
              </span>
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-flow-row-dense grid-cols-1 2xl:grid-cols-2 gap-2 mt-10 mb-8 w-fit mx-auto">
            <div className="flex">
              <div className="flex gap-1 flex-wrap flex-col md:flex-row bg-secondary-300 p-3 shadow-lg backdrop-blur rounded-md w-fit min-w-[320px] ">
                <div className="flex flex-col w-full sm:w-auto">
                  <span className="text-secondaryText font-medium ml-1">
                    Name
                  </span>
                  <Input
                    ref={nameRef}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Max Musterman"></Input>
                </div>
                <div className="flex flex-col w-full sm:w-auto">
                  <span className="text-secondaryText font-medium ml-1">
                    Mail
                  </span>
                  <Input
                    ref={emailRef}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="max.mustermann@gmail.com"></Input>
                </div>
                <div className="flex flex-col w-full sm:w-auto">
                  <span className="text-secondaryText font-medium ml-1">
                    Handynummer
                  </span>
                  <Input
                    ref={phoneRef}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0176 32936642"></Input>
                </div>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap flex-col md:flex-row w-fit bg-secondary-300 p-3 shadow-lg backdrop-blur  rounded-md">
              <div className="flex flex-col ">
                <span className="text-secondaryText font-medium ml-1">
                  Abholadresse
                </span>
                <div className="flex flex-row gap-1">
                  <Input
                    ref={abholStrRef}
                    type="text"
                    name="abholStr"
                    value={form.abholStr}
                    onChange={handleChange}
                    disabled={!switched}
                    placeholder="Maximilian Str.15"></Input>
                  <Input
                    ref={abholPLZRef}
                    type="text"
                    name="abholPLZ"
                    value={form.abholPLZ}
                    onChange={handleChange}
                    placeholder={switched ? "PLZ" : "FlugNr."}
                    className="w-[4.5rem]"></Input>
                </div>
              </div>
              <div className="flex items-end cursor-pointer">
                <div
                  className=" rounded-md h-10 w-10 bg-white flex items-center justify-center"
                  onClick={() => switchBtnPressed(!switched)}>
                  <TbSwitchHorizontal size={25} color="#FFCC00" />
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-secondaryText font-medium ml-1">
                  Zieladresse
                </span>
                <div className="flex flex-row gap-1 ">
                  <Input
                    ref={zielStrRef}
                    type="text"
                    name="zielStr"
                    value={form.zielStr}
                    onChange={handleChange}
                    disabled={switched}
                    placeholder="Maximilian Str.15"></Input>
                  <Input
                    ref={zielPLZRef}
                    type="text"
                    name="zielPLZ"
                    value={form.zielPLZ}
                    onChange={handleChange}
                    placeholder={switched ? "FlugNr." : "PLZ"}
                    className="w-[4.5rem]"></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-end bg-secondary-300 p-3 shadow-lg backdrop-blur w-fit rounded-md flex-col md:flex-row">
                <div>
                  <span className="text-secondaryText font-medium ml-1">
                    Datum/Uhrzeit
                  </span>
                  <div className="flex gap-1 ">
                    <Input
                      ref={dateRef}
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                    <Input
                      ref={timeRef}
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-36"></Input>
                  </div>
                </div>
              </div>
              <div className="flex items-end mx-auto sm:m-0 mt-6 sm:mt-0">
                <button
                  type="submit"
                  className="bg-accent-0 py-3 px-8 outline-none w-fit text-secondaryText font-bold rounded-xl h-10 flex items-center justify-center">
                  {loading ? "Abschicken..." : "Abschicken"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="xl:flex-1 h-4 w-[50vw] rotate-[-20deg] block m-auto scale-x-[-1] scale-y-[1] ml-auto mr-0 mt-20">
          <Lottie animationData={contact} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
