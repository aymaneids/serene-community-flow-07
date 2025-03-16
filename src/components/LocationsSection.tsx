
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock } from "lucide-react";

type Location = {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  mapUrl: string;
};

const locations: Location[] = [
  {
    id: 1,
    name: "Stillwater",
    address: "123 Main Street, Stillwater, MN 55082",
    phone: "(651) 555-1234",
    hours: "Mon-Fri: 6am-9pm\nSat-Sun: 8am-6pm",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    mapUrl: "https://maps.google.com/?q=Stillwater,MN"
  },
  {
    id: 2,
    name: "Roseville",
    address: "456 Yoga Avenue, Roseville, MN 55113",
    phone: "(651) 555-5678",
    hours: "Mon-Fri: 6am-9pm\nSat-Sun: 8am-6pm",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
    mapUrl: "https://maps.google.com/?q=Roseville,MN"
  },
  {
    id: 3,
    name: "White Bear Lake",
    address: "789 Serenity Dr, White Bear Lake, MN 55110",
    phone: "(651) 555-9012",
    hours: "Mon-Fri: 6am-9pm\nSat-Sun: 8am-6pm",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    mapUrl: "https://maps.google.com/?q=WhiteBearLake,MN"
  }
];

const LocationsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeLocation, setActiveLocation] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your nearest Studio One Yoga location in the Twin Cities area.
            Each studio offers a unique atmosphere with the same commitment to exceptional yoga instruction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Location Tabs */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-xl p-4">
              {locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setActiveLocation(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 mb-2 ${
                    activeLocation === index
                      ? "bg-white shadow-md border-l-4 border-yogaPurple-500"
                      : "hover:bg-white/50"
                  }`}
                >
                  <h3 className={`font-heading text-lg ${
                    activeLocation === index ? "text-yogaPurple-600" : "text-gray-800"
                  }`}>
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {location.address.split(',')[0]}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Location Details */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:w-2/3"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden shadow-md ${
                  activeLocation === index ? "block" : "hidden"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={location.image}
                    alt={`Studio One Yoga ${location.name} studio`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white text-2xl font-heading">{location.name} Studio</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-yogaPurple-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-600">{location.address}</p>
                        <a 
                          href={location.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-yogaPurple-600 hover:text-yogaPurple-700 text-sm mt-1 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="text-yogaPurple-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="text-yogaPurple-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                        <div className="text-gray-600 whitespace-pre-line">{location.hours}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex space-x-4">
                    <Link to="/contact" className="btn-secondary">
                      Contact Us
                    </Link>
                    <Link to="/schedule" className="btn-primary">
                      View Classes
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
