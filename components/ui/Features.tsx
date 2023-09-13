import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Features({}: Props) {
  return (
    <div className="flex flex-row-reverse flex-wrap sm:gap-6 gap-2 mb-8 sm:mx-10 mx-2 justify-center items-center">
      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Notif">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/ارسال نوتیفیکیشن نرم افزار مدارس.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">اطلاع رسانی</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Daftar">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/دفتر-کلاسی.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">دفتر کلاسی</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Azmoon">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/آزمون-آنلاین.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">آزمون آنلاین</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Message">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/پیام-ها020-mail.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">ارسال پیام</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Bankq">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/بانک-سیوال018-library.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">بانک سوال</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Forms">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/فرم-ساز95-list.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">فرم ساز </p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Events">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/رویداد-ها068-notepad.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">رویداد ها</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Barname">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/برنامه-هفتگی067-reminder.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">برنامه کلاسی</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
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
      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Reports">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/گزارشات039-online-test.png"
          ></Image>
        </a>
        <p className="text-[#009B87]"> گزارشات</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Bankf">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/بانک-فایل057-attachment.png"
          ></Image>
        </a>
        <p className="text-[#009B87]"> بانک فایل</p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl ">
        <a href="#Info">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[75px]"
            src="/images/icons/ارزشیابی-کلاسی061-student-grades.png"
          ></Image>
        </a>
        <p className="text-[#009B87]">ورود اطلاعات</p>
      </div>
    </div>
  );
}
