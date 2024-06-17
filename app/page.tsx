"use client";
import { useRef, useState } from "react";
import { Montserrat } from "next/font/google";

import HomeContainer from "./containers/HomeContainer";
import ServiceContainer from "./containers/ServiceContainer";
import PartnerContainer from "./containers/PartnerContainer";
import Header from "./components/Header";
import WhyUsContainer from "./containers/WhyUsContainer";
import OfferContainer from "./containers/OfferContainer";
import GetTouchContainer from "./containers/GetTouchContainer";
import BlogContainer from "./containers/BlogContainer";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const portfoliotRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const blogRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const refs = [portfoliotRef, aboutRef, blogRef, contactRef];
  const handleTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    portfoliotRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>, menuID: number) => {
    e.preventDefault();
    setSelectedMenu(menuID);
    const ref = refs[menuID]?.current;
    ref?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <div className={`app ${montserrat.className} overflow-x-hidden`}>
      <Header selectedMenu={selectedMenu} handleClick={handleClick} refs={refs} setSelectedMenu={setSelectedMenu} />
      <HomeContainer ref={portfoliotRef} />
      <ServiceContainer ref={aboutRef} />
      <PartnerContainer />
      <WhyUsContainer />
      <OfferContainer />
      <BlogContainer ref={blogRef} />
      <GetTouchContainer ref={contactRef} />
      <Footer handleTop={handleTop} />
    </div>
  );
}
