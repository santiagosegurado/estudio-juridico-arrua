/* eslint-disable @next/next/no-img-element */

const Features = () => {
  return (
    <section className="bg-[#EAF1FA] flex items-center gap-6 justify-around py-11">
      <div className="lg:w-full flex flex-col lg:flex-row gap-10 lg:justify-around">
        <div className="flex flex-row gap-6 items-center">
          <div className="w-[100px]">
            <img
              className="w-full h-full"
              src="/confianza.svg"
              alt="Confianza Arrua Estudio"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#808080] text-[14px]">30 Años de</span>
            <span className="text-[20px] font-normal text-[#001025] uppercase">
              Compromiso
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="w-[100px]">
            <img
              className="w-full h-full"
              src="/etica.svg"
              alt="Confianza Arrua Estudio"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#808080] text-[14px]">30 Años de</span>
            <span className="text-[20px] font-normal text-[#001025] uppercase">
              Ética Profesional
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="w-[100px]">
            <img
              className="w-full h-full"
              src="/experiencia.svg"
              alt="Confianza Arrua Estudio"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#808080] text-[14px]">30 Años de</span>
            <span className="text-[20px] font-normal text-[#001025] uppercase">
              Experiencia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
