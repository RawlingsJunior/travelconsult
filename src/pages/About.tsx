import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Shield, Globe, Award, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TEAM_MEMBERS = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        image: "/team-1.jpg",
        bio: "Visionary leader with 15+ years in global tourism."
    },
    {
        name: "Michael Chen",
        role: "Head of Operations",
        image: "/team-2.jpg",
        bio: "Expert in logistics and seamless travel execution."
    },
    {
        name: "David Wilson",
        role: "Visa Specialist",
        image: "/team-3.jpg",
        bio: "Navigating complex visa regulations with ease."
    },
];

const CORE_VALUES = [
    {
        icon: Shield,
        title: "Integrity",
        description: "We build trust through transparency and honest communication in every interaction.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We don't just meet expectations; we exceed them with meticulous attention to detail.",
        color: "bg-amber-50 text-amber-600"
    },
    {
        icon: Heart,
        title: "Passion",
        description: "Our enthusiasm for travel is contagious. We love what we do, and it shows.",
        color: "bg-rose-50 text-rose-600"
    },
    {
        icon: Users,
        title: "Customer Focus",
        description: "You are the center of our universe. Your journey is our personal mission.",
        color: "bg-emerald-50 text-emerald-600"
    }
];



const FAQS = [
    {
        question: "Do you offer visa assistance?",
        answer: "Yes, we provide comprehensive visa assistance for all major destinations including the UK, USA, Canada, and Schengen countries. Our team guides you through the entire documentation process."
    },
    {
        question: "Can I customize my tour package?",
        answer: "Absolutely! Customization is our specialty. We work closely with you to tailor every aspect of your itinerary, from accommodation style to daily activities, ensuring it fits your budget and preferences."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept a wide range of payment methods for your convenience, including all major credit cards (Visa, Mastercard), bank transfers, and secure mobile money payments."
    },
    {
        question: "Is travel insurance included?",
        answer: "While basic packages may not include insurance, we highly recommend it. We can assist you in purchasing a comprehensive travel insurance policy that covers medical emergencies, trip cancellations, and lost luggage."
    }
];

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-tourigo-accent selection:text-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
                        alt="About Hero"
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>
                <div className="relative z-10 text-center text-white space-y-8 max-w-5xl px-4 animate-fade-in">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase mb-4">
                        Since 2010
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
                        We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-tourigo-accent to-orange-400">Memories</span>, <br /> Not Just Trips.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner in exploring the world's most breathtaking destinations.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="relative py-24">
                <div className="absolute inset-0 bg-[url('/travel2.webp')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-white/95"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="space-y-8 animate-slide-in">
                            <div className="space-y-4">
                                <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm">Who We Are</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    Redefining Travel <br /> for the Modern Explorer
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Travel Consult, we believe that travel is more than just visiting new places; it's about connecting with cultures, creating lifelong memories, and broadening your horizons. We are dedicated to crafting personalized journeys that cater to your unique desires and dreams.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-tourigo-accent">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Global Network</h4>
                                        <p className="text-sm text-gray-500">Partners in 100+ countries</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Expert Team</h4>
                                        <p className="text-sm text-gray-500">Dedicated travel specialists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                    alt="Team working"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-tourigo-accent/10 rounded-3xl -z-10" />
                            <div className="absolute -top-10 -right-10 w-1/2 h-1/2 bg-blue-50 rounded-full -z-10 blur-3xl" />
                        </div>
                    </div>

                    {/* Core Values - Bento Grid Style */}
                    <div className="mb-32">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Values</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driven by Passion & Integrity</h2>
                            <p className="text-gray-500 text-lg">The core principles that guide every itinerary we plan and every client we serve.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {CORE_VALUES.map((value, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* Stats Section */}
            <div className="bg-tourigo-primary py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/dubai-luxury.jpg')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-tourigo-primary/90"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-tourigo-primary via-blue-900/20 to-tourigo-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-bold text-tourigo-accent mb-2">10k+</div>
                            <div className="text-white/60 font-medium uppercase tracking-wider text-sm">Happy Travelers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-bold text-tourigo-accent mb-2">500+</div>
                            <div className="text-white/60 font-medium uppercase tracking-wider text-sm">Destinations</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-bold text-tourigo-accent mb-2">15+</div>
                            <div className="text-white/60 font-medium uppercase tracking-wider text-sm">Years Experience</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-bold text-tourigo-accent mb-2">24/7</div>
                            <div className="text-white/60 font-medium uppercase tracking-wider text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Members */}
            <div className="relative py-24">
                <div className="absolute inset-0 bg-[url('/airport-1.jpg')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-white/95"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Team</span>
                        <h2 className="text-4xl font-bold text-gray-900">Meet The Experts</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <div key={index} className="group relative rounded-3xl overflow-hidden cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-tourigo-accent font-medium mb-3">{member.role}</p>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="relative py-24">
                <div className="absolute inset-0 bg-[url('/Ancient%20Wonders%20of%20Italy.webp')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-slate-50/95"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Everything you need to know about traveling with us.</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {FAQS.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 py-2 rounded-2xl border border-gray-100 shadow-sm data-[state=open]:shadow-md transition-all duration-200">
                                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-tourigo-accent hover:no-underline py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500 pb-4 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>


            {/* Join Team CTA */}
            <div className="container mx-auto px-4 py-24">
                <div className="bg-tourigo-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-tourigo-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Start Your Journey?</h2>
                        <p className="text-white/80 text-xl font-light">
                            Whether you're looking to book your next adventure or join our team of travel experts, we're here to make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link to="/contact">
                                <Button className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-orange-500/25 transition-all w-full sm:w-auto">
                                    Contact Us
                                </Button>
                            </Link>
                            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-tourigo-primary rounded-full px-10 py-7 text-lg font-bold transition-all w-full sm:w-auto">
                                View Careers
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default About;
