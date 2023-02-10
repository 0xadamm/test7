import React from "react";
import { Model } from "./Model";
import ProductImage from "./ProductImage";

const ProductCard = () => {
  return (
    <div className=" w-96  bg-slate-400 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="img_container">
        <Model />
      </div>
      <div className="product_info p-5 rounded-xl">
        <h5 className="text-2xl font-bold">Product Name</h5>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
