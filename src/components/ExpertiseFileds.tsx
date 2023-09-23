/* eslint-disable @next/next/no-img-element */
import { camposLeft, camposRight } from "@/arrays";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const ExpertiseFileds = () => {
  return (
    <section className="flex flex-col gap-20 py-20" id="campos-de-experiencia">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-7 items-center">
          <div>
            <img src="/separator-fields.svg" alt="Separator Arrua Estudio" />
          </div>
          <div>
            <h3
              className={`${marcellus.className} text-center text-[40px] lg:text-[60px] uppercase`}
            >
              Campos de Experiencia
            </h3>
          </div>
          <div>
            <img
              className="rotate-180"
              src="/separator-fields.svg"
              alt="Separator Arrua Estudio"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-[#BF9874] text-[16px] lg:text-[20px] uppercase tracking-[4px] text-center">
            Comprometidos con la justicia
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-9">
        <div className="flex flex-col gap-9 w-[90%] md:w-[40%]">
          {camposRight.map((item, index) => (
            <div className="flex flex-col gap-6 w-full cursor-pointer" key={index}>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h4 className="text-[18px]">{item.title}</h4>
                  <span className="text-[#829BBC]">
                    {item.experts} Expertos
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <span className="uppercase tracking-[2px] text-[14px] hidden md:block">
                    Contacta
                  </span>
                  <img src="/phone.svg" alt="Telefono Estudio Arrua" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#BF9874]"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-9 w-[90%] md:w-[40%]">
          {camposLeft.map((item, index) => (
            <div className="flex flex-col gap-6 w-full cursor-pointer" key={index}>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h4 className="text-[18px]">{item.title}</h4>
                  <span className="text-[#829BBC]">
                    {item.experts} Expertos
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center cursor-pointer">
                  <span className="uppercase tracking-[2px] text-[14px] hidden md:block">
                    Contacta
                  </span>
                  <img src="/phone.svg" alt="Telefono Estudio Arrua" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#BF9874]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseFileds;
