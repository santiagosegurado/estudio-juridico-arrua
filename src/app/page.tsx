import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeaderResposive from "@/components/HeaderResposive";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header/>
      <HeaderResposive/>
      <Banner/>
    </main>
  )
}
