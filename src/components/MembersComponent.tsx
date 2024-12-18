import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  img: string;
  heading: string;
  subheading: string;
}
const MembersComponent = ({ img, heading, subheading }: FeatureProps) => {
  return (
    <article className="grid justify-items-center text-center md:m-8 m-4 zoom">
      <Image
        src={img}
        alt="Feature Image"
        height={200}
        width={200}
        style={{ borderRadius: "50%", border: "5px solid #e52a30" }}
        className="mt-8 mb-8 rounded-full "
      />
      <div>
        <h3 className="text-2xl text-eestec font-bold">{heading}</h3>
        <h6 className="text-black text-xl">{subheading}</h6>
      </div>
    </article>
  );
};
export default MembersComponent;
