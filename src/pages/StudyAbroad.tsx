import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
    GraduationCap, Globe, BookOpen, FileCheck, Plane,
    Users, ArrowRight, CheckCircle2, Search, MapPin
} from "lucide-react";

const COUNTRIES = [
    { id: "uk", name: "United Kingdom", flag: "🇬🇧", tuition: "$15k - $30k", deadline: "Sept / Jan" },
    { id: "usa", name: "United States", flag: "🇺🇸", tuition: "$20k - $50k", deadline: "Aug / Jan" },
    { id: "canada", name: "Canada", flag: "🇨🇦", tuition: "$12k - $35k", deadline: "Sept / Jan" },
    { id: "australia", name: "Australia", flag: "🇦🇺", tuition: "$18k - $40k", deadline: "Feb / July" },
    { id: "germany", name: "Germany", flag: "🇩🇪", tuition: "Free - $3k", deadline: "Oct / April" },
    { id: "dubai", name: "Dubai", flag: "🇦🇪", tuition: "$10k - $25k", deadline: "Rolling" },
    { id: "china", name: "China", flag: "🇨🇳", tuition: "Scholarships Available", deadline: "Mar / Sept" },
];

const COURSES = [
    "Business & Management", "Nursing & Healthcare", "Computer Science / IT",
    "Engineering", "Medicine", "Hospitality & Tourism",
    "Law", "Psychology", "Data Science", "Aviation"
];

const StudyAbroad = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative bg-tourigo-primary text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-[url('/study-abroad-hero.jpg')] bg-cover bg-center" />

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Study Abroad Made Easy
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Admissions • Scholarships • Visa Processing • Travel Support
                    </p>

                    <div className="max-w-xl mx-auto bg-white rounded-full p-2 flex items-center shadow-2xl animate-in zoom-in duration-500 delay-200">
                        <Search className="w-6 h-6 text-gray-400 ml-4" />
                        <Input
                            placeholder="Search country or course..."
                            className="border-0 focus-visible:ring-0 text-gray-900 text-lg h-12"
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                        <Button className="rounded-full px-8 h-12 bg-tourigo-accent hover:bg-orange-600 text-white text-lg">
                            Search
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <Button onClick={() => navigate("/study-abroad/apply")} className="bg-white text-tourigo-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold">
                            Apply Now
                        </Button>
                        {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold">
                            Book Free Consultation
                        </Button> */}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Study Abroad With Us?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end support to ensure your journey to international education is smooth and successful.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: FileCheck,
                            title: "Admission Support",
                            desc: "Expert guidance on university selection and application processing.",
                            image: "/admission-support.jpg"
                        },
                        {
                            icon: Plane,
                            title: "Visa Assistance",
                            desc: "98% visa success rate with our meticulous documentation support.",
                            image: "/visa-assistance.jpg"
                        },
                        {
                            icon: GraduationCap,
                            title: "Scholarship Guidance",
                            desc: "We help you find and apply for partial and full scholarships.",
                            image: "/scholarship-guidance.jpg"
                        },
                        {
                            icon: Users,
                            title: "24/7 Counseling",
                            desc: "Dedicated counselors available to answer all your queries.",
                            image: "/counseling.jpg"
                        },
                        {
                            icon: Globe,
                            title: "Travel Support",
                            desc: "Flight booking, accommodation, and airport pickup arrangements.",
                            image: "/travel-support.jpg"
                        },
                        {
                            icon: CheckCircle2,
                            title: "Transparent Process",
                            desc: "No hidden fees. Track your application status in real-time.",
                            image: "/transparent-process.jpg"
                        },
                    ].map((item, idx) => (
                        <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                                    <item.icon className="w-8 h-8 text-tourigo-primary" />
                                </div>
                            </div>
                            <CardContent className="pt-12 pb-8 px-6 text-center">
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
                            <p className="text-gray-600">Explore top countries for international students.</p>
                        </div>
                        <Button variant="link" className="text-tourigo-primary font-bold hidden md:flex">View All Countries <ArrowRight className="w-4 h-4 ml-2" /></Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COUNTRIES.map((country) => (
                            <Card key={country.id} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group" onClick={() => navigate(`/study-abroad/${country.id}`)}>
                                <div className="h-48 bg-gray-200 relative">
                                    <img
                                        src={country.id === "usa" ? "/study-usa.jpg" : country.id === "uk" ? "/UK.webp" : country.id === "canada" ? "/study-canada.png" : country.id === "australia" ? "/study-australia.jpg" : country.id === "germany" ? "/study-germany.jpg" : country.id === "dubai" ? "/study-dubai.jpg" : country.id === "china" ? "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80&w=800" : `https://source.unsplash.com/800x600/?${country.name.replace(" ", "+")},landmark`}
                                        alt={country.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-2xl shadow-md">
                                        {country.flag}
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            {/* Tuition Range Removed */}
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Intakes:</span>
                                            <span className="font-semibold text-gray-900">{country.deadline}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="bg-gray-50 p-4">
                                    <Button variant="ghost" className="w-full text-tourigo-primary font-bold group-hover:bg-tourigo-primary group-hover:text-white transition-colors">
                                        See Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Courses */}
            <div className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Top Courses Students Apply For</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {COURSES.map((course, idx) => (
                            <div key={idx} className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-tourigo-primary hover:text-white transition-all cursor-pointer font-medium text-gray-700">
                                {course}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Requirements Overview */}
            <div className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            While requirements vary by country and course, here are the general documents you'll need to get started.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Valid International Passport",
                                "WAEC / SHS Certificate",
                                "Diploma / Degree Transcript (for Postgrad)",
                                "Statement of Purpose (SOP)",
                                "Two Recommendation Letters",
                                "CV / Resume",
                                "Passport-sized Photographs"
                            ].map((req, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="font-medium text-gray-800">{req}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 bg-tourigo-primary text-white px-8 h-12 text-lg">
                            Download Checklist PDF
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-tourigo-accent/10 rounded-3xl transform rotate-3" />
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                            alt="Documents"
                            className="relative rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure where to start?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Book a free consultation with our education experts. We'll help you choose the right country, course, and university that fits your budget and career goals.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-tourigo-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Visit Our Office</h4>
                                        <p className="text-gray-400">Obuasi Bidease</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-tourigo-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Expert Counselors</h4>
                                        <p className="text-gray-400">10+ Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-white text-gray-900 border-0">
                            <CardHeader>
                                <CardTitle className="text-2xl">Book Free Consultation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <Input type="tel" placeholder="+233 55 123 4567" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Destination</label>
                                    <Input placeholder="e.g. Canada, UK" />
                                </div>
                                <Button className="w-full bg-tourigo-primary hover:bg-blue-700 text-white h-12 text-lg mt-4">
                                    Book Consultation
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudyAbroad;
