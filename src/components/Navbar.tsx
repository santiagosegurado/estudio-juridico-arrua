/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const Navbar = () => {
  const [links, setlinks] = useState([
    { href: "/", label: "PRINCIPAL", active: true },
    {
      href: "/campos-de-experiencia",
      label: "CAMPO DE EXPERIENCIA",
      active: false,
    },
    { href: "/nuestro-equipo", label: "NUESTRO EQUIPO", active: false },
    { href: "/#", label: "CAMPO DE EXPERIENCIA", active: false },
    { href: "/contacto", label: "CONTACTO", active: false },
  ]);

  return (
    <nav className="flex flex-row gap-9 my-auto flex-wrap">
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
            href="#"
            className={`${
              link.active ? "opacity-100" : "opacity-60"
            } group-hover:opacity-100 transition-all`}
          >
            {link.label}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
