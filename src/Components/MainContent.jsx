import React from "react";
import school from "../assets/school.png";
import library from "../assets/local_library.png";
import escwarning from "../assets/escalator_warning.png";
import vedio from "../assets/videocam.png";
const MainContent = () => {
  return (
    <main className="">
      <div className="flex justify-center md:mb-[80px]">
        <div className="md:flex md:flex-col md:items-center w-[320px] md:w-[734px] h-[232px] md:h-[48px] mb-[56px] ">
          <h4 className="text-[24px] md:text-[36px] md:mb-[24px] font-semibold text-[#0B0B0B] mb-[24px]">
            Metode kami membangun pribadi anak
          </h4>
          <p className="text-[16px] md:w-[512px] md:h-[56px]  text-[#0B0B0B] font-normal">
            Kami percaya anak seharusnya belajar sesuai minat dan kebutuhan,
            agar tumbuh mandiri, kreatif, dan percaya diri.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className=" w-[320px] h-[360px] rounded-t-[20px] md:rounded-t-none rounded-l-[20px] md:rounded-tl-[20px] pt-[48px] pr-[32px] pb-[64px] pl-[32px] bg-[#8EA7FF] ">
          <img className="mx-auto mb-[32px]" src={school} alt=""></img>
          <p className="text-center text-[24px] font-semibold text-[#0B0B0B] ">
            Anak diajarkan dan dibimbing oleh guru yang berpengalaman.
          </p>
        </div>
        <div className=" w-[320px] h-[360px]  pt-[48px] pr-[32px] pb-[64px] pl-[32px] bg-[#FF8165] ">
          <img className="mx-auto mb-[32px]" src={library} alt=""></img>
          <p className="text-center text-[24px] font-semibold text-[#0B0B0B] ">
            Metode Montessori untuk mendidik anak belajar sambil bermain.
          </p>
        </div>
        <div className=" w-[320px] h-[360px]  pt-[48px] pr-[32px] pb-[64px] pl-[32px] bg-[#FFF27F] ">
          <img className="mx-auto mb-[32px]" src={escwarning} alt=""></img>
          <p className="text-center text-[24px] font-semibold text-[#0B0B0B] ">
            Orang tua bisa belajar metode pengajaran bersama anak.
          </p>
        </div>
        <div className=" w-[320px] h-[360px] rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px]  pt-[48px] pr-[32px] pb-[64px] pl-[32px] bg-[#B496F3] ">
          <img className="mx-auto mb-[32px]" src={vedio} alt=""></img>
          <p className="text-center text-[24px] font-semibold text-[#0B0B0B] ">
            Menyediakan kursus online berupa video dan meeting video
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
