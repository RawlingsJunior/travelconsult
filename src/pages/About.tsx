import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, Shield, TrendingUp, Facebook, Twitter, Instagram, Linkedin, Play } from "lucide-react";

const TEAM_MEMBERS = [
    {
        name: "Sony Madison",
        role: "CEO, Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Hary Warth",
        role: "Head Manager",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Jenny Hobb",
        role: "Branch Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Johny Smith",
        role: "Supervisor",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="About Hero"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">About us</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-300">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>•</span>
                        <span className="text-tourigo-accent">About Us</span>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span> About Us <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Introduction To Best <br /> Travel Agency!</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-500 mt-8 text-left">
                        <p>
                            Harum quisqum amet debitis aliquid luctus pharetra vero, duis minim nostrud officiis dolorem fugit itaque, fugiat excepturi modi, porta.
                        </p>
                        <p>
                            Odio velit, odit, est, euismod aliquid luctus pharetra vero, condimentum, nostrum mi venenatis, mollit odio mi, unde semper adipiscing aut.
                        </p>
                    </div>
                </div>

                {/* Features Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-tourigo-accent flex items-center justify-center text-white shrink-0">
                            <Shield className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Best Price Guaranteed</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0">
                            <TrendingUp className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Finance Analysis</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 border border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-tourigo-accent flex items-center justify-center text-white shrink-0">
                            <Users className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Professional Team</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                {/* Photo Collage */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                            alt="Team working"
                            className="rounded-3xl w-full object-cover shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -right-10 hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400"
                                alt="Meeting"
                                className="rounded-3xl w-64 h-48 object-cover shadow-2xl border-4 border-white"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-tourigo-accent rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:pl-12 space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">We Help You To Find Your Dream Destination</h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <ul className="space-y-3">
                            {["Professional Tour Guides", "Affordable Packages", "24/7 Support", "Luxury Hotels"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-tourigo-accent">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full px-8 py-6 mt-4">
                            Discover More
                        </Button>
                    </div>
                </div>
            </div>

            {/* Team Members */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-tourigo-accent font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span> Our Team <span className="w-2 h-2 rounded-full bg-tourigo-accent"></span>
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900">Team Members</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Sint nascetur facere, delectus conubia consequuntur, nonummy distinctio! Non officiis, id natus non nisl provident justo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="bg-tourigo-accent p-6 text-center text-white relative">
                                    <div className="absolute -top-6 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                            <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-tourigo-accent hover:bg-gray-100 cursor-pointer shadow-md">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-white/80 text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
