import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default function Features({}: Props) {
  return (
    <div className="flex flex-row flex-wrap sm:gap-6 gap-2 mb-8 sm:mx-10 mx-2 justify-center items-center">
      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-36 rounded-tr-[55px] text-sm text-[#3f662c] rounded-xl bg-[#dff4b6]">
        <MusicalNoteIcon className="w-8 h-8 text-[#3f662c]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>

      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#796c63] rounded-xl bg-[#ffe5d3]">
        <MusicalNoteIcon className="w-8 h-8 text-[#796c63]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>

      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#b68901] rounded-xl bg-[#ffebaf]">
        <MusicalNoteIcon className="w-8 h-8 text-[#b68901]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>

      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#67639d] rounded-xl bg-[#d3d0ff]">
        <MusicalNoteIcon className="w-8 h-8 text-[#67639d]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>
      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#8b6400] rounded-xl bg-[#fce098]">
        <MusicalNoteIcon className="w-8 h-8 text-[#8b6400]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>

      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#67639d] rounded-xl bg-[#d0f6ff]">
        <MusicalNoteIcon className="w-8 h-8 text-[#67639d]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>
      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#67639d] rounded-xl bg-[#d8ffd0]">
        <MusicalNoteIcon className="w-8 h-8 text-[#67639d]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>
      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#67639d] rounded-xl bg-[#f2ffd0]">
        <MusicalNoteIcon className="w-8 h-8 text-[#67639d]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>
      <div className="flex gap-5 flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 text-sm text-[#67639d] rounded-xl bg-[#ffd0e8]">
        <MusicalNoteIcon className="w-8 h-8 text-[#67639d]"></MusicalNoteIcon>
        <p>اطلاع رسانی</p>
      </div>
    </div>
  );
}
