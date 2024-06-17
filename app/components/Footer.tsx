import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";

import Logo from "@/app/logo.png";

interface IFooterProps {
  handleTop: (e: React.MouseEvent<HTMLElement>) => void;
}

const Footer = ({ handleTop }: IFooterProps) => {
  return (
    <div className="footer bg-main-back flex justify-between items-center md:justify-around py-2 md:py-6 border-t-[0.5px] border-t-main-purple px-3">
      <p className="text-mobileTitle sm:text-base text-footer-text  flex gap-x-3 items-center">
        <Image src={Logo} alt={"Logo"} width={46} height={46} />
        KeY2Moon Solutions
      </p>
      <p className="text-mobileTitle sm:text-base text-footer-text hidden md:block">
        &copy; 2024 All Rights reserved
      </p>
      <Link
        href={"#"}
        onClick={(e) => handleTop(e)}
        className="text-base text-footer-text"
      >
        <span className="hidden md:block">Back To Top</span>
        <span className="md:hidden">
          <ArrowUpCircleIcon width={30} height={30}></ArrowUpCircleIcon>{" "}
        </span>
      </Link>
    </div>
  );
};
export default Footer;
