"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import pattern from "@/assets/about-4.jpg";
import NMContainer from "@/components/ui/core/NMContainer";

const ContactPage = () => {
  return (
    <NMContainer className="md:mt-36">
      <div className="bg-white">
        {/* Hero Section */}
        <div
          className="relative w-full h-96 rounded-lg text-white text-3xl font-bold flex items-center justify-center"
          style={{
            backgroundImage: `url(${pattern.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold">
              Contact <span className="text-[#FF5E01]">ReCycleMart</span>
            </h1>
            <p className="text-lg font-light italic mt-4">
              Your trusted platform for buying and selling high-quality
              second-hand products.
            </p>
          </div>
        </div>

        {/* Contact Form and Information Section */}
        <div className=" py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Side: Contact Form */}
            <div className="">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 w-full"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="mt-1 w-full h-32"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-full bg-[#FF5E01] hover:bg-[#D94F01] transition-colors"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side: Contact Information */}
            <div className="space-y-8  ">
              <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FF5E01]" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 ReCycleMart Street, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#FF5E01]" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">+880 1234 567890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#FF5E01]" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600">support@recyclemart.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#FF5E01]" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
                  </div>
                </div>

                {/* Live Chat Options */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Chat with Us
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Button className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5]">
                      <Facebook className="w-5 h-5" /> Facebook
                    </Button>
                    <Button className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0959B2]">
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </Button>
                    <Button className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1A8CD8]">
                      <Twitter className="w-5 h-5" /> Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className=" py-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862244293016!2d90.38856631543164!3d23.75086808458832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1633084800000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-12 my-8">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How can I track my order?",
                  answer:
                    "You can track your order by logging into your account and visiting the 'Orders' section.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit/debit cards, mobile banking, and cash on delivery.",
                },
                {
                  question: "How do I return a product?",
                  answer:
                    "You can initiate a return by contacting our support team within 7 days of delivery.",
                },
                {
                  question: "Is my data secure with ReCycleMart?",
                  answer:
                    "Yes, we use advanced encryption to ensure your data is safe and secure.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default ContactPage;
