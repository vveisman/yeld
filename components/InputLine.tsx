import React from "react";

const InputLine = ({
  placeholder,
  type,
  value,
  onChange,
  styles,
  onKeyDown,
}: {
  placeholder: string;
  type?: string;
  value?: any;
  onChange?: (e: any) => void;
  styles?: string;
  onKeyDown?: (e: any) => void;
}) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <input
      value={value}
      readOnly
      // onChange={onChange}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      // className={`border-b-2  pb-2 my-[20px] md:my-[10px] border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green px-2 py-1`}
      className={`border-b-2 ${styles} ${"my-[20px] md:my-[10px] pb-2"}
      border-gray-400 focus:outline-none focus:border-b-2 
      focus:border-binance_green  w-full px-1 py-1`}
    />
  );
};

export default React.memo(InputLine);
