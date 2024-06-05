import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsappIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HAIR STATION",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <WhatsAppIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
