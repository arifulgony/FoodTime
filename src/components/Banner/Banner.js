import React from 'react';
import img from "../../asete/image1.png";
import banner_lift from "../../asete/Pngtree.png";
import banner_right from "../../asete/Pngtree2.png";
import { BsSearch } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="w-[1440px] mx-auto h-[856px] bg-[#eff6e6] ">
        <div className="flex justify-between items-center px-[100px] absolute mt-[100px]">
          <div>
            <h2 className="text-[65px] leading-[85px] font-bold text-[#396C03] meriendaBold">
              Order food online <br /> from your favourite <br /> local
              restaurants.
            </h2>
            <p className="text-[24px] font-semibold leading-8 my-7 text-[#676767]">
              Freshly made food delivered to your door.
            </p>
            {/*   */}

            <div>
              <div className="flex flex-row border-[2px] border-[#396C03] rounded-[120px] w-[714px] h-[69px]">
                <input
                  className=" text-gray-600 rounded-[40px] md:w-[340px] focus:outline-none p-2 relative pl-[70px]"
                  placeholder="Enter your location"
                />

                <button
                  className="flex justify-center items-center p-2 w-1/3 rounded-[120px] text-white bg-[#396C03] hover:bg-purple-600 duration-300 ml-[135px] h-[69px] text-[22px]"
                  type="button"
                >
                  <span className="mr-6">
                    <BsSearch />
                  </span>
                  <p>Search</p>
                </button>
              </div>
              <div className="w-[49px] h-[49px] rounded-full bg-[#FF8B00] absolute mt-[-60px] ml-[10px]"></div>
            </div>

            {/*   */}
          </div>
          <div>
            <div className="h-[528px] w-[533px] relative">
              <img className="w-full h-full absolute z-10" src={img} alt="" />
            </div>
            <div className="w-[245px] h-[118px] banner_top absolute top-0 ml-[170px] mt-[-70px] z-10 rounded-[8px] text-center">
              <h2 className="text-[#FF8B00] text-[48px] font-bold flex justify-center items-center">
                <span className="mr-2">
                  <BsFillPatchCheckFill />
                </span>{" "}
                <p>200k+</p>
              </h2>
              <p className="text-[21px] font-semibold">People Delivered</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <img
            className="w-[288px] h-[288px] relative top-0 mt-[-40px]"
            src={banner_lift}
            alt=""
          />
          <img
            className="w-[288px] h-[288px] relative top-0 right-[42px] mt-[10px]"
            src={banner_right}
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;