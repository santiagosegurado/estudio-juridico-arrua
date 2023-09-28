/* eslint-disable @next/next/no-img-element */
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const Contact = () => {
  return (
    <section id="contacto" className="flex flex-col py-28 gap-10 bg-[#001025]">
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
      <div className="flex flex-col gap-8 max-w-5xl self-center w-full">
        <form className="flex flex-col gap-5 px-2">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <input
              type="text"
              className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
              placeholder="Nombre Completo"
            />
            <input
              type="email"
              className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="text"
              className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
              placeholder="Asunto"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <textarea
              className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light bg-transparent text-white text-lg placeholder:italic italic"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <span className="py-[8px] px-[16px] bg-[#BF9874]  cursor-pointer font-[600] text-[15px] text-white uppercase text-center">
            Enviar
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
