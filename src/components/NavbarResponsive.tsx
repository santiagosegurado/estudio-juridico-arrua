"use client";
import { linksArr } from "@/arrays";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void;
}

const NavbarResponsive = ({ openMenu, setOpenMenu }: NavbarProps) => {
  const [links, setlinks] = useState(linksArr);

  return (
    <div
      className={`fixed top-0 ${
        openMenu ? "left-0" : "left-[100vw]"
      } w-full h-full bg-white z-10 xl:hidden flex flex-col gap-24 p-8 shadow-md transition-all duration-500`}
    >
      <div className="w-[40px]">
        <img
          src="/close.svg"
          alt="Close Estudio Arrua"
          className="w-full h-full"
          onClick={() => setOpenMenu(false)}
        />
      </div>
      <div className="flex flex-col items-center gap-16">
        <nav className="flex flex-col gap-9 my-auto flex-wrap">
          {links.map((link, index) => (
            <div
              className="flex flex-row items-center gap-3 group"
              key={index}
              onClick={() =>
                setlinks(
                  links.map((l) => {
                    return { ...l, active: link.href === l.href };
                  })
                )
              }
            >
              <img
                src={`/${link.active ? "active" : "dot"}.svg`}
                alt="Active Arrua"
                className={`${
                  link.active ? "opacity-100" : "opacity-60"
                } group-hover:opacity-100 transition-all`}
              />
              <a
                href={link.href}
                className={`${
                  link.active ? "opacity-100" : "opacity-60"
                } group-hover:opacity-100 transition-all text-xl`}
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        <span className="py-[12px] px-[20px] border border-[#001025] cursor-pointer font-[600] text-sm">
          HACER CONSULTA
        </span>
      </div>
    </div>
  );
};

export default NavbarResponsive;
