"use client";
import { baseUrl } from "@/config";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

import PuffLoader from "react-spinners/PuffLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const email = useSearchParams().get("email");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const Login = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/api/change-password`, {
        email: email,
        password: password,
        newpassword: confirmPassword,
      });

      console.log(res?.data);
      alert(res?.data.message);
      setIsLoading(false);
      router.push("/profile");
    } catch (error: any) {
      console.log(error.response.data);
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <main className='h-[93vh]  flex flex-col items-center justify-center '>
      <div className='mt-[5vh] space-y-10 flex flex-col'>
        <h4 className='text-[32px] self-center'>Change Password</h4>

        <div className='border bg-white flex justify-between border-gray-200 w-[40vw] md:w-[300px] px-2 py-1 outline-none rounded-sm'>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder='Old Password'
            className='w-full outline-none'
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? <BiShow /> : <BiHide />}
          </button>
        </div>

        <div className='border bg-white flex justify-between border-gray-200 w-[40vw] md:w-[300px] px-2 py-1 outline-none rounded-sm'>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            placeholder='New Password'
            className='w-full outline-none'
          />
          <button onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <BiShow /> : <BiHide />}
          </button>
        </div>

        <button
          onClick={Login}
          className='bg-[#33323eff] duration-100 w-max px-4 py-2 self-center rounded-md text-white text-sm hover:bg-gray-700 active:scale-95'
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </main>
  );
}
