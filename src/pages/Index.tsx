import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CommonActivity from "@/components/CommonActivity";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import AboutUs from "@/components/AboutUs";
import PopularActivity from "@/components/PopularActivity";
import Gallery from "@/components/Gallery";
import TopAirlines from "@/components/TopAirlines";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import BlogPreview from "@/components/BlogPreview";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import HomeServices from "@/components/HomeServices";
import StudyAbroadSection from "@/components/StudyAbroadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HomeServices />
        <StudyAbroadSection />
        <CommonActivity />
        <WhyChooseUs />
        <ExclusiveOffers />
        <AboutUs />
        <PopularActivity />
        <Gallery />
        <TopAirlines />
        <Testimonials />
        <Marquee />
        <BlogPreview />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
