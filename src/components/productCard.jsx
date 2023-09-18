import React from "react";
import '../components/header/header.css'
const ProductCard=({ product })=> {
  return (
    <div className="relative h-[459px] max-w-[370px] border rounded-lg shadow-md px-[20px] cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="w-[310px] h-[322px]"
      />
      <div className="absolute right-0 bottom-[30%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect width="40" height="40" fill="#161615" />
          <path
            d="M28.9959 29.1648C28.9995 24.0427 28.9811 19.5589 29 15C23.8819 15.0036 19.3859 15.0186 14.8347 15.0041C14.8291 16.3618 14.8272 17.4011 14.8221 18.7218C17.5043 18.7288 20.315 18.7218 22.6435 18.7221L14.3068 27.0585C13.8958 27.4698 13.8981 28.2202 14.3117 28.6341L15.3657 29.688C15.7796 30.1019 16.5303 30.1043 16.9414 29.6932L25.278 21.3568C25.2744 23.9613 25.2817 26.5655 25.2703 29.17C26.5249 29.1631 27.8909 29.1692 28.9959 29.1648Z"
            fill="white"
          />
        </svg>
      </div>
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
