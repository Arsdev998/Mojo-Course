import React from "react";
import img_1 from '../assets/HarukaEdu.svg'
import img_2 from '../assets/UNY.svg'
import img_3 from '../assets/cakap.svg'
import img_4 from '../assets/Tomic.svg'
import './style.css'
const Offers = () => {
  return (
    <div className="w-[360px] h-[251px] py-[48px] px-[20px] gap-[48px]">
      <div className="flex justify-center text-[#6B6B6B] text-[24px] font-semibold">
        <h3>Dipercya oleh</h3>
      </div>
      <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src={img_1} alt="" />
            </div>
            <div className="slide"><img src={img_2} alt="" /></div>
            <div className="slide"><img src={img_3} alt="" /></div>
            <div className="slide"><img src={img_4} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
