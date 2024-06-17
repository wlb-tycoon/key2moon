import React, { useState } from "react";
import axios from "axios";
import { Poppins } from "next/font/google";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpinner from "./LoadingSpinner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      topic,
      message,
    };
    setLoading(true);
    axios
      .post("/api/send", data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Successfully Submitted!");
          setName("");
          setEmail("");
          setTopic("");
          setMessage("");
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error("Whops, Error occured!!!");
        setLoading(false);
      });
  };

  return (
    <form
      className="get-touch-form mt-[52px] px-[34.56px] py-[16.72px] md:p-10 rounded-[15px] max-w-[560px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <ToastContainer />
      <div className="flex flex-col justify-start mb-6">
        <p className="text-[11.14px] sm:text-mini text-left">Name</p>
        <input
          type="text"
          placeholder="Hello..."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-0 border-b-[1px] border-b-white outline-0 bg-main-back mt-6 text-[7.25px]/[8.83px] sm:text-[13px]/[15.85px] px-0 ring-transparent focus:ring-transparent focus:border-white"
        />
      </div>
      <div className="flex flex-col justify-start mb-6">
        <p className="text-[11.14px] sm:text-mini text-left">Email ID</p>
        <input
          type="email"
          placeholder="Where should I reply?"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-0 border-b-[1px] border-b-white outline-0 bg-main-back mt-6 text-[7.25px]/[8.83px] sm:text-[13px]/[15.85px] px-0 focus:outline-none ring-transparent focus:ring-transparent focus:border-white"
        />
      </div>
      <div className="flex flex-col justify-start mb-6">
        <p className="text-[11.14px] sm:text-mini text-left">Interested Topic</p>
        <input
          type="text"
          placeholder="Which topic are you interested?"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border-0 border-b-[1px] border-b-white outline-0 bg-main-back mt-6 text-[7.25px]/[8.83px] sm:text-[13px]/[15.85px] px-0 ring-transparent focus:ring-transparent focus:border-white"
        />
      </div>
      <div className="flex flex-col justify-start mb-6">
        <p className="text-[11.14px] sm:text-mini text-left">Message</p>
        <input
          type="text"
          placeholder="I want a help for..."
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-0 border-b-[1px] border-b-white outline-0 bg-main-back mt-6 text-[7.25px]/[8.83px] sm:text-[13px]/[15.85px] px-0 ring-transparent focus:ring-transparent focus:border-white"
        />
      </div>

      <button
        className={`${poppins.className} bg-white text-[8.92px] sm:text-base text-center py-[6.7px] md:py-3 ml-[70%]  sm:ml-[65%] px-[14px] md:px-[25px] mt-12 rounded-[25px] border-[1px] border-white text-black flex justify-center items-center`}
      >
        {loading ? (
          <LoadingSpinner>Sending</LoadingSpinner>
        ) : (
          <>
            Submit <ChevronRightIcon className="md:w-6 md:h-6 w-[13.94px] h-[13.94px]"></ChevronRightIcon>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
