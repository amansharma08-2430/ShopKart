import { useState, useEffect } from "react";
import axios from "axios";
import ProductSlider from '../components/productSlider'
const Body = () => {
  const [products, setProducts] = useState([]);
  const [activeTag,setActiveTag]=useState(0);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [activeTag]);
  return (
    <div className="w-full pl-[20px] md:pl-[83px]">
      <div className="pt-[70px]">
        <div className="font-syne text-[20px] md:text-[50px]">New products</div>
        <div className="max-w-[648px] w-full h-[1px] bg-[#000]"></div>
        <div className="flex  flex-col md:flex-row gap-[30px]">
          <div className="flex flex-row md:flex-col gap-[23px] pt-[10px]">
            <div
              className={`font-work text-[12px] md:text-[18px] ${
                activeTag === 0 ? "font-bold" : "font-normal"
              } cursor-pointer`}
              onClick={() => setActiveTag(0)}
            >
              Apparel
            </div>
            <div
              className={`font-work text-[12px] md:text-[18px] ${
                activeTag === 1 ? "font-bold" : "font-normal"
              } cursor-pointer`}
              onClick={() => setActiveTag(1)}
            >
              Accessories
            </div>
            <div
              className={`font-work text-[12px] md:text-[18px] ${
                activeTag === 2 ? "font-bold" : "font-normal"
              } cursor-pointer`}
              onClick={() => setActiveTag(2)}
            >
              Best sellers
            </div>
            <div
              className={`font-work text-[12px] md:text-[18px] ${
                activeTag === 3 ? "font-bold" : "font-normal"
              } cursor-pointer`}
              onClick={() => setActiveTag(3)}
            >
              50% off
            </div>
          </div>
          <div className="flex w-[80%] pt-[20px]">
            <ProductSlider products={products} />
          </div>
        </div>
        {/* <div className="flex max-w-[1000px] w-full">
          <ProductSlider products={products} />
        </div> */}
      </div>
    </div>
  );
};
export default Body;
