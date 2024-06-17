import React from "react";

import DropShadow from "../components/DropShadow";
import BenefitItem from "../components/Items/BenefitItem";

const WhyUsContainer = () => {
  return (
    <div className="why-us py-[46px] md:py-[100px] px-10 xl:px-[120px] text-center bg-main-back">
      <div className="why-us-title text-containerTitleDescription md:text-miniTitle font-semibold mt-[23px] flex items-center justify-center">
        Why Choose &nbsp; <DropShadow color="green">US</DropShadow>
      </div>
      <p className="service-description mt-[43px] md:mt-[68px] text-description sm:text-mini font-normal">
        Key2moon Solutions is a technology company that specializes in
        implementing next-generation IT systems with an emphasis on innovation,
        professionalism, quality and reliability
      </p>
      <div className="why-us-items mt-[43px] md:mt-[68px] grid   place-items-center grid-cols-2 md:grid-cols-4 gap-[40px] lg:gap-[50px] text-left">
        <BenefitItem color="green" icon="Percent">
          Flexible Engagement Model
        </BenefitItem>
        <BenefitItem color="green" icon="Star">
          Extensive Offshore Information Technology Services
        </BenefitItem>
        <BenefitItem color="green" icon="Graph">
          Pursue Best Practices and Proactive Approach
        </BenefitItem>
        <BenefitItem color="green" icon="Gear">
          High Quality of Service and successful deliveries
        </BenefitItem>
        <BenefitItem color="green" icon="Clock">
          On Time and On Budget Delivery
        </BenefitItem>
        <BenefitItem color="green" icon="Connect">
          Focus on Continuous Process Improvement
        </BenefitItem>
        <BenefitItem color="green" icon="Branch">
          Bring Innovation by Pushing State of art
        </BenefitItem>
        <BenefitItem color="green" icon="Bubble">
          Build Trust through Transparent Relationship
        </BenefitItem>
      </div>
    </div>
  );
};

export default WhyUsContainer;
