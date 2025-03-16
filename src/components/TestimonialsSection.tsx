
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Studio One Yoga has transformed not just my physical practice, but my entire approach to wellness. The supportive community and expert instructors make every class special.",
    name: "Jennifer L.",
    role: "Member since 2019",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    quote: "As someone new to yoga, I was intimidated to start, but the instructors at Studio One made me feel welcome from day one. Their 'yoga for every body' approach is genuine and refreshing.",
    name: "David T.",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    quote: "The variety of classes keeps my practice fresh and challenging. From restorative sessions to power flows, Studio One has it all, and the atmosphere is always peaceful and welcoming.",
    name: "Samantha K.",
    role: "Member since 2020",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
    <section className="py-24 bg-yogaPurple-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our members are at the heart of everything we do. Here's what they have to say about their Studio One Yoga experience.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 relative"
            >
              <div className="mb-6">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yogaPurple-200">
                  <path d="M13.8889 32H0V20.8889C0 16.7737 0.924722 13.0035 2.77417 9.57833C4.6775 6.15317 7.40278 3.18078 10.95 0.66117L17.6667 6.22228C14.6944 9.1946 12.7389 12.3056 11.8 15.5556H16.6667C18.2738 15.5556 19.6527 16.1265 20.8033 17.2683C21.9539 18.4101 22.5292 19.7847 22.5292 21.3919C22.5292 22.9991 21.9583 24.3779 20.8167 25.5285C19.6749 26.6791 18.3002 27.2544 16.693 27.2544L13.8889 32ZM31.8889 32H18V20.8889C18 16.7737 18.9247 13.0035 20.7742 9.57833C22.6775 6.15317 25.4028 3.18078 28.95 0.66117L35.6667 6.22228C32.6944 9.1946 30.7389 12.3056 29.8 15.5556H34.6667C36.2738 15.5556 37.6527 16.1265 38.8033 17.2683C39.9539 18.4101 40.5292 19.7847 40.5292 21.3919C40.5292 22.9991 39.9583 24.3779 38.8167 25.5285C37.6749 26.6791 36.3002 27.2544 34.693 27.2544L31.8889 32Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              
              <div className="flex items-center mt-auto">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
