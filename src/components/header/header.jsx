import "./header.css";
import Truck from "../../assets/TruckImg.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Twitter from "../../assets/Twitter.png";
import BoyImage from "../../assets/BoyImage.png";
import Star from "../../assets/Star 3.png";
import { useState } from "react";
const Header = () => {
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
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <div className="relative w-full bg-black">
      <div className="flex justify-between px-[30px] md:px-[90px] pt-[13px] pb-[11px] bg-[#1A1A1A]">
        <div className="flex gap-[15px]">
          <img
            src={Truck}
            className="h-[12.9px] w-[21px] mt-[3px]"
            alt="Deleivery"
          />
          <div className="text-[#626262] text-[10px] md:text-[12px] font-normal font-poppins cursor-pointer">
            Free Delivery
          </div>
          <div className="w-[1px] h-[19px] bg-[#626262]"></div>
          <div className="text-[#626262] text-[10px] md:text-[12px] font-normal font-poppins cursor-pointer">
            Return Policy
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="text-[#626262] text-[8px] md:text-[10px] font-normal font-poppins cursor-pointer">
            Login
          </div>
          <div className="flex gap-[14px]">
            <div className="text-[#626262] text-[8px] md:text-[10px] font-normal font-poppins cursor-pointer">
              Follow US
            </div>
            <div className="flex gap-[11.5px] mt-[3px]">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[8px] h-[7.6px] cursor-pointer"
              />
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-[8px] h-[7.6px] cursor-pointer"
              />
              <img
                src={Twitter}
                alt="Twitter"
                className="w-[8px] h-[7.6px] cursor-pointer"
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[8px] h-[7.6px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[30px] md:px-[90px] border-b border-white">
        <div className="text-[#FFF] text-[30px] md:text-[40px] font-normal font-poppins cursor-pointer">
          ShopKart
        </div>
        <div className="gap-[10px] hidden md:flex">
          <div className="font-work text-[14px] text-[#FFF] mt-[29px] font-bold cursor-pointer">
            WISHLIST (0)
          </div>
          <div className="font-work text-[14px] text-[#FFF] mt-[29px] font-bold cursor-pointer">
            BAG (0)
          </div>
        </div>
      </div>
      {/* <div className=" gap-[106px] px-[90px] py-[14px] hidden md:flex">
        {navbar.map((data) => {
          return (
            <div className="text-[#FFF] font-work text-[14px] lg:text-[18px] font-bold uppercase">
              {data.name}
            </div>
          );
        })}
      </div> */}
      <nav className="bg-black p-4 hidden md:flex">
        <ul className="flex gap-[106px]">
          {navbar.map((item) => (
            <li key={item.id} className="relative group">
              {item.child ? (
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="text-[#FFF] font-work text-[14px] lg:text-[18px] font-bold uppercase"
                  >
                    {item.name}
                  </button>
                  {openDropdown === item.id && (
                    <div className="absolute left-0 mt-2">
                      {item.child.map((subItem) => (
                        <a
                          key={subItem.id}
                          href={`#${subItem.id}`}
                          className="block text-[#FFF] font-work text-[14px] lg:text-[18px]  uppercase"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={`#${item.id}`}
                  className="p-2 text-[#FFF] font-work text-[14px] lg:text-[18px] font-bold uppercase"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative pt-[137px] flex-col z-20">
        <div className="font-syne text-[60px] md:text-[100px] lg:text-[130px] leading-[76%] text-[#FFF]  pl-[20px] lg:pl-[115px]">
          Fresh
        </div>
        <div className="font-syne text-[60px] md:text-[100px] lg:text-[130px] leading-[76%] text-opacity-50 text-[#FFF] pl-[150px] lg:pl-[330px]">
          2022
        </div>
        <div className="font-syne text-[60px] md:text-[100px] lg:text-[130px] leading-[76%] text-[#FFF] pl-[50px] lg:pl-[187px]">
          Look
        </div>
      </div>
      <img
        src={Star}
        alt="Star Image"
        className="absolute z-5 right-0 md:right-[3%] top-[18%] md:top-[14%]"
      />
      <img
        src={BoyImage}
        alt="BoyImage"
        className="absolute z-10 right-0 md:right-[5%] h-[80%] top-[20%]"
      />
      <div className="absolute top-[40%] w-[950px] h-[300px] bg-[#F07E15] z-1 right-0"></div>
      {/* <div className="absolute max-w-[933px] h-[354px] top-[303px] left-[447px] bg-[#F07E15] w-full"></div> */}
      <div className="flex pt-[57px]">
        <div className="max-w-[300px] md:max-w-[976px] border-t border-white w-full">
          <div className="relative flex pb-[70px] pt-[30px] gap-[5px] cursor-pointer z-30">
            <div className="pl-[115px] text-[#FFF] font-work text-[18px] font-normal underline">
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
};
export default Header;
