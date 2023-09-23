/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import NavbarResponsive from "./NavbarResponsive";

const HeaderResposive = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full flex xl:hidden flex-row justify-between p-3 z-50 bg-slate-50">
      <div className="w-[40px] md:w-[45px]">
        <img
          className="w-full h-full"
          src="/logo.svg"
          alt="Estudio Juridico Arrua"
        />
      </div>
      <div className="w-[40px] md:w-[45px] cursor-pointer">
        <img
          className="w-full h-full"
          src="/menu.svg"
          alt="Menu Estudio Juridico Arrua"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      <NavbarResponsive openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default HeaderResposive;
