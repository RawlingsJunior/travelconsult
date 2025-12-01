import { Shield, Wallet, Globe } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-tourigo-light">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left - Image Collage */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=400"
                            alt="Hiker"
                            className="rounded-3xl w-full h-64 object-cover mt-12"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=400"
                            alt="Traveler"
                            className="rounded-3xl w-full h-64 object-cover"
                        />
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 min-w-[200px]">
                        <span className="text-4xl font-bold text-tourigo-secondary">26</span>
                        <div className="text-sm text-gray-600 font-medium leading-tight">
                            Years of <br /> Experience
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="space-y-8">
                    <div>
                        <span className="text-tourigo-secondary font-medium uppercase tracking-wider text-sm">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-tourigo-primary mt-2 leading-tight">
                            Discover Limitless Possibilities <br /> with Tourigo.
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-tourigo-secondary">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-tourigo-primary">Excellent Security</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Share the core values and principles that drive your tour company. Emphasize a commitment to customer.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-tourigo-secondary">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-tourigo-primary">Cost Efficiency</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Share the core values and principles that drive your tour company. Emphasize a commitment to customer.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-tourigo-secondary">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-tourigo-primary">World Wide Route</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Share the core values and principles that drive your tour company. Emphasize a commitment to customer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
