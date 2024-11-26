"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import Img from "@/images/logos_icons/leaf_transparent_white.svg";

import SocialMediaComponent from "./SocialMediaComponent";

const FooterComponent = () => {
  return (
    <div className="md:flex xl:gap-80 gap-20 justify-center bg-eestec p-4">
      <nav className="flex md:justify-between items-center justify-center">
        <div className="grid grid-cols-2 justify-center items-center gap-8 ">
          <SocialMediaComponent
            mediaLink={"https://www.instagram.com/green_leaff_lab/"}
            icon={FaInstagram}
            text={"Instagram"}
            size={"6rem"}
          />
          <SocialMediaComponent
            mediaLink={""}
            icon={FaSquareFacebook}
            text={"Facebook"}
            size={"6rem"}
          />
        </div>
      </nav>
      <article className="grid justify-items-center text-center m-3 my-5">
        <Image
          src={Img}
          alt="Feature Image"
          width={150}
          height={100}
          className=" m-2"
        />
        <div>
          <h1 className="text-white center text-3xl font-serif">
            Green Leaf labs
          </h1>
        </div>
      </article>
    </div>
  );
};
export default FooterComponent;
