import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventProps {
  // img: StaticImageData;
  img: string;
  title: string;
  price: string;
  v_m: string;
  protein: string;
  carbs: string;
  fiber: string;
  taste: string;
}

const SkeletonComponent = ({
  img,
  title,
  price,
  v_m,
  protein,
  carbs,
  fiber,
  taste,
}: EventProps) => {
  return (
    <div className="skeleton-card desktop-event">
      <div style={{ flex: "1 1 100%", background: "#eee" }}>
        <Image
          src={img}
          alt={"Event"}
          width={1080}
          height={1080}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="text-event">
        <div>
          <h2 className="font-bold text-2xl" style={{ margin: "0 0 px 0" }}>
            {title}
          </h2>
          <div className="md:text-left">

            <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
              <span className="font-bold">Protein: </span>
              {protein}
            </p>
            <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
              <span className="font-bold">Carbs: </span>
              {carbs}
            </p>
            <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
              <span className="font-bold">Fiber: </span>
              {fiber}
            </p>
            <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
              <span className="font-bold">Vitamins & Minerals: </span> <br />
              {v_m}
            </p>
            <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
              <span className="font-bold">Taste: </span> <br />
              {taste}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonComponent;
