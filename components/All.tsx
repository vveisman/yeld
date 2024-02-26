import React from "react";
import Symbols from "./Symbols";
import { fetchPrice } from "@/lib/actions";

const All = async () => {
  const data = await fetchPrice();
  console.log(data);

  if (data) {
    return (
      <div className='space-y-4'>
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
      </div>
    );
  } else {
    return <p>Loading... Wait a little and Reresh</p>;
  }
};

export default All;
