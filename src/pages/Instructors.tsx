
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Instructors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Studio Director & Lead Instructor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "Sarah has been practicing yoga for over 15 years and teaching for a decade. She specializes in Vinyasa and Hatha yoga, with additional training in pre/postnatal yoga. As Studio Director, Sarah creates a welcoming environment focused on personal growth and community connection.",
      certifications: ["E-RYT 500", "RPYT (Prenatal)", "Yoga Therapy Certification"],
      teachingStyle: "Dynamic, alignment-focused flows with mindful transitions and breath awareness.",
      locations: ["Stillwater", "Roseville"],
      instagram: "sarahjyoga"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Instructor",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Michael discovered yoga during his recovery from a sports injury and it transformed his life. With a background in physical therapy, he brings a deep understanding of anatomy and alignment to his classes. Michael specializes in helping beginners build a safe and sustainable practice.",
      certifications: ["RYT 500", "Iyengar Yoga Certification", "Yoga for Athletes"],
      teachingStyle: "Precise alignment cues with therapeutic adaptations for all body types.",
      locations: ["Roseville", "White Bear Lake"],
      instagram: "michael_yoga"
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Hot Yoga Specialist",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      bio: "Jessica brings energy and passion to every class. With a background in competitive sports, she found hot yoga as a way to balance intensity with mindfulness. She creates challenging sequences that build strength and flexibility while emphasizing the mind-body connection.",
      certifications: ["RYT 200", "Hot Yoga Certification", "Power Yoga Training"],
      teachingStyle: "Invigorating sequences that challenge students while offering modifications for all levels.",
      locations: ["Stillwater", "White Bear Lake"],
      instagram: "jess_hot_yoga"
    },
    {
      id: 4,
      name: "David Miller",
      role: "Yin & Restorative Specialist",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      bio: "David's gentle approach to yoga focuses on deep relaxation and nervous system regulation. After years in a high-stress corporate environment, he turned to yoga for balance and eventually left his career to teach full-time. His classes offer a peaceful refuge from the busy world.",
      certifications: ["E-RYT 200", "Yin Yoga Training", "Yoga Nidra Certification"],
      teachingStyle: "Slow, nurturing sequences with an emphasis on mindfulness and stress reduction.",
      locations: ["Stillwater", "Roseville"],
      instagram: "david_restorative"
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Meditation & Yin Instructor",
      image: "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Emma's approach integrates traditional yoga philosophy with modern mindfulness practices. With a background in psychology, she helps students develop greater self-awareness and emotional regulation through movement and meditation. Her classes are introspective and transformative.",
      certifications: ["RYT 500", "Meditation Teacher Training", "Yoga Philosophy Studies"],
      teachingStyle: "Contemplative practice with emphasis on inner awareness and subtle body sensations.",
      locations: ["Roseville"],
      instagram: "emma_mindful_yoga"
    },
    {
      id: 6,
      name: "Lisa Garcia",
      role: "Prenatal & Family Yoga Specialist",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
      bio: "Lisa specializes in supporting women through all stages of life with yoga. As a mother of three and former doula, she brings practical wisdom to her prenatal classes. She creates a nurturing space where expectant mothers can connect with their changing bodies and growing babies.",
      certifications: ["RYT 200", "RPYT (Prenatal)", "Children's Yoga Certification"],
      teachingStyle: "Supportive, adaptive sequences focused on comfort, strength, and community.",
      locations: ["Stillwater"],
      instagram: "lisa_prenatal_yoga"
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
            <h1 className="heading-lg mb-4">Our Instructors</h1>
            <p className="text-gray-700 text-lg">
              Meet our dedicated team of experienced yoga instructors.
              Each brings their unique perspective and expertise to guide your practice.
            </p>
          </div>
        </div>
      </div>
      
      {/* Instructors Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {instructors.map((instructor) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 lg:w-1/4">
                    <div className="h-72 md:h-full">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 lg:w-3/4">
                    <div className="md:flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-heading font-medium">{instructor.name}</h2>
                        <p className="text-yogaPurple-600 font-medium">{instructor.role}</p>
                      </div>
                      {instructor.instagram && (
                        <a 
                          href={`https://instagram.com/${instructor.instagram}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-500 hover:text-pink-600 mt-2 md:mt-0"
                        >
                          <Instagram className="h-5 w-5 mr-1" />
                          <span className="text-sm">@{instructor.instagram}</span>
                        </a>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">{instructor.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Teaching Style</h3>
                        <p className="text-gray-600">{instructor.teachingStyle}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Certifications</h3>
                        <ul className="list-disc pl-4 text-gray-600">
                          {instructor.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h3 className="font-medium text-gray-900 mb-2">Teaches At</h3>
                        <div className="flex space-x-2">
                          {instructor.locations.map((location, index) => (
                            <span 
                              key={index} 
                              className="bg-yogaPurple-100 text-yogaPurple-600 px-3 py-1 rounded-full text-xs"
                            >
                              {location}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Instructors;
