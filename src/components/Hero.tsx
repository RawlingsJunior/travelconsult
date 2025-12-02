import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Search, ArrowLeft, ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const videos = ["/plane1.mp4", "/plane2.mp4"];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section className="relative h-[600px] md:h-[800px] overflow-hidden">
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    key={videos[currentVideo]}
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={nextVideo}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            <div className="container mx-auto relative z-10 h-full px-4 md:px-12 flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl space-y-6">
                    <ScrollReveal animation="fade-in" delay={200}>
                        <span className="bg-tourigo-accent text-white px-4 py-1 rounded-full text-sm font-semibold inline-block">
                            It's Time To Travel
                        </span>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-up" delay={400}>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                            Explore <br />
                            With Elshadai Millenium Travel and Shopping <span className="text-tourigo-accent">Now</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-up" delay={600}>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Discover the world's most breathtaking destinations with our premium travel packages.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="scale-in" delay={800}>
                        <div className="flex justify-center gap-4 pt-4">
                            <Link to="/services">
                                <Button
                                    className="bg-tourigo-secondary hover:bg-tourigo-secondary/90 text-white rounded-full px-8 py-6 transition-transform hover:scale-105"
                                >
                                    Discover our services
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12">
                    <button
                        onClick={prevVideo}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12">
                    <button
                        onClick={nextVideo}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
