/* eslint-disable @next/next/no-img-element */

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="hidden xl:flex flex-row" >
      <div className="p-[44px] border-r-2  border-[#BF9874]">
        <img src="/logo.svg" alt="Estudio Arrua" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-8 p-4 border-b-2 border-[#BF9874]">
          <div className="flex flex-row gap-3">
            <div className="w-[20px] h-[20px]">
              <img
                className="h-full w-full"
                src="/phone.svg"
                alt="Estudio Arrua"
              />
            </div>
            <span className="text-slate-500 font-light">1168761237</span>
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
        </div>
        <div className="flex flex-row h-full items-center justify-between mx-5">
          <Navbar />
          <a href="#contacto" className="py-[12px] px-[20px] border border-[#001025] cursor-pointer font-[600] text-sm">
            HACER CONSULTA
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
