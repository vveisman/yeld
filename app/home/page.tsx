import Image from "next/image";
import Asset from "@/components/Asset";
import Claim from "@/components/Claim";
import { Suspense } from "react";
import All from "@/components/All";
import Invest from "@/components/Invest";
import Link from "next/link";
import { fetchPrice, getUser } from "@/lib/actions";
import { useAppDispatch } from "@/redux/hooks";

const Page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const user = await getUser(searchParams.email);
  const data = await fetchPrice();

  return (
    <div className='relative overflow-hidden p-5 lg:pl-[70px] h-max  pb-20 bg-[#FEFAE0]'>
      <section className='flex mb-10 flex-col-reverse lg:h-[50%] lg:grid lg:grid-cols-2'>
        <div className='lg:pt-[20px] relative h-max pb-3 flex flex-col justify-start  items-start'>
          <h4 className='text-[32px] mb-4'>My Assets</h4>

          <div className=''>
            <Asset symbol='BTC' amount={user.BTC} />
          </div>
          <div className='self-start mt-5 lg:mt-10'>
            <Asset
              logo={true}
              symbol={"USDT"}
              amount={`$${
                ((Number(data[`BTC/USD`]?.price).toFixed(
                  0
                ) as unknown as number) * user.BTC) as unknown as string
              }`}
            />
          </div>
          <Claim />
        </div>
        <div className='flex flex-col relative justify-center my-10 lg:mb-0 lg:items-center lg:space-y-24 '>
          <p className='text-lg relative capitalize  w-max lg:text-[64px]  font-bold'>
            {user.name}
            <Image
              src={"/verified.webp"}
              width={15}
              height={15}
              alt='verified'
              className='absolute text-red-500 top-1 -right-5'
            />
          </p>
          <p className='lg:text-[32px] '>Id: {user._id}</p>
          {/* <Link href={"/verify"} className='self-center'>
            <button className='absolute lg:relative active:scale-90  w-[100px] hover:bg-opacity-70 duration-200 right-0 lg:right-1/2 lg:translate-x-1/2 bg-[#283618] text-gray-50 py-2 font-bold rounded-md'>
              Verify
            </button>
          </Link> */}
        </div>
      </section>
      <section className='flex flex-col lg:flex-row'>
        <div className='flex-col pb-5 border-b-2 lg:border-b-0 lg:border-r-2 border-double  border-emerald-950 w-full lg:w-[55%]'>
          <h4 className='text-[32px] mb-4'>SYMBOLS</h4>
          <Suspense fallback={"Loading..."}>
            <All data={data} />
          </Suspense>
        </div>
        <Invest />
      </section>
    </div>
  );
};

export default Page;
