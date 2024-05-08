import React from "react";
import { Img, Text, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} w-[97%] md:w-full ml-2 md:ml-0`}>
      <div className="flex w-full flex-col gap-[39px]">
        <div className="flex items-start justify-between gap-5 sm:flex-col">
          <div className="mt-1 flex items-center gap-5">
            <a href="#">
              <Img src="images/img_megaphone.svg" alt="megaphone image" className="mb-1 h-[24px] w-[23px] self-end" />
            </a>
            <div className="flex flex-wrap items-center">
              <Text size="3xl" as="p" className="!text-blue_gray-800">
                Welcome back,{" "}
              </Text>
              <Text size="3xl" as="p" className="self-start !font-racingsansone !text-blue_gray-800">
                John vick
              </Text>
              <a href="#">
                <Img src="images/img_.svg" alt="profile image" className="ml-1.5 h-[28px]" />
              </a>
            </div>
          </div>
          <div className="flex w-[21%] items-start justify-center gap-3 sm:w-full">
            <div className="flex flex-1 items-start justify-between gap-5">
              <div className="w-[29%] rounded-[24px] border-2 border-solid border-red-A100 p-1">
                <a href="#">
                  <Img
                    src="images/img_rectangle_9.png"
                    alt="profile circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                </a>
              </div>
              <div className="flex flex-col items-start">
                <Heading size="lg" as="h6" className="!text-blue_gray-800">
                  Samantha
                </Heading>
                <Text size="lg" as="p" className="!text-blue_gray-300_99">
                  +998 (99) 436-46-15
                </Text>
              </div>
            </div>
            <a href="#">
              <Img src="images/img_majesticons_door_exit.svg" alt="exit icon" className="mt-[5px] h-[33px] w-[34px]" />
            </a>
          </div>
        </div>
        <div className="container-xs h-px bg-gray-50 md:p-5" />
      </div>
    </header>
  );
}
