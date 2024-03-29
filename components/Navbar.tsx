"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Inter, Open_Sans, Abhaya_Libre } from "next/font/google";
import { useAppSelector } from "@/redux/hooks";

const inter = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Navbar = () => {
  const router = usePathname();
  // const { email } = useAppSelector((state) => state.Asset);
  const email = useSearchParams().get("email");

  // Check if the user is not on the localhost:3000 route
  const isProfileVisible = router != "/";

  return (
    <div className='w-full h-[7vh] bg-[#283618] justify-between px-[10px] fixed top-0  flex items-center border-b-[0.5px] border-slate-500 z-10'>
      <Link
        href={"/home"}
        className='w-[100px] flex items-center justify-center   h-[50px]'
      >
        <h4 style={inter.style} className='text-white text-3xl font-semibold'>
          Yeld
        </h4>
      </Link>
      {isProfileVisible && ( // Conditionally render the profile link
        <Link href={`/profile?email=${email}`} className='mr-5 '>
          <li
            style={inter.style}
            className='text-white hover:text-orange-600 duration-100 list-none  lg:text-xl'
          >
            My profile
          </li>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
