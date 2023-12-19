import React from "react";
import { motion } from "framer-motion";
import img_1 from "../assets/HarukaEdu.svg";
import img_2 from "../assets/UNY.svg";
import img_3 from "../assets/Cakap.svg";
import img_4 from "../assets/Tomic.svg";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-70%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Offers = () => {
  return (
    <div className="w-[360px] xl:flex md:items-center md:flex-col md:w-[1440px] h-[251px] md:h-[287px] py-[48px] px-[20px] md:px-[128px]">
      <div className="text-center mb-[45px] text-[#6B6B6B] text-[24px] md:text-[36px] mb:text-[32px] font-semibold">
        <h3>Dipercya oleh</h3>
      </div>
      <div className="slider md:hidden">
        <motion.div
          className="slide-track flex items-center justify-between w-[952px] h-[75px]  gap-[20px]"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          <div className="slide">
            <img src={img_1} alt="" />
          </div>
          <div className="slide">
            <img src={img_2} alt="" />
          </div>
          <div className="slide">
            <img src={img_3} alt="" />
          </div>
          <div className="slide">
            <img src={img_4} alt="" />
          </div>
        </motion.div>
      </div>
      {/* desktop */}
      <div className="slider hidden md:block">
        <div
          className="slide-track flex items-center justify-between w-[952px] h-[75px]  gap-[24px]"
        >
          <div className="slide">
            <img src={img_1} alt="" />
          </div>
          <div className="slide">
            <img src={img_2} alt="" />
          </div>
          <div className="slide">
            <img src={img_3} alt="" />
          </div>
          <div className="slide">
            <img src={img_4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
