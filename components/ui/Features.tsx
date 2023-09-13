import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Features({}: Props) {
  return (
    <div className="flex flex-row-reverse flex-wrap sm:gap-6 gap-2 mb-8 sm:mx-10 mx-2 justify-center items-center">
      <a href="#Notif">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/ارسال نوتیفیکیشن نرم افزار مدارس.png"
          ></Image>

          <p className="text-[#009B87]">اطلاع رسانی</p>
        </div>
      </a>
      <a href="#Daftar">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/دفتر-کلاسی.png"
          ></Image>

          <p className="text-[#009B87]">دفتر کلاسی</p>
        </div>
      </a>
      <a href="#Azmoon">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/آزمون-آنلاین.png"
          ></Image>

          <p className="text-[#009B87]">آزمون آنلاین</p>
        </div>{" "}
      </a>
      <a href="#Message">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/پیام-ها020-mail.png"
          ></Image>

          <p className="text-[#009B87]">ارسال پیام</p>
        </div>
      </a>
      <a href="#Bankq">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/بانک-سیوال018-library.png"
          ></Image>

          <p className="text-[#009B87]">بانک سوال</p>
        </div>{" "}
      </a>
      <a href="#Forms">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/فرم-ساز95-list.png"
          ></Image>

          <p className="text-[#009B87]">فرم ساز </p>
        </div>
      </a>
      <a href="#Events">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/رویداد-ها068-notepad.png"
          ></Image>

          <p className="text-[#009B87]">رویداد ها</p>
        </div>{" "}
      </a>
      <a href="#Barname">
        <div className="flex gap-2  hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/برنامه-هفتگی067-reminder.png"
          ></Image>

          <p className="text-[#009B87]">برنامه کلاسی</p>
        </div>
      </a>

      <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Story">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/105-video-conference.png"
          ></Image>
        </a>
        <p className="text-[#009B87]"> استوری</p>
      </div>
      <a href="#Reports">
        {" "}
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/گزارشات039-online-test.png"
          ></Image>

          <p className="text-[#009B87]"> گزارشات</p>
        </div>
      </a>
      <a href="#Bankf">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/بانک-فایل057-attachment.png"
          ></Image>

          <p className="text-[#009B87]"> بانک فایل</p>
        </div>
      </a>
      <a href="#Info">
        <div className="flex gap-2 hover:shadow-xl flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/ارزشیابی-کلاسی061-student-grades.png"
          ></Image>

          <p className="text-[#009B87]">ورود اطلاعات</p>
        </div>{" "}
      </a>
    </div>
  );
}
