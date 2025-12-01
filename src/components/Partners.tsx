const partners = [
    { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png" },
    { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" },
    { name: "British Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/British_Airways_Logo.svg/1200px-British_Airways_Logo.svg.png" },
    { name: "Delta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_Air_Lines_logo_%282007%29.svg/2560px-Delta_Air_Lines_logo_%282007%29.svg.png" },
    { name: "Marriott", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Marriott_International.svg/2560px-Marriott_International.svg.png" },
    { name: "Hilton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hilton_Worldwide_logo.svg/2560px-Hilton_Worldwide_logo.svg.png" }
];

const Partners = () => {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted by Leading Partners
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-24 md:w-32 h-12 flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
