import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Successfully subscribed to our newsletter!");
        setEmail("");
        setIsSubmitting(false);
    };

    return (
        <section className="py-20 relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: 'url("/airport-1.jpg")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <ScrollReveal animation="scale-in">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={200}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={400}>
                        <p className="text-blue-100 mb-8 text-lg">
                            Get exclusive travel deals, insider tips, and destination inspiration delivered straight to your inbox.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={600}>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12 focus-visible:ring-tourigo-accent transition-all duration-300 hover:bg-white/20"
                                disabled={isSubmitting}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-tourigo-accent hover:bg-tourigo-accent/90 text-white h-12 px-8 font-bold transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Subscribing..." : "Subscribe"}
                            </Button>
                        </form>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-in" delay={800}>
                        <p className="text-xs text-blue-200 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
