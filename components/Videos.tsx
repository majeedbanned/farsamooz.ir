"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Videos() {
  return (
    <div className="mx-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link
            title="آموزش آزمون های کاغذی و تصحیح پاسخنامه با دوربین موبایل در اپلیکیشن و نرم افزار مدارس پارس آموز"
            href={"/videos/paperexam"}
          >
            <Image
              //placeholder="blur"
              src="/images/تصحیح-پاسخنامه-با-دوربین-موبایل.png"
              alt={"تصحیح-پاسخنامه-با-دوربین-موبایل"}
              className="object-contain "
              width={400}
              height={700}
            ></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            title="آموزش احراز هویت در اپلیکیشن و نرم افزار مدارس پارس آموز"
            href={"/videos/login"}
          >
            <Image
              //placeholder="blur"
              src="/images/احراز.png"
              alt={" نرم افزار مدرسه"}
              className="object-contain "
              width={400}
              height={700}
            ></Image>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            title="آموزش دفتر کلاسی معلمین در اپلیکیشن و نرم افزار مدارس پارس آموز"
            href={"/videos/sheet"}
          >
            <Image
              src="/images/دفتر-کلاسی-معلمین.png"
              alt={
                "آموزش دفتر کلاسی معلمین در اپلیکیشن و نرم افزار مدارس پارس آموز"
              }
              className="object-contain "
              width={400}
              height={700}
            ></Image>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            title="آموزش دانلود و نصب  اپلیکیشن و نرم افزار مدارس پارس آموز"
            href={"/videos/download"}
          >
            <Image
              src="/images/دانلود-اپلیکیشن-پارس-آموز.png"
              alt={"آموزش دانلود و نصب اپلیکیشن و نرم افزار مدارس پارس آموز"}
              className="object-contain "
              width={400}
              height={700}
            ></Image>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            title=" گزارشات دانش آموزی در اپلیکیشن و نرم افزار مدارس پارس آموز"
            href={"/videos/reports"}
          >
            <Image
              src="/images/گزارشات-دانش-آموزی.png"
              alt={"گزارشات دانش آموزی در اپلیکیشن و نرم افزار مدارس پارس آموز"}
              className="object-contain "
              width={400}
              height={700}
            ></Image>
          </Link>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
