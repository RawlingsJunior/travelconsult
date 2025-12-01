
export interface Destination {
    id: string;
    title: string;
    location: string;
    description: string;
    image: string;
    // Detailed fields
    name: string;
    country: string;
    tagline: string;
    rating: number;
    reviewCount: number;
    heroImage: string;
    gallery: string[];
    quickInfo: {
        bestTime: string;
        duration: string;
        region: string;
        hotelLevel: string;
    };
    overview: {
        description: string;
        highlights: string[];
    };
    packages: {
        name: string;
        duration: string;
        level: string;
        includes: string[];
        popular?: boolean;
    }[];
    inclusions: string[];
    exclusions: string[];
    itinerary: { day: number; title: string; desc: string }[];
    reviews: { user: string; rating: number; comment: string }[];
    faqs: { q: string; a: string }[];
}

const baseDestinations = [
    {
        id: "holland",
        title: "Explore The Canals of Holland",
        location: "Holland",
        description: "Experience the charm of Amsterdam's canals, historic windmills, and vibrant tulip fields.",
        image: "/Holland.jpg"
    },
    {
        id: "belgium",
        title: "Discover Historic Belgium",
        location: "Belgium",
        description: "Wander through medieval towns, taste world-famous chocolates, and visit the Grand Place.",
        image: "/Belgium.jpg"
    },
    {
        id: "france",
        title: "Romance in France",
        location: "France",
        description: "Visit the iconic Eiffel Tower, explore the Louvre, and indulge in exquisite French cuisine.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "sweden",
        title: "Scenic Beauty of Sweden",
        location: "Sweden",
        description: "Explore the stunning archipelago of Stockholm and experience the unique Swedish culture.",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ireland",
        title: "Green Landscapes of Ireland",
        location: "Ireland",
        description: "Marvel at the Cliffs of Moher and enjoy the lively atmosphere of Dublin's pubs.",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "italy",
        title: "Ancient Wonders of Italy",
        location: "Italy",
        description: "Step back in time at the Colosseum, ride a gondola in Venice, and savor authentic pasta.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "portugal",
        title: "Coastal Charm of Portugal",
        location: "Portugal",
        description: "Discover the colorful streets of Lisbon and the stunning beaches of the Algarve.",
        image: "/Portugal.jpg"
    },
    {
        id: "spain",
        title: "Vibrant Culture of Spain",
        location: "Spain",
        description: "Experience the passion of flamenco, visit the Sagrada Familia, and enjoy tapas.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "denmark",
        title: "Fairytale Denmark",
        location: "Denmark",
        description: "Stroll along Nyhavn harbor and visit the statue of The Little Mermaid in Copenhagen.",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "germany",
        title: "Historic Germany",
        location: "Germany",
        description: "Explore the history of Berlin, the beauty of the Black Forest, and fairytale castles.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "usa",
        title: "Diverse USA",
        location: "USA",
        description: "From the bustling streets of New York City to the natural wonders of the Grand Canyon.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "canada",
        title: "Wilderness of Canada",
        location: "Canada",
        description: "Witness the breathtaking beauty of the Rocky Mountains and turquoise lakes.",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "california",
        title: "Sunny California",
        location: "California",
        description: "Drive across the Golden Gate Bridge, visit Hollywood, and relax on the beaches.",
        image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "australia",
        title: "Adventures in Australia",
        location: "Australia",
        description: "See the Sydney Opera House, dive the Great Barrier Reef, and explore the Outback.",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "china",
        title: "Wonders of China",
        location: "China",
        description: "Walk the Great Wall of China and explore the Forbidden City in Beijing.",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "dubai",
        title: "Luxury in Dubai",
        location: "Dubai, UAE",
        description: "Experience the luxury of the desert. Visit the Burj Khalifa, shop at the Dubai Mall, and enjoy a desert safari.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe65?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "bali",
        title: "Tropical Bali",
        location: "Bali, Indonesia",
        description: "A tropical paradise. Relax on pristine beaches, visit ancient temples, and experience vibrant culture.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "accra",
        title: "Vibrant Accra",
        location: "Accra, Ghana",
        description: "Discover the heart of West Africa. Visit historical castles, bustling markets, and beautiful beaches.",
        image: "https://images.unsplash.com/photo-1606294767448-42f49553f206?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "capetown",
        title: "Scenic Cape Town",
        location: "Cape Town, South Africa",
        description: "Where mountains meet the sea. Visit Table Mountain, Robben Island, and the Cape Winelands.",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800"
    }
];

export const DESTINATIONS: Destination[] = baseDestinations.map(dest => ({
    ...dest,
    name: dest.location,
    country: dest.location,
    tagline: dest.description,
    rating: 4.8,
    reviewCount: 120,
    heroImage: dest.image,
    gallery: [
        dest.image,
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    ],
    quickInfo: {
        bestTime: "Year Round",
        duration: "5-7 Days",
        region: "International",
        hotelLevel: "4-5 Stars",
    },
    overview: {
        description: dest.description + " This destination offers a unique blend of culture, history, and natural beauty. Perfect for travelers seeking an unforgettable experience.",
        highlights: [
            "City Tours",
            "Cultural Landmarks",
            "Local Cuisine Tasting",
            "Scenic Landscapes"
        ]
    },
    packages: [
        {
            name: "Standard Package",
            duration: "5 Days",
            level: "4-Star Hotel",
            includes: ["Accommodation", "Breakfast", "City Tour"],
            popular: true
        },
        {
            name: "Premium Package",
            duration: "7 Days",
            level: "5-Star Hotel",
            includes: ["Luxury Accommodation", "All Meals", "Private Tours", "Transfers"]
        }
    ],
    inclusions: ["Accommodation", "Breakfast", "Guide", "Transport"],
    exclusions: ["Flights", "Personal Expenses", "Visa Fees"],
    itinerary: [
        { day: 1, title: "Arrival", desc: "Arrive at the destination and transfer to your hotel." },
        { day: 2, title: "City Tour", desc: "Explore the main attractions of the city with a guided tour." },
        { day: 3, title: "Cultural Experience", desc: "Immerse yourself in the local culture and traditions." },
        { day: 4, title: "Leisure Day", desc: "Enjoy a free day to explore on your own or relax." },
        { day: 5, title: "Departure", desc: "Transfer to the airport for your departure flight." }
    ],
    reviews: [
        { user: "John D.", rating: 5, comment: "An amazing trip! Everything was perfectly organized." },
        { user: "Sarah M.", rating: 4, comment: "Great experience, beautiful destination." }
    ],
    faqs: [
        { q: "What is the best time to visit?", a: "The destination is great to visit year-round, but spring and autumn are particularly pleasant." },
        { q: "Is visa required?", a: "Please check the visa requirements for your specific nationality." }
    ]
}));
