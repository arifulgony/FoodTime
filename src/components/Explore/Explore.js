import React from 'react';
import './Explore.css';
import img from '../../asete/dalivary.png';
import img2 from '../../asete/image2.png'
import {BsArrowRight  } from "react-icons/bs";

const Explore = () => {
    return (
        <div>
            <div className="flex w-full">
                <div className="flex justify-items-center align-middle items-center h-[600px]">
                    <div className="xl:pl-[70px] pl-[26px]">
                    <h1 className='xl:w-[527px] w-[350px] xl:text-[50px] text-[32px] font-[700] xl:leading-[65px] leading-[45px] meriendaBold text-[#396C03]'>Explore your <br /> favourite city’s food.</h1>
                    <p className='w-[567px] text-[18px] font-400 mt-3'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc <br /> nibh tristique. Non ligula tristique ut ut libero sit convallis <br /> maecenas. At egestas auctor porta mattis.</p>
                    <a className="mt-[14px] btn rounded-full w-[231px] h-[67px] px-[60px] py-[15px] text-[20px] font-500 bg-[#396C03] capitalize text-white border-none mr-[23px]">Explore  <BsArrowRight className='ml-[15px] text-white font-700' /> </a>
                    </div>
                </div>
                <div className="h-[600px] align-middle">
                    <div className=" h-[500px] xl:w-[751px] w-[351px] ">
                       <div className="image">
                            <marquee behavior="" direction="right" className=" xl:h-[500px] h-[100%]  w-full ">
                                <img className='xl:w-[657px] w-[300px] xl:h-[338px]  h-[200px] xl:mt-24 mt-[150px]' src={img} alt="img" />
                            </marquee>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;