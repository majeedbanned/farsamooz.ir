"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
type Props = {};
const slides = [
  {
    rel: "  قابلیت طراحی انواع فرم  جهت جمع آوری اطلاعات و دریافت تکالیف    ",

    imagew: 650,
    imageh: 650,
    id: 1,
    title: "فرم ساز ",
    subtitle: `
  قابلیت طراحی انواع فرم  جهت جمع آوری اطلاعات و دریافت تکالیف ✓
  دسترسی به فرم ها از طریق اپلیکیشن و وب ✓
  دسته بندی فرم ها با توجه به موضوع ✓ 
  تعریف فرم های ثابت و با قابلیت یکبار ثبت ✓
  گزارش گیری از اطلاعات دریافت شده ✓
  
    `,
    buttonTitle: "order",
    image:
      "/images/فرم ساز نرم افزار مدارس اتوماسیون هوشمند پارس آموز" + ".png",
  },
  {
    rel: "مشاهده لیست فرمای اختصاصی هر دانش آموز در دسته بندی های مختلف بر روی اپلیکیشن هوشمند    ",

    imagew: 400,
    imageh: 400,
    id: 2,
    title: "فرم ساز ",
    subtitle: `
مشاهده لیست فرمای اختصاصی هر دانش آموز در دسته بندی های مختلف بر روی اپلیکیشن هوشمند
  
    
    `,
    image:
      "/images/فرم-ساز-نرم-افزار-مدارس-اتوماسیون-هوشمند-پارس-آموز1" + ".png",
  },
  {
    rel: "    مشاهده لیست فرمای اختصاصی هر دانش آموز در دسته بندی های مختلف بر روی اپلیکیشن هوشمند    ",

    imagew: 400,
    imageh: 400,
    id: 3,
    title: "فرم ساز ",
    subtitle: `
    مشاهده لیست فرمای اختصاصی هر دانش آموز در دسته بندی های مختلف بر روی اپلیکیشن هوشمند ✓
    `,
    buttonTitle: "order",
    image:
      "/images/فرم-ساز-نرم-افزار-مدارس-اتوماسیون-هوشمند-پارس-آموز2" + ".png",
  },
  {
    rel: "استفاده از کنترل های مختلف نظیر  کادر متنی  ، لیست انتخابی ،ویرایشگر متن ، چک باکس ، تاریخ و بارگزاری فایل    ",

    imagew: 400,
    imageh: 400,
    id: 4,
    title: "فرم ساز ",
    subtitle: `
استفاده از کنترل های مختلف نظیر  کادر متنی  ، لیست انتخابی ،ویرایشگر متن ، چک باکس ، تاریخ و بارگزاری فایل ✓
  
    `,
    buttonTitle: "order",
    image:
      "/images/فرم-ساز-نرم-افزار-مدارس-اتوماسیون-هوشمند-پارس-آموز3" + ".png",
  },

  {
    rel: "قابلیت تعریف تنظیمات و دسترسی های مختلف بر روی فرم ها    ",

    imagew: 400,
    imageh: 400,
    id: 5,
    title: "فرم ساز ",
    subtitle: `
قابلیت تعریف تنظیمات و دسترسی های مختلف بر روی فرم ها ✓
قابلیت تعریف فرم  توسط معلمین برای کلاس اختصاصی خود ✓
    
    `,
    buttonTitle: "order",
    image:
      "/images/فرم-ساز-نرم-افزار-مدارس-اتوماسیون-هوشمند-پارس-آموز4" + ".png",
  },
];

function getBodyDirection() {
  return "ltr";
  const bodyElement = document.getElementsByTagName("body")[0];
  const computedStyle = window.getComputedStyle(bodyElement);
  return computedStyle.direction;
}
export default function Forms({}: Props) {
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
    <div className="flex flex-col overflow-hidden h-auto sm:h-screen bg-[#a3ecc2]  ">
      <div className="flex flex-1  relative w-full p-0  overflow-hidden lg:flex-row flex-col    ">
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
            alt={slides[slideIndex]?.rel + " نرم افزار مدرسه"}
            className="object-contain  "
            width={slides[slideIndex]?.imagew}
            height={slides[slideIndex]?.imageh}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          ></Image>
        </motion.div>
        <div className="  flex p-2  items-center justify-center flex-row  lg:flex-col gap-5">
          {slides.map((slide, i) => (
            <div
              onClick={() => setSlideIndex(i)}
              className={`  ${
                slideIndex === i ? "p-1 bg-[#239753]" : ""
              }  transition-all w-5 h-5  border-2 rounded-full cursor-pointer border-[#239753]`}
              key={slide?.id}
            ></div>
          ))}
        </div>
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
              <h2 className="text-2xl mb-8 text-center text-[#068f3f]">
                {slides[slideIndex]?.title}
              </h2>
              <div
                className="text-end flex  text-[#166f3b] flex-1 items-center px-2 my-2 mb-4 justify-start  w-full sm:text-lg text-md "
                key={slideIndex}
                style={{ whiteSpace: "pre-line" }}
              >
                {slides[slideIndex]?.subtitle}
              </div>
            </div>
          </motion.div>

          {/* </AnimatePresence> */}
        </div>
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
