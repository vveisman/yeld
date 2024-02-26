"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import SelectComponent from "./Select";

const Invest = () => {
  const { asset, amount } = useAppSelector((state) => state.Asset);

  return (
    <div className='lg:ml-5 pt-5 lg:pt-0'>
      <h4 className='text-[32px] mb-4'>INVEST</h4>
      <div className='flex space-y-5 flex-col'>
        <div className='flex space-x-5'>
          <p className='text-xl'>Asset:</p>
          <p className='text-xl'>{asset}</p>
        </div>
        <div className='flex items-center space-x-5'>
          <p className='text-xl'>Amount:</p>
          <SelectComponent
            items={["$2000", "$4000", "$8000"]}
            placeholder={"$200"}
            value={amount}
          />
        </div>
        <div className='flex space-x-5'>
          <p className='text-xl'>Yield:</p>
          <p className='text-xl'>{`$${amount * 20}`}</p>
        </div>
      </div>
      {/* <p className='my-5'>{`Pay $${amount} in usdt to the address below and your account will be credited in a few minutes. Make sure to use the BEP 20 Network`}</p>
      <p>1982juhss9a8y02929waiaha9a8</p> */}
    </div>
  );
};

export default Invest;
