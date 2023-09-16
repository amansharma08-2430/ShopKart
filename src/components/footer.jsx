import './footer.css';
const Footer=()=>{
    return (
      <div className="w-full backgroun-img mt-[50px]">
        <div className="md:flex md:flex-row flex-col md:pl-[103px] pt-[80px] gap-[100px] justify-center">
          <div className="flex flex-col gap-[20px] w-full">
            <div className="font-syne text-[26px] font-bold text-[#ffffff80] text-center md:text-normal">
              Newslleter
            </div>
            <div className="flex flex-col w-full">
              <div className="font-work text-[18px] font-normal text-[#ffffff80] w-full text-center">
                Get news about articles and updates in your inbox.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-full justify-center items-center">
            <div className="border-b border-white w-[80%]">
              <input
                type="text"
                class="font-work border-none outline-none text-[18px] focus:ring-0 bg-transparent border-b text-[#ffffff80] uppercase"
                placeholder="Name"
              ></input>
            </div>
            <div className="border-b border-white w-[80%]">
              <input
                type="text"
                class="font-work border-none outline-none focus:ring-0 bg-transparent border-b text-[#ffffff80] uppercase text-[18px]"
                placeholder="Email"
              ></input>
            </div>
            <div className="border-b border-white w-[80%]">
              <input
                type="text"
                class="font-work border-none outline-none text-[18px] focus:ring-0 bg-transparent border-b text-[#ffffff80] uppercase"
                placeholder="Message"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex pt-[38px] justify-center items-center md:items-start">
          <div className="flex flex-col">
            <div className="font-syne text-[30px] md:text-[60px] lg:text-[135px] font-extrabold leading-[76%] text-[#FFF]">
              GET IN
            </div>
            <div className="font-syne text-[30px] md:text-[60px] lg:text-[135px] font-extrabold leading-[76%] text-[#FFF]">
              TOUCH
            </div>
          </div>
          <div className="relative cursor-pointer hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="181"
              height="181"
              viewBox="0 0 181 181"
              fill="none"
            >
              <circle
                cx="90.5"
                cy="90.5"
                r="89.5"
                stroke="#F07E15"
                stroke-width="2"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-center font-work text-[#F07E15] text-[26px]">
              SEND
            </div>
          </div>
          <div className="md:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="49.4254"
                stroke="#F07E15"
                stroke-width="1.14917"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-center font-work text-[#F07E15] text-[26px]">
              SEND
            </div>
          </div>
        </div>
        <div className="w-full py-[15px] text-center bg-[#000] text-[#FFF] text-[12px] font-poppins font-normal mt-[10px]">
          Copyright 2022 All Right Reserved By SG
        </div>
      </div>
    );
}
export default Footer;