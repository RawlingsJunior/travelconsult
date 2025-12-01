import { Shield, Clock, Map, CreditCard } from "lucide-react";

const features = [
    {
        icon: CreditCard,
        title: "Best Price Guarantee",
        description: "We ensure you get the best rates for your dream destinations without compromising quality."
    },
    {
        icon: Clock,
        title: "Top Notch Support",
        description: "Our dedicated team is available 24/7 to assist you with any queries or travel needs."
    },
    {
        icon: Map,
        title: "Handpicked Destinations",
        description: "We curate the most amazing and exclusive travel spots just for you."
    },
    {
        icon: Shield,
        title: "Secure & Easy Booking",
        description: "Experience a seamless and secure booking process with instant confirmations."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/airport-1.jpg")' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We go the extra mile to make sure your travel experience is unforgettable. Here's why travelers love us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tourigo-primary transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-tourigo-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
