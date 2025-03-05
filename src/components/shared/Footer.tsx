import Logo from "@/assets/svgs/Logo";
import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/products", label: "App Products" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo and Description */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black flex items-center">
              <Logo  />
              <span>Used Sell</span>
            </h1>
          </div>
          <p className="text-gray-600 mt-3 text-xs leading-6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Navigation Links */}
        <ul className="flex justify-center flex-wrap space-x-6 text-sm text-gray-800 font-medium my-4">
          {navLinks.map((link) => (
            <li key={link.href} className="mb-2 sm:mb-0">
              <Link href={link.href} className="hover:text-purple-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6">
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
    </footer>
  );
};

export default Footer;
