import FeatureComponent from "../components/FeatureComponent";

const KeyFeaturesComponent = () => {
  return (
    <div className="md:flex grid gap-16 justify-center self-center mt-8 mb-8">
      <FeatureComponent
        img={"/images/logos_icons/students.svg"}
        heading={"+"}
        id={600}
        subheading={"customers"}
      />
       <FeatureComponent
        img={"/images/logos_icons/delivery.svg"}
        heading={"+"}
        id={120}
        subheading={"Deliveries"}
      />
      <FeatureComponent
        img={"/images/logos_icons/leaf_plant.svg"}
        heading={"+"}
        id={9}
        subheading={"Plants"}
      />
    </div>
  );
};
export default KeyFeaturesComponent;
