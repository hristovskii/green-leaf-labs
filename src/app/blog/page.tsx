"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
import BlogSkeletonComponent from "@/components/BlogSkeletonComponent";
import Link from "next/link";

const events = () => {
  return (
    <div>
      <HeaderComponent />
      <div
        className="w-full p-10"
        style={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="my-[1.72rem] font-eestec text-center text-eestec lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          Blog coming soon!
        </h3>

        <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className="md:visible">
            <BlogSkeletonComponent />
          </div>
        </div>

        <div className="justify-center text-center">
          <Link href={"/"} className="link-blog text-white p-1">
            GO BACK
          </Link>
        </div>
      </div>
      <div className="md:flex justify-center">
        <article className="grid justify-items-center text-center lg:my-6">
          <Image
            src={"/images/logos_icons/lightning.svg"}
            alt="Feature Image"
            width={40}
            height={40}
            className="my-[1.25rem]"
          />
        </article>
      </div>
    </div>
  );
};
export default events;
