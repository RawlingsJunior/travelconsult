import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";

const GHANA_UNIVERSITIES = [
    "University of Ghana (UG)", "Kwame Nkrumah University of Science and Technology (KNUST)", "University of Cape Coast (UCC)",
    "University for Development Studies (UDS)", "University of Education, Winneba (UEW)", "University of Energy and Natural Resources (UENR)",
    "University of Health and Allied Sciences (UHAS)", "University of Professional Studies, Accra (UPSA)", "Ghana Institute of Management and Public Administration (GIMPA)",
    "Ghana Communication Technology University (GCTU)", "C.K. Tedam University of Technology and Applied Sciences (CKT-UTAS)",
    "S.D. Dombo University of Business and Integrated Development Studies (SDD-UBIDS)", "Akenten Appiah-Menka University of Skills Training & Entrepreneurial Dev. (AAMUSTED)",
    "Ho Technical University (HTU)", "Accra Technical University", "Kumasi Technical University", "Sunyani Technical University",
    "Takoradi Technical University", "Bolgatanga Technical University", "Koforidua Technical University", "Cape Coast Technical University",
    "Tamale Technical University", "Wa Technical University", "Ashesi University", "Central University", "Valley View University",
    "Pentecost University", "Lancaster University Ghana", "Catholic University of Ghana", "Islamic University College Ghana",
    "Ghana Baptist University College", "Methodist University Ghana", "Presbyterian University Ghana", "Wisconsin International University College",
    "Academic City University College", "Knutsford University College", "Mountcrest University College", "Regional Maritime University",
    "Data Link University College", "All Nations University", "BlueCrest University College", "Ghana Christian University College",
    "KAAF University College", "Kings University College", "Christian Service University College", "Anglican University College of Technology",
    "Radford University College", "Ghana Institute of Journalism (UniMAC-GIJ)", "Ghana Institute of Languages (GIL)",
    "Ghana Institute of Movie Arts & Communication (UniMAC-IJ)", "Dominion University College", "Webster University Ghana",
    "Heritage Christian College", "Evans University", "Nobel International Business School (NiBS)", "Spiritan University College",
    "Catholic Institute of Business & Technology (CIBT)", "West End University College", "Perez University College",
    "Accra Institute of Technology (AIT)", "Garden City University College", "African University College of Communications (AUCC)",
    "Institute of Local Government Studies (ILGS)", "Good News Theological College & Seminary", "University of Media, Arts and Communication (UniMAC)",
    "University of Mines and Technology (UMaT)", "Kofi Annan International Peacekeeping Training Centre (KAIPTC)",
    "National Film and Television Institute (NAFTI)", "Ghana School of Law", "Ghana Military Academy (GMA)",
    "Other (Type Your School Name)"
].sort();

const StudyApply = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", dob: "",
        nationality: "", passportNumber: "",
        highestQualification: "", school: "", otherSchool: "", graduationYear: "",
        preferredCountry: "", preferredCourse: "", intake: "",
        // Documents
        passportPicture: null as File | null,
        travellingPassport: null as File | null,
        nationalId: null as File | null,
        transcripts: null as File | null,
        certificates: null as File | null,
        cv: null as File | null,
        agreedToTerms: false
    });

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = () => {
        // Validation for Step 4
        if (!formData.passportPicture || !formData.travellingPassport || !formData.nationalId || !formData.agreedToTerms) {
            alert("Please upload all mandatory documents and agree to the terms.");
            return;
        }
        // Mock submission
        setStep(5); // Success step
    };

    const handleFileChange = (field: string, file: File | null) => {
        setFormData(prev => ({ ...prev, [field]: file }));
    };

    const renderStep1_Personal = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input placeholder="John" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input placeholder="Doe" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                </div>
            </div>
            <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input placeholder="+233 55 123 4567" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Nationality</Label>
                    <Select onValueChange={val => setFormData({ ...formData, nationality: val })}>
                        <SelectTrigger><SelectValue placeholder="Select Nationality" /></SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            {COUNTRIES.map((country, idx) => (
                                <SelectItem key={idx} value={country}>{country}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Passport Number</Label>
                    <Input placeholder="G12345678" value={formData.passportNumber} onChange={e => setFormData({ ...formData, passportNumber: e.target.value })} />
                </div>
            </div>
        </div>
    );

    const renderStep2_Education = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <Label>Highest Qualification</Label>
                <Select onValueChange={val => setFormData({ ...formData, highestQualification: val })}>
                    <SelectTrigger><SelectValue placeholder="Select Qualification" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="shs">WASSCE / SHS</SelectItem>
                        <SelectItem value="diploma">Diploma / HND</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label>School / University Attended</Label>
                <Select onValueChange={val => setFormData({ ...formData, school: val })}>
                    <SelectTrigger><SelectValue placeholder="Select School" /></SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                        {GHANA_UNIVERSITIES.map((uni, idx) => (
                            <SelectItem key={idx} value={uni}>{uni}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {formData.school === "Other (Type Your School Name)" && (
                    <Input
                        placeholder="Type your school name here..."
                        value={formData.otherSchool}
                        onChange={e => setFormData({ ...formData, otherSchool: e.target.value })}
                        className="mt-2 animate-in fade-in slide-in-from-top-2"
                    />
                )}
            </div>
            <div className="space-y-2">
                <Label>Year of Graduation</Label>
                <Input type="number" placeholder="2023" value={formData.graduationYear} onChange={e => setFormData({ ...formData, graduationYear: e.target.value })} />
            </div>
        </div>
    );

    const renderStep3_Preferences = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <Label>Preferred Country</Label>
                <Select onValueChange={val => setFormData({ ...formData, preferredCountry: val })}>
                    <SelectTrigger><SelectValue placeholder="Select Country" /></SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                        {COUNTRIES.map((country, idx) => (
                            <SelectItem key={idx} value={country}>{country}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label>Preferred Course</Label>
                <Input placeholder="e.g. Computer Science" value={formData.preferredCourse} onChange={e => setFormData({ ...formData, preferredCourse: e.target.value })} />
            </div>
            <div className="space-y-2">
                <Label>Preferred Intake</Label>
                <Select onValueChange={val => setFormData({ ...formData, intake: val })}>
                    <SelectTrigger><SelectValue placeholder="Select Intake" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="jan">January</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="sept">September</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );

    const renderStep4_Documents = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
                Please upload clear scans of your documents. PDF or JPG formats only. Max size 5MB.
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {[
                    { id: "passportPicture", label: "Passport Picture", required: true },
                    { id: "travellingPassport", label: "Travelling Passport Copy", required: true },
                    { id: "nationalId", label: "National ID Card", required: true },
                    { id: "transcripts", label: "Academic Transcripts", required: false },
                    { id: "certificates", label: "Certificates", required: false },
                    { id: "cv", label: "CV / Resume", required: false },
                ].map((doc) => (
                    <div key={doc.id} className="space-y-2">
                        <Label className="flex items-center gap-1">
                            {doc.label} {doc.required && <span className="text-red-500">*</span>}
                        </Label>
                        <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-colors cursor-pointer relative ${
                            // @ts-ignore
                            formData[doc.id] ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-tourigo-primary hover:bg-blue-50"
                            }`}>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => handleFileChange(doc.id, e.target.files ? e.target.files[0] : null)}
                                accept=".pdf,.jpg,.jpeg,.png"
                            />
                            {/* @ts-ignore */}
                            {formData[doc.id] ? (
                                <>
                                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                                    {/* @ts-ignore */}
                                    <p className="text-sm font-medium text-green-800 truncate max-w-[200px]">{formData[doc.id].name}</p>
                                </>
                            ) : (
                                <>
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-500">Click to upload</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center space-x-2 pt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <Checkbox id="terms" checked={formData.agreedToTerms} onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })} />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I have read and agree to the <span className="text-tourigo-primary underline cursor-pointer">Terms and Conditions</span> and Privacy Policy. <span className="text-red-500">*</span>
                </label>
            </div>
        </div>
    );

    const renderSuccess = () => (
        <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
                Thank you for applying with Tourigo. Our admissions team will review your documents and contact you within 24 hours.
            </p>
            <Button onClick={() => navigate("/")} className="bg-tourigo-primary text-white px-8 h-12">
                Return to Home
            </Button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {step < 5 && (
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admission Application</h1>
                            <p className="text-gray-600">Complete the form below to start your study abroad journey.</p>

                            {/* Progress Bar */}
                            <div className="flex gap-2 mt-6">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${step >= i ? "bg-tourigo-primary" : "bg-gray-200"}`} />
                                ))}
                            </div>
                        </div>
                    )}

                    <Card className="border-0 shadow-xl">
                        <CardContent className="p-8">
                            {step === 1 && renderStep1_Personal()}
                            {step === 2 && renderStep2_Education()}
                            {step === 3 && renderStep3_Preferences()}
                            {step === 4 && renderStep4_Documents()}
                            {step === 5 && renderSuccess()}
                        </CardContent>

                        {step < 5 && (
                            <CardFooter className="bg-gray-50 p-6 flex justify-between">
                                <Button variant="outline" onClick={handleBack} disabled={step === 1} className="gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </Button>
                                <Button
                                    onClick={step === 4 ? handleSubmit : handleNext}
                                    className="bg-tourigo-accent hover:bg-orange-600 text-white gap-2"
                                    disabled={step === 4 && (!formData.passportPicture || !formData.travellingPassport || !formData.nationalId || !formData.agreedToTerms)}
                                >
                                    {step === 4 ? "Submit Application" : "Next Step"} <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        )}
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudyApply;
