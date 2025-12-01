import { Star } from "lucide-react";

const activities = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=400",
        rating: 5.0,
        title: "City Tours"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400",
        rating: 5.0,
        title: "Bus Tours"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400",
        rating: 4.0,
        title: "Nature Tours"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=400",
        rating: 4.7,
        title: "Boat Tours"
    }
];

const CommonActivity = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-tourigo-accent font-medium uppercase tracking-wider text-sm">Our Activity</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-tourigo-primary mt-2">Common Activity</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer">
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold text-tourigo-primary">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                {activity.rating.toFixed(1)}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white text-xl font-bold">{activity.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommonActivity;
