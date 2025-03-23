import Link from "next/link";
import { usePathname } from "next/navigation"; // For checking the active route
import { useState } from "react"; // For handling dropdown state

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [isMagaDropdownOpen, setIsMagaDropdownOpen] = useState(false); // State for dropdown

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-white text-lg font-bold">
          My Website
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 relative">
          <Link
            href="/"
            className={`font-medium ${
              pathname === "/"
                ? "text-[#FF5E01] font-semibold"
                : "text-white hover:text-[#FF5E01]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium ${
              pathname === "/about"
                ? "text-[#FF5E01] font-semibold"
                : "text-white hover:text-[#FF5E01]"
            }`}
          >
            About
          </Link>

          {/* Maga Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMagaDropdownOpen(true)} // Open dropdown on hover
            onMouseLeave={() => setIsMagaDropdownOpen(false)} // Close dropdown on hover out
          >
            <Link
              href="/maga"
              className={`font-medium flex items-center space-x-1 ${
                pathname === "/maga"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
            >
              <span>Maga</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMagaDropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {isMagaDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
                <Link
                  href="/maga/sub1"
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                    pathname === "/maga/sub1"
                      ? "text-[#FF5E01] font-semibold"
                      : ""
                  }`}
                >
                  Submenu 1
                </Link>
                <Link
                  href="/maga/sub2"
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                    pathname === "/maga/sub2"
                      ? "text-[#FF5E01] font-semibold"
                      : ""
                  }`}
                >
                  Submenu 2
                </Link>
                <Link
                  href="/maga/sub3"
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                    pathname === "/maga/sub3"
                      ? "text-[#FF5E01] font-semibold"
                      : ""
                  }`}
                >
                  Submenu 3
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`font-medium ${
              pathname === "/contact"
                ? "text-[#FF5E01] font-semibold"
                : "text-white hover:text-[#FF5E01]"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
