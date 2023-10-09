import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const CTA = () => {
  return (
    <article style={{backgroundImage: 'url(/cta.jpg)'}} className="w-full min-h-[500px] bg-cover text-white flex flex-col justify-center items-center gap-10 relative">
      <div className="w-full h-full absolute bg-[#001025cc] top-0 left-0"></div>
      <div className="flex flex-col gap-5 z-20">
        <h4 className={`${marcellus.className} text-4xl uppercase`}>
          ¡Defendemos tus derechos, agenda tu cita ahora!
        </h4>
        <span className="font-extralight text-gray-400 text-center">
          Agenda tu cita ahora mismo y déjanos ser tu defensa confiable en
          cualquier asunto legal que enfrentes.
          <br /> Tu tranquilidad y justicia son nuestra prioridad. ¡Te
          esperamos!
        </span>
      </div>
      <div className="flex items-center justify-center z-20">
        <a
          href="#contacto"
          className="py-[12px] px-[20px] border border-[#BF9874] cursor-pointer font-[600] text-[#BF9874] text-sm"
        >
          HACER CONSULTA
        </a>
      </div>
    </article>
  );
};

export default CTA;
