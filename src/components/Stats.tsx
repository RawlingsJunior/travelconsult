import { Users, Map, Award, Calendar } from "lucide-react";

const stats = [
    {
        icon: Calendar,
        value: "10+",
        label: "Years Experience",
    },
    {
        icon: Users,
        value: "2k+",
        label: "Happy Travelers",
    },
    {
        icon: Map,
        value: "50+",
        label: "Destinations",
    },
    {
        icon: Award,
        value: "20+",
        label: "Awards Won",
    },
];

const Stats = () => {
    return (
        <section className="py-16 relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: 'url("/airport-2.jpg")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
