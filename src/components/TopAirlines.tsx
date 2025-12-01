import { ArrowLeft, ArrowRight } from "lucide-react";

const airlines = [
    { name: "British Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/British_Airways_Logo.svg/1200px-British_Airways_Logo.svg.png" },
    { name: "Delta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_Air_Lines_logo_%282007%29.svg/2560px-Delta_Air_Lines_logo_%282007%29.svg.png" },
    { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" },
    { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png" },
];

const TopAirlines = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-script text-xl">Top Airlines</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Search Top Airlines</h2>
                </div>

                <div className="relative">
                    <div className="flex items-center gap-6 overflow-x-auto pb-8 hide-scrollbar justify-center">
                        <button className="w-10 h-10 rounded-full bg-tourex-sky text-white flex-shrink-0 flex items-center justify-center hover:bg-tourex-sky/90 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </button>

                        {airlines.map((airline) => (
                            <div key={airline.name} className="flex items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl min-w-[250px] hover:shadow-lg transition-shadow cursor-pointer">
                                <img src={airline.logo} alt={airline.name} className="w-8 h-8 object-contain" />
                                <span className="font-semibold text-gray-700">{airline.name}</span>
                            </div>
                        ))}

                        <button className="w-10 h-10 rounded-full border border-gray-200 flex-shrink-0 flex items-center justify-center hover:bg-tourex-sky hover:text-white hover:border-tourex-sky transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopAirlines;
