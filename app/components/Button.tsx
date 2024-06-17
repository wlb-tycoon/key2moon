import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
interface IButtonPropos {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonPropos) => {
  return (
    <button
      className={`${poppins.className} bg-white text-base py-3 px-[25px] h-[41px] rounded-[10px] sm:rounded-[25px] border-[1px]  border-white text-black w-[236px] sm:w-[180px] mx-auto flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
