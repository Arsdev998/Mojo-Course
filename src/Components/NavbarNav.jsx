import React, { useState } from "react";
import logo from "../assets/MojoLogo.svg";
import { Link } from "react-scroll";
import { MdMenu } from "react-icons/md";
const NavbarNav = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (value) => {
    setOpen;
  };

  return (
    <nav className="fixed w-full h-[400px] overflow-hidden z-50 px-[20px] lg:px-[120px] mt-[20px]">
      <div className="bg-[#FFFFFF] lg:mx-[20px] mx-auto md:flex  shadow-md shadow-slate-400 w-full  md:h-[72px]  md:py-[12px] md:px-[48px] md:justify-between items-center   h-[48px]    rounded-[96px] justify-between py-[12px] px-[20px]  z-[99999]">
        <div className="flex items-center">
          <img
            className="w-[57px] h-[24px] md:w-[114px] md:h-[48px]"
            src={logo}
            alt=""
          />
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden absolute text-2xl right-[35px] top-3 cursor-pointer"
          >
            <MdMenu name={open ? "close" : "menu"} />
          </div>
        </div>
        <ul
          className={`md:flex gap-[24px]   md:z-auto z-[-1] md:w-auto md:p-0 pl-[15px] w-[290px] md:gap-[10px] 2xl:gap-[40px] md:items-center md:text-[16px] text-[#414141] font-semibold absolute md:static bg-[white] transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:my-0 cursor-pointer hover:text-[#6B60EB] my-5">
            <Link>Tentang Kami</Link>
          </li>
          <li className="md:my-0 my-5 cursor-pointer hover:text-[#6B60EB]">
            <Link>Kursus Online</Link>
          </li>
          <li className="md:my-0 my-5 cursor-pointer hover:text-[#6B60EB]">
            <Link>Program</Link>
          </li>
          <li className="md:my-0 md:mr-[120px] my-5 cursor-pointer hover:text-[#6B60EB] ">
            <Link>Blog</Link>
          </li>
          <li className="md:text-[16px] md:my-0 my-5 cursor-pointer text-[#414141] font-semibold hover:text-[#6B60EB]">
            <Link>Komunitas</Link>
          </li>
          <li className="md:w-[133px] cursor-pointer md:my-0 my-5 md:h-[48px] md:py-[12px] md:px-[12px] text-center font-semibold text-[#FFFFFF] md:text-[14px] bg-[#6B60EB] rounded-[8px] transition duration-400 hover:bg-[#0B0B0B]">
            <Link>Hubungi Kami</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNav;
