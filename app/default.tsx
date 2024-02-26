"use client";
import Image from "next/image";
import { CSSProperties, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader() {
  // let [loading, setLoading] = useState(true);

  return (
    <main className='h-[93vh]  flex items-center justify-center'>
      <div className='w-[30vw] flex  flex-col items-center justify-center h-[13vh]'>
        <Image
          color='white'
          width={200}
          height={150}
          className='object-scale-down mb-3 '
          src={"/coin.svg"}
          alt='coinsbit'
        />
        <PuffLoader
          loading={!false}
          cssOverride={override}
          size={40}
          color='#f38f27ff'
        />
      </div>
    </main>
  );
}
