import Image from "next/image";
import Hero from "./components/Hero";
import AfterHero from "./components/AfterHero";
import SlidingAnimation from "./components/SlidingAnimation";
import Social from "./components/Social";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FaQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
      <Hero/>
      <AfterHero/>
      <SlidingAnimation/>
      <Impact/>
      <Social/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
   </div>
      
  );
}
