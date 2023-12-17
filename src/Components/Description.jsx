import React from "react";
import img_desc from "../assets/desc.png";
import img_1 from "../assets/door_open.svg";
import img_2 from "../assets/payments.svg";
import img_3 from "../assets/esca.svg";
import img_4 from "../assets/family_star.svg";
import img_5 from "../assets/directions_run.svg";

const Description = () => {
  return (
    <div className="mt-[96px]">
      <div className="flex flex-col justify-center items-center">
        <div className=" w-[320px] h-[172px] flex flex-col items-center">
          <h5 className="w-[300px] text-[#0B0B0B] text-[24px] font-semibold mb-[24px] ">
            Bagaimana cara kami bekerja
          </h5>
          <p className="w-[300px] leading-[24px] text-[16px] text-[#0B0B0B] font-normal">
            Jika masih bingung, tidak apa. Kita jelaskan bagaimana cara kerja
            program pendidikan kami.
          </p>
        </div>
        <div className="mt-[56px]">
          <div>
            <img src={img_desc} alt="" />
          </div>
          <div className="mt-[56px]">
            <div className="relative mb-[16px]">
              <div className="flex justify-center items-center absolute mt-[16px]  right-[303px] h-[32px] w-[32px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF] text-[18px] font-normal text-center rounded-[100%]  ">
                1
              </div>
              <div className="flex flex-row  items-center  w-[320px] h-[64px] rounded-[8px] border-[#7D7D7D] border-[1px]">
                <img
                  className="w-[24px] ml-[21px] h-[24px]"
                  src={img_1}
                  alt=""
                />
                <p className="ml-[16px] text-[16px] font-normal ">
                  Daftarkan anak anda
                </p>
              </div>
            </div>
            <div className="relative mb-[16px]">
              <div className="flex justify-center items-center absolute mt-[16px]  right-[303px] h-[32px] w-[32px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF] text-[18px] font-normal text-center rounded-[100%]  ">
                3
              </div>
              <div className="flex flex-row  items-center  w-[320px] h-[64px] rounded-[8px] border-[#7D7D7D] border-[1px]">
                <img
                  className="w-[24px] ml-[21px] h-[24px]"
                  src={img_2}
                  alt=""
                />
                <p className="ml-[16px] text-[16px] font-normal ">
                  Pilih program pendidikan
                </p>
              </div>
            </div>
            <div className="relative mb-[16px]">
              <div className="flex justify-center items-center absolute mt-[16px]  right-[303px] h-[32px] w-[32px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF] text-[18px] font-normal text-center rounded-[100%]  ">
                3
              </div>
              <div className="flex flex-row  items-center  w-[320px] h-[64px] rounded-[8px] border-[#7D7D7D] border-[1px]">
                <img
                  className="w-[24px] ml-[21px] h-[24px]"
                  src={img_3}
                  alt=""
                />
                <p className="ml-[16px] text-[16px] font-normal ">
                  Titipkan anak anda ke kami
                </p>
              </div>
            </div>
            <div className="relative mb-[16px]">
              <div className="flex justify-center items-center absolute mt-[16px]  right-[303px] h-[32px] w-[32px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF] text-[18px] font-normal text-center rounded-[100%]  ">
                4
              </div>
              <div className="flex flex-row  items-center  w-[320px] h-[64px] rounded-[8px] border-[#7D7D7D] border-[1px]">
                <img
                  className="w-[24px] ml-[21px] h-[24px]"
                  src={img_4}
                  alt=""
                />
                <p className="ml-[16px] text-[16px] font-normal ">
                  Anak belajar bersama kami
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center items-center absolute mt-[16px]  right-[303px] h-[32px] w-[32px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF] text-[18px] font-normal text-center rounded-[100%]  ">
                5
              </div>
              <div className="flex flex-row  items-center  w-[320px] h-[64px] rounded-[8px] border-[#7D7D7D] border-[1px]">
                <img
                  className="w-[24px] ml-[21px] h-[24px]"
                  src={img_5}
                  alt=""
                />
                <p className="ml-[16px] text-[16px] font-normal ">
                  Jemput anak anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
