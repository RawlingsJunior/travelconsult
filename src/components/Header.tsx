import { useState } from "react";
import { Facebook, Twitter, Linkedin, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Destinations", path: "/destinations" },
        { name: "Study Abroad", path: "/study-abroad" },
        { name: "Contacts", path: "/contacts" },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top Bar - Hidden on Mobile */}
            <div className="hidden md:flex bg-tourigo-primary text-white py-2 px-4 md:px-12 text-sm justify-between items-center">
                <div className="flex gap-4">
                    <span>0545726227</span>
                    <span>inf@mytravelconsult.com</span>
                </div>
                <div className="flex gap-4">
                    <Facebook className="w-3 h-3" />
                    <Twitter className="w-3 h-3" />
                    <Linkedin className="w-3 h-3" />
                </div>
            </div>

            <div className="py-2 px-4 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="Elshadai Millenium Travel and Shopping" className="h-12 sm:h-16 md:h-24 w-auto object-contain" />
                    <div className="flex flex-col">
                        <span className="font-bold text-sm sm:text-lg md:text-2xl text-tourigo-primary leading-tight">Elshadai Millenium</span>
                        <span className="font-medium text-[10px] sm:text-xs md:text-sm text-gray-600 tracking-wider">Travel and Shopping</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-base font-medium text-gray-700 hover:text-tourigo-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-4 text-gray-600">
                        <a href="https://facebook.com" className="hover:text-tourigo-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://twitter.com" className="hover:text-tourigo-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="https://linkedin.com" className="hover:text-tourigo-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>

                    <div className="h-6 w-px bg-gray-200" />

                    <Link to={isAuthenticated ? "/dashboard" : "/login"} className="hover:text-tourigo-primary transition-colors">
                        <User className="w-5 h-5" />
                    </Link>

                    <Link to="/booking">
                        <Button className="bg-tourigo-primary hover:bg-tourigo-primary/90 text-white rounded-full px-6 text-base font-medium">
                            Book Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                                <Menu className="w-6 h-6 text-gray-900" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-l-gray-800 text-white p-0">
                            <div className="flex flex-col h-full">
                                <div className="p-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <img src="/logo.jpg" alt="Elshadai Millenium Travel and Shopping" className="h-16 w-auto object-contain bg-white rounded-md p-1" />
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold tracking-tight text-white">Elshadai Millenium</span>
                                            <span className="text-xs font-medium text-gray-400">Travel and Shopping</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8 p-6 mt-4 overflow-y-auto pb-20">
                                    <nav className="flex flex-col gap-6">
                                        {navLinks.map((link, idx) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-medium text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 animate-in slide-in-from-right-8 fade-in fill-mode-forwards"
                                                style={{ animationDelay: `${idx * 100}ms` }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-tourigo-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.name}
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="flex flex-col gap-4 mt-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500">
                                        <Link to="/booking" onClick={() => setIsOpen(false)}>
                                            <Button
                                                className="bg-tourigo-accent hover:bg-orange-600 text-white rounded-full w-full h-12 text-lg font-bold shadow-lg shadow-orange-900/20"
                                            >
                                                Book Now
                                            </Button>
                                        </Link>

                                        <Link
                                            to={isAuthenticated ? "/dashboard" : "/login"}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-4 border border-gray-800 rounded-lg hover:bg-gray-800"
                                        >
                                            <User className="w-5 h-5" />
                                            <span className="font-medium">My Account</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
