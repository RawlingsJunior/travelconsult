import Navigation from '@/components/Navigation';
import BookingForm from '@/components/BookingForm';
import DestinationCard from '@/components/DestinationCard';
import Footer from '@/components/Footer';

export default function Home() {
  const destinations = [
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353695323_8fa7ba1b.webp',
      title: 'Explore Beauty Of Turkey',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353696253_70fe7043.webp',
      title: 'Walk At The Street In Sweden',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353697119_3ffd5155.webp',
      title: 'Indonesian Sea Beach',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353698049_e1727697.webp',
      title: 'Feel The Nature In Switzerland',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353699056_c5f3b612.webp',
      title: 'Explore The Skyscrapers In Dubai',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353700954_1ffdd37f.webp',
      title: 'Street View Of Paris',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353694354_81fe298a.webp')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Navigation />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Destinations</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span>Home</span>
            <span className="text-orange-500">→</span>
            <span>Destinations</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-20">
        <BookingForm />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-orange-500 font-semibold mb-2">Tours</p>
            <h2 className="text-4xl font-bold text-gray-900">Live Your Life Through Travel</h2>
            <p className="text-gray-600 mt-4 max-w-2xl"></p>
          </div>
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
            View All Packages
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </section>

      {/* Study Abroad Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                alt="Students studying abroad"
                className="relative rounded-2xl shadow-2xl z-10"
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
                <a href="/study-abroad" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Explore Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353702118_ecfba3b0.webp')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel, See The World And</h2>
          <p className="text-3xl md:text-4xl text-orange-500 font-bold mb-6">Get 30% Off Your Next Adventure.</p>
          <p className="max-w-2xl mb-8 text-gray-200"></p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition">
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
