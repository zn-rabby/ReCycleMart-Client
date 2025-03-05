import Logo from "@/assets/svgs/Logo";
import { Facebook, Instagram, X, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/sell", label: "Sell Your Items" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonials" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "123 SecondHand Street, Dhaka, Bangladesh",
    },
    {
      icon: Phone,
      text: "+880 1234 567890",
    },
    {
      icon: Mail,
      text: "support@secondhand.com",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
              <h1 className="text-2xl font-black">SecondHand</h1>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted marketplace for buying and selling high-quality
              second-hand products. Save money, reduce waste, and find amazing
              deals today!
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <Link
                  href={href}
                  key={index}
                  className="text-gray-600 hover:text-purple-600"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 text-sm">
              Get the latest updates on new products, exclusive deals, and more!
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SecondHand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;