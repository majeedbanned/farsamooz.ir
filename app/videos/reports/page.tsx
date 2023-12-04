"use client";
import React from "react";
import ReactPlayer from "react-player";
type Props = {};
const src = "https://dl.farsamooz.ir/hlp/reports.mp4";

export default function page({}: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: " گزارشات دانش آموزی برای مدیر و معاونین در نرم افزار مدرسه پارس آموز",
    description:
      " گزارشات دانش آموزی برای مدیر و معاونین در نرم افزار مدرسه پارس آموز",
    thumbnailUrl:
      "https://farsamooz.ir/_next/image?url=%2Fimages%2F%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%D8%A7%D8%AA-%D8%AF%D8%A7%D9%86%D8%B4-%D8%A2%D9%85%D9%88%D8%B2%DB%8C.png&w=828&q=75",
    uploadDate: "2023-01-01T12:00:00Z",
    duration: "PT10M30S",
    embedUrl: "https://arsamooz.ir/videos/reports",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "http://schema.org/WatchAction" },
      userInteractionCount: 12345,
    },
    author: {
      "@type": "Person",
      name: "مجید قاسمی",
    },
  };

  return (
    <div className="w-full h-[1024px] flex justify-end">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="  m-2 w-full h-screen z-50 flex justify-start items-center flex-col">
        <h1 className="lg:text-3xl text-xl leading-3 text-center text-[#278faf]">
          گزارشات دانش آموزی برای مدیر و معاونین در اپلیکیشن و نرم افزار مدارس
          پارس آموز
        </h1>
        <ReactPlayer
          width="100%"
          height="600px"
          playing={true}
          controls={true}
          url="https://dl.farsamooz.ir/hlp/reports.mp4"
        />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
