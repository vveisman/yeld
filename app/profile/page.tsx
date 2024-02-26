// "use client";

import { baseUrl } from "@/config";
import axios from "axios";
import Link from "next/link";

const getUser = async (email: string) => {
  try {
    const res = await axios.post(`${baseUrl}/api/get/user`, {
      email,
    });
    console.log("sucess", res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

const user: any = {};

export default async function Home() {
  return (
    <main className='flex min-h-screen relative  flex-col items-start justify-start p-10'>
      <h4 className='text-xl font-bold self-start'>My Profile</h4>
      <section className='mt-10 flex flex-col h-[60vh] justify-around'>
        <div className='flex items-center space-x-5'>
          <label htmlFor='name'>Name:</label>
          <p className='text-3xl'>Nelson Craviero</p>
        </div>
        <div className='flex items-center space-x-5'>
          <label htmlFor='email'>Email:</label>
          <p className='text-3xl'>nelsoncraviero@gmail.com</p>
        </div>
        <div className='flex items-center space-x-5'>
          <label htmlFor='address'>Status:</label>

          <p className='text-3xl'>Not Verified</p>
        </div>

        <div className='flex flex-col space-y-5 justify-center items-center'>
          <p className='w-max '>Click to verify</p>
          <button className='active:scale-90 lg:-top-2 w-[100px] hover:bg-opacity-70 duration-200  bg-[#283618] text-gray-50 py-2 font-bold rounded-md'>
            Verify
          </button>
        </div>
        <Link href={"/change"} className='self-center'>
          <p className='text-[#33323eff] text-xs self-center underline'>
            Change Password?
          </p>
        </Link>
      </section>
    </main>
  );
}
