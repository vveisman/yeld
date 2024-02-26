"use client";
import { baseUrl } from "@/config";
import { setEmail } from "@/redux/features/assetSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.Asset);

  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 3000);
  // }, [router]);
  // let [loading, setLoading] = useState(true);

  const Login = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/api/login`, {
        email: email,
        password: password,
      });

      console.log(res?.data);
      alert(res?.data.message);
      setIsLoading(false);
      router.push(`/home?email=${email}`);
    } catch (error: any) {
      console.log(error.response.data);
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <main className='h-[93vh]  flex flex-col items-center justify-start '>
      <div className='w-[30vw] flex  flex-col items-center mt-[10vh] justify-center h-max'>
        <Image
          color='white'
          width={200}
          height={150}
          className='object-scale-down rounded-full animate-pulse mb-3 '
          src={"/yeld.jfif"}
          alt='coinsbit'
        />
        {/* <p className='text-[#33323eff] text-sm whitespace-nowrap self-center '>
          {"Earn yields on multiple assets (Crypto, Forex, Stocks)"}
        </p> */}
      </div>
      <div className='mt-[5vh] space-y-10 flex flex-col'>
        <input
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
          }}
          type='text'
          placeholder='email'
          className='border text-black border-gray-200 w-[40vw] md:w-[300px] px-2 py-1 outline-none rounded-sm'
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='text'
          placeholder='Password'
          className='border text-black border-gray-200 w-[40vw] md:w-[300px] px-2 py-1 outline-none rounded-sm'
        />

        <button
          onClick={Login}
          className='bg-[#33323eff] duration-100 w-max px-4 py-2 self-center rounded-md text-white text-sm hover:bg-gray-700 active:scale-95'
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <Link href={"/forgot"} className='self-center'>
          <p className='text-[#33323eff] text-xs self-center underline'>
            Forgot Password?
          </p>
        </Link>
      </div>
    </main>
  );
}
