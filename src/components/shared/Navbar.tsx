"use client";

import { Button } from "../ui/button";
import { Heart, LogOut, Menu, Search } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/svgs/Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/contants";
import usaFlag from "@/assets/united-states.png";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMagaDropdownOpen, setIsMagaDropdownOpen] = useState(false); // State for dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b w-full bg-[#101828] text-white  shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4  flex items-center justify-between h-16">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-bold whitespace-nowrap text-[#FF5E01]">
            ReCycleMart
          </h1>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-grow max-w-md mx-4 relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full border border-gray-100 rounded py-2 pl-5 pr-10 focus:outline-none focus:ring-2 "
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* <Button className="bg-[#FF5E01] hover:bg-[#D94F01] text-white">
            Speacil Offet
          </Button> */}
          {/* right side */}
          {/* contact info */}
          <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-4">
            <p className="text-sm">
              <Phone size={18} className="inline text-[#D94F01]" /> Contact:
              +880 154 064 3211
            </p>
            <p className="text-sm">
              <Mail size={18} className="inline text-[#D94F01]" />{" "}
              support@recyclemart.com
            </p>
            <div className="text-sm flex items-center gap-1">
              <Image src={usaFlag} width={25} height={25} alt="usa flag" />
              English
            </div>
          </div>

          {/* <Link href="/dashboard/listing">
            <Button className="bg-[#FF5E01] hover:bg-[#D94F01] text-white">
              Sell Now
            </Button>
          </Link> */}

          {/* User Menu */}
          {user ? (
            <>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  className="rounded-full p-2 text-[#FF5E01] border border-[#FF5E01] hover:bg-[#FF5E01]/10 transition-colors duration-300 relative"
                >
                  {/* Heart Icon */}
                  <Heart className="w-6 h-6" />

                  {/* Wishlist Count Badge */}
                  {/* <span className="absolute -top-2 -right-2 bg-[#FF5E01] text-white text-xs rounded-full px-2 py-1">
                    {0}
                  </span> */}
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="h-8 w-8"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard/profile">
                    <DropdownMenuItem
                      className={
                        pathname === "/dashboard/profile"
                          ? "bg-[#FF5E01] text-white"
                          : ""
                      }
                    >
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard">
                    <DropdownMenuItem
                      className={
                        pathname === "/dashboard"
                          ? "bg-[#FF5E01] text-white"
                          : ""
                      }
                    >
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-500 hover:bg-red-50 cursor-pointer flex items-center gap-2"
                    onClick={handleLogOut}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-lg bg-[#FF5E01] hover:bg-[#D94F01] text-white">
                Login
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-[#FF5E01]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101828] text-white border-t border-gray-200">
          <div className="p-4 flex flex-col gap-4">
            {/* Mobile Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border border-gray-300 rounded-full py-2 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FF5E01]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {/* <Link
              href="/products"
              className={`font-medium ${
                pathname === "/products"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link> */}
            {/* Maga Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMagaDropdownOpen(true)} // Open dropdown on hover
              onMouseLeave={() => setIsMagaDropdownOpen(false)} // Close dropdown on hover out
            >
              <Link
                href="/products"
                className={`font-medium flex items-center space-x-1 ${
                  pathname === "/products"
                    ? "text-[#FF5E01] font-semibold"
                    : "text-white hover:text-[#FF5E01]"
                }`}
              >
                <span>Products</span>
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
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "/products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Fashion
                  </Link>
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "/products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Home & Garden
                  </Link>
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "/products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Sports & Outdoors
                  </Link>
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "/products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Books & Media
                  </Link>
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                      pathname === "/products"
                        ? "text-[#FF5E01] font-semibold"
                        : ""
                    }`}
                  >
                    Toys & Games
                  </Link>
                </div>
              )}
            </div>
            {/*  */}
            <Link
              href="/dashboard/listing"
              className={`font-medium ${
                pathname === "/sell"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sell Now
            </Link>
            <Link
              href="/blog"
              className={`font-medium ${
                pathname === "/blog"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`font-medium ${
                pathname === "/about"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className={`font-medium ${
                pathname === "/faq"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            {/*  */}
            <Link
              href="/contact"
              className={`font-medium ${
                pathname === "/contact"
                  ? "text-[#FF5E01] font-semibold"
                  : "text-white hover:text-[#FF5E01]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile User Menu */}
            {user ? (
              <>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-2 text-white hover:text-[#FF5E01]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Profile</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-white hover:text-[#FF5E01]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-white hover:text-[#FF5E01]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Wishlist</span>
                </Link>
                <button
                  className="flex items-center gap-2 text-red-500 hover:text-red-600"
                  onClick={handleLogOut}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </>
            ) : (
              <Link href="/login">
                <Button className="w-full bg-[#FF5E01] hover:bg-[#D94F01] text-white">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="bg-[#101828] hidden md:flex text-white py-4  relative">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left Section: Discount Banner */}
            <div className="flex items-center">
              <p>Your order is at your door in 2 hours with fast shipping.</p>
            </div>
            {/* Right Section: Additional Discount Message */}
            {/* Highlighted Discount Section */}
            <div className="hidden md:flex items-center bg-gradient-to-r from-[#FF5E01] to-[#D94F01] px-4 py-2 rounded-lg shadow-md animate-pulse">
              <p className="text-white font-sans">Buy and Sell Your Product</p>
            </div>

            {/* Middle Section: Navigation Menu */}
            <nav className="hidden md:flex justify-center gap-8">
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
              {/* <Link
                href="/products"
                className={`font-medium ${
                  pathname === "/products"
                    ? "text-[#FF5E01] font-semibold"
                    : "text-white hover:text-[#FF5E01]"
                }`}
              >
                Products
              </Link> */}
              {/* Maga Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMagaDropdownOpen(true)} // Open dropdown on hover
                onMouseLeave={() => setIsMagaDropdownOpen(false)} // Close dropdown on hover out
              >
                <Link
                  href="/products"
                  className={`font-medium flex items-center space-x-1 ${
                    pathname === "/products"
                      ? "text-[#FF5E01] font-semibold"
                      : "text-white hover:text-[#FF5E01]"
                  }`}
                >
                  <span>Products</span>
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
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Electronics
                    </Link>
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Fashion
                    </Link>
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Home & Garden
                    </Link>
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Sports & Outdoors
                    </Link>
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Books & Media
                    </Link>
                    <Link
                      href="/products"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-[#FF5E01] font-semibold"
                          : ""
                      }`}
                    >
                      Toys & Games
                    </Link>
                  </div>
                )}
              </div>
              {/*  */}
              <Link
                href="/dashboard/listing"
                className={`font-medium ${
                  pathname === "/sell"
                    ? "text-[#FF5E01] font-semibold"
                    : "text-white hover:text-[#FF5E01]"
                }`}
              >
                Sell Now
              </Link>
              {/* <Link
                href="/blog"
                className={`font-medium ${
                  pathname === "/blog"
                    ? "text-[#FF5E01] font-semibold"
                    : "text-white hover:text-[#FF5E01]"
                }`}
              >
                Blog
              </Link> */}
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
              <Link
                href="/faq"
                className={`font-medium ${
                  pathname === "/faq"
                    ? "text-[#FF5E01] font-semibold"
                    : "text-white hover:text-[#FF5E01]"
                }`}
              >
                FAQ
              </Link>
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
