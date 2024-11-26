import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

import Img1 from "@/images/logos_icons/red_line.svg";
import Img2 from "@/images/logos_icons/healthy.svg";
import Img3 from "@/images/logos_icons/fresh_delivery.svg";
import Img4 from "@/images/logos_icons/weight_goals.svg";
import Img5 from "@/images/microgreens.jpg";

const WhyMicrogreensComponent = () => {
  return (
    <div className="lg:flex grid justify-center gap-20">
      <div className="m-2 justify-items-center">
        <SubheadingComponent text="Why micro greens?" img={Img1} />
        <JoinUsComponent
          img={Img2}
          heading={"Boost Your Health with Every Bite!"}
          text={
            "Our microgreens deliver up to 40 times more nutrients than mature veggies—supercharge your meals today!"
          }
        />
        <JoinUsComponent
          img={Img3}
          heading={"Farm-Fresh Delivered to Your Door"}
          text={
            "Enjoy the freshest, nutrient-rich microgreens grown locally and delivered straight to you."
          }
        />
        <JoinUsComponent
          img={Img4}
          heading={"Achieve Your Weight Goals Deliciously"}
          text={
            "Low-calorie and flavorful, our microgreens help you stay on track with your health goals."
          }
        />
      </div>
      <div className="md:w-1/2 p-4 flex justify-center items-center order-1 md:order-2">
        <Image
          src={Img5}
          alt="Feature Image"
          width={600}
          height={600}
          style={{ border: "5px solid #1b5c04", borderRadius: "5%" }}
          className="zoom"
        />
      </div>
    </div>
  );
};
export default WhyMicrogreensComponent;
