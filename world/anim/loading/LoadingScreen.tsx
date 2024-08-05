"use cleint";
import { useEffect } from "react";
import { loadingAnimation } from "./animation";
import "./styles.css";

const LoadingScreen = () => {
  useEffect(() => {
    loadingAnimation();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Software Developer,</span>
        <span>Graphic Designer,</span>
        <span>Problem Solver.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
