import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    MapPin, Calendar, Clock, DollarSign, Star, Check, X,
    Plane, Hotel, Utensils, Camera, Info, Phone, Mail
} from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

const DestinationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    // Find destination by ID
    const destination = DESTINATIONS.find(d => d.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
                    <Button onClick={() => navigate("/destinations")}>Back to Destinations</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20 md:pb-0">
            <Header />
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                packageTitle={`Trip to ${destination.name}`}
            />

            {/* 1. Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2 text-yellow-400">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="font-bold text-lg">{destination.rating}/5</span>
                                    <span className="text-white/80 text-sm">({destination.reviewCount} reviews)</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.name}</h1>
                                <p className="text-xl md:text-2xl text-white/90 font-light">{destination.country}</p>
                                <p className="mt-2 text-lg text-white/80 italic">"{destination.tagline}"</p>
                            </div>
                            <Button
                                onClick={() => navigate("/booking", {
                                    state: {
                                        destination: {
                                            name: destination.name,
                                            country: destination.country,
                                            image: destination.heroImage
                                        },
                                        package: {
                                            name: "Custom Trip",
                                            duration: 5
                                        }
                                    }
                                })}
                                className="hidden md:flex bg-tourigo-accent hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
                            >
                                Book This Trip
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Quick Info Bar */}
            <div className="bg-white shadow-md border-b sticky top-[60px] z-30">
                <div className="container mx-auto px-4 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm md:text-base">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="w-5 h-5 text-tourigo-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Best Time</p>
                                <p className="font-semibold">{destination.quickInfo.bestTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-5 h-5 text-tourigo-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Duration</p>
                                <p className="font-semibold">{destination.quickInfo.duration}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="w-5 h-5 text-tourigo-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Region</p>
                                <p className="font-semibold">{destination.quickInfo.region}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Hotel className="w-5 h-5 text-tourigo-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Hotel Level</p>
                                <p className="font-semibold">{destination.quickInfo.hotelLevel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column (Main Content) */}
                <div className="lg:col-span-2 space-y-12">

                    {/* 3. Overview */}
                    <section id="overview" className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-tourigo-primary mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6" /> About {destination.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {destination.overview.description}
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {destination.overview.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-gray-700 font-medium">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Gallery */}
                    <section id="gallery" className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-tourigo-primary mb-6 flex items-center gap-2">
                            <Camera className="w-6 h-6" /> Photo Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px]">
                            <div className="md:col-span-2 md:row-span-2 h-full rounded-xl overflow-hidden cursor-pointer group">
                                <img
                                    src={destination.gallery[0]}
                                    alt="Main Gallery"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            {destination.gallery.slice(1, 5).map((img, idx) => (
                                <div key={idx} className="h-full rounded-xl overflow-hidden cursor-pointer group">
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Packages */}
                    <section id="packages">
                        <h2 className="text-2xl font-bold text-tourigo-primary mb-6 flex items-center gap-2">
                            <Plane className="w-6 h-6" /> Available Packages
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {destination.packages.map((pkg, idx) => (
                                <Card key={idx} className={`relative overflow-hidden border-2 ${pkg.popular ? 'border-tourigo-accent shadow-lg scale-105 z-10' : 'border-transparent shadow-md'}`}>
                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 bg-tourigo-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                                        <div className="text-sm text-gray-500 mb-6">{pkg.duration} • {pkg.level}</div>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {pkg.includes.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            onClick={() => navigate("/booking", {
                                                state: {
                                                    destination: {
                                                        name: destination.name,
                                                        country: destination.country,
                                                        image: destination.heroImage
                                                    },
                                                    package: {
                                                        name: pkg.name,
                                                        duration: parseInt(pkg.duration)
                                                    }
                                                }
                                            })}
                                            className={`w-full ${pkg.popular ? 'bg-tourigo-primary' : 'bg-gray-800'} hover:opacity-90 text-white`}
                                        >
                                            Choose Package
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* 6. Inclusions & Exclusions */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                <Check className="w-5 h-5" /> What's Included
                            </h3>
                            <ul className="space-y-2">
                                {destination.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-green-700">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                <X className="w-5 h-5" /> What's Not Included
                            </h3>
                            <ul className="space-y-2">
                                {destination.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-red-700">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 7. Itinerary */}
                    <section id="itinerary" className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-tourigo-primary mb-6 flex items-center gap-2">
                            <Calendar className="w-6 h-6" /> Daily Itinerary
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {destination.itinerary.map((day, idx) => (
                                <AccordionItem key={idx} value={`day-${day.day}`}>
                                    <AccordionTrigger className="hover:no-underline">
                                        <div className="flex items-center gap-4 text-left">
                                            <span className="bg-tourigo-primary/10 text-tourigo-primary font-bold px-3 py-1 rounded-md text-sm">
                                                Day {day.day}
                                            </span>
                                            <span className="font-semibold text-gray-800">{day.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pl-14">
                                        {day.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* 11. FAQ */}
                    <section id="faq" className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-tourigo-primary mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6" /> Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {destination.faqs.map((faq, idx) => (
                                <AccordionItem key={idx} value={`faq-${idx}`}>
                                    <AccordionTrigger className="text-left font-medium text-gray-800">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                </div>

                {/* Right Column (Sidebar) */}
                <div className="space-y-8">

                    {/* Booking Card (Desktop Sticky) */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
                        <div className="text-center mb-6">
                            <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold">Book Your Trip</p>
                        </div>

                        <Button
                            onClick={() => setIsBookingOpen(true)}
                            className="w-full bg-tourigo-accent hover:bg-orange-600 text-white py-6 text-lg font-bold shadow-md mb-4"
                        >
                            Book Now
                        </Button>

                        <div className="space-y-4 text-sm text-gray-600 border-t pt-4">
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-green-500" /> <span>Instant Confirmation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-green-500" /> <span>Best Price Guarantee</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-green-500" /> <span>24/7 Support</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t text-center">
                            <p className="text-sm text-gray-500 mb-2">Need Help?</p>
                            <a href="tel:+233123456789" className="flex items-center justify-center gap-2 text-tourigo-primary font-bold hover:underline">
                                <Phone className="w-4 h-4" /> +233 123 456 789
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity" />
                        <Button variant="secondary" className="relative z-10 shadow-lg">
                            <MapPin className="w-4 h-4 mr-2" /> View on Map
                        </Button>
                    </div>

                </div>
            </div>

            {/* 13. Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div>
                    <p className="text-xl font-bold text-tourigo-primary">Book Now</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full border-tourigo-primary text-tourigo-primary">
                        <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-6"
                    >
                        Book Trip
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DestinationDetails;
