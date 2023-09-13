"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
type Props = {};
const slides = [
  {
    imagew: 600,
    imageh: 600,
    id: 1,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image:
      "/images/111ارسال پیام نرم افزار مدارس اتوماسیون هوشمند پارس آموز" +
      ".png",
  },
  {
    imagew: 600,
    imageh: 600,
    id: 2,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image:
      "/images/ارسال پیام نرم افزار مدارس اتوماسیون هوشمند پارس آموز2" + ".png",
  },
  {
    imagew: 800,
    imageh: 800,
    id: 3,
    title: "ارسال نوتیفیکیشن و پیام کوتاه",
    subtitle:
      "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
    buttonTitle: "order",
    image:
      "/images/ارسال پیام نرم افزار مدارس اتوماسیون هوشمند پارس آموز1" + ".png",
  },
];

function getBodyDirection() {
  return "ltr";
  const bodyElement = document.getElementsByTagName("body")[0];
  const computedStyle = window.getComputedStyle(bodyElement);
  return computedStyle.direction;
}
export default function Message({}: Props) {
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setIsSliding(true);
    setSwipeDirection(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSliding) return;

    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSliding) return;

    const deltaX = currentX! - startX!;

    // You can adjust the threshold to determine when to trigger the slide
    const threshold = 50;

    if (deltaX < -threshold) {
      // User has swiped left
      setSwipeDirection("left");
      next();
    } else if (deltaX > threshold) {
      // User has swiped right
      pre();
      setSwipeDirection("right");
    }

    // Reset the state if not enough swipe to either side
    setIsSliding(false);
  };

  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    setSlideIndex((slideIndex) =>
      slideIndex === slides.length - 1 ? 0 : slideIndex + 1
    );
  };
  const pre = () => {
    setSlideIndex((slideIndex) =>
      slideIndex === 0 ? slides.length - 1 : slideIndex - 1
    );
  };
  // useEffect(() => {
  //   const slideInterval = setInterval(next, 4000);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, [slideIndex]);
  return (
    <div className="flex flex-col overflow-hidden h-auto sm:h-screen bg-[#c6ecff]  ">
      <div className="flex flex-1  relative w-full p-0  overflow-hidden lg:flex-row-reverse flex-col    ">
        <div className=" flex flex-1 h-auto flex-col gap-4  border-0">
          {/* <AnimatePresence> */}
          <motion.div
            key={slideIndex}
            variants={variants}
            custom={getBodyDirection()}
            initial="enter"
            animate="center"
            exit="exit"
            className="   border-red-400 flex justify-center items-center  flex-1 flex-col overflow-hidden  h-auto"
          >
            <div className="border-0 mx-2 mt-8  sm:mx-12">
              <h2 className="text-2xl mb-8 text-center text-[#0285c6]">
                {slides[slideIndex]?.title}
              </h2>
              <div
                className="text-end flex text-[#1184bd] flex-1 items-center px-2 my-2 mb-4 justify-start  w-full sm:text-lg text-md "
                key={slideIndex}
              >
                {slides[slideIndex]?.subtitle}
              </div>
            </div>
          </motion.div>

          {/* </AnimatePresence> */}
        </div>

        <div className="  flex p-2  items-center justify-center flex-row  lg:flex-col gap-5">
          {slides.map((slide, i) => (
            <div
              onClick={() => setSlideIndex(i)}
              className={`  ${
                slideIndex === i ? "p-1 bg-[#47bffd]" : ""
              }  transition-all w-5 h-5  border-2 rounded-full cursor-pointer border-slate-400`}
              key={slide?.id}
            ></div>
          ))}
        </div>
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="h-auto   border-yellow-700 flex flex-1 justify-center items-center"
        >
          {/* {slides[slideIndex].image} */}
          <Image
            //placeholder="blur"
            src={slides[slideIndex]?.image || ""}
            alt=""
            className="object-contain  "
            width={slides[slideIndex]?.imagew}
            height={slides[slideIndex]?.imageh}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          ></Image>
        </motion.div>
      </div>
    </div>
  );
}

let variants = {
  enter: (direction: string) => ({
    x: direction === "ltr" ? -500 : 500,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: string) => ({
    opacity: 0,
    x: direction === "ltr" ? 100 : -100,
  }),
};
