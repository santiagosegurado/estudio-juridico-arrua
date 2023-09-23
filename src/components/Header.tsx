/* eslint-disable @next/next/no-img-element */

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="hidden xl:flex flex-row">
      <div className="p-[44px] border-r-2  border-[#BF9874]">
        <img src="/logo.svg" alt="Estudio Arrua" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-8 p-4 border-b-2 border-[#BF9874]">
          <div className="flex flex-row gap-3">
            <img src="/phone.svg" alt="Estudio Arrua" />
            <span>+ 383 (21) 23 43984</span>
          </div>
          <div className="flex flex-row gap-3">
            <img src="/clock.svg" alt="Estudio Arrua" />
            <span>LUNES a VIERNES de 8:00 a.m. a 5:00 p.m.</span>
          </div>
        </div>
        <div className="flex flex-row h-full items-center justify-between mx-5">
          <Navbar />
          <span className="py-[12px] px-[20px] border border-[#001025] cursor-pointer font-[600] text-sm">
            HACER CONSULTA
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
