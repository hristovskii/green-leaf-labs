import FooterComponent from "@/components/FooterComponent";
import KeyFeaturesComponent from "@/sections/KeyFeaturesComponent";
import MemoriesComponent from "@/sections/MemoriesComponent";
import MissionVisionComponent from "@/sections/MissionVIsionComponent";
import HeroComponent from "@/sections/HeroComponent";
import HeaderComponent from "@/components/HeaderComponent";
import WhyMicrogreensComponent from "@/sections/WhyMicrogreensComponent";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <MissionVisionComponent />
      <KeyFeaturesComponent />
      <WhyMicrogreensComponent />
      <MemoriesComponent />
      <FooterComponent />
    </div>
  );
}
