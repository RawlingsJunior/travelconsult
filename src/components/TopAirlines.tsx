

const airlines = [

    { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" },
    { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png" },
    { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/1200px-Lufthansa_Logo_2018.svg.png" },
    { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/1200px-Air_France_Logo.svg.png" },
    { name: "KLM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png" },
];

const TopAirlines = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <span className="text-orange-500 font-script text-xl">Top Airlines</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Search Top Airlines</h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-8">
                    {[...airlines, ...airlines, ...airlines].map((airline, index) => (
                        <div key={index} className="flex items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl min-w-[250px] hover:shadow-lg transition-shadow cursor-pointer mx-4">
                            <img src={airline.logo} alt={airline.name} className="w-8 h-8 object-contain" />
                            <span className="font-semibold text-gray-700">{airline.name}</span>
                        </div>
                    ))}
                </div>

                <div className="flex animate-marquee whitespace-nowrap gap-8 absolute top-0 left-0">
                    {[...airlines, ...airlines, ...airlines].map((airline, index) => (
                        <div key={index} className="flex items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl min-w-[250px] hover:shadow-lg transition-shadow cursor-pointer mx-4">
                            <img src={airline.logo} alt={airline.name} className="w-8 h-8 object-contain" />
                            <span className="font-semibold text-gray-700">{airline.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopAirlines;
