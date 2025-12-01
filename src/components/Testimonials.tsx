import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Adventure Traveler",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: "My Travel Consult made our honeymoon absolutely magical! The attention to detail and personalized itinerary were beyond our expectations. Highly recommended!"
    },
    {
        name: "Michael Chen",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: "Professional, efficient, and reliable. They handled my complex visa requirements and flight bookings seamlessly. I wouldn't travel with anyone else."
    },
    {
        name: "Emily Davis",
        role: "Family Vacationer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: "Traveling with kids can be stressful, but the team took care of everything. From kid-friendly hotels to amazing tours, it was our best family trip ever."
    },
    {
        name: "David Wilson",
        role: "Solo Explorer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        rating: 4,
        text: "Great experience overall. The local guides they partnered with were knowledgeable and friendly. Can't wait for my next adventure with them."
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/airport-2.jpg")' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Travelers Say</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Don't just take our word for it. Read stories from our happy clients.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="h-full border-none shadow-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                            <CardContent className="flex flex-col items-center p-8 text-center h-full">
                                                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-tourigo-accent">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                                        />
                                                    ))}
                                                </div>

                                                <div className="relative mb-6 flex-grow">
                                                    <Quote className="w-8 h-8 text-tourigo-primary/10 absolute -top-4 -left-2" />
                                                    <p className="text-gray-600 italic relative z-10 text-sm leading-relaxed">
                                                        "{testimonial.text}"
                                                    </p>
                                                </div>

                                                <div className="mt-auto">
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-xs text-tourigo-primary font-medium uppercase tracking-wide">{testimonial.role}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12" />
                            <CarouselNext className="-right-12" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
