import Image from "next/image";
import React from "react";

const Asset = ({
  amount,
  symbol,
  logo,
}: {
  amount: string;
  symbol: string;
  logo?: any;
}) => {
  return (
    <div className='flex space-x-3 items-center'>
      {logo ? (
        <div className='bg-green-700 w-[40px] h-[40px] text-4xl font-bold text-white flex items-center justify-center rounded-full'>
          $
        </div>
      ) : (
        <Image width={40} height={40} src={"/btc.webp"} alt='btc' />
      )}
      <div className='flex items-center space-x-2 '>
        <p className='text-xl lg:text-2xl'>{symbol}</p>
        <p className='text-xl lg:text-2xl'>{amount}</p>
      </div>
    </div>
  );
};

export default Asset;
