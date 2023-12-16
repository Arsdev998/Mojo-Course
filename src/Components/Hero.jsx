import React from "react";
import hero from "../assets/hero-image.png";
import { FaPlay } from "react-icons/fa";
import img_1 from "../assets/img2.png";
import img_2 from "../assets/img6.png";
import img_3 from "../assets/img1.png";
import img_4 from "../assets/img7.png";
const Hero = () => {
  return (
    <div className="mt-[80px]">
      <div className="flex justify-center">
        <img className="w-[320px] h-[209px]" src={hero} alt="" />
      </div>
      <div className="flex justify-center mt-[25px] flex-col p-5 gap-[24px] w-[360px] h-[392px]">
        <div className="w-[320] h-[144] text-[36px] font-bold flex flex-col justify-center ">
          <h1>Pembelajaran yang ceria demi anak gembira</h1>
        </div>
        <div className="w-[320px] h-[144px] text-[18px] text-[#0B0B0B]">
          <p>Sekolah tidak perlu membosankan.</p>
          <p>Kami mengajar anak menggunakan metode belajar sambil bermain.</p>
        </div>
        <div className="flex flex-row gap-[10px] justify-center">
          <div className="bg-[#F04949] w-[160px] text-[#FFFFFF] h-[64px] py-[20px] px-[24px] rounded-tr-[20px] rounded-bl-[24px] rounded-br-[6px] rounded-tl-[6px] ">
            Daftarkan anak
          </div>
          <div className="flex  justify-center items-center gap-[5px]">
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-[#FFFFFF] shadow-xl shadow-[#6B60EB66] shadow-opacity-[40%] rounded-[64px]">
              <FaPlay />
            </div>
            <p className=" text-[14px] text-[#4D54FF]">Tonton Vedio</p>
          </div>
        </div>
        <div className="flex relative ">
          <div className="flex ml-[20px] ">
            <img
              className="w-[36px] rounded-full absolute "
              src={img_1}
              alt=""
            />
            <img
              className="w-[36px] rounded-full absolute ml-6"
              src={img_2}
              alt=""
            />
            <img
              className="w-[36px] rounded-full absolute ml-12"
              src={img_3}
              alt=""
            />
            <img
              className="w-[36px] rounded-full absolute ml-[70px]"
              src={img_4}
              alt=""
            />
          </div>
          <div className="w-[158px] h-[56px] gap-[4px] ml-[130px]">
            <p className="text-[16px] text-[#0B0B0B] font-normal ">
              <span className="text-[#4D54FF] text-[16px] font-normal">
                2K+
              </span>
              orang tua telah bergabung
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
