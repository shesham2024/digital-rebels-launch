import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { WhyDigitalRebels } from "@/components/WhyDigitalRebels";
// import { ProgramHighlights } from "@/components/ProgramHighlights";
import AISurvivalQuote from "@/components/AISurvivalQuote";
import { BeyondCoding } from "@/components/BeyondCoding";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
// import CTABanner from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { FAQ } from "@/components/FAQ";
import { FreeTrial } from "@/components/FreeTrail";
import Founder from "@/components/Founder";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyDigitalRebels />
      {/* <ProgramHighlights /> */}
      <AISurvivalQuote />
      <BeyondCoding />
      <WhoShouldJoin />
      {/* <CTABanner /> */}
      <Founder />
      <FreeTrial/>
      <ContactSection />
      <Testimonials />
      <FAQ/>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

// export default Index;
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import WhyDigitalRebels from "@/components/WhyDigitalRebels";
// import ProgramHighlights from "@/components/ProgramHighlights";
// import AISurvivalQuote from "@/components/AISurvivalQuote";
// import BeyondCoding from "@/components/BeyondCoding";
// import WhoShouldJoin from "@/components/WhoShouldJoin";
// import CTABanner from "@/components/CTABanner";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";
// import FloatingCTA from "@/components/FloatingCTA";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <HeroSection />
//       <WhyDigitalRebels />
//       <ProgramHighlights />
//       <AISurvivalQuote />
//       <BeyondCoding />
//       <WhoShouldJoin />
//       <CTABanner />
//       <ContactSection />
//       <Footer />
//       <FloatingCTA />
//     </div>
//   );
// };

export default Index;
