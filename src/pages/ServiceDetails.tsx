import { useParams, useNavigate } from "react-router-dom";
import { DETAILED_SERVICES } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, FileText, HelpCircle, Phone } from "lucide-react";

const ServiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = DETAILED_SERVICES.find((s) => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
                        <Button onClick={() => navigate("/services")}>Back to Services</Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const handleBook = () => {
        if (service.id === "school-app" || service.id === "online-school") {
            navigate("/study-abroad");
        } else {
            navigate("/booking", { state: { serviceType: service.id } });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            {/* Breadcrumb & Navigation */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/services")}
                        className="text-gray-500 hover:text-tourigo-primary pl-0 hover:bg-transparent"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Header Section */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                                    <service.icon className={`w-8 h-8 ${service.color}`} />
                                </div>
                                <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
                            </div>
                            <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                        </div>

                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video relative group">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* What's Included */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-tourigo-primary" />
                                What's Included
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.includes.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How It Works */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-tourigo-primary" />
                                Process Timeline
                            </h2>
                            <div className="relative border-l-2 border-gray-200 ml-4 space-y-10 pb-4">
                                {[
                                    { title: "Consultation", desc: "We discuss your specific needs and requirements to tailor our service." },
                                    { title: "Processing & Documentation", desc: "Our expert team handles all the necessary paperwork and logistics." },
                                    { title: "Service Completion", desc: "Receive your documents, tickets, or service confirmation." }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-tourigo-primary" />
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-tourigo-primary" />
                                Common Questions
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { q: "How long does the process take?", a: "Timelines vary by service, but we always aim for the most efficient processing possible. Contact us for specific estimates." },
                                    { q: "What documents do I need?", a: "Requirements depend on the specific service. Check the 'What's Included' section or book a consultation for a detailed checklist." },
                                    { q: "Do you offer express services?", a: "Yes, for many of our services like passports and visas, express options are available for urgent needs." }
                                ].map((faq, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                                        <p className="text-gray-600">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">

                            {/* Booking Card */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-tourigo-primary/5 rounded-bl-full -mr-4 -mt-4" />

                                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to proceed?</h3>
                                <p className="text-gray-500 mb-6 text-sm">Get professional assistance for your travel needs today.</p>

                                <Button
                                    onClick={handleBook}
                                    className="w-full bg-tourigo-primary hover:bg-tourigo-primary/90 text-white py-6 text-lg shadow-lg shadow-orange-200 mb-6"
                                >
                                    Book This Service
                                </Button>

                                <div className="space-y-4 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <ShieldCheck className="w-5 h-5 text-tourigo-primary" />
                                        <span>Secure & Confidential</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Phone className="w-5 h-5 text-tourigo-primary" />
                                        <span>24/7 Support Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Why It Matters Card */}
                            <div className={`rounded-2xl p-8 ${service.bgColor} border border-white/50`}>
                                <h3 className={`text-lg font-bold ${service.color} mb-4 flex items-center gap-2`}>
                                    <ShieldCheck className="w-5 h-5" />
                                    Why Choose Us?
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    {service.why}
                                </p>
                            </div>

                            {/* Related Services Mini-List */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">You might also like</h3>
                                <div className="space-y-3">
                                    {DETAILED_SERVICES.filter(s => s.id !== service.id).slice(0, 3).map((related) => (
                                        <div
                                            key={related.id}
                                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-tourigo-primary/30 hover:shadow-md transition-all cursor-pointer group"
                                            onClick={() => navigate(`/services/${related.id}`)}
                                        >
                                            <div className={`w-10 h-10 rounded-lg ${related.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                                <related.icon className={`w-5 h-5 ${related.color}`} />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-medium text-gray-900 text-sm truncate">{related.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceDetails;
