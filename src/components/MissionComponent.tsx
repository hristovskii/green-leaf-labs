import Image from "next/image";

interface MissionProps {
  img: string;
  heading: string;
  text: string;
}

const MissionComponent = ({ img, heading, text }: MissionProps) => {
  return (
    <div className="md:m-4 p-6 flex py-[5rem] m-4 p-1 block md:flex justify-self-start grid justify-items-center md:my-16">
      <Image
        src={img}
        width={100}
        height={100}
        alt="Join Us Image"
        className="p-4 md:me-4"
      />
      <div className="font-eestec me-4">
        <h3 className="text-4xl text-white font-bold my-2">{heading}</h3>
        <p className="text-white text-justify md:text-md text-md sm:w-96 w-full">
          {text}
        </p>
      </div>
    </div>
  );
};
export default MissionComponent;
