import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, Map, Car, FileCheck, Briefcase, ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: "flight",
    title: "Flight Booking",
    description: "Get the best deals on domestic and international flights. We handle all the ticketing details for you.",
    icon: Plane,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    image: "/flight%20booking.avif"
  },
  {
    id: "hotel",
    title: "Hotel Reservation",
    description: "Luxury stays to budget-friendly accommodations. We find the perfect place for you to rest.",
    icon: Hotel,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    image: "/hotel-booking.jpg"
  },
  {
    id: "tour",
    title: "Tour Packages",
    description: "Curated holiday packages for families, couples, and solo travelers. Experience the world with us.",
    icon: Map,
    color: "text-green-500",
    bgColor: "bg-green-50",
    image: "/Europe-Tour-Packages-from-Mumbai.webp"
  },
  {
    id: "car",
    title: "Car Rentals",
    description: "Reliable car rental services for your road trips and city commutes. Choose from a wide fleet.",
    icon: Car,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "visa",
    title: "Visa Assistance",
    description: "Hassle-free visa application guidance. We help you navigate the paperwork with ease.",
    icon: FileCheck,
    color: "text-red-500",
    bgColor: "bg-red-50",
    image: "/Visa%20Application.avif"
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    description: "Tailored travel solutions for businesses. Meetings, incentives, conferences, and exhibitions (MICE).",
    icon: Briefcase,
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "study",
    title: "Study Abroad",
    description: "Expert guidance for university applications, visas, and settling in top destinations like UK, USA, and Canada.",
    icon: GraduationCap,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    image: "/study-abroad-home.jpg"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleBook = (serviceId: string) => {
    if (serviceId === "study") {
      navigate("/study-abroad");
    } else {
      navigate("/booking", { state: { serviceType: serviceId } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <div className="bg-tourigo-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">World-Class Travel Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Everything you need for a perfect journey, all in one place.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 100}ms` }}>
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
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-tourigo-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleBook(service.id)}
                  className="w-full bg-white text-tourigo-primary border-2 border-tourigo-primary hover:bg-tourigo-primary hover:text-white transition-all group-hover:shadow-md"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Package?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            We specialize in creating tailor-made experiences. Tell us your requirements, and we'll design the perfect itinerary for you.
          </p>
          <Button
            onClick={() => navigate("/contacts")}
            className="bg-tourigo-accent hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-200"
          >
            Contact Our Experts
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
