
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      id: 1,
      name: "Single Class",
      price: "$20",
      description: "Perfect for trying out a class or occasional visits.",
      features: [
        "One class of your choice",
        "Valid for 30 days from purchase",
        "Access to all studio locations",
        "No commitments"
      ],
      popular: false,
      buttonText: "Purchase Now"
    },
    {
      id: 2,
      name: "Class Pack",
      price: "$95",
      description: "Our most popular option for regular practitioners.",
      features: [
        "5 classes of your choice",
        "Valid for 60 days from purchase",
        "Access to all studio locations",
        "Ability to book 7 days in advance",
        "Free mat rental"
      ],
      popular: true,
      buttonText: "Select Plan"
    },
    {
      id: 3,
      name: "Monthly Unlimited",
      price: "$125",
      description: "Best value for dedicated yogis.",
      features: [
        "Unlimited classes",
        "Auto-renewing monthly membership",
        "Access to all studio locations",
        "Ability to book 14 days in advance",
        "Free mat and prop rental",
        "10% discount on workshops"
      ],
      popular: false,
      buttonText: "Start Membership"
    },
    {
      id: 4,
      name: "Annual Membership",
      price: "$1,190",
      description: "The most committed option with maximum savings.",
      features: [
        "Unlimited classes for 12 months",
        "Save over $300 compared to monthly",
        "Access to all studio locations",
        "Ability to book 21 days in advance",
        "Free mat and prop rental",
        "15% discount on workshops",
        "One free guest pass per month"
      ],
      popular: false,
      buttonText: "Get Annual Pass"
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
            <h1 className="heading-lg mb-4">Pricing & Memberships</h1>
            <p className="text-gray-700 text-lg">
              Find the perfect membership option to match your practice goals and schedule.
              All plans give you access to our three studio locations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pricing Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: plan.id * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl overflow-hidden ${plan.popular ? 'ring-2 ring-yogaPurple-500 shadow-lg' : 'border border-gray-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="bg-yogaPurple-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-medium mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.id >= 3 && <span className="text-gray-500 text-sm ml-1">/month</span>}
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-yogaPurple-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-yogaPurple-600 hover:bg-yogaPurple-700' : 'bg-white border border-yogaPurple-600 text-yogaPurple-600 hover:bg-yogaPurple-50'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Pricing Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-medium text-center mb-8">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-yogaPurple-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-4">Student & Senior Discounts</h3>
                <p className="text-gray-700 mb-3">
                  We offer 15% off all our membership options for students and seniors (65+).
                  Please bring valid ID to the studio to redeem.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Valid student or senior ID required</li>
                  <li>• Cannot be combined with other offers</li>
                  <li>• Available for all membership types</li>
                </ul>
              </div>
              
              <div className="bg-yogaPurple-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-4">Corporate Wellness</h3>
                <p className="text-gray-700 mb-3">
                  Partner with us for your organization's wellness program. 
                  Special corporate rates available for groups of 5 or more.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom pricing based on group size</li>
                  <li>• On-site classes available</li>
                  <li>• Contact us for details at corporate@studiooneyoga.com</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-3">Membership Policies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-700 mb-1">Cancellation Policy</p>
                  <p>Monthly memberships can be cancelled with 14 days notice. Annual memberships are non-refundable.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">Class Reservations</p>
                  <p>Classes can be reserved online or through our app. Cancellations must be made at least 4 hours prior to class time.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">Freezing Membership</p>
                  <p>Monthly unlimited memberships can be frozen once per year for up to 30 days.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">First Visit</p>
                  <p>New students should arrive 15 minutes before class. First class is $10 with valid ID.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Pricing;
