"use client";
import React from "react";

type Props = {
  dictionary: {
    maintitle: string;
    subtitle: string;
  };
};

export default function SiteLogo() {
  return (
    <div className="flex space-x-2">
      <div className="bg-white  rtl:bg-gray-600 w-12 h-12  rounded-full"></div>
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
         font-extralight
        pt-[-14px] antialiased"
        >
          اتوماسیون هوشمند مراکز آموزشی
        </div>
      </div>
    </div>
  );
}
