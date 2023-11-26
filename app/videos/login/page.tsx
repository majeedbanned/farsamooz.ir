"use client";
import React from "react";
import ReactPlayer from "react-player";
type Props = {};
const src = "https://dl.farsamooz.ir/hlp/login.mp4";

export default function page({}: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: "احراز هویت در نرم افزار مدرسه پارس آموز",
    description: "آموزش احراز هویت در اپلیکیشن و نرم افزار مدارس پارس آموز.",
    thumbnailUrl: "https://farsamooz.ir/",
    uploadDate: "2023-01-01T12:00:00Z",
    duration: "PT10M30S",
    embedUrl: "https://arsamooz.ir/videos/login",
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
    <div className="w-full h-screen flex justify-end">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className=" m-2 w-full z-50 flex justify-start items-end flex-col">
        <h1>آموزش احراز هویت در اپلیکیشن و نرم افزار مدارس پارس آموز</h1>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          controls={true}
          url="https://dl.farsamooz.ir/hlp/login.mp4"
        />
      </div>
    </div>
  );
}
