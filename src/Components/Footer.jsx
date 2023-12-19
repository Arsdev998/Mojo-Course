import React from "react";
import mojo_logo from "../assets/MojoLogoW.png";
import wa from "../assets/whatsapp.png";
import ig from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import yt from "../assets/youtube.png";
import lock from "../assets/lock.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="flex flex-col  items-start md:items-center bg-[#955C5C]  w-full md:h-[460px] py-[72px] px-[20px]">
      <div className="w-[320px] md:w-full md:flex md:justify-around border-b-[1px] border-[#FFFF] pb-[48px]">
        <div className="flex flex-col  gap-[32px] w-[200px]  h-[128px]">
          <img className="w-[152px] h-[64px]" src={mojo_logo} alt="" />
          <div className="flex flex-row gap-[24px]">
            <img src={wa} alt="" />
            <img src={ig} alt="" />
            <img src={fb} alt="" />
            <img src={yt} alt="" />
          </div>
        </div>
        {/* foorter Link */}
        <div className="flex items-start md:flex-row flex-wrap w-[320px] h-[172px] text-[#FFFFFF] mt-[56px] md:mt-0">
          <div className="flex flex-col gap-[8px]">
            <Link href="">Home</Link>
            <Link href="">Tentang Kami</Link>
            <Link href="">Kursus Online</Link>
            <Link href="">Blog</Link>
            <Link href="">Komunitas</Link>
          </div>
          <div className="flex flex-col h-auto w-auto ml-[48px] gap-[8px]">
            <Link>Sejarah</Link>
            <Link>Pengurus</Link>
            <Link>Alumni</Link>
          </div>
        </div>
        <div className="flex flex-col text-[#FFFFFF] gap-[8px] items-start w-[100px] mt-[48px] md:mt-0">
          <Link>Whatsapp</Link>
          <Link>Telegram</Link>
          <Link>Telepon</Link>
        </div>
        <div className="w-[320px] h-[275px] mt-[56px] md:mt-0">
          <img src={lock} alt="" />
          <p className="text-[14px] font-normal text-[#FFF] mt-[16px]">
            Jl. Panembahan Senopati No.18, Prawirodirjan, Kec. Gondomanan, Kota
            Yogyakarta
          </p>
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="text-[#FFFFFF] text-[16px] font-semibold">Copyright 2023 belongs to Mojo Education Insitution &copy;ArsDev</p>
      </div>
    </footer>
  );
};

export default Footer;
