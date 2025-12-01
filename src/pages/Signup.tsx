import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Signup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && phone && email && location && address && password) {
            login({
                id: Date.now().toString(),
                name: name,
                email: email,
                phone: phone,
                location: location,
                address: address,
            });
            toast.success("Account created successfully!");
            navigate("/dashboard");
        } else {
            toast.error("Please fill in all mandatory fields");
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative font-sans text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/auth-bg.jpg" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow flex items-center justify-center p-4">
                    {/* Glassmorphism Card */}
                    <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl my-8">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold tracking-wide mb-2">register</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Full Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Location</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="City, Country"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Address</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Street Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-purple-900 hover:bg-white/90 font-bold py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg mt-4"
                            >
                                register
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-white/80">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="font-bold text-white hover:underline ml-1">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Signup;
