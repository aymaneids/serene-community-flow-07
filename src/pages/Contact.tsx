
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
  };

  const locations = [
    {
      id: 1,
      name: "Stillwater",
      address: "123 Main Street, Stillwater, MN 55082",
      phone: "(651) 555-1234",
      email: "stillwater@studiooneyoga.com",
      hours: "Mon-Fri: 6AM-9PM, Sat-Sun: 8AM-7PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45052.61285589577!2d-92.83760355738675!3d45.05655887224521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d3f1bca08dfb%3A0x9629e79139363b23!2sStillwater%2C%20MN!5e0!3m2!1sen!2sus!4v1697034610985!5m2!1sen!2sus"
    },
    {
      id: 2,
      name: "Roseville",
      address: "456 Snelling Avenue, Roseville, MN 55113",
      phone: "(651) 555-5678",
      email: "roseville@studiooneyoga.com",
      hours: "Mon-Fri: 6AM-9PM, Sat-Sun: 8AM-6PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45052.61285589577!2d-93.1260!3d45.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b949cfa6233%3A0xe7b6daa271ffcd7c!2sRoseville%2C%20MN!5e0!3m2!1sen!2sus!4v1697034610985!5m2!1sen!2sus"
    },
    {
      id: 3,
      name: "White Bear Lake",
      address: "789 Lake Avenue, White Bear Lake, MN 55110",
      phone: "(651) 555-9012",
      email: "wbl@studiooneyoga.com",
      hours: "Mon-Fri: 6AM-8PM, Sat-Sun: 8AM-5PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45052.61285589577!2d-93.0158!3d45.0855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d4106228e77d%3A0xef334595f8c460cf!2sWhite%20Bear%20Lake%2C%20MN!5e0!3m2!1sen!2sus!4v1697034610985!5m2!1sen!2sus"
    }
  ];

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
            <h1 className="heading-lg mb-4">Contact Us</h1>
            <p className="text-gray-700 text-lg">
              We'd love to hear from you! Reach out with any questions about our studio, 
              classes, or how to begin your yoga journey with us.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-heading font-medium mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our classes, pricing, or anything else,
                our team is ready to answer all your questions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading font-medium mb-6">Our Locations</h2>
              <p className="text-gray-600 mb-8">
                Visit us at any of our three convenient locations in the Twin Cities area.
                Each studio offers a unique space for your practice.
              </p>
              
              <div className="space-y-8">
                {locations.map((location) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: location.id * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-4">{location.name} Studio</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-yogaPurple-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{location.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-yogaPurple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{location.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-yogaPurple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{location.email}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 text-yogaPurple-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{location.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-48 w-full">
                      <iframe 
                        src={location.mapUrl} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name} Studio`}
                      ></iframe>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;
