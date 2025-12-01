import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const offers = [
    {
        id: 1,
        title: "BATUR MOUNTAIN",
        price: 39.00,
        originalPrice: 69.00,
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=400",
        color: "bg-sky-500"
    },
    {
        id: 2,
        title: "ADVENTURE AWAITS",
        price: 48.00,
        originalPrice: 85.00,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=400",
        color: "bg-orange-400"
    },
    {
        id: 3,
        title: "AMAZING HOLIDAY",
        price: 69.00,
        originalPrice: 89.00,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400",
        color: "bg-cyan-400"
    },
    {
        id: 4,
        title: "BATUR MOUNTAIN",
        price: 79.00,
        originalPrice: 99.00,
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=400",
        color: "bg-emerald-500"
    }
];

const ExclusiveOffers = () => {
    return (
        <section className="py-20 px-4 md:px-12 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Vidoeplane.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="text-orange-500 font-script text-xl">Tour Packages</span>
                        <h2 className="text-3xl font-bold text-white mt-2">Exclusive Offers</h2>
                    </div>

                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-tourex-sky hover:text-white hover:border-tourex-sky transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-tourex-sky text-white flex items-center justify-center hover:bg-tourex-sky/90 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer) => (
                        <div key={offer.id} className={`rounded-3xl p-6 ${offer.color} relative overflow-hidden group h-[300px] transition-transform hover:-translate-y-2`}>
                            {/* Content Overlay */}
                            <div className="relative z-20 h-full flex flex-col justify-between text-white">
                                <div>
                                    <h3 className="font-bold text-lg uppercase mb-1">{offer.title}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-xl">${offer.price.toFixed(2)}</span>
                                        <span className="text-sm opacity-60 line-through">${offer.originalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button variant="secondary" className="w-fit rounded-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm text-xs h-8">
                                    Book Now
                                </Button>
                            </div>

                            {/* Image */}
                            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 translate-x-4 translate-y-4 z-10">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover rounded-tl-[40px] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExclusiveOffers;
