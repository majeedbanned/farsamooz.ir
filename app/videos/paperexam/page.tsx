"use client";
import React from "react";
import ReactPlayer from "react-player";
type Props = {};
const src = "https://dl.farsamooz.ir/hlp/paperexam.mp4";

export default function page({}: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: " آموزش آزمون های کاغذی و تصحیح پاسخنامه با دوربین موبایل",
    description:
      "  چگونه در کوتاه ترین زمان یک آزمون کاغذی برگزار کنیم و با دوربین موبایل خود پاسخنامه ها را تصحیح کنیم.",
    thumbnailUrl:
      "https://farsamooz.ir/_next/https://farsamooz.ir/_next/image?url=%2Fimages%2F%D8%AA%D8%B5%D8%AD%DB%8C%D8%AD-%D9%BE%D8%A7%D8%B3%D8%AE%D9%86%D8%A7%D9%85%D9%87-%D8%A8%D8%A7-%D8%AF%D9%88%D8%B1%D8%A8%DB%8C%D9%86-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84.png&w=828&q=75",
    uploadDate: "2023-01-01T12:00:00Z",
    duration: "PT10M30S",
    embedUrl: "https://arsamooz.ir/videos/paperexam",
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
    <div className="w-full h-[2024px] flex justify-end">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="  m-2 w-full h-screen z-50 flex justify-start items-center flex-col">
        <h1 className="lg:text-3xl text-xl leading-3 text-center text-[#278faf]">
          آموزش آزمون های کاغذی و تصحیح پاسخنامه با دوربین موبایل
        </h1>
        <ReactPlayer
          width="100%"
          height="600px"
          playing={true}
          controls={true}
          url="https://dl.farsamooz.ir/hlp/paperexam.mp4"
        />

        <div className="container text-right mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold border-b-2 pb-2 mb-6">
            پارس آموز: مدیریت هوشمند مدرسه
          </h1>

          <h2 className="text-2xl font-bold mt-4 mb-2">مقدمه </h2>
          <p className="text-base mb-4">
            در دنیای مدرن، فناوری نقش حیاتی در تمامی جنبه‌های زندگی ما ایفا
            می‌کند. در عرصه آموزش، اپلیکیشن‌ها و برنامه‌های هوشمند مثل پارس آموز
            انقلابی در نحوه مدیریت و اجرای فرآیندهای آموزشی ایجاد کرده‌اند. این
            فناوری‌ها نه تنها سبب بهبود کیفیت آموزش می‌شوند بلکه زمان و
            هزینه‌های مرتبط با آموزش را نیز به طور قابل توجهی کاهش می‌دهند.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">ویژگی‌های جدید</h2>
          <p className="text-base mb-4">
            پارس آموز به عنوان یک اپلیکیشن پیشرو، با ادغام فناوری‌های نوین مانند
            هوش مصنوعی و تجزیه و تحلیل داده‌ها، امکانات گسترده‌ای را برای معلمان
            فراهم می‌آورد. این قابلیت‌ها شامل طراحی آزمون‌ها، اسکن خودکار
            پاسخنامه‌ها، تصحیح و تحلیل نتایج است. با استفاده از الگوریتم‌های
            پیشرفته، این اپلیکیشن توانایی شناسایی خطاها و ارائه بازخورد سازنده
            را دارد، که این امر به بهبود مستمر فرآیند آموزشی کمک می‌کند.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">
            فرآیند اسکن و تصحیح - تجزیه و تحلیل عمیق‌تر
          </h2>
          <p className="text-base mb-4">
            معلمان با استفاده از این سیستم می‌توانند زمان قابل توجهی را
            صرفه‌جویی کرده و تمرکز خود را بر بهبود کیفیت تدریس و رفع نیازهای
            فردی دانش‌آموزان معطوف دارند. فرآیند اسکن و تصحیح اتوماتیک، علاوه بر
            افزایش دقت، امکان مقایسه عملکرد دانش‌آموزان را در طول زمان فراهم
            می‌آورد، و به این ترتیب، معلمان می‌توانند تغییرات و پیشرفت‌ها را به
            طور دقیق‌تری رصد کنند.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">
            مزایای گزارش تحلیل نمرات
          </h2>
          <p className="text-base mb-4">
            گزارش‌های تحلیلی که توسط پارس آموز ارائه می‌شوند، نه تنها عملکرد کلی
            کلاس را نشان می‌دهند بلکه تحلیل‌های عمیق‌تری را در مورد نقاط قوت و
            ضعف هر دانش‌آموز به دست معلمین می‌دهند. این اطلاعات به معلمین کمک
            می‌کنند تا برنامه‌های درسی و روش‌های تدریس خود را بهینه‌سازی کرده و
            فرآیند یادگیری را برای هر دانش‌آموز شخصی‌سازی نمایند.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2"></h2>
          <p className="text-base mb-4">
            پارس آموز به عنوان یک ابزار قدرتمند، تأثیرات چشمگیری بر رویکردهای
            آموزشی و نتایج یادگیری دارد. این اپلیکیشن با ارتقاء دسترسی به
            اطلاعات کیفی و کمی، امکان یک تجربه آموزشی جامع‌تر و موثرتر را فراهم
            می‌آورد. در نهایت، پارس آموز نمونه‌ای بارز از نقش فناوری در پیشبرد
            اهداف آموزشی و خلق فرصت‌های جدید برای همه اعضای جامعه آموزشی است.
          </p>
        </div>
      </div>
    </div>
  );
}
