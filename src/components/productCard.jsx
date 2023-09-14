import React from "react";

const ProductCard=({ product })=> {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 mx-auto"
      />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-700">{product.description}</p>
      <div className="mt-2 text-blue-500">{product.price}</div>
    </div>
  );
}

export default ProductCard;
