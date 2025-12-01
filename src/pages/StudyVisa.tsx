import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, FileCheck, ShieldCheck, Clock, HelpCircle } from "lucide-react";

const StudyVisa = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            {/* Hero */}
            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Visa Processing Made Simple</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Navigate the complex visa requirements with our expert guidance. We have a 98% success rate.
                    </p>
                    <Button onClick={() => navigate("/study-abroad/apply")} className="bg-tourigo-accent hover:bg-orange-600 text-white px-8 h-12 text-lg rounded-full">
                        Start Your Application
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Process Steps */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Visa Process</h2>
                            <div className="grid gap-6">
                                {[
                                    { title: "Document Review", desc: "We meticulously review all your documents to ensure they meet embassy standards.", icon: FileCheck },
                                    { title: "Application Filing", desc: "Our team fills and submits your visa application forms accurately.", icon: Plane },
                                    { title: "Interview Prep", desc: "We conduct mock interviews to prepare you for the embassy appointment.", icon: ShieldCheck },
                                    { title: "Tracking & Pickup", desc: "We track your application and notify you as soon as your passport is ready.", icon: Clock }
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                            <step.icon className="w-6 h-6 text-tourigo-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-tourigo-primary" /> Frequently Asked Questions
                            </h2>
                            <Accordion type="single" collapsible className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How long does the visa process take?</AccordionTrigger>
                                    <AccordionContent>
                                        Processing times vary by country. UK and Canada typically take 3-6 weeks, while the USA can take longer depending on interview slots. We recommend applying at least 3 months in advance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What documents do I need?</AccordionTrigger>
                                    <AccordionContent>
                                        Generally, you need a valid passport, admission letter (CAS/I-20), proof of funds (bank statement), academic transcripts, and passport photos. Specific countries may require additional documents like TB test results or police clearance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Do you guarantee a visa?</AccordionTrigger>
                                    <AccordionContent>
                                        While we cannot guarantee a visa as the final decision lies with the embassy, our expertise significantly increases your chances. We ensure your application is flawless to minimize rejection risks.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <Card className="bg-tourigo-primary text-white border-0">
                            <CardHeader>
                                <CardTitle>Need Urgent Help?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6 text-blue-100">
                                    Our visa experts are available to answer your questions.
                                </p>
                                <Button variant="secondary" className="w-full bg-white text-tourigo-primary hover:bg-gray-100">
                                    Contact Support
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Visa Types We Handle</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {["Student Visa (Tier 4 / F1)", "Dependent Visa", "Visitor Visa", "Post-Study Work Visa"].map((type, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tourigo-accent" />
                                            {type}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudyVisa;
