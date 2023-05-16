import React from 'react';
import img from "../../asete/image1.png";
import banner_lift from "../../asete/Pngtree.png";
import banner_right from "../../asete/Pngtree2.png";
import banner_right2 from "../../asete/NicePng.png";
import { BsSearch } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="xl:w-full md:w-[1020px] mx-auto h-[756px] bg-[#eff6e6] ">
        <div className="xl:flex lg:flex md:flex block justify-between items-center xl:px-[100px] md:px-[0px] absolute mt-[164px]">
          <div className='xl:pl-0 pl-4'>
            <h2 className="xl:text-[65px] md:text-[40px]  xl:leading-[85px] md:leading-[50px] font-bold text-[#396C03] meriendaBold">
              Order food online <br /> from your favourite <br /> local
              restaurants.
            </h2>
            <p className="text-[24px] font-semibold leading-8 my-7 text-[#676767]">
              Freshly made food delivered to your door.
            </p>
            {/*   */}

            <div>
              <div className="flex flex-row border-[2px]  border-[#396C03] bg-white rounded-[120px] xl:w-[714px] md:w-[454px] xl:h-[69px] md:h-[59px]">
                <input
                  className=" text-gray-600 rounded-[40px] w-[440px]  focus:outline-none p-2 relative pl-[70px]"
                  placeholder="Enter your location"
                />

                <button
                  className="flex justify-center items-center w-[210px] rounded-[100px] text-white bg-[#396C03] hover:bg-black duration-300 xl:ml-[135px] md:ml-[0px] xl:h-[65px] text-[22px]"
                  type="button"
                >
                  <span className="mr-6">
                    <BsSearch />
                  </span>
                  <p>Search</p>
                </button>
              </div>
              <div className="w-[49px] h-[49px] rounded-full bg-[#FF8B00] absolute xl:mt-[-60px] md:mt-[-55px] ml-[10px]"></div>
            </div>

            {/*   */}
          </div>
          <div>
            <div className="xl:h-[528px] xl:w-[533px] md:h-[428px] md:w-[433px] relative">
              <img className="w-full h-full absolute z-10" src={img} alt="" />
            </div>
            <div className="xl:w-[245px] xl:h-[118px] md:w-[145px] md:h-[88px] banner_top absolute top-0 ml-[170px] xl:mt-[-70px] md:mt-[-50px] z-10 rounded-[8px] text-center">
              <h2 className="text-[#FF8B00] xl:text-[48px] md:text-[28px] font-bold flex justify-center items-center">
                <span className="mr-2">
                  <BsFillPatchCheckFill />
                </span>{" "}
                <p>200k+</p>
              </h2>
              <p className="xl:text-[21px] md:text-[16px] font-semibold">People Delivered</p>
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
            className="xl:w-[200px] xl:h-[200px] lg:w-[130px] lg:h-[130px] relative top-0 right-[5px] mt-[150px]"
            src={banner_right2}
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