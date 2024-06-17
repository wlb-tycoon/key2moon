import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import DropShadow from "../components/DropShadow";
import BlogItem from "../components/Items/BlogItem";

const BlogContainer = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    className="blog bg-main-back pt-[46px] md:pt-[100px] px-7 sm:px-[100px]"
    id="blog"
    ref={ref}
  >
    <div className="text-containerTitleDescription md:text-miniTitle flex justify-center">
      Our &nbsp; <DropShadow color="green">Blogs</DropShadow>
    </div>
    <div className="flex justify-center">
      <div className="content flex flex-col items-end ">
        <BlogItem imgURL="">
          Excellent variety. I would recommend this for anyone who wants totry a
          perfume without breaking the bank or being stuck with a secent that
          you cannot stand
        </BlogItem>
        <div className="move-control flex mt-[54px] max-w-fit items-center">
          <button className="prev rounded-[10.35px] p-[10px]">
            {" "}
            <ChevronLeftIcon className="w-6  text-black"></ChevronLeftIcon>{" "}
          </button>
          <div className="w-6 h-[1px] bg-main-green mx-3"></div>
          <button className="next rounded-[10.35px] p-[10px]">
            <ChevronRightIcon className="w-6  text-black"></ChevronRightIcon>
          </button>
        </div>
      </div>
    </div>
  </div>
));

BlogContainer.displayName = "BlogContainer";

export default BlogContainer;
