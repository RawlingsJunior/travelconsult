import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const photos = [
    {
        src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
        alt: "Paris, France",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
        alt: "Bali, Indonesia",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800",
        alt: "Cape Town, South Africa",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1606294767448-42f49553f206?auto=format&fit=crop&q=80&w=800",
        alt: "Accra, Ghana",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
        alt: "Venice, Italy",
        span: "md:col-span-1 md:row-span-1"
    }
];

const Gallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Travel Gallery</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get inspired by some of the beautiful moments captured by our travelers around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                    {photos.map((photo, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div className={`relative overflow-hidden rounded-xl cursor-pointer group h-full ${photo.span}`}>
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                            <ZoomIn className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white font-bold">{photo.alt}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
