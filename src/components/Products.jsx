import React, { useEffect } from "react";
import { getproducts } from "../store/reducers/ProductReducer";

const Products = () => {
  const {} = useEffect;

  return (
    <div className=" bg-zinc-800 h-screen w-full p-10 flex">
      <h1 className="text-2xl font-bold text-white flex-col">Product List</h1>
      <ul className="flex flex-col">
        <li>Hello </li>
      </ul>
    </div>
  );
};

export default Products;
