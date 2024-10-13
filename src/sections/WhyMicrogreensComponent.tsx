"use client";

import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const WhyMicrogreensComponent = () => {
  return (
    <div className="lg:flex grid justify-center gap-20">
      <div className="m-2 justify-items-center">
        <SubheadingComponent
          text="Why micro greens?"
          img={"/images/logos_icons/red_line.svg"}
        />
        <JoinUsComponent
          img={"/images/logos_icons/healthy.svg"}
          heading={"Boost Your Health with Every Bite!"}
          text={
            "Our microgreens deliver up to 40 times more nutrients than mature veggies—supercharge your meals today!"
          }
        />
        <JoinUsComponent
          img={"/images/logos_icons/fresh_delivery.svg"}
          heading={"Farm-Fresh Delivered to Your Door"}
          text={
            "Enjoy the freshest, nutrient-rich microgreens grown locally and delivered straight to you."
          }
        />
        <JoinUsComponent
          img={"/images/logos_icons/weight_goals.svg"}
          heading={"Achieve Your Weight Goals Deliciously"}
          text={
            "Low-calorie and flavorful, our microgreens help you stay on track with your health goals."
          }
        />
      </div>
      <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
        <Image
          src={"/images/microgreens.jpg"}
          alt="Feature Image"
          width={400}
          height={400}
          style={{ border: "5px solid #1b5c04", borderRadius: "5%" }}
          className="w-72 md:w-auto zoom"
        />
      </div>
    </div>
  );
};
export default WhyMicrogreensComponent;
