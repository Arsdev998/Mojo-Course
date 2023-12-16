import React, { useState } from "react";
import logo from "../assets/Mojo logo.svg";
import burger from "../assets/menu (1).svg";
import { Link } from "react-scroll";
const NavbarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="bg-[#FFFFFF] flex shadow-md shadow-slate-500 w-[320px] h-[48px] top-[16px] left-[20px] fixed rounded-[96px] justify-between py-[12px] px-[20px]">
        <div className="">
          <img className="w-[57px] h-[24px]" src={logo} alt="" />
        </div>
        <div className="lg:hiddend">
          <button className="focus:outline-none" onClick={togleNavbar}>
            <img src={burger} alt="" />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow  items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col">
              <Link>Tentang Kami</Link>
              <Link>Kursus Online</Link>
              <Link>Program</Link>
              <Link>Blog</Link>
          </div>
          <div className="flex flex-col">
            <Link>Komunitas</Link>
            <Link className="bg-[#6B60EB] text-[#FFFF]">Hubungi Kami</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNav;
