import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import { DETAILED_SERVICES } from "@/data/services";

const Services = () => {
  const navigate = useNavigate();

  const handleBook = (serviceId: string) => {
    if (serviceId === "school-app" || serviceId === "online-school") {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
        <div className="absolute inset-0 bg-[url('/services-hero.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">World-Class Travel Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Everything you need for a perfect journey, all in one place.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service, index) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
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
              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="flex-1 border-2 hover:bg-gray-50"
                >
                  Details
                </Button>
                <Button
                  onClick={() => handleBook(service.id)}
                  className="flex-1 bg-tourigo-primary hover:bg-tourigo-primary/90 text-white"
                >
                  Book Now
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
