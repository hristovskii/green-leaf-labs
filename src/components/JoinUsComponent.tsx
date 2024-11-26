import Image from "next/image";

interface JoinUsProps {
  img: string;
  heading: string;
  text: string;
}

const JoinUsComponent = ({ img, heading, text }: JoinUsProps) => {
  return (
    <div className="m-4 p-1 block md:flex justify-self-start justify-items-center md:my-16">
      <Image
        src={img}
        width={120}
        height={100}
        alt="Join Us Image"
        className="p-4 mx-4"
      />
      <div className="font-eestec">
        <h3 className="text-xl font-bold md:text-4xl text-eestec">{heading}</h3>
        <p className="text-black text-justify md:text-2xl sm:w-[37rem] w-[20.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
};
export default JoinUsComponent;
