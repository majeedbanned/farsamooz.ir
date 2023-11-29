"use client";
import React from "react";
import ReactPlayer from "react-player";
type Props = {};
const src = "https://dl.farsamooz.ir/hlp/sheet.mp4";

export default function page({}: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: " آموزش دفتر کلاسی برای معلمین در نرم افزار مدرسه پارس آموز",
    description:
      "  آموزش دفتر کلاسی برای معلمین در اپلیکیشن و نرم افزار مدارس پارس آموز.",
    thumbnailUrl:
      "https://farsamooz.ir/_next/image?url=%2Fimages%2F%D8%AF%D9%81%D8%AA%D8%B1-%DA%A9%D9%84%D8%A7%D8%B3%DB%8C-%D9%85%D8%B9%D9%84%D9%85%DB%8C%D9%86.png&w=828&q=75",
    uploadDate: "2023-01-01T12:00:00Z",
    duration: "PT10M30S",
    embedUrl: "https://arsamooz.ir/videos/sheet",
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
        <h1 className="lg:text-3xl text-lg">
          آموزش دفتر کلاسی برای معلمین در اپلیکیشن و نرم افزار مدارس پارس آموز
        </h1>
        <ReactPlayer
          width="100%"
          height="600px"
          playing={true}
          controls={true}
          url="https://dl.farsamooz.ir/hlp/sheet.mp4"
        />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
