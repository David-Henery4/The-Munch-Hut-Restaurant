import "../globals.css";
import { poppins, pompiere } from "@/fonts/fonts";
import metadataInfo from "@/metadata/metadataInfo";
import { Navbar, Footer } from "@/components/shared";

export const metadata = metadataInfo

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${pompiere.variable}`}>
      <body className="bg-black text-white font-poppins">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
