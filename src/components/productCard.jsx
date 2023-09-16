import React from "react";
import '../components/header/header.css'
const ProductCard=({ product })=> {
  return (
    <div className="h-[459px] max-w-[370px] border rounded-lg shadow-md px-[20px] cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="w-[310px] h-[322px]"
      />
      <h3 className="text-[12px] font-bold font-work text-black">
        {product.title}
      </h3>
      <p className="text-[8px] font-work font-normal text-[#161615] h-[49px] overflow-hidden">
        {product.description}
      </p>
      <div className="text-black text-[14px] font-work font-bold p-2">
        ${product.price}
      </div>
    </div>
  );
}

export default ProductCard;
