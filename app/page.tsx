import Section1 from "../components/Section1";
import Features from "@/components/ui/Features";
import Azmoon from "@/components/ui/textslider/Azmoon";
import Daftar from "@/components/ui/textslider/Daftar";
import Notif from "@/components/ui/textslider/Notif";
import Message from "@/components/ui/textslider/Message";
import Forms from "@/components/ui/textslider/Forms";
import Events from "@/components/ui/textslider/Events";
import Bankq from "@/components/ui/textslider/Bankq";
import Story from "@/components/ui/textslider/Story";
import Reports from "@/components/ui/textslider/Reports";
import Barname from "@/components/ui/textslider/Barname";
import Bankf from "@/components/ui/textslider/Bankf";
import Info from "@/components/ui/textslider/Info";
import Script from "next/script";
import Videos from "@/components/Videos";

export default async function IndexPage() {
  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "Product",
    name: " 46250471 پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت مدرسه",
    image:
      "https://farsamooz.ir/_next/image?url=%2Fimages%2Fpapa.png&w=1080&q=75",
    description:
      "نرم افزار و اپلیکیشن مدیریت مدارس و آموزشگاه ها. دفتر کلاسی مدرسه, آزمون آنلاین , اپلیکیشن هوشمند , فرم ساز , بانک سوالات ,آموزش مجازی ,حضور و غیاب ,ارسال نوتیفیکیشن",
    brand: {
      "@type": "Brand",
      name: "پارس آموز",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "5",
      reviewCount: "120",
      worstRating: "0",
      bestRating: "5",
    },
  };

  const jld2 = {
    "@context": "http://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "پارس آموز چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: " پارس آموز  نرم افزار و اپلیکیشن هوشمند مدیریت  یک مدرسه است",
        },
      },
    ],
  };

  return (
    <div className="z-20  relative flex flex-col  ">
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-163572893-1" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-163572893-1');
        `}
      </Script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jld2) }}
      />

      {/* <ClientOnly> */}
      <Section1></Section1>
      {/* </ClientOnly> */}
      <section id="Features">
        <Features></Features>
      </section>

      <section id="Swiper">
        <Videos></Videos>
      </section>

      <section id="Notif">
        <Notif></Notif>
      </section>

      <section id="Daftar">
        <Daftar></Daftar>
      </section>

      <section id="Azmoon">
        <Azmoon></Azmoon>
      </section>

      <section id="Message">
        <Message></Message>
      </section>
      <section id="Bankq">
        <Bankq></Bankq>
      </section>
      <section id="Forms">
        <Forms></Forms>
      </section>
      <section id="Events">
        <Events></Events>
      </section>
      <section id="Barname">
        <Barname></Barname>
      </section>
      <section id="Story">
        <Story></Story>
      </section>

      <section id="Reports">
        <Reports></Reports>
      </section>

      <section id="Bankf">
        <Bankf></Bankf>
      </section>

      <section id="Info">
        <Info></Info>
      </section>
    </div>
  );
}
