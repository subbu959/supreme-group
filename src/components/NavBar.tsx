import { FaLinkedinIn } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Supreme Logo" className="h-8" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#00BFFF] text-white px-4 py-2 rounded-full hover:bg-[#00aee6] transition">
              Contact Us
            </button>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <BsTranslate className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-4 pb-4">
            <button className="w-full bg-[#00BFFF] text-white px-4 py-2 rounded-full hover:bg-[#00aee6] transition">
              Contact Us
            </button>
            <a
              href="https://linkedin.com"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <FaLinkedinIn className="h-5 w-5 mr-2" /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <BsTranslate className="h-5 w-5 mr-2" /> Translate
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
