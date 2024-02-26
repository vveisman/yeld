"use client";
import Image from "next/image";
import { CSSProperties } from "react";
import PuffLoader from "react-spinners/PuffLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader() {
  // let [loading, setLoading] = useState(true);

  return (
    <main className='h-full flex items-center justify-center'>
      <div className='w-[30vw] flex space-y-5 flex-col items-center justify-center h-[13vh]'>
        <Image
          color='white'
          width={350}
          height={200}
          className='object-scale-down '
          src={"/coin.svg"}
          alt='coinsbit'
        />
        <PuffLoader
          loading={!false}
          cssOverride={override}
          size={60}
          color='#f38f27ff'
        />
      </div>
    </main>
  );
}
