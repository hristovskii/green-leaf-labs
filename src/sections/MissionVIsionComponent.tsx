import React from "react";
import Image from "next/image";

import MissionComponent from "../components/MissionComponent";

const MissionVisionComponent = () => {
  return (
    <div className="lg:flex grid justify-center bg-eestec">
      <MissionComponent
        img={"/images/logos_icons/flag_icon.svg"}
        heading={"Our Mission"}
        text={
          "To bring fresh, nutrient-dense microgreens to every plate, empowering people to live healthier lives through sustainable, locally-grown superfoods."
        }
      />
      <MissionComponent
        img={"/images/logos_icons/bulb.svg"}
        heading={"Our Vision"}
        text={
          "To become a leading provider of organic microgreens, inspiring a global shift towards healthier eating habits and sustainable food practices for a brighter future."
        }
      />
    </div>
  );
};
export default MissionVisionComponent;
