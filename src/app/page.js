import Action from "@/components/system/sections/Action";
import Faq from "@/components/system/sections/Faq";
import Features from "@/components/system/sections/Features";
import Hero from "@/components/system/sections/Hero";
import MainServices from "@/components/system/sections/MainServices";
import Services from "@/components/system/sections/Services";
import Testimonial from "@/components/system/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <MainServices />
      <Services />
      <Faq />
      <Action />
    </>
  );
}
