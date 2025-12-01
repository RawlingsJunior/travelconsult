import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mountain, Tent, Compass, Waves, ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

const activities = [
    {
        id: "paragliding",
        label: "Paragliding Tours",
        icon: Mountain,
        image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&q=80&w=800",
        title: "Nature is close adventure and vary close to nature",
        description: "Experience the thrill of flying high above the mountains."
    },
    {
        id: "hiking",
        label: "Hiking Tours",
        icon: Compass,
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
        title: "Explore the hidden trails of the wilderness",
        description: "Discover the beauty of nature on foot with our guided hiking tours."
    },
    {
        id: "camping",
        label: "Camping Tours",
        icon: Tent,
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
        title: "Sleep under the stars in comfort",
        description: "Enjoy a night in the wild with our luxury camping experiences."
    },
    {
        id: "swimming",
        label: "Swimming & Fishing",
        icon: Waves,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
        title: "Relax by the water and catch some fish",
        description: "Perfect for those who love the water and tranquility."
    }
];

const PopularActivity = () => {
    const [activeTab, setActiveTab] = useState("paragliding");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const activeActivity = activities.find(a => a.id === activeTab) || activities[0];

    return (
        <section className="py-20 px-4 md:px-12 bg-tourigo-primary text-white">
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                packageTitle={activeActivity.label}
            />

            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-tourigo-accent font-medium uppercase tracking-wider text-sm">Popular Activity</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Nature is close adventure and vary <br /> close to nature
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left - Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                onClick={() => setActiveTab(activity.id)}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === activity.id
                                    ? "bg-tourigo-secondary text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <activity.icon className={`w-6 h-6 ${activeTab === activity.id ? "text-white" : "text-gray-500"}`} />
                                <span className="font-semibold">{activity.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right - Content */}
                    <div className="lg:col-span-8">
                        <div className="relative rounded-3xl overflow-hidden h-[400px] group">
                            <img
                                src={activeActivity.image}
                                alt={activeActivity.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                                <div className="bg-white text-tourigo-primary px-4 py-2 rounded-lg inline-block font-bold text-sm mb-4">
                                    Under the Stars
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                                    {activeActivity.title}
                                </h3>
                                <p className="text-white/80 mb-6">
                                    {activeActivity.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-tourigo-accent flex items-center justify-center text-xs font-bold">
                                            +20
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => setIsBookingOpen(true)}
                                        className="bg-tourigo-accent hover:bg-tourigo-accent/90 text-white rounded-full"
                                    >
                                        Book Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularActivity;
