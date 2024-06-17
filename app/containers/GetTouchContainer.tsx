import React from "react";

import DropShadow from "../components/DropShadow";
import ContactForm from "../components/ContactForm";

const GetTouchContainer = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    className="get-touch py-[46px] md:py-[110px] px-[25px] md:px-[200px] text-center bg-main-back flex flex-col items-center"
    id="contact"
    ref={ref}
  >
    <div className="get-touch-title text-containerTitleDescription md:text-miniTitle text-main-reed font-medium flex justify-center">
      Get in &nbsp; <DropShadow color="red">Touch</DropShadow>
    </div>
    <div className="mt-[52px]">
      <h3 className="form-title text-containerTitleDescription md:text-miniTitle">
        Let&apos;s Connect and Kick Start <br className="hidden md:block" /> Your Project!!!
      </h3>
      <p className="description text-description md:text-mini mt-[32px]">
        I&apos;m here to chat, advise and help you achieve <br className="hidden md:block" /> your dreams. Schedule your
        call today.
      </p>
      <ContactForm></ContactForm>
    </div>
  </div>
));

GetTouchContainer.displayName = "GetTouchContainer";

export default GetTouchContainer;
