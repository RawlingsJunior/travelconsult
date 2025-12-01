import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MapPin, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (reviewText.trim()) {
            toast.success("Review submitted successfully! Thank you.");
            setReviewText("");
            setRating(5);
        } else {
            toast.error("Please write a review before submitting.");
        }
    };

    // Mock Booking Data
    const bookings: any[] = [];

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
                        <p className="text-gray-500">Manage your bookings and reviews here.</p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Logout
                    </Button>
                </div>

                <Tabs defaultValue="bookings" className="w-full">
                    <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                        <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                        <TabsTrigger value="reviews">Write a Review</TabsTrigger>
                    </TabsList>

                    <TabsContent value="bookings" className="space-y-4">
                        {bookings.map((booking) => (
                            <Card key={booking.id} className="overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full md:w-48 h-32 md:h-auto">
                                        <img src={booking.image} alt={booking.destination} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                                <span className="font-mono">{booking.id}</span>
                                                <span>•</span>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{booking.destination}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {booking.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    5 Days
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <Button variant="link" className="text-tourigo-accent p-0 h-auto">View Details</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="reviews">
                        <Card>
                            <CardHeader>
                                <CardTitle>Share your experience</CardTitle>
                                <CardDescription>
                                    Tell us about your recent trip. Your feedback helps us improve!
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmitReview} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Rating</Label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    className="focus:outline-none transition-transform hover:scale-110"
                                                >
                                                    <Star
                                                        className={`w-8 h-8 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="review">Your Review</Label>
                                        <Textarea
                                            id="review"
                                            placeholder="What did you enjoy most about your trip?"
                                            className="min-h-[150px]"
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                        />
                                    </div>

                                    <Button type="submit" className="bg-tourigo-primary hover:bg-tourigo-primary/90">
                                        Submit Review
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
