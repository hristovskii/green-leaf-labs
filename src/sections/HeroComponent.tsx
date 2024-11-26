"use client";
import Typewriter from "typewriter-effect";
import Img from "@/images/slika_rastenija.jpg";

const HeroComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `linear-gradient(0deg, #1b5c04 0%, rgba(38, 38, 38, 0.1) 70%), url(${Img.src})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "50rem",
      }}
    >
      <div className="container ">
        <h3
          className="font-eestec text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black"
          style={{ paddingTop: "37rem;" }}
        >
          Small Greens, Big Nutrition - <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Power Up Your Plate Today!")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </h3>
      </div>
    </div>
  );
};
export default HeroComponent;
