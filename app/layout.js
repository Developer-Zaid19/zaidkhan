import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZaidKhan - Software Developer",
  description: "I build fast, modern and mobile-friendly websites & Mobile Applications that help local businesses grow online, attract more customers and increase trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >      
        <div className="min-h-screen text-white bg-linear-to-t from-(--maincolor) to-(--bgcolor) py-[5vh] md:py-[10vh]">
          <div className='bg-linear-to-l text-(--text) from-(--bgfcolor) to-(--bgcolor) mx-auto min-h-[80vh] w-[95vw] rounded-4xl drope'><Navbar />
            {children} <Footer /></div></div>

      </body>
    </html>
  );
}
