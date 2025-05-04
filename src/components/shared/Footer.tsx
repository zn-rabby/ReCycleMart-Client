"use client";

import RLogo from "../../assets/svgs/RLogo.svg";
import { Facebook, Instagram, X, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import NMContainer from "../ui/core/NMContainer";
import Image from "next/image";

// Payment method components (optimized as separate components)
const PaymentMethods = () => (
  <div className="flex flex-wrap gap-3">
    {/* Visa */}
    <div className="bg-white p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
      <svg viewBox="0 0 38 24" className="h-5 w-auto">
        <path d="M15.5 24H22.7L27 0H19.8L15.5 24Z" fill="#00579F" />
        <path
          d="M35.4 0.5L30.9 16.9L30 12.8L27.4 1.9C27.3 1.3 26.8 0.8 26.1 0.8H17.4L17.3 1.1C20.5 1.9 23 3.5 24.3 5.7L30.2 23.9H37.8L44 0.5H35.4Z"
          fill="#00579F"
        />
        <path
          d="M13.1 0.5L8.1 17.2L7.4 13.5L5.4 1.8C5.3 1.2 4.8 0.7 4.1 0.7H0.6L0.5 1C3.7 1.8 6.9 3.8 8.8 6.5L12.3 0.5H13.1Z"
          fill="#00579F"
        />
      </svg>
    </div>

    {/* Mastercard */}
    <div className="bg-white p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
      <svg viewBox="0 0 38 24" className="h-5 w-auto">
        <path
          d="M24.3 20.5C22.8 22 20.9 23 18.8 23C14.5 23 11 19.5 11 15C11 10.5 14.5 7 18.8 7C20.9 7 22.8 8 24.3 9.5"
          fill="#FF5F00"
        />
        <path
          d="M24.3 9.5C25.8 11 26.8 12.9 26.8 15C26.8 17.1 25.8 19 24.3 20.5C22.8 22 20.9 23 18.8 23C14.5 23 11 19.5 11 15C11 10.5 14.5 7 18.8 7C20.9 7 22.8 8 24.3 9.5Z"
          fill="#EB001B"
        />
        <path
          d="M26.8 15C26.8 17.1 25.8 19 24.3 20.5C22.8 22 20.9 23 18.8 23C14.5 23 11 19.5 11 15C11 10.5 14.5 7 18.8 7C20.9 7 22.8 8 24.3 9.5C25.8 11 26.8 12.9 26.8 15Z"
          fill="#F79E1B"
        />
      </svg>
    </div>

    {/* PayPal */}
    <div className="bg-white p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
      <svg viewBox="0 0 38 24" className="h-5 w-auto">
        <path
          d="M9.5 17.5L8.7 21.6C8.6 22.2 8.1 22.7 7.4 22.7H3.1L2.8 24H10.2L10.5 22.7H7.9L8.7 18.6L9.5 17.5Z"
          fill="#003087"
        />
        <path
          d="M31.5 17.5L30.7 21.6C30.6 22.2 30.1 22.7 29.4 22.7H25.1L24.8 24H32.2L32.5 22.7H29.9L30.7 18.6L31.5 17.5Z"
          fill="#003087"
        />
        <path
          d="M35.2 0.5H8.9C8.2 0.5 7.6 1 7.5 1.6L3.1 22.7H0.5L4.9 1.6C5 0.4 6 0 7.5 0H35.2C36.8 0 37.8 0.4 37.9 1.6L38 2.3L35.2 17.5L35.1 18.2L32.3 1.6C32.2 1 31.7 0.5 31 0.5H35.2Z"
          fill="#003087"
        />
        <path
          d="M35.2 0.5H31C31.7 0.5 32.2 1 32.3 1.6L35.1 18.2L35.2 17.5L38 2.3L37.9 1.6C37.8 0.4 36.8 0 35.2 0H35.2V0.5Z"
          fill="#009CDE"
        />
        <path
          d="M9.5 17.5L8.7 21.6C8.6 22.2 8.1 22.7 7.4 22.7H3.1L0.5 22.7H7.5L10.2 22.7H7.9L8.7 18.6L9.5 17.5Z"
          fill="#012169"
        />
      </svg>
    </div>
  </div>
);

const Footer = () => {
  // Data organized for better maintainability
  const footerData = {
    companyInfo: {
      logo: RLogo,
      name: "ReCycleMart",
      description:
        "Your trusted marketplace for buying and selling high-quality second-hand products. Save money, reduce waste, and find amazing deals today!",
      socialLinks: [
        { href: "#", icon: Facebook, name: "Facebook" },
        { href: "#", icon: Instagram, name: "Instagram" },
        { href: "#", icon: X, name: "Twitter" },
      ],
    },
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/dashboard/listing/add-listing", label: "Sell Your Items" },
      { href: "/about", label: "About Us" },
      { href: "/faq", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
    moreLinks: [
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/testimonials", label: "Testimonials" },
    ],
    categories: [
      { name: "Smartphones", href: "/category/mobiles" },
      { name: "Electronics", href: "/category/electronics" },
      { name: "Cars & Bikes", href: "/category/vehicles" },
      { name: "Real Estate", href: "/category/property" },
      { name: "Home & Living", href: "/category/home" },
      { name: "Pets & Supplies", href: "/category/pets" },
      { name: "Clothing", href: "/category/clothing" },
      { name: "Sports & Outdoors", href: "/category/sports" },
    ],
    contactInfo: [
      {
        icon: MapPin,
        text: "123 SecondHand Street, Dhaka, Bangladesh",
        href: "https://maps.google.com?q=123+SecondHand+Street,Dhaka,Bangladesh",
      },
      {
        icon: Phone,
        text: "+880 1234 567890",
        href: "tel:+8801234567890",
      },
      {
        icon: Mail,
        text: "support@secondhand.com",
        href: "mailto:support@secondhand.com",
      },
    ],
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund", label: "Refund Policy" },
    ],
  };

  return (
    <footer className="bg-[#0A0E17] text-white border-t border-[#1E293B]">
      <NMContainer>
        <div className="py-12 md:py-16">
          {/* Responsive 4-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src={footerData.companyInfo.logo}
                  height={36}
                  width={36}
                  alt={`${footerData.companyInfo.name} Logo`}
                  className="cursor-pointer"
                />
                <h1 className="text-2xl font-bold text-[#FF5E01] cursor-pointer">
                  {footerData.companyInfo.name}
                </h1>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {footerData.companyInfo.description}
              </p>
              <div className="flex gap-4">
                {footerData.companyInfo.socialLinks.map(
                  ({ href, icon: Icon, name }, index) => (
                    <Link
                      href={href}
                      key={index}
                      className="text-gray-400 hover:text-[#FF5E01] transition-colors duration-300"
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FF5E01] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#FF5E01] transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Categories</h3>
              <ul className="space-y-3">
                {footerData.categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="text-gray-400 hover:text-[#FF5E01] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#FF5E01] transition-colors duration-300"></span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <ul className="space-y-4">
                {footerData.contactInfo.map(
                  ({ icon: Icon, text, href }, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-gray-800 rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#FF5E01]" />
                      </div>
                      <Link
                        href={href}
                        className="text-gray-400 hover:text-[#FF5E01] text-sm transition-colors duration-300"
                        target={href.startsWith("http") ? "_blank" : "_self"}
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-3">
                  We Accept
                </h4>
                <PaymentMethods />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10 border-gray-800" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {footerData.companyInfo.name}.
              All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {footerData.legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </NMContainer>
    </footer>
  );
};

export default Footer;
