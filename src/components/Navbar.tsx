import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-cycling-blue font-heading font-bold text-xl md:text-2xl">
                Wielrenclub
              </span>
              <span className="text-cycling-orange font-heading font-bold text-xl md:text-2xl ml-2">
                Tilburg
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-cycling-blue transition-colors"
            >
              Home
            </Link>
            <Link
              to="/over-ons"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-cycling-blue transition-colors"
            >
              Over Ons
            </Link>
            <Link
              to="/agenda"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-cycling-blue transition-colors"
            >
              Agenda
            </Link>
            <Button className="ml-4 bg-cycling-blue hover:bg-blue-600 text-white">
              Word Lid
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cycling-blue focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-cycling-blue"
          >
            Home
          </Link>
          <Link
            to="/over-ons"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-cycling-blue"
          >
            Over Ons
          </Link>
          <Link
            to="/agenda"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-cycling-blue"
          >
            Agenda
          </Link>
          <Button className="w-full mt-3 bg-cycling-blue hover:bg-blue-600 text-white">
            Word Lid
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
