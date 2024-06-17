import React from "react";

import OfferItem from "../components/Items/OfferItem";
import DropShadow from "../components/DropShadow";
import ProgressWrapper from "../components/ProgressWrapper";

const OfferContainer = () => {
  return (
    <div className="offer px-[30px] md:px-[50px] pt-[46px] md:pt-[100px] text-center relative bg-main-back">
      <video
        id="background-video2"
        autoPlay
        loop
        muted
        className="absolute right-0 left-0 top-0 min-w-lvw w-lvw opacity-20"
      >
        <source src="/assets/3.mp4" type="video/mp4" />
      </video>
      <div className="offer-content-wrapper relative">
        <div className="offer-title text-miniTitle text-main-reed font-medium flex justify-center hiddend sm:blocked">
          We &nbsp; <DropShadow color="purple">Offer</DropShadow>
        </div>
        <div className="offers-content flex flex-col items-center">
          <ProgressWrapper count={1} color="purple" title="Services">
            <OfferItem
              color="purple"
              icon={"Icon1"}
              title="  Enterprise Software Development"
            >
              Building robust, scalable, and secure applications tailored to
              meet the complex needs of large organizations
            </OfferItem>
            <OfferItem color="purple" icon={"Icon2"} title="UI/UX Design">
              Art of crafting user interfaces and experiences that are
              intuitive, engaging, and enjoyable for digital product users
            </OfferItem>
            <OfferItem color="purple" icon={"Icon3"} title="System Integration">
              connecting different subsystems or components within an
              organization&apos;s infrastructure to function harmoniously as a
              cohesive unit.
            </OfferItem>
            <OfferItem
              color="purple"
              icon={"Icon4"}
              title=" Managed Application Services"
            >
              Provide comprehensive support, maintenance, and optimization for
              businesses software applications
            </OfferItem>
            <OfferItem
              color="purple"
              icon={"Icon5"}
              title="  Digital Transformation & Automation"
            >
              Leveraging technology to streamline and enhance business
              operations
            </OfferItem>
            <OfferItem color="purple" icon={"Icon6"} title=" Business Process">
              Streamlining workflows and maximizing efficiency through strategic
              business process optimization
            </OfferItem>
          </ProgressWrapper>
          <ProgressWrapper count={2} color="red" title="Competencies">
            <OfferItem
              icon="Icon1"
              title="Enterprise Resource Planning"
              color="red"
            >
              Integrated software that helps businesses manage core processes
              such as finance, human resources and supply chain in a unified
              system
            </OfferItem>
            <OfferItem icon="Icon2" title=" IOT & Cloud Computing" color="red">
              Connecting everyday objects to the internet to gather and exchange
              data for smarter applications
            </OfferItem>
            <OfferItem
              icon="Icon3"
              title="  Artificial Intelligence"
              color="red"
            >
              Technology simulating human-like intelligence to perform tasks
              learn and amke decisions autonomously
            </OfferItem>
            <OfferItem icon="Icon4" title="BlockChain" color="red">
              Blockchain is a decentralized digital ledger technology that
              securely records transactions across a network of computers
            </OfferItem>
            <OfferItem
              icon="Icon5"
              title="  Virtual & Argumented Reality"
              color="red"
            >
              Leveraging technology to streamline and enhance business
              operations
            </OfferItem>
            <OfferItem icon="Icon6" title=" Identity Governance" color="red">
              Streamlining workflows and maximizing efficiency through strategic
              business process optimization
            </OfferItem>
          </ProgressWrapper>
          <ProgressWrapper count={3} color="green" title="Industries">
            <OfferItem icon="Icon1" title="Retail & Ecommerce" color="green">
              Connecting consumers with products through online platforms and
              physical stores for convenient shopping experiences.
            </OfferItem>
            <OfferItem icon="Icon2" title="Health Care" color="green">
              The provision of medical services and assistance to promote
              physical and mental well-being
            </OfferItem>
            <OfferItem icon="Icon3" title="Telecommunication" color="green">
              Telecommunication is the exchange of information over a distance
              using electronic means.
            </OfferItem>
            <OfferItem icon="Icon4" title="Public Sector" color="green">
              Comprises government-owned and operated organization responsible
              for providing essential services and implementing policies for the
              benefit of society.
            </OfferItem>
            <OfferItem icon="Icon5" title="Fin Tech" color="green">
              Innovative technologies and software solutions disrupting and
              revolutionzing traditioinal financial services.
            </OfferItem>
            <OfferItem icon="Icon6" title="Education" color="green">
              The foundation for individual growth, societal progress, and
              collective enlightenment.
            </OfferItem>
          </ProgressWrapper>
        </div>
      </div>
    </div>
  );
};
OfferContainer.displayname = "OfferContainer";
export default OfferContainer;
