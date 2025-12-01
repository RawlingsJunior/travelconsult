import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Clock, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Hero"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">Contact Us</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-300">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>•</span>
                        <span className="text-tourigo-accent">Contact</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-full bg-tourigo-accent flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-sm text-gray-500">123 Travel Street, City, Country</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                            <Phone className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
                            <p className="text-sm text-gray-500">+1 234 567 890</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-full bg-tourigo-accent flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                            <Mail className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Email Us</h3>
                            <p className="text-sm text-gray-500">contact@tourigo.com</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span> Get In Touch
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900">Send Us A Message</h2>
                            <p className="text-gray-500">
                                Have questions about our packages or need a custom travel plan? Fill out the form below and our team will get back to you shortly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-3xl">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Your Name</label>
                                    <Input required placeholder="John Doe" className="bg-white border-gray-200 focus:border-tourigo-accent focus:ring-tourigo-accent rounded-xl py-6" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Your Email</label>
                                    <Input required type="email" placeholder="john@example.com" className="bg-white border-gray-200 focus:border-tourigo-accent focus:ring-tourigo-accent rounded-xl py-6" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                    <Input placeholder="+1 234 567 890" className="bg-white border-gray-200 focus:border-tourigo-accent focus:ring-tourigo-accent rounded-xl py-6" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Subject</label>
                                    <Input placeholder="Inquiry about..." className="bg-white border-gray-200 focus:border-tourigo-accent focus:ring-tourigo-accent rounded-xl py-6" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Message</label>
                                <Textarea required placeholder="How can we help you?" className="bg-white border-gray-200 focus:border-tourigo-accent focus:ring-tourigo-accent rounded-xl min-h-[150px]" />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-tourigo-accent hover:bg-orange-600 text-white rounded-full py-6 text-lg font-bold shadow-lg shadow-orange-200 transition-all"
                            >
                                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                                {!isSubmitting && !isSuccess && <Send className="w-5 h-5 ml-2" />}
                            </Button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-full min-h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6326922091!2d-0.2643503887258469!3d5.591208775475659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1701234567890!5m2!1sen!2sgh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* FAQ & Office Hours Section */}
                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4 mb-8">
                            <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span> FAQ
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">How do I book a tour?</AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    You can book a tour directly through our website by navigating to the "Destinations" page, selecting your preferred package, and clicking "Book Now". Alternatively, you can contact us via phone or email for assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">What payment methods do you accept?</AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    We accept major credit/debit cards (Visa, Mastercard), Mobile Money, and bank transfers. All payments are processed securely.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">Can I cancel my booking?</AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, cancellations are allowed up to 48 hours before the scheduled trip. Please refer to our Refund Policy for more details on cancellation fees.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">Do you provide visa assistance?</AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, we offer visa assistance for select international destinations. Please contact our support team for specific country requirements.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl h-fit">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-tourigo-accent rounded-full flex items-center justify-center text-white">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Office Hours</h3>
                                <p className="text-gray-400 text-sm">Visit us during these times</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                <span>Monday - Friday</span>
                                <span className="font-bold text-tourigo-accent">8:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                <span>Saturday</span>
                                <span className="font-bold text-tourigo-accent">9:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Sunday</span>
                                <span className="text-gray-500">Closed</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="text-sm text-gray-400 mb-4">Need help outside hours?</p>
                            <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl">
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-tourigo-accent py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Subscribe To Our Newsletter</h2>
                        <p className="text-white/90 text-lg">
                            Get the latest travel deals, exclusive offers, and destination inspiration delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mt-8">
                            <Input placeholder="Enter your email address" className="bg-white border-0 h-14 rounded-full px-6 text-gray-900" />
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white h-14 rounded-full px-8 font-bold">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contacts;
