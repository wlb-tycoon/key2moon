import React, { forwardRef } from "react";
import Marquee from "react-fast-marquee";

import DropShadow from "../components/DropShadow";
import ServiceItem from "../components/Items/ServiceItem";

const serviceItems = [
  "Branding",
  "Consulting Programs",
  "Website Development",
  "Application Development",
  "Full-Stack Development",
  "BlockChain",
  "E-Commerce",
];

const ServiceContainer = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    className="services py-[46px] md:py-[87px] px-4 sm:px-10 md:px-[125px] text-center bg-main-back"
    id="service"
    ref={ref}
  >
    <h6 className="service-title text-containerMobileTitle sm:text-base text-main-purple font-medium ">
      Our Services
    </h6>
    <div className="service-title text-containerTitleDescription md:text-miniTitle font-semibold mt-[23px] flex items-center justify-center">
      <p> Service We Can</p> &nbsp;
      <DropShadow color="purple">Help</DropShadow> &nbsp; <p> You</p>
    </div>
    <p className="service-description mt-10 text-description md:text-mini font-normal tracking-description">
      &nbsp; we&apos;re dedicated to delivering innovative IT solutions that
      empower businesses to thrive in the digital age. Zen Class is one of the
      industry&apos;s leading Project Based Career Programs offered by Key2Moon
      Solutions that promises Placement Assistance on completing the course.
      Counducted by an IIT Madras incubated company & designed by our
      Founders(Ex-paypal Employees) also offers mentoring through experts from
      companies like Google, Microsoft, Flipkart, Zoho & Freshworks for placing
      you in top companies with high salaries
    </p>
    <div className="service-items border-[1px] border-main-purple rounded-[5.46px] md:rounded-[15px] bg-gradient-radal mt-[42px] py-[10px] md:py-10 flex text-miniTitle font-medium">
      <Marquee>
        {serviceItems.map((serviceitem, index) => {
          return <ServiceItem key={index}> {serviceitem}</ServiceItem>;
        })}
      </Marquee>
    </div>
  </div>
));

ServiceContainer.displayName = "ServiceContainer";
export default ServiceContainer;
