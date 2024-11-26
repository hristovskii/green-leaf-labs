"use client";
import {useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import protuctsData from "./products.json";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [productList, setProductList] = useState(protuctsData);

  const filteredProducts = productList.filter(
    (plant) =>
      (selectedTag === "all" || plant.tag === selectedTag) &&
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderComponent />
      <div
        className="w-full p-10"
        style={{
          backgroundColor: `white`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="my-[1.72rem] font-eestec text-center text-eestec lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          our products
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 my-4">
          <input
            type="text"
            placeholder="Search products..."
            className="p-3 border border-gray-300 rounded-lg bg-eestec text-white placeholder-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
                selectedTag === "all" ? "bg-green-700" : ""
              }`}
              onClick={() => setSelectedTag("all")}
            >
              All
            </button>
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
                selectedTag === "in_stock" ? "bg-green-700" : ""
              }`}
              onClick={() => setSelectedTag("in_stock")}
            >
              in stock
            </button>
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
                selectedTag === "out_of_stock" ? "bg-green-700" : ""
              }`}
              onClick={() => setSelectedTag("out_of_stock")}
            >
              Out of stock
            </button>
          </div>
        </div>

        <div className="lg:flex gap-20 justify-center my-[4rem] flex-wrap">
          {filteredProducts.map((plant, index) => (
            <div key={index} className="product-card">
              <SkeletonComponent
                img={plant.img}
                title={plant.title}
                price={plant.price}
                v_m={plant.v_m}
                protein={plant.protein}
                fat={plant.fat}
                carbs={plant.carbs}
                sugars={plant.sugars}
                fiber={plant.fiber}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
