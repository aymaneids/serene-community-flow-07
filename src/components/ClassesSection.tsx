
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ClassType = {
  id: number;
  name: string;
  description: string;
  image: string;
  level: string;
  link: string;
};

const classes: ClassType[] = [
  {
    id: 1,
    name: "Vinyasa Flow",
    description: "Dynamic sequences linking breath with movement for strength and flexibility.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "All Levels",
    link: "/classes#vinyasa"
  },
  {
    id: 2,
    name: "Hatha Yoga",
    description: "Traditional postures held longer with focus on alignment and mindfulness.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Beginner Friendly",
    link: "/classes#hatha"
  },
  {
    id: 3,
    name: "Yin Yoga",
    description: "Passive, longer-held poses targeting deep connective tissues and flexibility.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80",
    level: "All Levels",
    link: "/classes#yin"
  },
  {
    id: 4,
    name: "Restorative",
    description: "Gentle, supported poses promoting deep relaxation and stress relief.",
    image: "https://images.unsplash.com/photo-1604431696980-07e518647bec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    level: "All Levels",
    link: "/classes#restorative"
  }
];

const ClassesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
          <h2 className="heading-lg mb-4">Our Classes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From energizing flows to deep stretches and meditation, we offer a variety of yoga styles
            for every body and experience level.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              variants={itemVariants}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoverIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-yogaPurple-600 text-xs font-medium px-3 py-1 rounded-full">
                  {classItem.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading mb-2">{classItem.name}</h3>
                <p className="text-gray-600 mb-4 h-20">{classItem.description}</p>
                <Link
                  to={classItem.link}
                  className="inline-flex items-center text-yogaPurple-600 hover:text-yogaPurple-700 font-medium"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link to="/classes" className="btn-secondary">
            Explore All Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
