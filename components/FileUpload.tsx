// components/FileUpload.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState<any>(null);
  const { email } = useAppSelector((state) => state.Asset);
  const inputFileRef = React.useRef<any>(null);
  const router = useRouter();

  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };
  const handleCancel = () => {
    setSelectedFile(null); // Reset the selected file
    setUploadProgress(0); // Reset the progress
    if (inputFileRef.current) {
      inputFileRef.current.value = ""; // Clear the input file
    }
    router.back();
  };

  const handleFileChange = async (event: any) => {
    setUploadProgress(0); // Reset progress when a new file is chosen
    const file = event.target.files[0];
    setFiles(file);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", files);

    try {
      await axios.post(`/api/upload?email=${email}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
    } catch (error: any) {
      console.error("There was an error uploading the file.", error.response);
    }
  };
  return (
    <div
      className={`flex- relative flex-col space-y-10  max-h-max pb-[16vh] flex w-max  mx-auto  self-center p-7 `}
    >
      {/* Left Side */}
      <div className='w-full space-y-4'>
        <p>
          <strong className='semiBold text-dark_blue text-[18px] md:text-[24px]'>
            Upload either your International Passport, National Id card or
            Driver's license to verify
          </strong>
        </p>
      </div>

      {/* Right Side */}
      <div
        className={`w-full md:w-[45%] relative   max-h-max h-full  self-center flex items-center justify-center`}
      >
        <div
          className={`bg-[#f2f2f2] w-[330px] my-auto bord  self-center h-[300px] lg:h-[349px] flex-col flex items-center  justify-center  border border-[#4f4f4f] rounded-[20px]`}
        >
          {files && (
            <div className='self-center mb-[3vh] text-grayText text-center regular text-base'>
              {uploadProgress !== 100 ? files?.name : "Successfull"}
            </div>
          )}
          {uploadProgress === 0 ? (
            <div className='flex flex-col justify-center self-start items-center w-full h-[65%]'>
              <label className='cursor-pointer mx-auto'>
                <button
                  onClick={handleButtonClick}
                  className='regular w-[163px] h-[37px] hover:bg-green-700 hover:border-white hover:text-white duration-200 border-solid text-[16px] bg-white  py-1 border border-binance_green text-binance_green rounded-3xl'
                >
                  Browse files
                </button>
                <input
                  ref={inputFileRef}
                  onChange={handleFileChange}
                  type={`file`}
                  className='h-full  hidden w-full bord'
                />
              </label>
            </div>
          ) : (
            <>
              <div className='w-[204px] h-[27px] text-white bg-white rounded-3xl border-[0.5px] border-binance_green'>
                <div
                  className={`w-[${uploadProgress}%] h-full rounded-3xl  bg-binance_green`}
                ></div>
                {/* <progress
                  className='progress rounded-3xl'
                  value={uploadProgress}
                  max='100'
                >
                  {uploadProgress}%
                </progress> */}
              </div>
              <span className='self-center Bold text-binance_green'>
                {uploadProgress}%
              </span>
            </>
          )}
        </div>
      </div>
      <div
        style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        className=' flex items-center justify-center mt-10 w-full space-x-10  h-[64px]'
      >
        <button onClick={handleCancel} className='regular text-[15px] '>
          Cancel
        </button>
        <button
          onClick={() =>
            uploadProgress !== 100 ? handleUpload() : router.back()
          }
          className='active:scale-90  w-[100px] hover:bg-opacity-70 duration-200 bg-[#283618] text-gray-50 py-2 font-bold rounded-md'
        >
          {uploadProgress !== 100 ? "Upload" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
