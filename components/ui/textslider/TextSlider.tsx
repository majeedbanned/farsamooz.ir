"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./Links";
type Props = {};
const slides = [
  {
    id: 1,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle: "ارسال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتا 2",
    buttonTitle: "order",
    image: "img 2",
  },
  {
    id: 2,
    title: "راه کار جامع مدیریت مراکز آموزشی",
    subtitle: "ارسال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتا 2",
    buttonTitle: "order",
    image: "img 3",
  },
  {
    id: 3,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle: "ارسال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتا 2",
    buttonTitle: "order",
    image: "img 4",
  },
  {
    id: 4,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle: "ارسال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتا 2",
    buttonTitle: "order",
    image: "img 5",
  },
  {
    id: 5,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "ل نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتال نوتیفیکیشن و پیام کوتاارسال نوتیفیکیشن و پیام کوتا 2",
    buttonTitle: "order",
    image: "img 6",
  },
];

function getBodyDirection() {
  return "ltr";
  const bodyElement = document.getElementsByTagName("body")[0];
  const computedStyle = window.getComputedStyle(bodyElement);
  return computedStyle.direction;
}
export default function TextSlider({}: Props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const next = () => {
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  };
  useEffect(() => {
    // alert();
    const slideInterval = setInterval(next, 7000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex]);
  return (
    <div className="flex h-64 flex-col overflow-hidden lg:mt-32   ">
      <div
        className="flex  flex-1 relative  w-full p-0  overflow-hidden
      flex-col
      "
      >
        <div className="w-full  ">
          <AnimatePresence>
            <motion.div
              key={"a" + slideIndex}
              variants={variants}
              custom={getBodyDirection()}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute   w-full h-auto"
            >
              <motion.h2
                className=" flex text-[#098dbd] items-center  w-full space-y-4 justify-end sm:text-3xl text-2xl"
                key={"c" + slideIndex}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={getBodyDirection()}
                //   transition={{ damping: 10 }}
              >
                {slides[slideIndex].title}
              </motion.h2>

              <motion.h2
                className=" flex text-slate-600 items-center mx-1 text-right my-2 justify-end  sm:text-xl  text-md"
                key={"d" + slideIndex}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={getBodyDirection()}
                transition={{ delay: 0.1 }}
              >
                {slides[slideIndex].subtitle}
              </motion.h2>
              {/* <motion.h2
                className=" flex items-center text-right justify-end my-2 w-full  text-xl"
                key={slideIndex}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={getBodyDirection()}
                transition={{ delay: 0.2 }}
              >
                {slides[slideIndex].buttonTitle}
              </motion.h2> */}
              {/* <img
              src="../../../public/images/logo.png"
              alt="hi"
              className="w-12 h-12"
            /> */}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* <motion.div
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-red-100 w-1/3 absolute right-0 top-24"
        >
          {slides[slideIndex].image}
        </motion.div> */}
      </div>
      <div className=" flex p-2 h-6 items-center justify-end flex-row space-x-5 ">
        {slides.map((slide, i) => (
          <div
            onClick={() => setSlideIndex(i)}
            className={`  ${
              slideIndex === i ? "p-1 bg-orange-500" : ""
            }  transition-all w-5 h-5  border-2 rounded-full cursor-pointer border-slate-400`}
            key={"b" + slide.id}
          ></div>
        ))}
      </div>
    </div>
  );
}

let variants = {
  enter: (direction: string) => ({
    x: direction === "ltr" ? -200 : 200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: string) => ({
    opacity: 0,
    x: direction === "ltr" ? 150 : -150,
  }),
};
