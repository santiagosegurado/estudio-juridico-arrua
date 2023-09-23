import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import ExpertiseFileds from "@/components/ExpertiseFileds";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeaderResposive from "@/components/HeaderResposive";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Header/>
      <HeaderResposive/>
      <Banner/>
      <Features/>
      <ExpertiseFileds/>
      {/* <CTA/> */}
    </main>
  )
}
