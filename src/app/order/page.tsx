import HeaderComponent from "@/components/HeaderComponent";
import Link from "next/link";
import { FC } from "react";

import products from "../products/products.json";

interface Product {
  img: string;
  title: string;
  price: string;
  protein: string;
  carbs: string;
  fiber: string;
  v_m: string;
  tag: string;
}

const Events: FC = () => {
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
        <div className="">
          <div
            className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white shadow-lg rounded-lg"
            style={{
              boxShadow: `0px 216px 60px 0px rgba(0, 0, 0, 0%),
              0px 138px 55px 0px rgba(0, 0, 0, 1%),
              0px 78px 47px 0px rgba(0, 0, 0, 5%),
              0px 35px 35px 0px rgba(0, 0, 0, 9%),
              0px 9px 19px 0px rgba(0, 0, 0, 10%)`,
              borderRadius: `20px`,
              border: "1px solid #ccc",
            }}
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-eestec">
              Order here
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
              You can order our products via our{" "}
              <Link
                className="text-eestec font-bold underline"
                href={"https://www.instagram.com/green_leaff_lab/"}
              >
                Instagram
              </Link>{" "}
              or{" "}
              <Link
                className="text-eestec font-bold underline"
                href={"https://www.instagram.com/green_leaff_lab/"}
              >
                Facebook
              </Link>
              . Direct Message us for a fast response, or you can fill out the
              form below to place your order.
            </p>
            <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
              You pay upon receipt of the order itself by <span className="font-bold">cash</span> when it is
              delivered to the address itself. You will be contacted. 
            </p>
            <form action="#" className="space-y-8">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-eestec">
              Fill the form
            </h2>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 "
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your phone number
                </label>
                <input
                  type="number"
                  id="number"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="07X XXX XXX"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Address for Delivery
                </label>
                <input
                  type="text"
                  id="subject"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 "
                  placeholder=" ul Todor Changov 32 / 5"
                  required
                />
              </div>
                <div>
                <label
                  htmlFor="product"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Select Products & add Quantity
                </label>
                <div className="justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                  {products.map((product: Product, i: number) => (
                  <div key={i} className="flex items-center mb-2 gap-4 justify-center">
                  <div className="flex items-center mb-2 sm:mb-0 justify-center">
                    <input
                    type="checkbox"
                    id={`product${i + 1}`}
                    value={product.title}
                    className="mr-2"
                    />
                    <label
                    htmlFor={`product${i + 1}`}
                    className="text-sm font-medium text-black"
                    >
                    {product.title}
                    </label>
                  </div>
                  <input
                    type="number"
                    id={`quantity${i + 1}`}
                    className="ml-0 sm:ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block p-1 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 w-20 sm:w-20"
                    placeholder="Quantity"
                    min="1"
                  />
                  </div>
                  ))}
                  </div>
                </div>
                </div>
                <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Additional message
                </label>
                <textarea
                  id="message"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="justify-center text-center">
                <button
                  type="submit"
                  className="link-blog py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 justify-center text-black"
                >
                  Send order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
