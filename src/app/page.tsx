/* eslint-disable @next/next/no-img-element */
import About from "@/components/About";
import Banner from "@/components/Banner";
import ExpertiseFileds from "@/components/ExpertiseFileds";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeaderResposive from "@/components/HeaderResposive";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden relative">
      <Header/>
      <HeaderResposive/>
      <Banner/>
      <Features/>
      <ExpertiseFileds/>
      <About/>
      <a href="#home">
        <div className="fixed bottom-3 right-3 cursor-pointer z-50 bg-[#BF9874] rounded-sm">
          <img src="/arrow-top.svg" alt="" />
        </div>
      </a>
    </main>
  )
}
