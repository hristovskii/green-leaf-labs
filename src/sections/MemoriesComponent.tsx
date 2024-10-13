import Image from "next/image";

import Img1 from "@/images/memories/photo1.jpg"
import Img2 from "@/images/memories/photo2.jpg"
import Img3 from "@/images/memories/photo3.jpg"
import Img4 from "@/images/memories/photo4.jpg"
import Img5 from "@/images/memories/photo5.jpg"
import Img6 from "@/images/memories/photo6.jpg"

import Line from "@/images/logos_icons/red_line_right.svg"

import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const MemoriesComponent = () => {
    return(
        <section className="my-10 md:mx-28 mx-12">
            
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <SubheadingComponent text={"Some of the products"} img={Line}/>
        </div>
        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={Img1} text={"test"}/>
        <MemoriesImagesComponent img={Img2} text={"test"}/>
        <MemoriesImagesComponent img={Img3} text={"test"}/>
        </div>

        <div className="lg:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent img={Img4} text={"test"}/>
        <MemoriesImagesComponent img={Img5} text={"test"}/>
        <MemoriesImagesComponent img={Img6} text={"test"}/>
        </div>
    </section>
    );
}
export default MemoriesComponent;