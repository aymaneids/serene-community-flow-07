
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, Leaf, Smile, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="page-transition pt-24"
    >
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-yogaPurple-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-yogaPurple-100 text-yogaPurple-600 text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="heading-xl mb-6">About Studio One Yoga</h1>
            <p className="text-gray-700 text-lg mb-8">
              More than just a yoga studio, we are a community committed to wellness, mindfulness, and personal growth for practitioners of all levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-yogaGreen-100 text-yogaGreen-600 text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="heading-lg mb-6">Creating Space for Every Body</h2>
              <p className="text-gray-700 text-lg mb-6">
                At Studio One Yoga, our mission is to create an inclusive, supportive environment where individuals of all backgrounds, body types, and experience levels can discover the transformative power of yoga.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We believe that yoga is not just a physical practice but a pathway to holistic wellness, self-discovery, and community connection. Through our varied classes, compassionate instruction, and welcoming atmosphere, we strive to make yoga accessible and beneficial for everyone who walks through our doors.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Our #cOMmunityAsOne philosophy reflects our commitment to unity in diversity, respecting each person's unique journey while celebrating our shared humanity.
              </p>
            </motion.div>

            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: 20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1599447292180-45fd84092ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Diverse yoga practitioners in a class"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 yogabg-gradient">
        <div className="section-container">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-yogaBlue-100 text-yogaBlue-600 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="heading-lg mb-4">What We Stand For</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our core values guide everything we do, from how we design our classes to how we engage with our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-yogaPurple-500" size={32} />,
                title: "Compassion",
                description: "We practice and teach with kindness toward ourselves and others, honoring each person's unique journey."
              },
              {
                icon: <Users className="text-yogaBlue-500" size={32} />,
                title: "Community",
                description: "We foster an inclusive environment where connections flourish and everyone feels welcome."
              },
              {
                icon: <Leaf className="text-yogaGreen-500" size={32} />,
                title: "Mindfulness",
                description: "We encourage present-moment awareness both on and off the mat for balanced living."
              },
              {
                icon: <Smile className="text-yogaSand-400" size={32} />,
                title: "Accessibility",
                description: "We make yoga approachable for all bodies, backgrounds, and experience levels."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                ref={valuesRef}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-heading mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 lg:sticky lg:top-32 self-start"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-yogaPurple-100 text-yogaPurple-600 text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="heading-lg mb-6">The Studio One Story</h2>
              <p className="text-gray-700 text-lg mb-6">
                Founded in 2015, Studio One Yoga began as a small, single-room practice space in Stillwater with a big vision: to create a yoga community that truly welcomes and serves everyone.
              </p>
              <div className="relative h-64 rounded-xl overflow-hidden mb-8 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1617453293049-000c95b92067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Original Studio One Yoga space"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic">
                "We began with a simple belief: that yoga should be for everybody. That vision continues to guide us today."
              </p>
            </motion.div>

            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">2015 - The Beginning</h3>
                <p className="text-gray-700 mb-1">
                  Studio One Yoga opens its first location in Stillwater, offering just six classes per week with three instructors.
                </p>
              </div>

              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">2017 - Growing Community</h3>
                <p className="text-gray-700 mb-1">
                  As our community grows, we expand our Stillwater studio and introduce more class varieties, teacher training programs, and our first weekend workshops.
                </p>
              </div>

              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">2019 - Expansion to Roseville</h3>
                <p className="text-gray-700 mb-1">
                  We open our second location in Roseville, bringing our inclusive approach to yoga to a new community in the Twin Cities area.
                </p>
              </div>

              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">2020 - Adapting Together</h3>
                <p className="text-gray-700 mb-1">
                  During global challenges, we introduce virtual classes, outdoor sessions, and new ways to keep our community connected through yoga.
                </p>
              </div>

              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">2022 - White Bear Lake Studio</h3>
                <p className="text-gray-700 mb-1">
                  Our third location opens in White Bear Lake, featuring our largest practice space yet and expanded offerings including specialized workshops and retreats.
                </p>
              </div>

              <div className="border-l-4 border-yogaPurple-100 pl-6">
                <h3 className="text-xl font-heading mb-3">Today - #cOMmunityAsOne</h3>
                <p className="text-gray-700 mb-1">
                  With three thriving locations, over 20 instructors, and hundreds of weekly classes, we continue to grow while staying true to our founding mission of making yoga accessible for every body.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-yogaPurple-50">
        <div className="section-container">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-yogaPurple-100 text-yogaPurple-600 text-sm font-medium mb-4">
              Our Leadership
            </span>
            <h2 className="heading-lg mb-4">Meet Our Founders</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The passionate individuals who brought Studio One Yoga to life and continue to guide our community vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Lead Instructor",
                bio: "With over 15 years of yoga practice and a background in wellness education, Sarah founded Studio One Yoga with a vision of creating truly inclusive yoga spaces. Her teaching emphasizes mindful movement and body positivity.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
              },
              {
                name: "Michael Chen",
                role: "Co-Founder & Operations Director",
                bio: "Michael brings his business expertise and personal yoga journey to Studio One. After experiencing yoga's benefits during recovery from a sports injury, he partnered with Sarah to build studios that prioritize accessibility and community.",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              },
              {
                name: "Alicia Rodriguez",
                role: "Teacher Training Director",
                bio: "Alicia joined the leadership team in 2017, bringing her extensive experience in yoga education. She developed our teacher training program with an emphasis on inclusive teaching methods and trauma-informed practices.",
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              }
            ].map((person, index) => (
              <motion.div
                key={index}
                ref={teamRef}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-5">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading mb-1">{person.name}</h3>
                <p className="text-yogaPurple-600 font-medium text-sm mb-4">{person.role}</p>
                <p className="text-gray-600 mb-4">{person.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/instructors" className="btn-secondary inline-flex items-center">
              Meet All Our Instructors
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

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
              Join Our Community
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Experience the difference at Studio One Yoga. Find your practice, your people, and your peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-yogaPurple-600 hover:bg-white/90 font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
                onClick={() => window.location.href = '/schedule'}
              >
                Book Your First Class
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
