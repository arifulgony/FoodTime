import React from 'react';
import './Explore.css';
import img from '../../asete/dalivary.png';
import {BsArrowRight  } from "react-icons/bs";

const Explore = () => {
    return (
        <div>
            <div className="flex w-full">
                <div className="flex justify-items-center align-middle items-center h-[600px]">
                    <div className="px-12">
                    <h1 className='w-[527px] text-[50px] font-[700] leading-[65px]'>Explore your <br /> favourite city’s food.</h1>
                    <p className='w-[567px] text-[18px] font-400'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc <br /> nibh tristique. Non ligula tristique ut ut libero sit convallis <br /> maecenas. At egestas auctor porta mattis.</p>
                    <a className="mt-[14px] btn rounded-full w-[231px] h-[67px] px-[60px] py-[15px] text-[20px] font-500 bg-[#396C03] capitalize text-white border-none mr-[23px]">Explore  <BsArrowRight className='ml-[15px] text-white font-700' /> </a>
                    </div>
                </div>
                <div className="h-[600] flex justify-items-center align-middle items-center">
                    <div className=" h-[500px] w-[751px] bg-black image">
                        <img className='w-[656px] h-[437px]' src={img} alt="img" />
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Explore;