import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// import { Tabs } from "@/components/Tabs";
import Footer from "@/components/Footer/Footer";
import CustomCursor from '@/components/CustomCursor';
import Sidebar from "@/components/SideBar/page";
import BuyTicketButton from "@/components/BuyTicketButton/BuyTicketButton";
import Loader from "@/components/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genero'25: The Sacred Legacy",
  description: "Abes Engneering college genero'25 Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-black`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden `}
      >
       
       
        <div>
        <Navbar/>
        <Sidebar/>
        <CustomCursor/> 
        <BuyTicketButton/>
        
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
