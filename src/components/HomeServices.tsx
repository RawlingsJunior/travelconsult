import { Plane, Hotel, Map, Car, FileCheck, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SERVICES = [
    {
        id: "flight",
        title: "Flight Booking",
        description: "Get the best deals on domestic and international flights.",
        icon: Plane,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        image: "/flight%20booking.avif"
    },
    {
        id: "hotel",
        title: "Hotel Reservation",
        description: "Luxury stays to budget-friendly accommodations.",
        icon: Hotel,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        image: "/hotel-booking.jpg"
    },
    {
        id: "tour",
        title: "Tour Packages",
        description: "Curated holiday packages for families and solo travelers.",
        icon: Map,
        color: "text-green-500",
        bgColor: "bg-green-50",
        image: "/Europe-Tour-Packages-from-Mumbai.webp"
    },
    {
        id: "study",
        title: "Study Abroad",
        description: "Expert guidance for university applications and visas.",
        icon: GraduationCap,
        color: "text-indigo-500",
        bgColor: "bg-indigo-50",
        image: "/study-abroad-home.jpg"
    },
];

const HomeServices = () => {
    const navigate = useNavigate();

    const handleBook = (serviceId: string) => {
        if (serviceId === "study") {
            navigate("/study-abroad");
        } else {
            navigate("/booking", { state: { serviceType: serviceId } });
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-tourigo-accent font-medium uppercase tracking-wider text-sm">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-tourigo-primary mt-2">What We Offer</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Comprehensive travel solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service) => (
                        <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden h-full flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center z-20 shadow-lg`}>
                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                </div>
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-tourigo-primary transition-colors">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <CardDescription className="text-gray-600 mb-6">
                                    {service.description}
                                </CardDescription>
                                <Button
                                    variant="ghost"
                                    className="p-0 h-auto font-semibold text-tourigo-primary hover:text-tourigo-accent hover:bg-transparent group-hover:translate-x-2 transition-all duration-300 w-fit"
                                    onClick={() => handleBook(service.id)}
                                >
                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        onClick={() => navigate("/services")}
                        className="bg-white border-2 border-tourigo-primary text-tourigo-primary hover:bg-tourigo-primary hover:text-white px-8 py-6 rounded-full font-semibold transition-all"
                    >
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
