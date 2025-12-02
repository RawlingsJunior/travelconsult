import { useEffect, useState } from "react";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 500); // Wait for fade out animation
        }, 5000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/plane2.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Logo Content */}
            <div className="relative z-20 flex flex-col items-center animate-pulse">
                <img src="/preloader-logo.jpg" alt="Loading..." className="w-48 h-48 object-contain rounded-full shadow-2xl" />
            </div>
        </div>
    );
};

export default Preloader;
