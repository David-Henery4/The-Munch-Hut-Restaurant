import { BodyText } from "@/components/shared";
import { LogoIcon } from "../../../public/assets";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <section className="col-start-2 col-end-12 h-[75svh] grid place-items-center gap-4 text-center">
        <div className="self-end flex flex-col justify-center items-center">
          <LogoIcon />
          <h1 className="text-4xl font-pompiere lgMob:text-6xl lgLap:text-7xl">
            Woops...
          </h1>
        </div>
        <div className="self-start grid gap-4">
          <BodyText>This seems to be the wrong page!</BodyText>
          <Link href="/" className="text-red text-2xl hover:text-redHover hover:scale-105">Return to Home</Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
