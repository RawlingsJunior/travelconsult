import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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

import Newsletter from "@/components/Newsletter";
import FeaturesMarquee from "@/components/FeaturesMarquee";
import Footer from "@/components/Footer";

import HomeServices from "@/components/HomeServices";
import StudyAbroadSection from "@/components/StudyAbroadSection";

const Index = () => {
  const [showFlyer, setShowFlyer] = useState(false);

  useEffect(() => {
    // Show flyer after a short delay initially
    const initialTimer = setTimeout(() => {
      setShowFlyer(true);
    }, 1000);

    // Show flyer every 5 minutes (300000 ms)
    const intervalTimer = setInterval(() => {
      setShowFlyer(true);
    }, 300000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />

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

        <Newsletter />
        <FeaturesMarquee />
      </main>
      <Footer />

      {/* Promotional Flyer Modal */}
      <Dialog open={showFlyer} onOpenChange={setShowFlyer}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-0 shadow-none">
          <div className="relative">
            <button
              onClick={() => setShowFlyer(false)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src="/study-china-flyer.jpg"
              alt="Study in China Scholarship"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <a
                href="/study-abroad/china"
                className="bg-tourigo-accent hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
