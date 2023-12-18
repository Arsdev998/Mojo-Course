import React from "react";
import img_1 from "../assets/img4.png";
import img_2 from "../assets/img2.png";
import img_3 from "../assets/img6.png";
import img_4 from "../assets/img7.png";
import img_5 from "../assets/img1.png";
import img_6 from '../assets/img5.png'

const Testimoni = () => {
  return (
    <div className="flex flex-col md:justify-center items-center w-[360px] md:w-[1440px] md:gap-[80px] py-[48px] px-[20px] ">
      <div className="w-[320px] h-[96px] text-[24px] text-[#0B0B0B] font-semibold mb-[48px]">
        <h1 className="md:text-center">
          Orang tua lain sudah mencobanya dan ini kata mereka
        </h1>
      </div>
      {/* testi box */}
      <div className="flex flex-col md:flex-row md:justify-center md:gap-[24px] md:flex-wrap">
        <div className="w-[320px] h-[272px] pt-[32px] mb-[24px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px]">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_1}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] text-[16px] font-semibold">
                Haikal Asapa
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Kurikulumnya dirancang untuk mengembangkan keterampilan kognitif,
            sosial, dan emosional anak secara holistik
          </p>
        </div>
        {/* testibox 2 */}
        <div className="hidden md:block w-[320px] md:w-[588px]  h-[272px] md:h-[244px] pt-[32px] mb-[24px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px] ">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_4}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] md:w-[200px] text-[16px] font-semibold">
                Anggi Wulandari
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Anak saya menjadi lebih mandiri, kreatif, dan percaya diri. Ia juga
            lebih senang belajar dan lebih mudah memahami materi pelajaran.
          </p>
        </div>
        {/* testi 3 */}
        <div className="hidden md:block w-[320px] md:w-[282px]  h-[272px] md:h-[244px] pt-[32px] mb-[24px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px] ">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_5}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] md:w-[200px] text-[16px] font-semibold">
                Rizky Guwantama
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Lingkungannya sangat nyaman dan mendukung proses belajar anak.
          </p>
        </div>
        {/* kha */}
        <div className="w-[320px]  h-[272px] mb-[24px] pt-[32px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px]">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_3}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] text-[16px] font-semibold">
                Lingga Enari
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Anak suka belajar di Mojo. Ia bebas memilih materi yang ingin ia
            pelajari. Guru-gurunya juga sangat sabar dan membantu.
          </p>
        </div>
        {/* testi 4 */}
        <div className="w-[320px] md:w-[588px] md: h-[356px] md:h-[300px] pt-[32px] mb-[24px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFF27F]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px]">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_2}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] text-[16px] font-semibold">
                Amirul Arief
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Anak saya mengalami kesulitan belajar di sekolah tradisional. Ia
            merasa tertekan dan tidak percaya diri. Setelah daftar ke Mojo, ia
            menjadi lebih bersemangat belajar. Ia juga mulai menunjukkan
            kemajuan dalam belajarnya.
          </p>
        </div>
        {/* testibox3 */}
        <div className="w-[320px] md:w-[282px]  h-[272px] md:h-[328px] mb-[24px] pt-[32px] pr-[16px] pb-[48px] pl-[16px] rounded-[16px] border-[#7D7D7D] border-[1px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[16px] w-[180px] h-[56px] mb-[24px]">
            <img
              className="w-[56px] h-[56px] rounded-full"
              src={img_6}
              alt=""
            />
            <div>
              <p className="text-[#0B0B0B] md:w-[200px] text-[16px] font-semibold">
                Melanie Lindsey
              </p>
              <p>Orang tua</p>
            </div>
          </div>
          <p className="text-[#0B0B0B] text-[16px] font-normal">
            Anak saya belajar banyak dari Mojo, mulai dari matematika, sains,
            bahasa, hingga seni. Ia menjadi anak yang mandiri, kreatif, dan
            percaya diri.
          </p>
        </div>
        {/* testi last */}

        <div className="flex md:hidden justify-center items-center text-[#955C5C]  rounded-[8px] w-[320px] h-[48px] border-[2px] border-[#955C5C]">
          <button className="text-[14px] font-normal ">Baca Lebih</button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
