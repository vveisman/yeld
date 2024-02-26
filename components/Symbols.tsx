"use client";
import { setAsset } from "@/redux/features/assetSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import React, { use } from "react";

const Symbols = ({
  amount,
  symbol,
  logo,
}: {
  amount: string;
  symbol: string;
  logo?: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className='grid grid-cols-[1.5fr,1fr,1fr]'>
      <div className='flex space-x-2 items-center'>
        {logo == "ETH" ? (
          <Image
            width={40}
            className='rounded-full'
            height={40}
            src={"/eth.webp"}
            alt='btc'
          />
        ) : logo == "XAG" ? (
          <Image
            width={40}
            className='rounded-full'
            height={40}
            src={"/silver.svg"}
            alt='btc'
          />
        ) : logo == "MATIC" ? (
          <Image width={40} height={40} src={"/matic.webp"} alt='btc' />
        ) : logo == "XAU" ? (
          <Image
            width={40}
            className='rounded-full'
            height={40}
            src={"/gold.svg"}
            alt='btc'
          />
        ) : logo ? (
          <div className='bg-green-600 w-[40px] h-[40px] text-4xl font-bold text-white flex items-center justify-center rounded-full'>
            $
          </div>
        ) : (
          <Image width={40} height={40} src={"/btc.webp"} alt='btc' />
        )}
        <p className='text-xl lg:text-2xl'>{symbol}</p>
      </div>
      <p className='text-xl w-[100px] flex justify-center  lg:text-2xl'>
        {amount}
      </p>
      <button
        onClick={() => {
          dispatch(setAsset(symbol));
        }}
        className='w-[100px] bg-[#606c38] text-gray-50 py-2 font-bold rounded-md'
      >
        Invest
      </button>
    </div>
  );
};

export default Symbols;
