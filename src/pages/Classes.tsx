
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Classes = () => {
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
      
      {/* Page Header */}
      <div className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-yogaPurple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 yogabg-gradient opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-lg mb-4">Our Classes</h1>
            <p className="text-gray-700 text-lg">
              Discover a variety of yoga classes designed for all levels and intentions.
              From energizing flows to restorative practices, find the perfect class for your journey.
            </p>
          </div>
        </div>
      </div>
      
      {/* Classes Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vinyasa Flow */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Vinyasa Flow Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Vinyasa Flow</h3>
                <p className="text-gray-600 mb-4">
                  A dynamic practice that links breath with movement, creating a flowing and rhythmic sequence of poses.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">All Levels</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">60-75 min</span>
                </div>
              </div>
            </motion.div>
            
            {/* Hatha Yoga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610508500445-a4592435e27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Hatha Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Hatha Yoga</h3>
                <p className="text-gray-600 mb-4">
                  A gentle practice focusing on fundamental poses, proper alignment, and mindful breathing.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">Beginner Friendly</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">60 min</span>
                </div>
              </div>
            </motion.div>
            
            {/* Yin Yoga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80" 
                  alt="Yin Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Yin Yoga</h3>
                <p className="text-gray-600 mb-4">
                  A slow-paced style with poses held for longer periods, targeting deep connective tissues and promoting flexibility.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">All Levels</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">75 min</span>
                </div>
              </div>
            </motion.div>
            
            {/* Restorative Yoga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80" 
                  alt="Restorative Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Restorative Yoga</h3>
                <p className="text-gray-600 mb-4">
                  A therapeutic style that uses props to support the body in gentle poses, promoting deep relaxation and healing.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">All Levels</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">75 min</span>
                </div>
              </div>
            </motion.div>
            
            {/* Hot Yoga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Hot Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Hot Yoga</h3>
                <p className="text-gray-600 mb-4">
                  Practiced in a heated room to warm the muscles, increase flexibility, and promote detoxification through sweating.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">Intermediate</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">60 min</span>
                </div>
              </div>
            </motion.div>
            
            {/* Prenatal Yoga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Prenatal Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">Prenatal Yoga</h3>
                <p className="text-gray-600 mb-4">
                  Specially designed for expectant mothers to support physical changes, prepare for childbirth, and connect with baby.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yogaPurple-100 text-yogaPurple-600 px-2 py-1 rounded-full text-xs mr-2">Specialized</span>
                  <span className="bg-yogaGreen-100 text-yogaGreen-600 px-2 py-1 rounded-full text-xs">60 min</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Classes;
