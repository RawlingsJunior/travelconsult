import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

import { DESTINATIONS } from "@/data/destinations";

const Destinations = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState<Date>();

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <video
                        src="/plane2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">Destinations</h1>
                    <div className="flex items-center justify-center gap-2 text-lg font-medium">
                        <Link to="/" className="hover:text-tourigo-accent transition-colors">Home</Link>
                        <span>&gt;&gt;</span>
                        <span className="text-tourigo-accent">Destinations</span>
                    </div>
                </div>

                {/* Search Filter Bar (Floating) */}
                <div className="absolute -bottom-16 left-0 right-0 z-20 px-4">
                    <div className="container mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-end max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-tourigo-accent">Name</label>
                                <Input placeholder="Your Name" className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-tourigo-accent" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-tourigo-accent">Destination</label>
                                <Select>
                                    <SelectTrigger className="border-0 border-b border-gray-200 rounded-none px-0 focus:ring-0">
                                        <SelectValue placeholder="Destination" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dubai">Dubai</SelectItem>
                                        <SelectItem value="paris">Paris</SelectItem>
                                        <SelectItem value="turkey">Turkey</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-tourigo-accent">Date</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant={"ghost"} className={cn("w-full justify-start text-left font-normal border-0 border-b border-gray-200 rounded-none px-0 hover:bg-transparent", !date && "text-muted-foreground")}>
                                            {date ? format(date, "PPP") : <span>Date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <Button className="w-full md:w-auto bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-8 py-6">
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="relative rounded-3xl overflow-hidden mb-12 p-8 md:p-12">
                    <div className="absolute inset-0">
                        <img
                            src="/destinations-banner.jpg"
                            alt="Travel Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <span className="text-tourigo-accent font-bold text-lg mb-2 block">Tours</span>
                            <h2 className="text-4xl font-bold text-white">Live Your Life Through Travel</h2>
                            <p className="text-gray-200 mt-4 max-w-xl">
                                
                            </p>
                        </div>
                        <Button className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-6">
                            View All Packages
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DESTINATIONS.map((dest) => (
                        <div key={dest.id} className="group bg-white rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={dest.image}
                                    alt={dest.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-tourigo-accent transition-colors">
                                    {dest.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2">
                                    {dest.description}
                                </p>
                                <div className="pt-2">
                                    <Link
                                        to={`/destinations/${dest.id}`}
                                        className="inline-flex items-center gap-2 text-tourigo-accent font-bold hover:gap-3 transition-all"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="relative h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Travel, See The World And <br />
                        <span className="text-tourigo-accent">Get 30% Off</span> Your Next Adventure.
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button
                        onClick={() => navigate("/booking")}
                        className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-10 py-6 text-lg mt-4"
                    >
                        Book Now
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Destinations;
