"use client";

import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";

import SubheadingComponent from "@/components/SubheadingComponent";

const JoinUsSectionComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `url(/images/testing/bg.png)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "67rem",
      }}
    >
      <div className="m-2 grid justify-items-center">
        <div className="grid justify-self-start">
          <SubheadingComponent
            text="Why micro greens?"
            img={"/images/logos_icons/red_line.svg"}
          />
        </div>
        <div className="grid justify-self-start">
          <JoinUsComponent
            img={"/images/logos_icons/healthy.svg"}
            heading={"Boost Your Health with Every Bite!"}
            text={
              "Our microgreens deliver up to 40 times more nutrients than mature veggies—supercharge your meals today!"
            }
          />
        </div>
        <div className="grid justify-self-center">
          <JoinUsComponent
            img={"/images/logos_icons/fresh_delivery.svg"}
            heading={"Farm-Fresh Delivered to Your Door"}
            text={
              "Enjoy the freshest, nutrient-rich microgreens grown locally and delivered straight to you."
            }
          />
        </div>
        <div className="grid justify-self-end" style={{ justifySelf: "right" }}>
          <JoinUsComponent
            img={"/images/logos_icons/weight_goals.svg"}
            heading={"Achieve Your Weight Goals Deliciously"}
            text={
              "Low-calorie and flavorful, our microgreens help you stay on track with your health goals."
            }
          />
        </div>
      </div>
    </div>
  );
};
export default JoinUsSectionComponent;
