// ProductSlider.js

import React from "react";
import Slider from "react-slick";
import ProductCard from "../components/productCard";
import '../components/header/header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductSlider({ products }) {
  const isMobile = window.innerWidth < 768;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex w-full">
      <Slider {...settings} className="flex w-full flex-row flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="max-w-[300px] max-h-[320px]">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
