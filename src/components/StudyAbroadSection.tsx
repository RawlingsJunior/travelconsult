import { Link } from "react-router-dom";

const StudyAbroadSection = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
                        <img
                            src="/study-abroad-home.jpg"
                            alt="Students studying abroad"
                            className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Education Without Borders</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Study Abroad & <br />
                            <span className="text-orange-500">Unlock Your Future</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Gain world-class education, experience new cultures, and build a global network. We guide you through university applications, visa processes, and settling into your new life in top destinations like UK, USA, Canada, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/study-abroad" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Explore Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudyAbroadSection;
