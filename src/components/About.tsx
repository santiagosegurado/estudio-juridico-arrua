/* eslint-disable @next/next/no-img-element */
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const About = () => {
  return (
    <section className="flex flex-col bg-[#001025] py-14 md:py-28 px-4 md:px-28 text-white gap-16 items-center md:items-start" id="nuestro-equipo">
      <div className="flex flex-col">
        <span className="text-[#BF9874] uppercase tracking-[4px] text-[18px]">
          Tu justicia, nuestra misión.
        </span>
        <h3
          className={`${marcellus.className} text-[40px] lg:text-[60px] uppercase`}
        >
          Nuestro Equipo
        </h3>
      </div>
      <div className="flex flex-row gap-7 flex-wrap">
        <div className="flex flex-col gap-3">
          <div className="w-[250px] lg:w-[300px]">
            <img className="w-full h-full" src="/abogada.jpg" alt="" />
          </div>
          <div className="flex-col">
            <h3 className="text-[18px]">Valentina Arrua</h3>
            <span className="text-[#829BBC] font-light">Abogada Penalista</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
