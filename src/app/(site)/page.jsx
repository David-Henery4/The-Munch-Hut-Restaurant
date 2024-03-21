import {
  Header,
  AboutUs,
  MenuInfoSection,
  WeeklySpecials,
  SpecialOffers,
} from "@/components/home";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob">
      <Header />
      <AboutUs />
      <MenuInfoSection />
      <WeeklySpecials />
      <SpecialOffers />
    </main>
  );
}
