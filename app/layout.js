import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Zaid Khan — Software Developer",
  description: "I build fast, modern and mobile-friendly websites & Mobile Applications that help local businesses grow online, attract more customers and increase trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-(--bgcolor) text-(--text) overflow-x-hidden">

        {/* Ambient background glow */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.04)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}