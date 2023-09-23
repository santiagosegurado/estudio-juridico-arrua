import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: ["400"],
  style: "normal",
  preload: false,
});

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://www.welcomeargentina.com/paseos/palacio_de_justicia/palacio-justicia-2.jpg)",
      }}
      className="h-[100vh] md:h-[calc(100vh-80px)] lg:h-[calc(100vh-150px)] w-full bg-cover relative"
    >
      <div className="absolute top-0 right-0 h-full w-full bg-[#0a1525e8] z-[0]"></div>
      <div className="text-white flex flex-col relative justify-center h-full pl-5 md:pl-20 xl:pl-40 gap-20">
        <div className="flex flex-col gap-3">
          <h3 className="text-[#BF9874] text-[15px] md:text-[23px] tracking-[4px]">
            ESTUDIO JURIDICO ARRUA
          </h3>
          <h1
            className={`${marcellus.className} text-[50px] md:text-[90px] leading-[60px] md:leading-[95px]`}
          >
            EXPERTOS EN JUSTICIA
          </h1>
          <span className="leading-[27px] opacity-70">
            Diam leo vitae tortor mauris faucibus odio nullam enim. At dolor
            <br className="md:block hidden" />
            pellentesque eget et purus. Purus mauris eget maecenas placerat
            <br className="md:block hidden" />
            vehicula tortor massa.
          </span>
        </div>
        <div>
          <span className="py-[12px] px-[20px] bg-[#BF9874]  cursor-pointer font-[600] text-sm">
            SOBRE NOSOTROS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
