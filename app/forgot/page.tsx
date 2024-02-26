"use client";

import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setEmail } from "@/redux/features/assetSlice";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.Asset);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/forgot-password", { email });
      setMessage("Password reset email sent. Please check your inbox.");
      setIsLoading(!true);
    } catch (error) {
      setMessage("Failed to send password reset email.");
      setIsLoading(!true);
    }
  };

  return (
    <div className='h-screen flex space-y-10 flex-col items-center justify-center'>
      <h4 className='text-[32px] mb-4'>Forgot Password</h4>

      <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
        <input
          type='email'
          className='border border-gray-200 w-[40vw] md:w-[300px] px-2 py-1 outline-none rounded-sm'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          required
        />
        <button
          type='submit'
          className='bg-[#33323eff] duration-100 w-max px-4 py-2 self-center rounded-md text-white text-sm hover:bg-gray-700 active:scale-95'
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
