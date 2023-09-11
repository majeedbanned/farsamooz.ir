import TextSlider from "@/components/ui/textslider/TextSlider";
import orange from "../../public/images/grape.png";
import Image from "next/image";
import Section1 from "../components/Section1";
import { redirect } from "next/navigation";
import Section2 from "@/components/Section2";
import Features from "@/components/ui/Features";
import Azmoon from "@/components/ui/textslider/Azmoon";
import AppSlider2 from "@/components/ui/textslider/AppSlider2";
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
import Links from "@/components/ui/textslider/Links";

export default async function IndexPage() {
  return (
    <div className="z-50  relative flex flex-col  ">
      <Section1></Section1>

      <section id="Features">
        <Features></Features>
      </section>

      <section id="Azmoon">
        <Azmoon></Azmoon>
      </section>
      <section id="Daftar">
        <Daftar></Daftar>
      </section>
      <section id="Notif">
        <Notif></Notif>
      </section>

      <section id="Message">
        <Message></Message>
      </section>

      <section id="Message">
        <Forms></Forms>
      </section>
      <section id="Events">
        <Events></Events>
      </section>
      <section id="Bankq">
        <Bankq></Bankq>
      </section>

      <section id="Story">
        <Story></Story>
      </section>

      <section id="Reports">
        <Reports></Reports>
      </section>
      <section id="Barname">
        <Barname></Barname>
      </section>

      <section id="Bankf">
        <Bankf></Bankf>
      </section>

      <section id="Info">
        <Info></Info>
      </section>
      {/* <section id="AppSlider" className="snap-center">
        <AppSlider2></AppSlider2>
      </section> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
