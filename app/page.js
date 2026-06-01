"use client";
import HeroSection from "./Components/HeroSection";
import WhoIAmSection from "./Components/WhoIAmSection";
import ServicesSection from "./Components/ServicesSection";
import AboutSection from "./Components/AboutSection";
import TechnologiesSection from "./Components/TechnologiesSection";
import BlogSection from "./Components/BlogSection";
import DemoSection from "./Components/DemoSection";
import ContactSection from "./Components/ContactSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhoIAmSection />
      <ServicesSection />
      <TechnologiesSection />
      <BlogSection />
      <DemoSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
