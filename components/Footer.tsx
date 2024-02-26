import React from "react";
import { Inter, Open_Sans, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
const inter = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className='h-[40vh] relative flex items-center justify-center w-full bg-[#283618]'>
      <div className='flex absolute right-7 top-5 space-x-5'>
        <h4 style={inter.style} className='text-white text-3xl font-semibold'>
          Yeld
        </h4>
        <div className='relative w-[40px] h-[40px]'>
          <Image src={"/y.svg"} className='rounded-full' fill alt='yeld' />
        </div>
      </div>
      <div className='text-center text-white  w-max text-[16px]'>
        Copyright © 2023 .
      </div>
    </div>
  );
};

export default Footer;
