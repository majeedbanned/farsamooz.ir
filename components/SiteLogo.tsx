"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/پارس آموز اتوماسیون نرم افزار هوشمند مدارس.png";
type Props = {
  dictionary: {
    maintitle: string;
    subtitle: string;
  };
};

export default function SiteLogo() {
  return (
    <div className="flex space-x-2">
      <div className=" border border-gray-600  rtl:bg-gray-600 w-12 h-12  rounded-full">
        <Image
          //placeholder="blur"
          src={logo}
          alt=""
          className="object-contain  "
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="relative">
        <div
          className="uppercase  
            dark:rtl:text-slate-400 
            dark:ltr:text-slate-700
            ltr:text-slate-700
            rtl:text-slate-600
          text-lg  font-bold antialiased"
        >
          پـــارس آمـــوز
        </div>
        <div
          className="
         dark:rtl:text-slate-400 
         dark:ltr:text-slate-700
         ltr:text-slate-700
         rtl:text-slate-600
         sm:text-sm
         text-[12px]
         font-extralight
        pt-[-14px] antialiased"
        >
          اتوماسیون هوشمند مراکز آموزشی
        </div>
      </div>
    </div>
  );
}
