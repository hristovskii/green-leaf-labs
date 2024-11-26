"use client";
import { Key, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import protuctData from "./products.json";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [productList, setProductList] = useState(protuctData);

  const filteredProducts = productList.filter(
    (product) =>
      (selectedTag === "all" || product.tag === selectedTag) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <SkeletonComponent
                img={product.img}
                title={product.title}
                price={product.price}
                v_m={product.v_m}
                protein={product.protein}
                fat={product.fat}
                carbs={product.carbs}
                sugars={product.sugars}
                fiber={product.fiber}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
