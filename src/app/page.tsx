/* eslint-disable @next/next/no-img-element */
import About from "@/components/About";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import ExpertiseFileds from "@/components/ExpertiseFileds";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderResposive from "@/components/HeaderResposive";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden relative">
      <Header/>
      <HeaderResposive/>
      <Banner/>
      <ExpertiseFileds/>
      <CTA/>
      <Contact/>
      <Footer/>
      <a href="#home">
        <div className="fixed bottom-5 right-5 cursor-pointer z-50 bg-[#BF9874] rounded-sm">
          <img src="/arrow-top.svg" alt="Estudio Arrua" />
        </div>
      </a>
      <a href="https://api.whatsapp.com/send?phone=541168761237&text=Hola%20buenos%20dias,%20me%20gustar%C3%ADa%20agendar%20una%20cita">
        <div className="fixed bottom-20 right-5 cursor-pointer z-50 rounded-sm">
          <img src="/whatsapp.svg" alt="Estudio Arrua" />
        </div>
      </a>
    </main>
  )
}
