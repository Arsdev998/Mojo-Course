import React from "react";
import checklist from "../assets/checklsit.svg";
const PriceSection = () => {
  return (
    <div className="flex flex-col  justify-center items-center pb-[72px] ">
      <div>
        <h3 className="text-center text-[#0B0B0B] text-[24px] md:text-[36px] font-semibold mt-[49px] mb-[48px]">
          Pogram Kami
        </h3>
      </div>
      {/* prog 1 */}
      <div className="flex flex-col md:flex-row items-start w-[308px] md:w-[1200px] md:h-[354px] rounded-[16px] border-[#7D7D7D] border-[2px] ">
        <div className="flex flex-col justify-center items-center rounded-t-[16px] w-full md:w-[384px] md:h-[351px] md:rounded-bl-[16px] md:rounded-tr-none bg-[#FFE976]   py-[48px] px-[16px] mb-[16px] ">
          <h3 className="text-[24px] text-[#0B0B0B] font-semibold text-center">
            Anak usia 4-7 tahun
          </h3>
          <h2 className="text-[32px] text-[#805AD5] font-semibold">
            Rp.400.000
          </h2>
          <p className="text-center text-[16px] font-semibold text-[#0B0B0B] mb-[32px]">
            perbulan
          </p>
          <button className="flex bg-[#805AD5] w-[270px] py-[16px] px-[24px] justify-center items-center text-[#F7FAFC] rounded-[64px]">
            Daftar Sekarang
          </button>
        </div>
        <div className="flex  flex-col pt-[48px] px-[16px] p-[64px] ">
          <p>
            Program ini ditujukan untuk mengembangkan keterampilan kognitif,
            sosial, dan emosional anak. Menekankan pada kemandirian, kebebasan,
            dan keaktifan anak dalam belajar.
          </p>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Peralatan dan bahan Montessori yang berkualitas
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Pembacaan buku cerita terhadap anak-anak
            </p>
          </div>

          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Peralatan dan bahan Montessori yang berkualitas
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Tempat bermain yang aman dan menyenangkan
            </p>
          </div>
        </div>
      </div>
      {/* cart2 */}
      <div className="flex flex-col  md:flex-row-reverse items-start mt-[32px] w-[308px] md:w-[1200px] md:h-[356px] rounded-[16px] md:rounded-[18px] border-[#6384F9] border-[2px] ">
        <div className="flex flex-col justify-center items-center rounded-t-[16px] w-full md:w-[384px] md:h-[353px] bg-[#6384F9]   py-[48px] px-[16px] mb-[16px] md:rounded-t-none md:rounded-r-[16px]">
          <h3 className="text-[24px] text-[#FFFFFF] font-semibold text-center">
            Anak usia 8-12 tahun
          </h3>
          <h2 className="text-[32px] text-[#FFFFFF] font-semibold">
            Rp.400.000
          </h2>
          <p className="text-center text-[16px] font-semibold text-[#FFFFFF] mb-[32px]">
            perbulan
          </p>
          <button className="flex bg-[#FF8947] w-[270px] py-[16px] px-[24px] justify-center items-center text-[#F7FAFC] rounded-[64px]">
            Daftar Sekarang
          </button>
        </div>
        <div className="flex flex-col pt-[48px] px-[16px] p-[64px] ">
          <p>
            Program ini ditujukan untuk anak usia 8-12 tahun yang lebih fokus
            pada pengembangan keterampilan akademis, tetapi masih menjunjung
            kemandirian, kebebasan, dan aktif belajar.
          </p>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[24px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Labortorium sains untuk melakukan eksperimen sains.
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Studio seni agar anak-anak dapat mengekspresikan diri secara
              artistik.a
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Pembelajaran komputer agar anak.
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start text-[#0B0B0B] gap-[16px] mt-[16px]">
            <img src={checklist} alt="" />
            <p className="text-[16px] font-normal">
              Perpustakaan dengan katalog buku yang beragam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
