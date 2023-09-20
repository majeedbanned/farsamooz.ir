import Image from "next/image";
import "./globals.css";
import ellipse from "@/svg/ellipse.svg";
import localFont from "next/font/local";
import Navbar from "../components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Script from "next/script";
// import ClientOnly from "@/lib/ClientOnly";

// const iransans = localFont({
//   src: [
//     // {
//     //   path: "../../public/fonts/IRANSansWeb.eot",
//     //   weight: "400",
//     // },
//     {
//       path: "../public/fonts/IRANSansWeb.ttf",
//       weight: "400",
//     },
//     {
//       path: "../public/fonts/IRANSansWeb.woff",
//       weight: "700",
//     },
//     {
//       path: "../public/fonts/IRANSansWeb.woff2",
//       weight: "700",
//     },
//   ],
//   variable: "--font-iransans",
// });

const YekanBakhRegular = localFont({
  src: "../public/fonts/YekanBakh-Regular.woff2",
  variable: "--font-YekanBakhRegular",
});
// const YekanBakhExtraBold = localFont({
//   src: "../public/fonts/YekanBakh-ExtraBold.woff2",
//   variable: "--font-YekanBakhExtraBold",
// });

const YekanBakhExtraBlack = localFont({
  src: "../public/fonts/YekanBakh-ExtraBlack.woff2",
  variable: "--font-YekanBakhExtraBlack",
});

export const metadata = {
  alternates: {
    canonical: "https://farsamooz.ir",
  },

  appLinks: {
    ios: {
      url: "https://sibche.com/applications/pamooz",
      app_store_id: "app_store_id",
    },
    android: {
      package:
        "https://play.google.com/store/apps/details?id=com.arsis.parsamooz",
      app_name: "com.arsis.parsamooz",
    },
    web: {
      url: "https://farsamooz.ir",
      should_fallback: true,
    },
  },

  themeColor: "white",
  openGraph: {
    title: "پارس آموز نرم افزار و اپلیکیشن هوشمند مدیریت مدارس و آموزشگاه ها",
    description:
      "نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها دفتر کلاسی آزمون آنلاین اپلیکیشن هوشمند",
    url: "https://farsamooz.ir/",
    siteName: "Next.js",
    images: [
      {
        url: "https://farsamooz.ir/_next/image?url=%2Fimages%2Fpapa.png&w=1080&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "https://farsamooz.ir/_next/image?url=%2Fimages%2Fpapa.png&w=1080&q=75",
        width: 1800,
        height: 1600,
        alt: " نرم افزار و اپلیکیشن هوشمند مدیریت مدارس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  title:
    "پارس آموز اتوماسیون و نرم افزار و اپلیکیشن هوشمند مدیریت مدارس و آموزشگاه ها",

  description:
    "نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها دفتر کلاسی آزمون آنلاین اپلیکیشن هوشمند",
};

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default async function Root({
  children,
}: // authModal,
{
  children: React.ReactNode;
  // params: { lang: Locale };
  //authModal: React.ReactNode;
}) {
  // console.log(params.lang);

  // const dictionary = await getDictionary(params.lang);

  return (
    <html
      // lang={params.lang}
      dir="ltr"
      lang="fa"
      //*** */ className={cn("antialiased  ", iransans.className)}
    >
      <Script id="show-banner">
        {`!(function () {
  var i = "QSa1es",
    a = window,
    d = document;
  function g() {
    var g = d.createElement("script"),
      s = "https://www.goftino.com/widget/" + i,
      l = localStorage.getItem("goftino_" + i);
    (g.async = !0), (g.src = l ? s + "?o=" + l : s);
    d.getElementsByTagName("head")[0].appendChild(g);
  }
  "complete" === d.readyState
    ? g()
    : a.attachEvent
    ? a.attachEvent("onload", g)
    : a.addEventListener("load", g, !1);
})();
`}
      </Script>
      {/* /${barlowCondensed.className} ${inter.className} ${merriweather.variable} ${roboto.className} ${iransans.className} font-sans/ */}
      {/* className={`${iransans.className}`}  */}
      {/* <body className="antialiased  "> */}
      <body
        className={`antialiased ${YekanBakhRegular.variable} 
        ${YekanBakhExtraBlack.variable}
        `}
      >
        {/* <div className="  "> */}
        {/* <ClientOnly> */}
        {/* <Providers> */}
        {/* //          */}
        <div
          className="  container  dark:bg-slate-900 overflow-hidden relative md:rounded-2xl  mx-auto  bg-[#f3f4f5] md:mt-14 
          lg:mt-0 lg:rounded-sm xl:mt-14 xl:rounded-2xl 
           mb-52  
                      shadow-[0_8px_30px_rgb(0,0,0,0.08)]  first-letter:
                 "
        >
          {/* snap-y snap-mandatory h-screen overflow-y-scroll */}
          {/* {authModal} */}
          <Image
            //placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
             "
            className="z-10 absolute -top-44 -left-44"
            alt="Picture of the author"
            src={ellipse}
          ></Image>
          <Navbar
          // navmenu={dictionary.navbar}
          // siteLogo={dictionary.logo}
          ></Navbar>
          {children}
        </div>
        {/* </Providers> */}

        {/* </div> */}
        {/* </ClientOnly> */}
      </body>
    </html>
  );
}
