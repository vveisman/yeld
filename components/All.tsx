import React from "react";
import Symbols from "./Symbols";
import { fetchPrice } from "@/lib/actions";

const All = async ({ data }: { data: any }) => {
  console.log(data);

  if (!data.code) {
    return (
      <div className='space-y-4 h-[350px] scrollbar-hide overflow-y-scroll'>
        <Symbols
          symbol='BTC/USDT'
          logo={!true}
          amount={Number(data[`BTC/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='XAU/USD'
          logo={"XAU"}
          amount={Number(data[`XAU/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='ETH/USDT'
          logo={"ETH"}
          amount={Number(data[`ETH/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='MATIC/USDT'
          logo={"MATIC"}
          amount={Number(data[`MATIC/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='XAG/USD'
          logo={"XAG"}
          amount={Number(data[`XAG/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='XRP/USD'
          logo={"XRP"}
          amount={Number(data[`XRP/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='BNB/USD'
          logo={"BNB"}
          amount={Number(data[`BNB/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='SOL/USD'
          logo={"SOL"}
          amount={Number(data[`SOL/USD`].price).toFixed(2)}
        />
        {/* <Symbols
          symbol='DOGE/USD'
          logo={"DOGE"}
          amount={Number(data[`DOGE/USD`].price).toFixed(2)}
        />
        <Symbols
          symbol='AVAX/USD'
          logo={"AVAX"}
          amount={Number(data[`AVAX/USD`].price).toFixed(2)}
        /> */}
      </div>
    );
  } else {
    return <p>Loading... Wait a little and Reresh</p>;
  }
};

export default All;
