"use client";
import React, { useEffect, useState } from "react";

const Claim = () => {
  // Check if countdown time is stored in localStorage
  const initialCountdown =
    (typeof window != "undefined" && localStorage.getItem("countdown")) ??
    "72:00:00";
  const [countdown, setCountdown] = useState<string>(
    initialCountdown as string
  );

  useEffect(() => {
    const timer = setInterval(() => {
      // Update countdown timer every second
      const [hours, minutes, seconds] = countdown.split(":").map(Number);
      let remainingSeconds = hours * 3600 + minutes * 60 + seconds;

      if (remainingSeconds <= 0) {
        clearInterval(timer);
        return;
      }

      remainingSeconds--;
      const newHours = Math.floor(remainingSeconds / 3600);
      const newMinutes = Math.floor((remainingSeconds % 3600) / 60);
      const newSeconds = remainingSeconds % 60;

      setCountdown(
        `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(
          2,
          "0"
        )}:${String(newSeconds).padStart(2, "0")}`
      );

      // Store updated countdown time in localStorage
      typeof window != "undefined" &&
        localStorage.setItem("countdown", countdown);
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup function to clear interval on unmount
  }, [countdown]);

  return (
    <div className='flex items-center space-x-6 mt-10'>
      <button
        disabled={true}
        className='bg-[#606C38] disabled:opacity-50 disabled:cursor-wait rounded-md w-[120px] lg:w-[180px] justify-center flex  text-[20px] font-bold text-white lg:text-[32px]'
      >
        Claim
      </button>
      <p className='text-[20px] lg:text-[40px]'>{countdown}</p>
    </div>
  );
};

export default Claim;
