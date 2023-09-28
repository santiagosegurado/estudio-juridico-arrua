/* eslint-disable @next/next/no-img-element */
import { Marcellus } from "next/font/google";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (prop: boolean) => void;
}

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const ModalCalculator = ({ openModal, setOpenModal }: ModalProps) => {
  return (
    <div
      className={`${
        openModal ? "fixed" : "hidden"
      } left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 transition-all`}
    >
      <div className="max-h-full w-full max-w-[90%] md:max-w-[600px] overflow-y-auto rounded-md bg-white">
        <div className="w-full p-8 flex flex-col gap-7">
          <div
            className="cursor-pointer w-[30px] self-end"
            onClick={() => setOpenModal(false)}
          >
            <img
              className="w-full h-full"
              src="/close.svg"
              alt="Close Estudio Arrua"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className={`${marcellus.className} text-[#BF9874] text-xl`}>
              INDEMNIZACIÓN POR ACCIDENTE DE TRABAJO O ENFERMEDAD
            </h3>
            <span className="font-thin text-slate-600">
              ¿Cuanto cobrar por mi accidente de trabajo?
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <form className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-2">
                <div className="w-[30px]">
                  <img
                    className="w-full h-full"
                    src="/person.svg"
                    alt="Persona Estudio Arrua"
                  />
                </div>
                <input
                  type="number"
                  className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light"
                  placeholder="Edad"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-[30px]">
                  <img
                    className="w-full h-full"
                    src="/percent.svg"
                    alt="Persona Estudio Arrua"
                  />
                </div>
                <input
                  type="number"
                  className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light"
                  placeholder="Porcentaje de Incapacidad"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-[30px]">
                  <img
                    className="w-full h-full"
                    src="/user-dollar.svg"
                    alt="Persona Estudio Arrua"
                  />
                </div>
                <input
                  type="number"
                  className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light"
                  placeholder="Ingreso Base Mensual"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-[30px]">
                  <img
                    className="w-full h-full"
                    src="/building.svg"
                    alt="Persona Estudio Arrua"
                  />
                </div>
                <select
                  name=""
                  id=""
                  className="focus:outline-0 border-b border-[#BF9874] w-full pb-1 font-light"
                >
                  <option value="">En el trabajo</option>
                  <option value="">In itinere</option>
                </select>
              </div>
              <span className="py-[8px] px-[16px] bg-[#BF9874]  cursor-pointer font-[600] text-[15px] text-white uppercase text-center">
                calcular
              </span>
            </form>
            <div className="flex flex-col gap-3">
              <span className="text-gray-500 font-light">El monto es de:</span>
              <div className="border border-[#BF9874] w-full rounded-sm flex justify-center py-2">
                <span className="text-[#BF9874] font-bold text-center text-[20px]">
                  $ 825.001,71
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCalculator;
