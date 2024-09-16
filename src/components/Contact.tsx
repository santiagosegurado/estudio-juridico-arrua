/* eslint-disable @next/next/no-img-element */
"use client";
import { Marcellus } from "next/font/google";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    console.log('se lanzo')
    e.preventDefault();
    setLoading(true);
    const resp = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(contact),
    });

    const data = await resp.json();
    
    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setLoading(false);
    
    if (data.id) {
      toast.success("Mensaje enviado con éxito");
    } else {
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <>
      <Toaster richColors />
      <section
        id="contacto"
        className="flex flex-col py-28 gap-14 bg-[#001025]"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-7 items-center">
            <div>
              <img
                src="/separator-fields.svg"
                alt="Separator Arrua Estudio"
                className="hidden md:block"
              />
            </div>
            <div>
              <h3
                className={`${marcellus.className} text-center text-[40px] lg:text-[60px] uppercase text-white`}
              >
                Hacenos tu consulta
              </h3>
            </div>
            <div>
              <img
                className="rotate-180 hidden md:block"
                src="/separator-fields.svg"
                alt="Separator Arrua Estudio"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-[#BF9874] text-[16px] lg:text-[20px] uppercase tracking-[4px] text-center">
              Nuestro equipo legal a un mensaje de distancia
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-center ">
          <div className="md:w-[40%]">
            <div className="flex flex-row gap-8 p-4 flex-wrap">
              <div className="flex flex-row gap-3">
                <div className="w-[20px] h-[20px]">
                  <img
                    className="h-full w-full"
                    src="/phone.svg"
                    alt="Estudio Arrua"
                  />
                </div>
                <span className="text-slate-500 font-light">
                  1168761237 - 1125434704
                </span>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-[20px] h-[20px]">
                  <img
                    className="h-full w-full"
                    src="/clock.svg"
                    alt="Estudio Arrua"
                  />
                </div>

                <span className="text-slate-500 font-light">
                  LUNES - VIERNES de 8:00 a 18:00
                </span>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-[23px] h-[23px]">
                  <img
                    className="h-full w-full"
                    src="/location.svg"
                    alt="Estudio Arrua"
                  />
                </div>
                <span className="text-slate-500 font-light">
                  Entre Ríos 2942, San Justo
                </span>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-[23px] h-[23px]">
                  <img
                    className="h-full w-full"
                    src="/email.svg"
                    alt="Estudio Arrua"
                  />
                </div>
                <span className="text-slate-500 font-light">
                  arrua.abogados@gmail.com
                </span>
              </div>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1760345721186!2d-58.56347022363452!3d-34.67550637292873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62ec4fc7cd9%3A0x72915a508dde7f12!2sAVZ%2C%20Entre%20R%C3%ADos%202942%2C%20B1754%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1697053256359!5m2!1ses!2sar"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col gap-5 px-2 md:w-[50%] "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row items-center gap-5">
              <input
                type="text"
                className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
                placeholder="Nombre Completo"
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                value={contact.name}
                required
              />
              <input
                type="email"
                className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
                placeholder="E-mail"
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                value={contact.email}
                required
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="text"
                className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
                placeholder="Asunto"
                onChange={(e) =>
                  setContact({ ...contact, subject: e.target.value })
                }
                value={contact.subject}
                required
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <textarea
                className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
                placeholder="Mensaje"
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                value={contact.message}
                required
                rows={6}
              ></textarea>
            </div>
            <input
              className={`${
                contact.name.length > 0 &&
                contact.email.length > 0 &&
                contact.subject.length > 0 &&
                contact.message.length > 0 &&
                contact.email.includes("@") && !loading
                  ? ""
                  : "opacity-50 cursor-not-allowed"
              } py-[8px] px-[16px] bg-[#BF9874]  cursor-pointer font-[600] text-[15px] text-white uppercase text-center`}
              type="submit"
              value="Enviar"
              disabled={
                !(
                  contact.name.length > 0 &&
                  contact.email.length > 0 &&
                  contact.subject.length > 0 &&
                  contact.message.length > 0 &&
                  contact.email.includes("@") &&
                  !loading
                )
              }
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
