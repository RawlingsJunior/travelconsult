import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353694354_81fe298a.webp')`}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Navigation />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span>Home</span>
            <span className="text-orange-500">→</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353698049_e1727697.webp" 
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-orange-500 font-semibold mb-2">About Adventurist</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Journey Begins With Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
            <p className="text-gray-600 font-semibold">Destinations</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-orange-500 mb-2">2000+</div>
            <p className="text-gray-600 font-semibold">Happy Travelers</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
            <p className="text-gray-600 font-semibold">Years Experience</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
