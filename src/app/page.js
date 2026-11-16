
import CompanyIntro from "@/components/home/CompanyIntro";
import Consultation from "@/components/home/Consultation";
import CoreServices from "@/components/home/CoreServices";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowWeDo from "@/components/home/HowWeDo";
import Industries from "@/components/home/Industries";


export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro/>
      <Industries/>
      <HowWeDo/>
      <CoreServices/>
      <Consultation/>
      <Footer/>
      
    </>
  );
}
