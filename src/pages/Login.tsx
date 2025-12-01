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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            login({
                id: "1",
                name: "John Doe",
                email: email,
            });
            toast.success("Welcome back!");
            navigate("/dashboard");
        } else {
            toast.error("Please fill in all fields");
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
                    <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold tracking-wide mb-2">login</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                <label className="text-sm font-medium ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full bg-transparent border-b border-white/40 py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-2 top-2 text-white/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-white/80">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-white/40 bg-transparent text-white focus:ring-0 focus:ring-offset-0" />
                                    <span>Remember Me</span>
                                </label>
                                <a href="#" className="hover:text-white hover:underline">Forget Password</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-purple-900 hover:bg-white/90 font-bold py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg mt-4"
                            >
                                login
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-white/80">
                            <p>
                                Don't have an account?{" "}
                                <Link to="/signup" className="font-bold text-white hover:underline ml-1">
                                    Register
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

export default Login;
