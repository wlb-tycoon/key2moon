import React from "react";
import Marquee from "react-fast-marquee";

import DropShadow from "../components/DropShadow";
import PartnerItem from "../components/Items/PartnerItem";

const partnerItems = [
  "Marketing Agency",
  "Listing Platforms",
  "Branding Studios",
  "Exchanges",
  "Gaming guilds",
];

const PartnerContainer = () => {
  return (
    <div className="partners px-[10px] md:px-[20px] xl:px-[150px] text-center bg-main-back">
      <h6 className="partner-title text-containerMobileTitle sm:text-base text-main-red font-medium ">
        Our Partners
      </h6>
      <div className="partner-title text-containerTitleDescription md:text-miniTitle font-semibold mt-[23px] flex md:items-center md:flex-row flex-col justify-center text-center">
        <p>We worked with&nbsp; </p>
        <p>
          <DropShadow color="red">Global</DropShadow> largest Brands
        </p>
      </div>
      <p className="service-description mt-[43px] md:mt-[80px] text-description sm:text-[20px]/[24.38px] font-normal px-8 sm:px-20 lg:px-0">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other and recommended best course of action
      </p>
      <div className="partner-items mt-[43px] md:mt-[77px] hiddend sm:blocked justify-evenly flex-wrap ">
        {partnerItems.map((partnerItem, index) => {
          return <PartnerItem key={index}> {partnerItem} </PartnerItem>;
        })}
      </div>
      <div className="flex gap-4 sm:hiddend">
        <Marquee>
          {partnerItems.map((partnerItem, index) => {
            return <PartnerItem key={index}> {partnerItem} </PartnerItem>;
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerContainer;
