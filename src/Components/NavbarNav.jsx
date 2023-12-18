import React, { useState } from "react";
import logo from "../assets/Mojo logo.svg";
import { Link } from "react-scroll";
import { MdMenu } from "react-icons/md";
const NavbarNav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = (value) => {
    setOpen;
  };

  return (
    <nav className="bg-[#FFFFFF] mx-auto  md:flex  shadow-md w-[320px] md:h-[72px] md:w-[1200px] md:py-[12px] md:px-[40px] md:justify-between items-center md:mx-[120px] h-[48px] top-[16px] left-[20px] fixed rounded-[96px] justify-between py-[12px] px-[20px]  z-[99999]">
      <div className="flex items-center">
        <img
          className="w-[57px] h-[24px] md:w-[114px] md:h-[48px]"
          src={logo}
          alt=""
        />
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute text-2xl right-[9px] top-3 cursor-pointer"
        >
          <MdMenu name={open ? "close" : "menu"} />
        </div>
      </div>
      <ul
        className={`md:flex gap-[24px]  md:z-auto z-[-1] md:w-auto md:p-0 pl-[15px] w-[290px] md:gap-[40px] md:items-center md:text-[16px] text-[#414141] font-semibold absolute md:static bg-[white] transition-all duration-500 ease-in ${
          open ? "top-12" : "top-[-490px]"
        }`}
      >
        <li className="md:my-0 hover:bg-[#6B60EB] my-5">
          <Link>Tentang Kami</Link>
        </li>
        <li className="md:my-0 my-5 hover:bg-[#6B60EB]">
          <Link>Kursus Online</Link>
        </li>
        <li className="md:my-0 my-5 hover:bg-[#6B60EB]">
          <Link>Program</Link>
        </li>
        <li className="md:my-0 md:mr-[120px] my-5 hover:bg-[#6B60EB] ">
          <Link>Blog</Link>
        </li>
        <li className="md:text-[16px] md:my-0 my-5 text-[#414141] font-semibold hover:bg-[#6B60EB]">
          <Link>Komunitas</Link>
        </li>
        <li className="md:w-[133px] md:my-0 my-5 md:h-[48px] md:py-[12px] md:px-[12px] text-center font-semibold text-[#FFFFFF] md:text-[14px] bg-[#6B60EB] rounded-[8px]">
          <Link>Hubungi Kami</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarNav;
