import React from 'react';

const NavBar = () => {
    return (
        <div>
           <div className="navbar bg-[#eff6e6] xl:w-full md:w-[1020px] mx-auto">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About us</a></li>
                    <li tabIndex={0}>
                      <a className="justify-between">
                      EN
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                      </a>
                      <ul className="p-2">
                        <li><a>en 1</a></li>
                        <li><a>en 2</a></li>
                      </ul>
                    </li>
                    <li><a className="btn rounded-full w-[154px] h-[58px] text-[20px] font-500 bg-[#396C03] capitalize text-white border-none">Login</a></li>
                    <li>
                    <label tabIndex={0} className="btn btn-ghost btn-circle w-[60px] h-[60px] bg-[#396C03] mt-3">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[28px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item w-[26] h-[26] bg-[#FF8B00] text-white mt-[-5px] mr-[-10px] border-none font-700">2</span>
                      </div>
                      </label>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-[28.34px] font-700 text-[#396C03] meriendaBold xl:ml-16 lg:ml-0">FoodTime</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px] font-500 text-[#3F3F3F] xl:gap-11 lg:gap-2">
                  <li><a>Home</a></li>
                  <li><a>Blog</a></li>
                  <li><a>About us</a></li>
                  <li tabIndex={0}>
                    <a>
                      EN
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                      <li><a>En 1</a></li>
                      <li><a>En 2</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn rounded-full w-[154px] h-[58px] text-[20px] font-500 bg-[#396C03] capitalize text-white border-none xl:mr-[23px] lg:mr-[0px]">Login</a>                 
                <label tabIndex={0} className="btn btn-ghost btn-circle w-[60px] h-[60px] bg-[#396C03] xl:mr-20 lg:mr-0">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[28px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item w-[26] h-[26] bg-[#FF8B00] text-white mt-[-5px] mr-[-10px] border-none font-700 py-[10px]">2</span>
                </div>
                </label>
               </div>
            </div>
            <hr className='bg-[#3F3F3F]' />
        </div>
    );
};

export default NavBar;
