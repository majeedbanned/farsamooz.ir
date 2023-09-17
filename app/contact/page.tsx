import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-full h-screen flex justify-end">
      <div className=" m-12 w-full z-50 flex justify-start items-end flex-col">
        <h1 className="text-xl"> شرکت فناوری اطلاعات آرسیس </h1>
        <br />
        <br />
        <br />
        شماره های تماس
        <br />
        <a className="mt-4" href="07137210268">
          07137210268
        </a>
        <a className="mt-2" href="09177204118">
          09177204118
        </a>
        <p className="mt-4">تلگرام</p>
        <a className="mt-2" href="https://t.me/parsamoozINF">
          @parsamoozINF
        </a>
      </div>
    </div>
  );
}
