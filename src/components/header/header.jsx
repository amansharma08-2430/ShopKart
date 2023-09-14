import './header.css'
import Truck from '../../assets/TruckImg.png';
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Twitter from "../../assets/Twitter.png";
import BoyImage from "../../assets/BoyImage.png"
import { useEffect } from 'react';
const Header=()=>{
    useEffect(()=>{

    },[])
    const navbar = [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      {
        name: "Our Products",
        id: "product",
        child: [
          { name: "Product 1", id: "p1" },
          { name: "Product 2", id: "p2" },
          { name: "Product 3", id: "p3" },
          { name: "Product 4", id: "p4" },
        ],
      },
      { name: "Contact Us", id: "contact" },
    ];

    return (
      <div className="relative max-w-[1440] bg-black">
        <div className="flex justify-between px-[90px] pt-[13px] pb-[11px] bg-[#1A1A1A]">
          <div className="flex gap-[15px]">
            <img
              src={Truck}
              className="h-[12.9px] w-[21px] mt-[3px]"
              alt="Deleivery"
            />
            <div className="text-[#626262] text-[12px] font-normal font-poppins">
              Free Delivery
            </div>
            <div className="w-[1px] h-[19px] bg-[#626262]"></div>
            <div className="text-[#626262] text-[12px] font-normal font-poppins">
              Return Policy
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="text-[#626262] text-[10px] font-normal font-poppins">
              Login
            </div>
            <div className="flex gap-[14px]">
              <div className="text-[#626262] text-[10px] font-normal font-poppins">
                Follow US
              </div>
              <div className="flex gap-[11.5px] mt-[3px]">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-[8px] h-[7.6px]"
                />
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="w-[8px] h-[7.6px]"
                />
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="w-[8px] h-[7.6px]"
                />
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[8px] h-[7.6px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[90px] border-b border-white">
          <div className="text-[#FFF] text-[40px] font-normal font-poppins">
            ShopKart
          </div>
          <div className="flex gap-[10px]">
            <div className="font-work text-[14px] text-[#FFF] mt-[29px] font-bold">
              WISHLIST (0)
            </div>
            <div className="font-work text-[14px] text-[#FFF] mt-[29px] font-bold">
              BAG (0)
            </div>
          </div>
        </div>
        <div className="flex gap-[106px] px-[90px] py-[14px]">
          {navbar.map((data) => {
            return (
              <div className="text-[#FFF] font-work text-[18px] font-bold uppercase">
                {data.name}
              </div>
            );
          })}
        </div>
        <div className="pt-[137px] flex-col">
          <div className="font-syne text-[135px] leading-[76%] text-[#FFF] pl-[115px]">
            Fresh
          </div>
          <div className="font-syne text-[135px] leading-[76%] text-opacity-50 text-[#FFF] pl-[400px]">
            2022
          </div>
          <div className="font-syne text-[135px] leading-[76%] text-[#FFF] pl-[187px]">
            Look
          </div>
        </div>
        <img
          src={BoyImage}
          className="absolute left-[899px] top-[92px] w-[320px] h-[692px]"
        />
        {/* <div className="absolute max-w-[933px] h-[354px] top-[303px] left-[447px] bg-[#F07E15] w-full"></div> */}
        <div className="flex pt-[57px]">
          <div className="max-w-[976px] border-t border-white w-full">
            <div className="flex pb-[70px] pt-[30px] gap-[5px] cursor-pointer">
              <div className="pl-[115px] text-[#FFF] font-work text-[18px] font-normal">
                See more
              </div>
              <div className="mt-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M7.66415 9.29595C7.6683 8.24949 7.66814 7.20275 7.66799 6.15636C7.6679 5.51676 7.6678 4.87729 7.66869 4.23809L7.6692 3.87526L7.41263 4.13182L1.85487 9.68941L1.96094 9.79548L1.85487 9.68941C1.64005 9.90423 1.23453 9.90397 1.01651 9.68596L0.313922 8.98339C0.313911 8.98338 0.3139 8.98337 0.313889 8.98336C0.096074 8.76537 0.0957675 8.36005 0.310613 8.14504C0.310624 8.14502 0.310635 8.14501 0.310646 8.145L5.86837 2.58744L6.1244 2.33142L5.76232 2.33138C5.24959 2.33132 4.70196 2.33179 4.13402 2.33227C3.02993 2.33322 1.84907 2.33423 0.698618 2.33157C0.699919 1.9827 0.700896 1.6612 0.701871 1.34019C0.70303 0.95888 0.704186 0.57825 0.705882 0.15322C2.80036 0.159447 4.88104 0.156514 7.09597 0.153392C7.98874 0.152133 8.90331 0.150844 9.8494 0.150112C9.84225 1.9923 9.844 3.81936 9.84584 5.73654C9.84693 6.88257 9.84806 8.06081 9.84734 9.29372C9.56213 9.2945 9.25322 9.29442 8.93494 9.29435C8.51668 9.29424 8.08224 9.29414 7.66415 9.29595Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Header;