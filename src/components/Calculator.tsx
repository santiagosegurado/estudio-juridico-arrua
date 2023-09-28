/* eslint-disable @next/next/no-img-element */
"use client";
import { Marcellus } from "next/font/google";
import { useState } from "react";
import ModalCalculator from "./ModalCalculator";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const Calculator = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      className="flex flex-col gap-20 py-14 px-5 md:py-28 md:px-20"
      id="calculadora"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-7 items-center">
          <div>
            <img src="/separator-fields.svg" alt="Separator Arrua Estudio" />
          </div>
          <div>
            <h3
              className={`${marcellus.className} text-center text-[40px] lg:text-[60px] uppercase`}
            >
              CALCULAR INDEMNIZACIÓN
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
        <div className="flex justify-center ">
          <span className="text-[#BF9874] text-[16px] lg:text-[20px] uppercase tracking-[4px] text-center">
            Calculamos tu justa compensación
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center gap-3 cursor-pointer">
          <div className="w-[300px]">
            <img
              className="w-full h-full rounded-sm"
              src="/calcu.jpg"
              alt="Calculadora Arrua Estudio"
            />
          </div>
          <h3 className="font-light text-[20px]">Accidente de trabajo</h3>
          <span
            className="py-[8px] px-[16px] bg-[#BF9874]  cursor-pointer font-[600] text-[12px] text-white uppercase"
            onClick={() => setOpenModal(true)}
          >
            calcular
          </span>
        </div>
      </div>
      <ModalCalculator openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

export default Calculator;
