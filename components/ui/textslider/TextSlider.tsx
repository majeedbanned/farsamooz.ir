"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./Links";
type Props = {};
const slides = [
  {
    id: 1,
    title: " مدیریت مدرسه و آموزشگاه بر روی ابر ها",
    subtitle: `
اتوماسیون هوشمند پارس آموز مجموعه نرم افزاری است به منظور مدیریت فرایند های مختلف آموزشی و اطلاع رسانی یک واحد آموزشی

    `,
    buttonTitle: "order",
    image: "img 2",
  },
  {
    id: 2,
    title: "اپلیکیشن اختصاصی ",
    subtitle: `
    دسترسی به اپلیکیشن اختصاصی برای معلمین ، دانش آموزان و والدین و همچنین مدیر مدرسه یا آموزشگاه
    دسترسی سریع به اطلاعات 

    `,
    buttonTitle: "order",
    image: "img 3",
  },
  {
    id: 3,
    title: "دسترسی در بستر های مختلف",
    subtitle: `
  دسترسی به امکانات نرم افزار از طریق پنل وب ، اپلیکیشن اندروید و اپلیکیشن 
  IOS
  دریافت نوتیفیکیشن به محز ثبت وضعیت در اپلیکیشن معلمین

    `,
    buttonTitle: "order",
    image: "img 4",
  },
  {
    id: 4,
    title: "گزارشات مدیریتی",
    subtitle: `
گزارشات گوناگون مدیریتی از وضعیت آموزشی و انضباطی در پنل مدیریت
امکان چاپ گزارشات
دسترسی دانش آموزان به گزارشات حضور و غیاب و ارزشیابی های کلاسی  
      `,
    buttonTitle: "order",
    image: "img 5",
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
    const slideInterval = setInterval(next, 9000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex]);
  return (
    <div className="flex h-64 flex-col overflow-hidden lg:mt-12   ">
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
                className="leading-normal flex text-[#009B87] items-center  w-full space-y-4 justify-end sm:text-2xl text-2xl"
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
                className="leading-loose flex text-slate-600 rtl items-center mx-1 text-right my-2 justify-end  sm:text-xl  text-md"
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
              slideIndex === i ? "p-1 bg-[#009B87]" : ""
            }  transition-all w-5 h-5  border-2 rounded-full cursor-pointer border-green-700`}
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
  // exit: (direction: string) => ({
  //   opacity: 0,
  //   x: direction === "ltr" ? 150 : -150,
  // }),
};
