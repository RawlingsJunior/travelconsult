const partners = [
    { name: "Emirates", logo: "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png" },
    { name: "Qatar Airways", logo: "https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo.png" },
    { name: "British Airways", logo: "https://logos-world.net/wp-content/uploads/2020/03/British-Airways-Logo.png" },
    { name: "Delta", logo: "https://logos-world.net/wp-content/uploads/2021/02/Delta-Air-Lines-Logo.png" },
    { name: "Marriott", logo: "https://logos-world.net/wp-content/uploads/2020/09/Marriott-Logo.png" },
    { name: "Hilton", logo: "https://logos-world.net/wp-content/uploads/2020/11/Hilton-Logo.png" }
];

const Partners = () => {
    return (
        <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Trusted by Leading Partners
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-8 md:mx-16 w-32 md:w-40 h-16 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex animate-marquee whitespace-nowrap absolute top-0 left-0">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-8 md:mx-16 w-32 md:w-40 h-16 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
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
