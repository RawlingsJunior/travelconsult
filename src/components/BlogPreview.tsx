import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const articles = [
    {
        id: 1,
        title: "Top 10 Hidden Gems in Ghana",
        excerpt: "Discover the breathtaking waterfalls, secluded beaches, and historic sites that most tourists miss.",
        image: "https://images.unsplash.com/photo-1543791959-12b3f543282a?auto=format&fit=crop&q=80&w=800",
        date: "Oct 15, 2023",
        author: "Kwame A.",
        category: "Destinations"
    },
    {
        id: 2,
        title: "Complete Visa Guide for UK Students",
        excerpt: "Everything you need to know about applying for a Tier 4 student visa, from documents to interviews.",
        image: "/Visa guide.png",
        date: "Nov 02, 2023",
        author: "Sarah J.",
        category: "Study Abroad"
    },
    {
        id: 3,
        title: "Best Time to Visit Dubai",
        excerpt: "Planning a trip to the UAE? Here's a breakdown of the weather, events, and prices throughout the year.",
        image: "/Dubai.jpg",
        date: "Nov 20, 2023",
        author: "David M.",
        category: "Travel Tips"
    }
];

const BlogPreview = () => {
    return (
        <section className="py-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Airline.webp")' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Travel News</h2>
                        <p className="text-gray-300 max-w-xl">
                            Stay updated with the latest travel trends, guides, and inspiration for your next adventure.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 text-white border-white hover:bg-white hover:text-black transition-colors">
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Card key={article.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-tourigo-primary">
                                    {article.category}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {article.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-tourigo-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {article.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button variant="link" className="p-0 h-auto text-tourigo-primary font-bold gap-1 group-hover:gap-2 transition-all">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="gap-2 text-white border-white hover:bg-white hover:text-black transition-colors">
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
