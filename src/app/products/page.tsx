"use client";
import { Key, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const productList = [
    {
      "img": "/images/plants/plant1.jpg",
      "title": "Lorem Ipsum1",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://lht.eestec.mk/",
      "tag": "in_stock"
    },
    {
      "img": "/images/plants/plant2.jpg",
      "title": "Lorem Ipsum2",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://academy.eestec.mk/",
      "tag": "out_of_stock"
    },
    {
      "img": "/images/plants/plant3.jpg",
      "title": "Lorem Ipsum3",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/ssa_skopje/",
      "tag": "in_stock"
    },
    {
      "img": "/images/plants/plant4.jpg",
      "title": "Lorem Ipsum4",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/eestech_challenge_lc_skopje/",
      "tag": "out_of_stock"
    },
    {
      "img": "/images/plants/plant5.jpg",
      "title": "Lorem Ipsum5",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://calu.eestec.mk/",
      "tag": "out_of_stock"
    },
    {
      "img": "/images/plants/plant6.jpg",
      "title": "Lorem Ipsum6",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/b2b_skopje/",
      "tag": "in_stock"
    },
    {
      "img": "/images/plants/plant7.jpg",
      "title": "Lorem Ipsum7",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/b2b_skopje/",
      "tag": "in_stock"
    },
    {
      "img": "/images/plants/plant8.jpg",
      "title": "Lorem Ipsum8",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/b2b_skopje/",
      "tag": "out_of_stock"
    },
    {
      "img": "/images/plants/plant9.jpg",
      "title": "Lorem Ipsum9",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/b2b_skopje/",
      "tag": "out_of_stock"
    },
    {
      "img": "/images/plants/plant10.jpg",
      "title": "Lorem Ipsum10",
      "price": "300 den. / plate",
      "protein": "2.20 gr.",
      "fat": "0.12 gr.",
      "carbs": "4.33 gr.",
      "sugars": "0.5 gr.",
      "fiber": "3.7 gr.",
      "v_m": "C, D, E, B",
      "link": "https://www.instagram.com/b2b_skopje/",
      "tag": "in_stock"
    }
  ]

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
                link={product.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
