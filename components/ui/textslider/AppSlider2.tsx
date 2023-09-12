"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
type Props = {};
const slides = [
  {
    id: 1,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image: "/images/pr.png",
  },
  {
    id: 2,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image: "/images/pr2.png",
  },
  {
    id: 3,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image: "/images/3.webp",
  },
];

function getBodyDirection() {
  return "ltr";
  const bodyElement = document.getElementsByTagName("body")[0];
  const computedStyle = window.getComputedStyle(bodyElement);
  return computedStyle.direction;
}
export default function AppSlider2({}: Props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const next = () => {
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  };
  // useEffect(() => {
  //   const slideInterval = setInterval(next, 4000);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, [slideIndex]);
  return (
    <div className="flex bg-[#efe816] py-10 flex-col overflow-hidden h-screen  ">
      <div className="flex flex-1  relative w-full p-4  overflow-hidden lg:flex-row flex-col    ">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-auto   border-yellow-700 flex flex-1 justify-center items-center"
        >
          {/* {slides[slideIndex].image} */}
          <Image
            //placeholder="blur"
            src={slides[slideIndex].image}
            alt=""
            className="object-contain max-h-[630px]"
            width={580}
            height={580}
          ></Image>
        </motion.div>
        <div className="  flex p-2  items-center justify-center flex-row  lg:flex-col gap-5">
          {slides.map((slide, i) => (
            <div
              onClick={() => setSlideIndex(i)}
              className={`  ${
                slideIndex === i ? "p-1 bg-orange-500" : ""
              }  transition-all w-5 h-5  border-2 rounded-full cursor-pointer border-slate-400`}
              key={slide.id}
            ></div>
          ))}
        </div>

        <div className=" flex flex-1 h-auto flex-col gap-4  border-0">
          <motion.div
            key={slideIndex}
            variants={variants}
            custom={getBodyDirection()}
            initial="enter"
            animate="center"
            exit="exit"
            className="   border-red-400 flex justify-center items-center  flex-1 flex-col overflow-hidden  h-auto"
          >
            <div className="border-0 mx-12">
              <h2 className="text-2xl text-end text-slate-600">
                {slides[slideIndex].title}
              </h2>
              <div
                className="text-end flex text-slate-500 flex-1 items-center  my-2 justify-start  w-full  text-lg"
                key={slideIndex}
              >
                {slides[slideIndex].subtitle}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

let variants = {
  enter: (direction: string) => ({
    x: direction === "ltr" ? 500 : -500,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: string) => ({
    opacity: 0,
    x: direction === "ltr" ? -100 : 100,
  }),
};
