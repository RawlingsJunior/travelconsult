import { Plane, MapPin, Calendar, Star } from "lucide-react";

const Marquee = () => {
    const items = [
        { text: "Special Offers Available", icon: Star },
        { text: "New Destinations Added", icon: MapPin },
        { text: "Book Your Dream Trip", icon: Plane },
        { text: "24/7 Customer Support", icon: Calendar },
        { text: "Best Price Guarantee", icon: Star },
        { text: "Exclusive Deals", icon: MapPin },
        { text: "Travel with Confidence", icon: Plane },
        { text: "Unforgettable Experiences", icon: Calendar },
    ];

    return (
        <div className="bg-tourigo-primary py-4 overflow-hidden relative z-20">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-12 mx-6">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 text-white/90">
                                <item.icon className="w-5 h-5 text-tourigo-accent" />
                                <span className="text-lg font-bold uppercase tracking-wider">{item.text}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
