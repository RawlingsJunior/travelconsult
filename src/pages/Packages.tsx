import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DestinationCard from '@/components/DestinationCard';
import Footer from '@/components/Footer';

export default function Packages() {
  const [filter, setFilter] = useState('all');

  const allDestinations = [
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353695323_8fa7ba1b.webp',
      title: 'Explore Beauty Of Turkey',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'europe'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353696253_70fe7043.webp',
      title: 'Walk At The Street In Sweden',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'europe'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353697119_3ffd5155.webp',
      title: 'Indonesian Sea Beach',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'asia'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353698049_e1727697.webp',
      title: 'Feel The Nature In Switzerland',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'europe'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353699056_c5f3b612.webp',
      title: 'Explore The Skyscrapers In Dubai',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'middle-east'
    },
    {
      image: 'https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353700954_1ffdd37f.webp',
      title: 'Street View Of Paris',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Labore Aliqua.',
      link: '/packages',
      category: 'europe'
    }
  ];

  const filteredDestinations = filter === 'all' 
    ? allDestinations 
    : allDestinations.filter(dest => dest.category === filter);

  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/6929e65594223cc52ec46290_1764353694354_81fe298a.webp')`}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Navigation />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Packages</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span>Home</span>
            <span className="text-orange-500">→</span>
            <span>Packages</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Destinations
          </button>
          <button 
            onClick={() => setFilter('europe')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'europe' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Europe
          </button>
          <button 
            onClick={() => setFilter('asia')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'asia' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Asia
          </button>
          <button 
            onClick={() => setFilter('middle-east')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'middle-east' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Middle East
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
