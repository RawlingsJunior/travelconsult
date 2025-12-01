import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    tourDays: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking submitted!\nName: ${formData.name}\nDestination: ${formData.destination}\nTour Days: ${formData.tourDays}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      <div>
        <label className="block text-orange-500 font-semibold mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-orange-500 outline-none transition"
          required
        />
      </div>
      <div>
        <label className="block text-orange-500 font-semibold mb-2">Destination</label>
        <select
          value={formData.destination}
          onChange={(e) => setFormData({...formData, destination: e.target.value})}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-orange-500 outline-none transition"
          required
        >
          <option value="">Destination</option>
          <option value="turkey">Turkey</option>
          <option value="sweden">Sweden</option>
          <option value="indonesia">Indonesia</option>
          <option value="switzerland">Switzerland</option>
          <option value="dubai">Dubai</option>
          <option value="paris">Paris</option>
        </select>
      </div>
      <div>
        <label className="block text-orange-500 font-semibold mb-2">Tour Days</label>
        <input
          type="date"
          placeholder="Date"
          value={formData.tourDays}
          onChange={(e) => setFormData({...formData, tourDays: e.target.value})}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-orange-500 outline-none transition"
          required
        />
      </div>
      <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
        Book Now
      </button>
    </form>
  );
}
