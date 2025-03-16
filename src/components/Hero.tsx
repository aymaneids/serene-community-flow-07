
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Yoga class in a peaceful studio"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-6">
            Stillwater • Roseville • White Bear Lake
          </span>
          <h1 className="heading-xl text-white mb-6">
            Studio One Yoga
            <span className="block text-2xl md:text-3xl mt-2 font-normal">Find Your Flow</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Welcome to your sanctuary. Our community-focused studio offers a variety of classes
            for every body, experience level, and intention. Join us on the mat.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/schedule" className="btn-primary">
                View Class Schedule
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/pricing" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
                Explore Memberships
              </Link>
            </motion.div>
          </div>
          <div className="mt-12">
            <p className="text-white/80 text-sm">
              #cOMmunityAsOne
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-9 border-2 border-white/40 rounded-full flex justify-center pt-1"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
