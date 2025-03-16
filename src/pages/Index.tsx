
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClassesSection from "@/components/ClassesSection";
import InstructorsSection from "@/components/InstructorsSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-yogaPurple-100 text-yogaPurple-600 text-sm font-medium mb-4">
                  Our Community
                </span>
                <h2 className="heading-lg mb-6">Welcome to Studio One Yoga</h2>
                <p className="text-gray-700 text-lg mb-6">
                  At Studio One Yoga, we believe that yoga is for everybody and every body. Our community-focused studios in Stillwater, Roseville, and White Bear Lake offer a variety of classes to meet you wherever you are on your yoga journey.
                </p>
                <p className="text-gray-700 text-lg mb-8">
                  Whether you're a complete beginner or an experienced yogi, our supportive instructors will guide you through a practice that honors your unique needs and goals. We invite you to join our #cOMmunityAsOne and discover the transformative power of yoga in your life.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    onClick={() => window.location.href = '/about'}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Yoga students in a class"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yogaGreen-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yogaPurple-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <ClassesSection />
      <InstructorsSection />
      
      {/* Call to Action */}
      <section className="py-24 bg-yogaPurple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#radialGradient)" />
          </svg>
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6">
              Begin Your Yoga Journey Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Take the first step toward mind-body wellness. Join our community and experience the transformative power of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-yogaPurple-600 hover:bg-white/90 font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
                onClick={() => window.location.href = '/schedule'}
              >
                View Schedule
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all"
                onClick={() => window.location.href = '/pricing'}
              >
                Explore Memberships
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <LocationsSection />
      <TestimonialsSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
