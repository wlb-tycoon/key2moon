import React, { forwardRef } from "react";
import { ChevronRightIcon, UserIcon } from "@heroicons/react/16/solid";
import { Poppins } from "next/font/google";
import CountUp from "react-countup";

import Button from "../components/Button";
import ToolKit from "../components/ToolKit";

import ToolKitIcon from "../components/Icons/ToolKitIcon";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const HomeContainer = forwardRef<HTMLDivElement>((props, ref) => (
  <div className="portfolio h-fit md:h-lvh relative ">
    <div className="back absolute left-0  top-0 h-fit w-[400%] sm:w-[300%] 2xl:w-[100%]  overflow-y-hidden z-[-1000]">
      <video id="background-video" autoPlay loop muted className="h-auto ">
        <source src="/assets/1.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="portfoilo-content z-[100000] w-lvw" ref={ref}>
      <div className="content justify-around flex flex-col pt-[114px] md:pt-[173px] pb-[110px] z-10">
        <div className="title-wrapper flex flex-col justify-between">
          <h1 className=" text-mini sm:text-miniTitle md:text-[64px]/[78px] text-center font-medium">
            Creative Web3 Agency <br /> to your next project
          </h1>
          <h6 className="text-description sm:headerSize md:text-mini text-center my-[30px] md:my-[50px]">
            Hands-on advisory firm helping projects to <br className=" md:hidden" /> enter{" "}
            <br className="hidden md:block" /> and evolve in the web3 industry
          </h6>
          <Button>
            {" "}
            Explore Now <ChevronRightIcon className="w-6 h-6"></ChevronRightIcon>{" "}
          </Button>
        </div>
        <div className="info-wrapper mt-[47px] md:mt-[110px] flex  flex-wrap justify-center sm:justify-evenly sm:grid sm:grid-cols-2 md:grid-cols-4 place-items-center  sm:gap-4 md:gap-x-4 xl:gap-x-24 text-center px-4">
          <div className="project-supported  pt-[60px] pb-[30px] sm:p-0 border-b-[1px] border-b-main-purple border-r-[1px] border-r-main-purple sm:border-none w-[160px]  sm:w-fit box-content">
            <h2
              className={`${poppins.className} amount text-amountTitle sm:text-[40px] md:text-miniTitle xl:text-[64px]/[96px] text-center`}
            >
              {" "}
              <CountUp start={0} end={50} duration={3}></CountUp>+
            </h2>
            <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px] font-medium">
              Projects supported
            </p>
          </div>
          <div className="project-raised  pt-[60px] pb-[30px] w-[160px] sm:w-fit sm:p-0">
            <h2
              className={`${poppins.className} amount text-amountTitle sm:text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
            >
              $<CountUp start={0} end={5} duration={3}></CountUp>M
            </h2>
            <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
              Raised for Projects
            </p>
          </div>
          <div className="project-supported  pt-[30px] pb-[60px] w-[160px] sm:w-fit sm:p-0">
            <h2
              className={`${poppins.className} amount text-amountTitle sm:text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
            >
              <CountUp start={0} end={10} duration={3}></CountUp>+
            </h2>
            <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
              Years of Web3 experience
            </p>
          </div>
          <div className="project-supported  pt-[30px] pb-[60px] border-t-[1px] border-t-main-purple border-l-[1px] border-l-main-purple sm:border-none w-[160px] sm:w-fit sm:p-0 box-content">
            <h2
              className={`${poppins.className} amount text-amountTitle sm:text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
            >
              <CountUp start={0} end={300} duration={3}></CountUp>+
            </h2>
            <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
              Partnership in Web3
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[20px] md:hidden ml-[-40px]">
          <ToolKitIcon></ToolKitIcon>
        </div>
      </div>
    </div>
    <ToolKit />
  </div>
));

HomeContainer.displayName = "Portfolio";
export default HomeContainer;
