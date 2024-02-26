import ContactMe from "@/components/Contact";
import React from "react";

const Page = () => {
  return (
    <div className='h-[93vh] flex flex-col items-center pb-[20vh] justify-start pt-[5vh] text-white'>
      <h3 className='text-2xl lg:text-3xl mb-5'>
        Application is in three phases -:
      </h3>
      <ul className='list-decimal text-sm lg:text-base px-5 space-y-4 list-inside'>
        <li>
          Fill in the form below to apply ( One Wallet address per application
          ).
        </li>
        <li>
          Successful apllicants would be emailed and invited for an interactive
          session about security awareness in the cryptocurrency market and
          blockchain
        </li>
        <li>
          Game winners would be asked to fill in wallet address and claim their
          rewards
        </li>
      </ul>
      <h3 className='text-2xl lg:text-3xl my-5'>
        Fill the form below to apply
      </h3>
      <h3 className='text-base'>
        Only successful applicants would be contacted
      </h3>
      <div className='px-4'>
        <ContactMe />
      </div>
    </div>
  );
};

export default Page;
