
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-heading font-semibold text-yogaPurple-600">
                Studio One Yoga
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
              Creating a welcoming space for everyone to find their flow in our supportive yoga community.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-yogaPurple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:info@studiooneyoga.com"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-yogaPurple-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+16515551234"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-yogaPurple-600 transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-yogaPurple-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-medium mb-4">Hours</h4>
            <ul className="space-y-1">
              <li className="text-gray-600">
                <span className="font-medium text-gray-700">Monday - Friday:</span> 6am - 9pm
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-700">Saturday - Sunday:</span> 8am - 6pm
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link to="/schedule" className="text-yogaPurple-600 hover:text-yogaPurple-700 font-medium">
                View Class Schedule →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="text-yogaPurple-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-700">Stillwater</div>
                  123 Main Street, Stillwater, MN 55082
                </div>
              </li>
              <li className="flex">
                <MapPin className="text-yogaPurple-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-700">Roseville</div>
                  456 Yoga Avenue, Roseville, MN 55113
                </div>
              </li>
              <li className="flex">
                <MapPin className="text-yogaPurple-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-700">White Bear Lake</div>
                  789 Serenity Dr, White Bear Lake, MN 55110
                </div>
              </li>
              <li className="flex">
                <Phone className="text-yogaPurple-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="tel:+16515551234" className="text-gray-600 hover:text-yogaPurple-600">
                  (651) 555-1234
                </a>
              </li>
              <li className="flex">
                <Mail className="text-yogaPurple-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@studiooneyoga.com" className="text-gray-600 hover:text-yogaPurple-600">
                  info@studiooneyoga.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6">
        <div className="section-container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Studio One Yoga. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-yogaPurple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-yogaPurple-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-yogaPurple-600 text-white flex items-center justify-center shadow-lg hover:bg-yogaPurple-700 transition-colors z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
