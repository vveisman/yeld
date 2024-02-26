// "use client";

import { getUser } from "@/lib/actions";
import Link from "next/link";

export default async function Home({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const user = await getUser(searchParams.email);
  return (
    <main className='flex min-h-screen relative  flex-col items-start justify-start p-10'>
      <h4 className='text-xl font-bold self-start'>My Profile</h4>
      <section className='mt-10 flex flex-col h-[60vh] justify-around'>
        <div className='flex items-center space-x-5'>
          <label htmlFor='name'>Name:</label>
          <p className='text-3xl'>{user.name}</p>
        </div>
        <div className='flex items-center space-x-5'>
          <label htmlFor='email'>Email:</label>
          <p className='text-3xl'>{user.email}</p>
        </div>
        <div className='flex items-center space-x-5'>
          <label htmlFor='address'>Status:</label>

          <p className='text-3xl'>Not Verified</p>
        </div>

        <div className='flex flex-col space-y-5 justify-center items-center'>
          <p className='w-max '>Click to verify</p>
          <Link href={"/verify"} className=''>
            <button className='active:scale-90 lg:-top-2 w-[100px] hover:bg-opacity-70 duration-200  bg-[#283618] text-gray-50 py-2 font-bold rounded-md'>
              Verify
            </button>
          </Link>
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
