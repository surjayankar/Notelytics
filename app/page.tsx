
import Image from "next/image";
import HeroSection from "./components/landing/HeroSection";
import FeatureSection from "./components/landing/FeatureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection/>
      <FeatureSection/>
    </div>
  );
}
