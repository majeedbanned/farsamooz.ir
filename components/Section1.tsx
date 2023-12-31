"use client";
import TextSlider from "@/components/ui/textslider/TextSlider";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import orange from "../public/images/pr2.png";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./ui/textslider/Links";

type Props = {};

export default function Section1({}: Props) {
  const [mounted, setMounted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [start, setStart] = useState("");

  const slides = [
    {
      rel: "پارس آموز نرم افزار هوشمند مدارس و مراکز آموزشی",
      imagew: 530,
      imageh: 530,
      id: 1,
      title: "ارسال نوتیفیکیشن و پیام کوتاه",
      subtitle:
        "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
      buttonTitle: "order",
      image: "/images/pr.png",
    },
    {
      rel: "پارس آموز نرم افزار هوشمند مدارس و مراکز آموزشی",

      imagew: 530,
      imageh: 530,
      id: 2,
      title: "ارسال نوتیفیکیشن و پیام کوتاه",
      subtitle:
        "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
      buttonTitle: "order",
      image: "/images/pr2.png",
    },
    {
      rel: "پارس آموز نرم افزار هوشمند مدارس و مراکز آموزشی",

      imagew: 530,
      imageh: 530,
      id: 3,
      title: "ارسال نوتیفیکیشن و پیام کوتاه",
      subtitle:
        "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
      buttonTitle: "order",
      image: "/images/ارسال-نوتیفیکیشن---نرم-افزار-مدارس.png",
    },

    {
      rel: "پارس آموز نرم افزار هوشمند مدارس و مراکز آموزشی",

      imagew: 530,
      imageh: 530,
      id: 4,
      title: "ارسال نوتیفیکیشن و پیام کوتاه",
      subtitle:
        "هبر انقلاب با بیان اینکه همه اقدامات مثبت دولت که با این زحمت انجام می‌گیرد، تحت‌الشعاع مشکلات معیشتی مثل گرانی مسکن و اجاره‌بها قرار می‌گیرد و این حیف است، گفت: عمده تحریم‌ها،‌ با هدف گروگان‌گرفتن معیشت مردم است؛ باید در کنار مذاکرات،‌ تحریم‌ها را خن",
      buttonTitle: "order",
      image: "/images/papa.png",
    },
  ];

  // const next = () => {
  //   setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  // };
  // useEffect(() => {
  //   setStart("");
  //   //    alert();
  // }, []);
  // useEffect(() => {
  //   const slideInterval = setInterval(next, 7000);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, [slideIndex, next]);
  // if (!mounted) return <></>;

  const nextImage = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 6000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);
  return (
    <div className="z-10  flex flex-col lg:flex-row sm:mx-8 mx-3 h-auto">
      <div className="flex flex-col relative  flex-1">
        {/* <AnimatePresence> */}

        <motion.div
          key={slideIndex}
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -700, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="  flex-1 grid-flow-row  h-[550px] "
        >
          <Image
            alt={slides[slideIndex]?.rel + " نرم افزار مدرسه"}
            //placeholder="blur"
            className=" sm:m-6   "
            src={slides[slideIndex]?.image || ""}
            // src={orange}
            width={slides[slideIndex]?.imagew}
            height={slides[slideIndex]?.imageh}
          ></Image>
        </motion.div>
        {/* </AnimatePresence> */}

        <div className="mb-8  rtl:text-right dark:text-white ">
          {/* <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
        <Counter dictionary={dictionary.counter} />
      </div> */}
        </div>
      </div>
      <div className="flex flex-col border-spacing-0 gap-2 flex-1">
        <div className="flex justify-end ">
          <h1 className="sm:mr-0 mt-16  text-center">
            پارس آموز نرم افزار هوشمند مدارس و مراکز آموزشی
          </h1>
        </div>
        <TextSlider></TextSlider>
        <Links></Links>

        {/* <div className="mb-8  rtl:text-right text-red-600 dark:text-white "></div> */}
      </div>
    </div>
  );
}
