
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");

  // Mock schedule data
  const scheduleData = [
    {
      id: 1,
      className: "Vinyasa Flow",
      instructor: "Sarah Johnson",
      location: "Stillwater",
      day: "Monday",
      time: "6:00 AM - 7:00 AM",
      level: "All Levels"
    },
    {
      id: 2,
      className: "Hatha Yoga",
      instructor: "Michael Chen",
      location: "Roseville",
      day: "Monday",
      time: "9:30 AM - 10:30 AM",
      level: "Beginner"
    },
    {
      id: 3,
      className: "Hot Yoga",
      instructor: "Jessica Williams",
      location: "White Bear Lake",
      day: "Monday",
      time: "5:30 PM - 6:45 PM",
      level: "Intermediate"
    },
    {
      id: 4,
      className: "Restorative Yoga",
      instructor: "David Miller",
      location: "Stillwater",
      day: "Monday",
      time: "7:30 PM - 8:45 PM",
      level: "All Levels"
    },
    {
      id: 5,
      className: "Yin Yoga",
      instructor: "Emma Thompson",
      location: "Roseville",
      day: "Tuesday",
      time: "6:00 AM - 7:15 AM",
      level: "All Levels"
    },
    {
      id: 6,
      className: "Vinyasa Flow",
      instructor: "Sarah Johnson",
      location: "White Bear Lake",
      day: "Tuesday",
      time: "9:30 AM - 10:30 AM",
      level: "All Levels"
    },
    {
      id: 7,
      className: "Prenatal Yoga",
      instructor: "Lisa Garcia",
      location: "Stillwater",
      day: "Tuesday",
      time: "12:00 PM - 1:00 PM",
      level: "Specialized"
    },
    {
      id: 8,
      className: "Hatha Yoga",
      instructor: "Michael Chen",
      location: "Roseville",
      day: "Tuesday",
      time: "5:30 PM - 6:30 PM",
      level: "Beginner"
    },
    {
      id: 9,
      className: "Hot Yoga",
      instructor: "Jessica Williams",
      location: "White Bear Lake",
      day: "Wednesday",
      time: "6:00 AM - 7:15 AM",
      level: "Intermediate"
    },
    {
      id: 10,
      className: "Vinyasa Flow",
      instructor: "David Miller",
      location: "Stillwater",
      day: "Wednesday",
      time: "9:30 AM - 10:30 AM",
      level: "All Levels"
    }
  ];

  // Filter the schedule based on selected filters
  const filteredSchedule = scheduleData.filter(classItem => {
    return (selectedLocation === "all" || classItem.location === selectedLocation) &&
           (selectedDay === "all" || classItem.day === selectedDay);
  });

  // Get unique locations and days for filter options
  const locations = [...new Set(scheduleData.map(item => item.location))];
  const days = [...new Set(scheduleData.map(item => item.day))];

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
            <h1 className="heading-lg mb-4">Class Schedule</h1>
            <p className="text-gray-700 text-lg">
              Find the perfect class for your schedule. Join us at any of our three locations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Schedule Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Filter Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                >
                  <option value="all">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Day</label>
                <select 
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yogaPurple-500 focus:border-transparent"
                >
                  <option value="all">All Days</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSchedule.map((classItem) => (
                  <tr key={classItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{classItem.className}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{classItem.instructor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{classItem.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{classItem.day}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{classItem.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${classItem.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                          classItem.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
                          classItem.level === 'Specialized' ? 'bg-purple-100 text-purple-800' : 
                          'bg-gray-100 text-gray-800'}`}
                      >
                        {classItem.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button 
                        className="bg-yogaPurple-600 hover:bg-yogaPurple-700 text-white" 
                        size="sm"
                      >
                        Book Now
                      </Button>
                    </td>
                  </tr>
                ))}
                {filteredSchedule.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                      No classes found matching your filters. Please try different filter options.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Schedule;
