import { Header, AboutUs, MenuInfoSection, WeeklySpecials } from "@/components/home";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob">
      <Header/>
      <AboutUs/>
      <MenuInfoSection/>
      <WeeklySpecials/>
    </main>
  );
}
