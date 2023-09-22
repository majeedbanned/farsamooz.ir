import Image from "next/image";
import "./globals.css";
import ellipse from "@/svg/ellipse.svg";
import localFont from "next/font/local";
import Navbar from "../components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Script from "next/script";
import Head from "next/head";
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
  title: "پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت مدرسه",

  description:
    " نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها. دفتر کلاسی مدرسه, آزمون آنلاین , اپلیکیشن هوشمند , فرم ساز , بانک سوالات ,آموزش مجازی ,حضور و غیاب ,ارسال نوتیفیکیشن",
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
      <Script id="faq" type="application/ld+json">
        {`"@context": "http://schema.org/",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "پارس آموز چیست؟",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": " پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت  یک مدرسه است"
			}
		}
	]`}
      </Script>

      {/* <Script id="rating" type="application/ld+json">
        {`"@context": "http://schema.org/",
	"@type": "Product",
	"name": "پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت مدرسه",
	"image": "https://farsamooz.ir/_next/image?url=%2Fimages%2Fpapa.png&w=1080&q=75",
	"description": "نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها. دفتر کلاسی مدرسه, آزمون آنلاین , اپلیکیشن هوشمند , فرم ساز , بانک سوالات ,آموزش مجازی ,حضور و غیاب ,ارسال نوتیفیکیشن
",
	"brand": {
		"@type": "Brand",
		"name": "پارس آموز"
	},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue" : "5",
		"ratingCount" : "5",
		"reviewCount" : "120",
		"worstRating" : "0",
		"bestRating" : "5"
	}`}
      </Script> */}

      <Script type="application/ld+json" id="org">
        {`"@context": "http://schema.org/",
	"@type": "Organization",
	"name": "پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت مدرسه",
	"logo": "https://farsamooz.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F%D9%BE%D8%A7%D8%B1%D8%B3%20%D8%A2%D9%85%D9%88%D8%B2%20%D8%A7%D8%AA%D9%88%D9%85%D8%A7%D8%B3%DB%8C%D9%88%D9%86%20%D9%86%D8%B1%D9%85%20%D8%A7%D9%81%D8%B2%D8%A7%D8%B1%20%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF%20%D9%85%D8%AF%D8%A7%D8%B1%D8%B3.a021f10a.png&w=384&q=75",
	"url": "https://farsamooz.ir/",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Tehran",
		"addressRegion": "Tehran",
		"postalCode": "989177204118",
		"addressCountry": "Iran"
	},
	"sameAs": []`}
      </Script>

      <Script type="application/ld+json" id="search">
        {`	"@context": "http://schema.org/",
	"@type": "WebSite",
	"url": "https://farsamooz.ir",
	"potentialAction": {
		"@type": "SearchAction",
		"target": "search?q={search_term_string}",
		"query-input": "required name=search_term_string"
	}`}
      </Script>
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
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(`"@context": "http://schema.org/",
        "@type": "Product",
        "name": "پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت مدرسه",
        "image": "https://farsamooz.ir/_next/image?url=%2Fimages%2Fpapa.png&w=1080&q=75",
        "description": "نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها. دفتر کلاسی مدرسه, آزمون آنلاین , اپلیکیشن هوشمند , فرم ساز , بانک سوالات ,آموزش مجازی ,حضور و غیاب ,ارسال نوتیفیکیشن
      ",
        "brand": {
          "@type": "Brand",
          "name": "پارس آموز"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue" : "5",
          "ratingCount" : "5",
          "reviewCount" : "120",
          "worstRating" : "0",
          "bestRating" : "5"
        }`),
          }}
        />
      </Head>
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
