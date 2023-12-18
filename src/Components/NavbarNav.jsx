import React, { useState } from "react";
import logo from "../assets/Mojo logo.svg";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
const NavbarNav = () => {
  let Links = [
    { name: "Tentang Kami", link: "/" },
    { name: "Kursus Online", link: "/" },
    { name: "Program", link: "/" },
    { name: "Blog", link: "/" },
  ];
  return (
    <nav>
      <div className="bg-[#FFFFFF] flex shadow-md shadow-slate-500 w-[320px] h-[48px] top-[16px] left-[20px] fixed rounded-[96px] justify-between py-[12px] px-[20px] z-[99999]">
        <div className="">
          <img className="w-[57px] h-[24px]" src={logo} alt="" />
        </div>
        <ul>
          {Links.map((link) => {
            <li>
              <a href={Link.link}>{link.name}</a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNav;
