import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import {
    Calendar as CalendarIcon, Check, CreditCard, Smartphone,
    MapPin, Shield, Briefcase, ArrowRight, ArrowLeft, Info,
    Download, CalendarPlus, MessageCircle, PhoneCall, Clock,
    Plane, Hotel, Map, Car, FileCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DESTINATIONS } from "@/data/destinations";

// Enhanced Mock Data
const ADDONS = [
    { id: "pickup", name: "VIP Airport Pickup", description: "Luxury car transfer to hotel" },
    { id: "tour", name: "City Tour", description: "Full day guided city exploration" },
    { id: "extra_night", name: "Extra Night Stay", description: "Extend your trip by one night" },
    { id: "insurance", name: "Travel Insurance", description: "Full coverage for medical & cancellations" },
    { id: "private_transport", name: "Private Transport", description: "Chauffeur service for entire trip" },
];

const HOTELS = [
    { id: "3star", name: "Comfort Inn (3★)", description: "Standard room, Breakfast included" },
    { id: "4star", name: "Grand Plaza (4★)", description: "Deluxe room, Pool access, Breakfast" },
    { id: "5star", name: "Royal Palace (5★)", description: "Suite, All-inclusive, Spa access" },
];



const BookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Auth check removed to allow guest booking

    // Default state
    const defaultPackage = { name: "Standard Package", duration: 5 };
    const defaultDestination = DESTINATIONS.find(d => d.id === "dubai") || DESTINATIONS[0];

    const initialState = {
        destination: location.state?.destination || defaultDestination,
        package: location.state?.package || defaultPackage
    };
    const SERVICES = [
        { id: "flight", name: "Flight Booking", icon: Plane },
        { id: "hotel", name: "Hotel Reservation", icon: Hotel },
        { id: "tour", name: "Tour Package", icon: Map },
        { id: "car", name: "Car Rental", icon: Car },
        { id: "visa", name: "Visa Assistance", icon: FileCheck },
    ];

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Service Info
        serviceType: (location.state?.serviceType as string) || "tour",
        destination: (location.state?.destination as typeof DESTINATIONS[0]) || defaultDestination,

        // Traveler Info
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        passportId: "",
        dob: undefined as Date | undefined,
        nationality: "",

        // Travel Details
        startDate: undefined as Date | undefined,
        adults: 1,
        children: 0,
        hotel: "3star",
        selectedAddons: [] as string[],

        // Payment
        paymentMethod: "",
        promoCode: "",
        agreedToTerms: false,
    });

    const [promoApplied, setPromoApplied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    // Calculations
    // Calculations removed as per request
    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const toggleAddon = (id: string) => {
        setFormData(prev => ({
            ...prev,
            selectedAddons: prev.selectedAddons.includes(id)
                ? prev.selectedAddons.filter(a => a !== id)
                : [...prev.selectedAddons, id]
        }));
    };

    const applyPromo = () => {
        if (formData.promoCode.toUpperCase() === "TOURIGO10") {
            setPromoApplied(true);
        }
    };

    // Render Steps
    const renderStep1_TravelerInfo = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" /> Select Service
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {SERVICES.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setFormData({ ...formData, serviceType: service.id })}
                                className={cn(
                                    "flex flex-col items-center justify-center p-2 rounded-lg border cursor-pointer transition-all hover:shadow-sm bg-white",
                                    formData.serviceType === service.id ? "border-tourigo-primary ring-1 ring-tourigo-primary bg-blue-50" : "border-gray-200 hover:border-blue-200"
                                )}
                            >
                                <service.icon className={cn("w-5 h-5 mb-1", formData.serviceType === service.id ? "text-tourigo-primary" : "text-gray-500")} />
                                <span className={cn("text-[10px] font-bold text-center", formData.serviceType === service.id ? "text-tourigo-primary" : "text-gray-600")}>{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destination Selection */}
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" /> Select Destination
                    </h3>
                    <Select
                        value={formData.destination.id}
                        onValueChange={(val) => {
                            const dest = DESTINATIONS.find(d => d.id === val);
                            if (dest) setFormData({ ...formData, destination: dest });
                        }}
                    >
                        <SelectTrigger className="w-full bg-white border-orange-200">
                            <SelectValue placeholder="Select Destination" />
                        </SelectTrigger>
                        <SelectContent>
                            {DESTINATIONS.map((dest) => (
                                <SelectItem key={dest.id} value={dest.id}>{dest.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {formData.destination && (
                        <div className="mt-4 bg-white p-3 rounded-lg border border-orange-100 shadow-sm animate-in fade-in zoom-in duration-300">
                            <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
                                <img
                                    src={formData.destination.image}
                                    alt={formData.destination.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                    <p className="text-white font-bold text-lg">{formData.destination.name}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {formData.destination.description || "A wonderful destination waiting for you to explore."}
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Popular</span>
                                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Safe</span>
                                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Guided Tours</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">Traveler Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input
                        placeholder="e.g. Kwame"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input
                        placeholder="e.g. Mensah"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input
                        type="email"
                        placeholder="kwame@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                        placeholder="+233 55 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Passport / ID Number</Label>
                    <Input
                        placeholder="Enter ID Number"
                        value={formData.passportId}
                        onChange={(e) => setFormData({ ...formData, passportId: e.target.value })}
                        className="h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"outline"} className={cn("w-full h-12 justify-start text-left font-normal", !formData.dob && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.dob ? format(formData.dob, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={formData.dob} onSelect={(date) => setFormData({ ...formData, dob: date })} initialFocus />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label>Nationality</Label>
                    <Select onValueChange={(val) => setFormData({ ...formData, nationality: val })}>
                        <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ghanaian">Ghanaian</SelectItem>
                            <SelectItem value="nigerian">Nigerian</SelectItem>
                            <SelectItem value="american">American</SelectItem>
                            <SelectItem value="british">British</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );

    const renderStep2_TravelDetails = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-900">Travel Details</h2>

            {/* Dates & Guests */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label>Departure Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"outline"} className={cn("w-full h-12 justify-start text-left font-normal", !formData.startDate && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={formData.startDate} onSelect={(date) => setFormData({ ...formData, startDate: date })} initialFocus />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Adults</Label>
                        <Input
                            type="number" min={1}
                            value={formData.adults}
                            onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                            className="h-12"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Children</Label>
                        <Input
                            type="number" min={0}
                            value={formData.children}
                            onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                            className="h-12"
                        />
                    </div>
                </div>
            </div>

            <Separator />

            {/* Hotel Selection */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-tourigo-primary" /> Hotel Selection
                </h3>
                <RadioGroup value={formData.hotel} onValueChange={(val) => setFormData({ ...formData, hotel: val })}>
                    <div className="grid gap-4">
                        {HOTELS.map((hotel) => (
                            <div key={hotel.id} className={cn("flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md", formData.hotel === hotel.id ? "border-tourigo-primary bg-blue-50" : "border-gray-100 hover:border-gray-200")}>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value={hotel.id} id={hotel.id} />
                                    <div>
                                        <Label htmlFor={hotel.id} className="cursor-pointer font-bold text-base">{hotel.name}</Label>
                                        <p className="text-sm text-gray-500">{hotel.description}</p>
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full border">
                                    Selected
                                </div>
                            </div>
                        ))}
                    </div>
                </RadioGroup>
            </div>

            <Separator />

            {/* Add-ons */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-tourigo-primary" /> Enhance Your Trip
                </h3>
                <div className="grid gap-4">
                    {ADDONS.map((addon) => (
                        <div
                            key={addon.id}
                            className={cn("flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md", formData.selectedAddons.includes(addon.id) ? "border-tourigo-accent bg-orange-50" : "border-gray-100 hover:border-gray-200")}
                            onClick={() => toggleAddon(addon.id)}
                        >
                            <div className="flex items-center gap-3">
                                <Checkbox checked={formData.selectedAddons.includes(addon.id)} onCheckedChange={() => toggleAddon(addon.id)} />
                                <div>
                                    <p className="font-bold text-gray-800">{addon.name}</p>
                                    <p className="text-xs text-gray-500">{addon.description}</p>
                                </div>
                            </div>
                            <div className="font-bold text-tourigo-primary">Selected</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderStep3_Payment = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-900">Payment & Confirmation</h2>

            {/* Promo Code */}
            <div className="flex gap-2">
                <Input
                    placeholder="Enter Promo Code (Try TOURIGO10)"
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                    className="h-12"
                />
                <Button onClick={applyPromo} variant="secondary" className="h-12 px-6">Apply</Button>
            </div>
            {promoApplied && <p className="text-green-600 text-sm font-medium flex items-center gap-2"><Check className="w-4 h-4" /> Promo code applied successfully! 10% off.</p>}

            <Separator />

            <h3 className="font-bold text-lg">Select Payment Method</h3>
            <div className="grid gap-4">
                <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                    className={cn("flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md", formData.paymentMethod === "card" ? "border-tourigo-primary bg-blue-50" : "border-gray-200 hover:border-gray-300")}
                >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Credit / Debit Card</h4>
                        <p className="text-sm text-gray-500">Secure payment via Paystack</p>
                    </div>
                    {formData.paymentMethod === "card" && <Check className="ml-auto w-6 h-6 text-tourigo-primary" />}
                </div>

                <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "momo" })}
                    className={cn("flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md", formData.paymentMethod === "momo" ? "border-tourigo-primary bg-blue-50" : "border-gray-200 hover:border-gray-300")}
                >
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Mobile Money</h4>
                        <p className="text-sm text-gray-500">MTN, Vodafone, AirtelTigo</p>
                    </div>
                    {formData.paymentMethod === "momo" && <Check className="ml-auto w-6 h-6 text-tourigo-primary" />}
                </div>

                <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "later" })}
                    className={cn("flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md", formData.paymentMethod === "later" ? "border-tourigo-primary bg-blue-50" : "border-gray-200 hover:border-gray-300")}
                >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Pay Later</h4>
                        <p className="text-sm text-gray-500">Reserve now, pay 48h before trip</p>
                    </div>
                    {formData.paymentMethod === "later" && <Check className="ml-auto w-6 h-6 text-tourigo-primary" />}
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                <div className="flex items-start gap-3">
                    <Checkbox
                        id="terms"
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree to the <span className="text-tourigo-primary underline cursor-pointer">Terms & Conditions</span> and <span className="text-tourigo-primary underline cursor-pointer">Cancellation Policy</span>.
                        </label>
                        <p className="text-sm text-muted-foreground">
                            Free cancellation up to 48 hours before the trip.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const handleDownload = () => {
        window.print();
    };

    const handleCalendar = () => {
        const event = {
            title: `Trip to ${formData.destination.name}`,
            description: `Booking Ref: TRV-${Math.floor(Math.random() * 100000)}\nPackage: ${initialState.package.name}\nHotel: ${HOTELS.find(h => h.id === formData.hotel)?.name}`,
            location: `${formData.destination.name}, ${formData.destination.country}`,
            startTime: formData.startDate ? formData.startDate.toISOString().replace(/-|:|\.\d+/g, "") : "",
            endTime: formData.startDate ? addDays(formData.startDate, initialState.package.duration).toISOString().replace(/-|:|\.\d+/g, "") : ""
        };

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            `DTSTART:${event.startTime}`,
            `DTEND:${event.endTime}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `LOCATION:${event.location}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "trip_itinerary.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderStep4_Confirmation = () => (
        <div className="text-center space-y-8 py-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-lg">
                <Check className="w-12 h-12" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h2>
                <p className="text-gray-500 mt-2 text-lg">
                    Get your bags ready! We've sent the details to <span className="font-bold text-gray-900">{formData.email}</span>
                </p>
            </div>

            <div className="bg-white border p-6 rounded-2xl max-w-md mx-auto shadow-sm text-left space-y-4 print:shadow-none print:border-0">
                <div className="flex justify-between items-center border-b pb-4">
                    <span className="text-gray-500">Booking Ref</span>
                    <span className="font-mono font-bold text-lg">TRV-{Math.floor(Math.random() * 100000)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Destination</span>
                    <span className="font-bold">{formData.destination.name}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Date</span>
                    <span className="font-bold">{formData.startDate ? format(formData.startDate, "PPP") : "TBD"}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-gray-500">Status</span>
                    <span className="font-bold text-xl text-tourigo-primary">Confirmed</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
                <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
                    Return Home
                </Button>
                <Button variant="outline" onClick={handleCalendar} className="gap-2">
                    <CalendarPlus className="w-4 h-4" /> Add to Calendar
                </Button>
                <Button onClick={handleDownload} className="bg-tourigo-primary text-white gap-2">
                    <Download className="w-4 h-4" /> Download Ticket
                </Button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20 md:pb-0 print:bg-white print:pb-0">
            <div className="print:hidden">
                <Header />
            </div>

            {/* Page Header */}
            <div className="bg-tourigo-primary text-white py-12 relative overflow-hidden print:hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Complete Your Booking</h1>
                    <p className="text-white/80 text-lg">You're just a few steps away from your dream trip to {formData.destination.name}.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 -mt-8 relative z-20 print:mt-0 print:p-0">
                <div className="grid lg:grid-cols-3 gap-8 print:block">

                    {/* Main Form Area */}
                    <div className="lg:col-span-2 print:w-full">
                        <Card className="shadow-xl border-0 overflow-hidden print:shadow-none">
                            {step < 4 && (
                                <div className="bg-gray-100 p-4 flex justify-between items-center text-sm font-medium text-gray-500 overflow-x-auto print:hidden">
                                    <div className={cn("flex items-center gap-2 shrink-0", step >= 1 && "text-tourigo-primary")}>
                                        <div className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors", step >= 1 ? "border-tourigo-primary bg-white" : "border-gray-400")}>1</div>
                                        <span className="hidden sm:inline">Traveler Info</span>
                                    </div>
                                    <div className="w-12 h-0.5 bg-gray-300 shrink-0" />
                                    <div className={cn("flex items-center gap-2 shrink-0", step >= 2 && "text-tourigo-primary")}>
                                        <div className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors", step >= 2 ? "border-tourigo-primary bg-white" : "border-gray-400")}>2</div>
                                        <span className="hidden sm:inline">Details</span>
                                    </div>
                                    <div className="w-12 h-0.5 bg-gray-300 shrink-0" />
                                    <div className={cn("flex items-center gap-2 shrink-0", step >= 3 && "text-tourigo-primary")}>
                                        <div className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors", step >= 3 ? "border-tourigo-primary bg-white" : "border-gray-400")}>3</div>
                                        <span className="hidden sm:inline">Payment</span>
                                    </div>
                                </div>
                            )}

                            <CardContent className="p-6 md:p-8">
                                {step === 1 && renderStep1_TravelerInfo()}
                                {step === 2 && renderStep2_TravelDetails()}
                                {step === 3 && renderStep3_Payment()}
                                {step === 4 && renderStep4_Confirmation()}
                            </CardContent>

                            {step < 4 && (
                                <CardFooter className="bg-gray-50 p-6 flex justify-between print:hidden">
                                    {step > 1 ? (
                                        <Button variant="outline" onClick={handleBack} className="gap-2 h-12 px-6">
                                            <ArrowLeft className="w-4 h-4" /> Back
                                        </Button>
                                    ) : (
                                        <div />
                                    )}
                                    <Button
                                        onClick={step === 3 ? () => setStep(4) : handleNext}
                                        className="bg-tourigo-accent hover:bg-orange-600 text-white gap-2 px-8 h-12 text-lg shadow-lg shadow-orange-200"
                                        disabled={
                                            (step === 1 && (!formData.firstName || !formData.email || !formData.phone)) ||
                                            (step === 2 && !formData.startDate) ||
                                            (step === 3 && (!formData.paymentMethod || !formData.agreedToTerms))
                                        }
                                    >
                                        {step === 3 ? "Pay Securely" : "Next Step"} <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </CardFooter>
                            )}
                        </Card>
                    </div>

                    {/* Sidebar Summary & Support */}
                    {step < 4 && (
                        <div className="lg:col-span-1 space-y-6 print:hidden">
                            {/* Booking Summary */}
                            <Card className="shadow-lg border-0 sticky top-24">
                                <CardHeader className="bg-tourigo-light/30 pb-4">
                                    <CardTitle className="text-lg text-tourigo-primary">Booking Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex gap-4 items-center mb-4">
                                        <img src={formData.destination.image} alt="Dest" className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg leading-tight">{formData.destination.name}</h4>
                                            <p className="text-sm text-gray-500">{formData.destination.country}</p>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-lg text-gray-900">Status</span>
                                        <span className="font-bold text-xl text-tourigo-primary">Pending Payment</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Support Widget */}
                            <Card className="shadow-md border-0 bg-white">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                                    <div className="space-y-3">
                                        <Button variant="outline" className="w-full justify-start gap-3 h-12">
                                            <MessageCircle className="w-5 h-5 text-green-500" /> Chat on WhatsApp
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start gap-3 h-12">
                                            <PhoneCall className="w-5 h-5 text-blue-500" /> Call Support
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Secure Booking</p>
                                    <p className="text-xs text-gray-500">Your data is protected by 256-bit SSL encryption.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Sticky Footer */}
            {
                step < 4 && (
                    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-2xl z-50 flex items-center justify-between print:hidden">
                        <div>
                            <p className="text-xl font-bold text-tourigo-primary">Book Now</p>
                        </div>
                        <Button
                            onClick={step === 3 ? () => setStep(4) : handleNext}
                            className="bg-tourigo-accent text-white rounded-full px-6"
                            disabled={
                                (step === 1 && (!formData.firstName || !formData.email)) ||
                                (step === 2 && !formData.startDate) ||
                                (step === 3 && (!formData.paymentMethod || !formData.agreedToTerms))
                            }
                        >
                            {step === 3 ? "Pay" : "Next"} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                )
            }

            <div className="print:hidden">
                <Footer />
            </div>
        </div >
    );
};

export default BookingPage;
