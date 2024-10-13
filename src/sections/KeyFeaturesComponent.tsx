import FeatureComponent from "../components/FeatureComponent";
import Img from "@/images/logos_icons/students.svg"
import Img2 from "@/images/logos_icons/delivery.svg" 
import Img3 from "@/images/logos_icons/leaf_plant.svg"

const KeyFeaturesComponent = () => {
  return (
    <div className="md:flex grid gap-16 justify-center self-center mt-8 mb-8">
      <FeatureComponent
        img={Img}
        heading={"+"}
        id={600}
        subheading={"customers"}
      />
       <FeatureComponent
        img={Img2}
        heading={"+"}
        id={120}
        subheading={"Deliveries"}
      />
      <FeatureComponent
        img={Img3}
        heading={"+"}
        id={9}
        subheading={"Plants"}
      />
    </div>
  );
};
export default KeyFeaturesComponent;
