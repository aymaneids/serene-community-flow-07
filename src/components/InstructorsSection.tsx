
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram } from "lucide-react";

type Instructor = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
};

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Studio Owner, Vinyasa & Meditation",
    bio: "Dedicated to creating an inclusive space where everyone can find their yoga path.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    instagram: "sarahjyoga"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hatha & Restorative Yoga",
    bio: "Believes in the transformative power of mindful movement and breath work.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    instagram: "michaelchenyoga"
  },
  {
    id: 3,
    name: "Alicia Rodriguez",
    role: "Yin & Restorative Yoga",
    bio: "Passionate about guiding students toward inner peace through mindful practice.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    instagram: "alicia_yoga"
  }
];

const InstructorsSection = () => {
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
    <section className="py-24 yogabg-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Meet Our Instructors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our passionate team of certified instructors brings diverse expertise and teaching styles to guide your practice.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              variants={itemVariants}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="glass-card p-6 text-center"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-5">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoverIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <h3 className="text-xl font-heading mb-1">{instructor.name}</h3>
              <p className="text-yogaPurple-600 font-medium text-sm mb-3">{instructor.role}</p>
              <p className="text-gray-600 mb-4">{instructor.bio}</p>
              {instructor.instagram && (
                <a
                  href={`https://instagram.com/${instructor.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-500 hover:text-yogaPurple-600 transition-colors"
                  aria-label={`${instructor.name}'s Instagram`}
                >
                  <Instagram size={18} className="mr-1" />
                  <span className="text-sm">@{instructor.instagram}</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link to="/instructors" className="btn-secondary">
            Meet All Instructors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
