import { Plane, Hotel, Map, Car, FileCheck, Briefcase, ArrowRight, GraduationCap, Globe, Users, Megaphone, CalendarHeart, FileText, Truck, ShieldCheck, Laptop } from "lucide-react";

export const DETAILED_SERVICES = [
    {
        id: "passport",
        title: "Passport & Birth Certificates",
        description: "Assistance for Normal & Express services. We handle all the required processes from start to finish.",
        icon: ShieldCheck,
        color: "text-red-500",
        bgColor: "bg-red-50",
        image: "/Visa%20Application.avif",
        includes: [
            "Assistance with completing required forms",
            "Checking documents for accuracy",
            "Submitting applications through the right channels",
            "Tracking progress",
            "Fast processing options (Express)",
            "Guidance on renewal and corrections"
        ],
        why: "Customers save time, avoid errors, and enjoy smooth, reliable document processing."
    },
    {
        id: "school-app",
        title: "International School Application",
        description: "Guiding students through the entire application process for schools abroad.",
        icon: GraduationCap,
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
        image: "/study-abroad-home.jpg",
        includes: [
            "Selecting the best schools and programs",
            "Completing application forms",
            "Document preparation (transcripts, letters, passport)",
            "Application submission",
            "Follow-ups with institutions"
        ],
        why: "Students receive expert guidance to avoid mistakes and increase their chances of gaining admission."
    },
    {
        id: "online-school",
        title: "Online School Applications",
        description: "Full digital support for students applying to schools that use online portals.",
        icon: Laptop,
        color: "text-cyan-500",
        bgColor: "bg-cyan-50",
        image: "/study-abroad-home.jpg",
        includes: [
            "Creating applicant accounts on school portals",
            "Uploading documents",
            "Filling application forms correctly",
            "Tracking application status"
        ],
        why: "It ensures accurate completion of online applications and eliminates technical challenges."
    },
    {
        id: "visa",
        title: "Visa Assistance",
        description: "Hassle-free visa application guidance for tourism, business, school, work, and residency.",
        icon: FileCheck,
        color: "text-red-500",
        bgColor: "bg-red-50",
        image: "/Visa%20Application.avif",
        includes: [
            "Visa requirements explanation",
            "Filling visa forms",
            "Preparing supporting documents",
            "Booking visa interview appointments",
            "Travel itinerary assistance",
            "Advisory on approval tips"
        ],
        why: "Clients avoid mistakes that often lead to visa rejection."
    },
    {
        id: "flight",
        title: "Flight Booking",
        description: "Get the best deals on domestic and international flights. We handle all the ticketing details.",
        icon: Plane,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        image: "/flight%20booking.avif",
        includes: [
            "Comparing ticket prices",
            "Finding the cheapest or most convenient flights",
            "Booking directly for clients",
            "Sending digital tickets",
            "Rescheduling or modifications (when needed)"
        ],
        why: "Clients get affordable and reliable flight arrangements without stress."
    },
    {
        id: "hotel",
        title: "Hotel Reservations",
        description: "Luxury stays to budget-friendly accommodations. We find the perfect place for you to rest.",
        icon: Hotel,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        image: "/hotel-booking.jpg",
        includes: [
            "Searching for hotels based on budget",
            "Booking rooms",
            "Special requests (breakfast, airport pickup, etc.)",
            "Group reservations",
            "Confirming bookings before client arrival"
        ],
        why: "Clients enjoy smooth travel experiences with pre-arranged, comfortable accommodation."
    },
    {
        id: "flight-reservation",
        title: "Flight Reservations",
        description: "Temporary flight reservations for visa applications or planning purposes.",
        icon: FileText,
        color: "text-indigo-500",
        bgColor: "bg-indigo-50",
        image: "/flight%20booking.avif",
        includes: [
            "Holding a seat for a short period",
            "Providing reservation documents for visa interviews",
            "Options for upgrading to full ticket purchase"
        ],
        why: "Helps clients meet embassy requirements without buying a ticket immediately."
    },
    {
        id: "import-export",
        title: "Importation & Exportation",
        description: "Movement of goods between Ghana and major international markets (Canada, USA, UK, China, Dubai).",
        icon: Truck,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Helping clients buy products abroad",
            "Clearing goods at ports",
            "Shipping packages to and from Ghana",
            "Tracking shipments",
            "Customs documentation"
        ],
        why: "Clients get safe, fast, and reliable transport of goods globally."
    },
    {
        id: "cv-writing",
        title: "Resumes & CV Writing",
        description: "Professional CV writing service that improves your chances of securing jobs or admissions.",
        icon: FileText,
        color: "text-gray-500",
        bgColor: "bg-gray-100",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Designing professional CV layouts",
            "Writing clear, strong job descriptions",
            "Adding skills, achievements, education",
            "Tailoring CVs for specific job roles",
            "Editing existing CVs"
        ],
        why: "A great CV increases the chances of employment or admission."
    },
    {
        id: "events",
        title: "Events Planning",
        description: "Full event management for weddings, engagements, outdoorings, anniversaries, and birthdays.",
        icon: CalendarHeart,
        color: "text-pink-500",
        bgColor: "bg-pink-50",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Planning event concepts",
            "Decoration & venue setup",
            "Budget creation",
            "Hiring service providers (DJ, MC, caterers, etc.)",
            "On-the-day coordination",
            "Photography / videography guidance"
        ],
        why: "Clients enjoy well-organized, memorable events without stress."
    },
    {
        id: "hiring",
        title: "Hiring Skilled Workers",
        description: "Connecting businesses or individuals with reliable skilled and non-skilled workers nationwide.",
        icon: Users,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Recruiting and screening candidates",
            "Matching workers to job requirements",
            "Providing temporary or permanent staff",
            "Verifying skills and experience",
            "Nationwide worker availability"
        ],
        why: "Companies save time and receive trusted workers quickly."
    },
    {
        id: "marketing",
        title: "Advertising & Marketing",
        description: "Digital and offline promotional services to help businesses, individuals, and corporations grow.",
        icon: Megaphone,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Social media promotions",
            "Flyers, posters, and banners",
            "Branding support",
            "Product promotion",
            "Campaign strategy",
            "Business visibility solutions"
        ],
        why: "Helps clients reach more customers and grow their brands."
    },
    {
        id: "tourist-visa",
        title: "Tourist Visa Assistance",
        description: "Specialized support for clients traveling for tourism to China, Dubai, Kuwait, etc.",
        icon: Globe,
        color: "text-pink-500",
        bgColor: "bg-pink-50",
        image: "/Visa%20Application.avif",
        includes: [
            "Requirements checklist",
            "Application form completion",
            "Travel itinerary planning",
            "Flight & hotel arrangements",
            "Embassy interview guidance"
        ],
        why: "Ensures stress-free and successful visa applications."
    },
    {
        id: "car",
        title: "Renting & Selling of Cars",
        description: "Reliable car rental services and car sales. Choose from a wide fleet for any purpose.",
        icon: Car,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
        includes: [
            "Car rentals for travel, events, and business",
            "Affordable daily or weekly rates",
            "Wide selection of cars",
            "Car purchase assistance",
            "Verification of vehicle documents"
        ],
        why: "Clients get safe and reliable transportation options for any purpose."
    }
];
