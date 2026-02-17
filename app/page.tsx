
import Image from "next/image";
import HeroSection from "./components/landing/HeroSection";
import FeatureSection from "./components/landing/FeatureSection";
import { Integration } from "svix/dist/api/integration";
import IntegrationsSection from "./components/landing/IntegrationsSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import { Stats } from "fs";
import StatsSection from "./components/landing/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection/>
      <FeatureSection/>
      <IntegrationsSection/>
      <HowItWorksSection/>
      <StatsSection/>
    </div>
  );
}
