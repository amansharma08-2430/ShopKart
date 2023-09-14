// ProductSlider.js

import React from "react";
import Slider from "react-slick";
import ProductCard from "../components/productCard";

function ProductSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="px-4">
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
}

export default ProductSlider;
