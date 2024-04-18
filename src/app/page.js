import Action from "@/components/system/sections/Action";
import Features from "@/components/system/sections/Features";
import Hero from "@/components/system/sections/Hero";
import Services from "@/components/system/sections/Services";
import Testimonial from "@/components/system/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <Services />
      <Action />
    </>
  );
}
