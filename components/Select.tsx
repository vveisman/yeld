"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

import { MdArrowDropDown } from "react-icons/md";

import InputLine from "./InputLine";
import { setAmount } from "@/redux/features/assetSlice";
import { useAppDispatch } from "@/redux/hooks";
const SelectComponent = ({
  items,
  placeholder,
  value,
}: {
  items: any;
  placeholder: any;
  value: any;
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  console.log(value);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div className='flex items-center  max-w-max relative'>
        {open && (
          <motion.div
            animate={{ height: ["0px", "150px"] }}
            className='w-full h-max scrollbar-hide z-10 absolute border scrollbar-hide bg-slate-50 overflow-y-scroll'
          >
            {items?.map((item: any, i: number) => (
              <p
                key={i.toString()}
                style={{ fontSize: 14 }}
                onClick={() => {
                  setOpen(false);
                  dispatch(setAmount(item.slice(1)));
                }}
                className='regular border-b py-2 hover:bg-slate-700 hover:text-white mb-2 px-2 text-black'
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
        <InputLine
          styles={"bg-transparent  mr-2 regular text-[16px]"}
          placeholder={placeholder}
          value={`$${value}`}
        />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute ${
            open ? "rotate-180 z-20" : "rotate-0"
          } duration-200 right-[2px] self-center`}
        >
          <MdArrowDropDown />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SelectComponent;
