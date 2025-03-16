
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Classes", 
      path: "/classes",
      dropdown: true,
      items: [
        { name: "Class Types", path: "/classes" },
        { name: "Schedule", path: "/schedule" },
        { name: "Teacher Training", path: "/teacher-training" },
        { name: "Workshops", path: "/workshops" },
      ]
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Instructors", path: "/instructors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-heading font-semibold text-yogaPurple-600">
            Studio One Yoga
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => 
            item.dropdown ? (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setClassesDropdownOpen(true)}
                onMouseLeave={() => setClassesDropdownOpen(false)}
              >
                <button 
                  className={cn(
                    "nav-link flex items-center",
                    isActive(item.path) && "text-yogaPurple-600"
                  )}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {classesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden animate-fade-down">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-yogaPurple-50 hover:text-yogaPurple-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "nav-link",
                  isActive(item.path) && "text-yogaPurple-600"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link to="/schedule" className="btn-primary">
            Book a Class
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-down">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => 
              item.dropdown ? (
                <div key={item.name} className="py-2">
                  <button 
                    className={cn(
                      "w-full text-left py-3 px-3 flex items-center justify-between rounded-md",
                      isActive(item.path) 
                        ? "bg-yogaPurple-50 text-yogaPurple-600" 
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                    onClick={() => setClassesDropdownOpen(!classesDropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      classesDropdownOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {classesDropdownOpen && (
                    <div className="mt-1 pl-4 border-l-2 border-yogaPurple-100">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={cn(
                            "block py-2 px-3 rounded-md text-sm",
                            isActive(subItem.path) 
                              ? "bg-yogaPurple-50 text-yogaPurple-600" 
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "py-3 px-3 block rounded-md",
                    isActive(item.path) 
                      ? "bg-yogaPurple-50 text-yogaPurple-600" 
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-2">
              <Link to="/schedule" className="btn-primary w-full text-center block">
                Book a Class
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
