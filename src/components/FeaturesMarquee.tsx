import { Shield, Clock, CreditCard, Headphones, Globe, Award } from "lucide-react";

const FeaturesMarquee = () => {
    const features = [
        { text: "Secure Payments", icon: Shield },
        { text: "24/7 Customer Support", icon: Headphones },
        { text: "Best Price Guarantee", icon: Award },
        { text: "Flexible Bookings", icon: Clock },
        { text: "Global Destinations", icon: Globe },
        { text: "No Hidden Fees", icon: CreditCard },
    ];

    return (
        <div className="bg-gray-900 py-6 overflow-hidden border-t border-gray-800">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-16 mx-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-300">
                                <feature.icon className="w-6 h-6 text-tourigo-accent" />
                                <span className="text-lg font-semibold tracking-wide">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesMarquee;
