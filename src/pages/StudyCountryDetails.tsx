import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Building2, Wallet, FileText, Plane } from "lucide-react";

const COUNTRY_DATA: Record<string, any> = {
    uk: {
        name: "United Kingdom",
        image: "/UK.webp",
        whyChoose: [
            "World-renowned universities with high academic standards.",
            "Short duration courses (3 years Bachelor's, 1 year Master's).",
            "2-year Post-Study Work Visa (Graduate Route).",
            "Multicultural environment with students from all over the world."
        ],
        universities: [
            { name: "University of Oxford", location: "Oxford" },
            { name: "University of Cambridge", location: "Cambridge" },
            { name: "Imperial College London", location: "London" },
            { name: "University of Manchester", location: "Manchester" }
        ],
        requirements: [
            "Valid Passport",
            "Academic Transcripts & Certificates",
            "IELTS/TOEFL (waived for some universities)",
            "Statement of Purpose (SOP)",
            "Two Recommendation Letters",
            "Proof of Funds"
        ]
    },
    usa: {
        name: "United States",
        image: "/study-usa.jpg",
        whyChoose: [
            "Home to the world's top-ranked universities.",
            "Flexible education system with diverse specializations.",
            "Optional Practical Training (OPT) for up to 3 years.",
            "Huge scholarship opportunities for international students."
        ],
        universities: [
            { name: "Harvard University", location: "Cambridge, MA" },
            { name: "Stanford University", location: "Stanford, CA" },
            { name: "MIT", location: "Cambridge, MA" },
            { name: "University of California, Berkeley", location: "Berkeley, CA" }
        ],
        requirements: [
            "Valid Passport",
            "SAT/ACT (for Undergrad)",
            "GRE/GMAT (for Postgrad)",
            "IELTS/TOEFL",
            "Statement of Purpose",
            "Letters of Recommendation"
        ]
    },
    canada: {
        name: "Canada",
        image: "/study-canada.png",
        whyChoose: [
            "High quality of life and safe environment.",
            "Affordable tuition fees compared to US and UK.",
            "Post-Graduation Work Permit (PGWP) up to 3 years.",
            "Easy pathway to Permanent Residency (PR)."
        ],
        universities: [
            { name: "University of Toronto", location: "Toronto" },
            { name: "University of British Columbia", location: "Vancouver" },
            { name: "McGill University", location: "Montreal" },
            { name: "University of Alberta", location: "Edmonton" }
        ],
        requirements: [
            "Valid Passport",
            "Academic Transcripts",
            "IELTS/TOEFL",
            "Statement of Purpose",
            "Study Permit Application",
            "Proof of Funds"
        ]
    },
    australia: {
        name: "Australia",
        image: "/study-australia.jpg",
        whyChoose: [
            "High quality of education and research opportunities.",
            "Post-Study Work rights for up to 4 years.",
            "Excellent lifestyle and weather.",
            "Scholarships available for international students."
        ],
        universities: [
            { name: "University of Melbourne", location: "Melbourne" },
            { name: "University of Sydney", location: "Sydney" },
            { name: "Australian National University", location: "Canberra" },
            { name: "University of Queensland", location: "Brisbane" }
        ],
        requirements: [
            "Valid Passport",
            "Academic Transcripts",
            "IELTS/PTE",
            "Statement of Purpose (GTE)",
            "Confirmation of Enrolment (CoE)",
            "Health Insurance (OSHC)"
        ]
    },
    germany: {
        name: "Germany",
        image: "/study-germany.jpg",
        whyChoose: [
            "Low or no tuition fees at public universities.",
            "Strong economy and job market.",
            "18-month Post-Study Work Visa.",
            "World-class engineering and technical education."
        ],
        universities: [
            { name: "Technical University of Munich", location: "Munich" },
            { name: "Ludwig Maximilian University", location: "Munich" },
            { name: "Heidelberg University", location: "Heidelberg" },
            { name: "Humboldt University", location: "Berlin" }
        ],
        requirements: [
            "Valid Passport",
            "Academic Transcripts",
            "IELTS/TOEFL or German Proficiency (TestDaF/DSH)",
            "Blocked Account (Proof of Funds)",
            "Health Insurance",
            "Motivation Letter"
        ]
    },
    dubai: {
        name: "Dubai",
        image: "/study-dubai.jpg",
        whyChoose: [
            "Tax-free income and growing economy.",
            "Home to branch campuses of top UK/US/Aus universities.",
            "Easy visa process for students.",
            "Safe and multicultural environment."
        ],
        universities: [
            { name: "University of Wollongong in Dubai", location: "Dubai Knowledge Park" },
            { name: "Middlesex University Dubai", location: "Dubai Knowledge Park" },
            { name: "Heriot-Watt University Dubai", location: "Dubai International Academic City" },
            { name: "Canadian University Dubai", location: "City Walk" }
        ],
        requirements: [
            "Valid Passport",
            "Academic Transcripts",
            "English Proficiency Test (if applicable)",
            "Passport Photos",
            "Visa Application Form",
            "Medical Fitness Test"
        ]
    }
};

const StudyCountryDetails = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();
    const country = COUNTRY_DATA[countryId?.toLowerCase() || ""] || COUNTRY_DATA["uk"]; // Default to UK if not found

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${country.image})` }}
                />
                <div className="relative z-20 text-center container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Study in {country.name}</h1>
                    <Button
                        onClick={() => navigate("/study-abroad/apply")}
                        className="bg-tourigo-accent hover:bg-orange-600 text-white px-8 py-6 text-xl rounded-full shadow-lg shadow-orange-200 animate-in zoom-in duration-500 delay-200"
                    >
                        Apply Now
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Why Choose */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-tourigo-primary" /> Why Choose {country.name}?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {country.whyChoose.map((reason: string, idx: number) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-tourigo-accent shrink-0" />
                                        <p className="text-gray-700">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Top Universities */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Building2 className="w-8 h-8 text-tourigo-primary" /> Top Universities
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {country.universities.map((uni: any, idx: number) => (
                                    <Card key={idx} className="hover:shadow-md transition-shadow">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{uni.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-500 text-sm mb-2">{uni.location}</p>
                                            {/* Tuition removed */}
                                            <Button variant="link" className="px-0 mt-2 text-tourigo-accent">View Details</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Admission Requirements */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FileText className="w-8 h-8 text-tourigo-primary" /> Admission Requirements
                            </h2>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <ul className="space-y-4">
                                    {country.requirements.map((req: string, idx: number) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">

                        {/* Tuition Fees Card Removed */}

                        {/* Visa Info */}
                        <Card className="bg-orange-50 border-orange-100 shadow-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-orange-900">
                                    <Plane className="w-5 h-5" /> Visa Assistance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-orange-800 mb-4 text-sm">
                                    We have a 98% success rate for {country.name} student visas. Let our experts handle your documentation.
                                </p>
                                <Button onClick={() => navigate("/study-abroad/visa")} variant="outline" className="w-full border-orange-300 text-orange-900 hover:bg-orange-100">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>

                        {/* CTA */}
                        <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Start your application today and get a free consultation session.</p>
                            <Button onClick={() => navigate("/study-abroad/apply")} className="w-full bg-tourigo-accent hover:bg-orange-600 text-white h-12">
                                Start Application
                            </Button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudyCountryDetails;
