"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pattern from "@/assets/Logo.png";
import visionImage from "@/assets/banner-4.jpg";
import NMContainer from "@/components/ui/core/NMContainer";

const AboutPage = () => {
  return (
    <NMContainer className="md:mt-32">
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
            About <span className="text-[#FF5E01]">ReCycleMart</span>
          </h1>
          <p className="text-lg font-light italic mt-4">
            Your trusted platform for buying and selling high-quality
            second-hand products.
          </p>
        </div>
      </div>

      {/* About ReCycleMart Section */}
      <div className=" py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Who We Are
        </h2>
        <div className="text-gray-600 space-y-6 text-center  mx-auto">
          <p>
            ReCycleMart is a leading online marketplace dedicated to making
            second-hand shopping easy, affordable, and sustainable. Our mission
            is to reduce waste by promoting the reuse of products while helping
            you save money. We believe in a world where every item deserves a
            second chance, and every purchase contributes to a greener planet.
          </p>
          <p>
            Founded in 2023, ReCycleMart has quickly grown to become a trusted
            platform for thousands of buyers and sellers across the country. Our
            journey began with a simple idea: to create a space where people can
            buy and sell pre-loved items with confidence and ease. Today, we are
            proud to be at the forefront of the second-hand revolution,
            empowering individuals and businesses to make sustainable choices.
          </p>
          <p>
            At ReCycleMart, we are more than just a marketplace. We are a
            community of eco-conscious individuals who care about the
            environment and believe in the power of reuse. Our platform is
            designed to make second-hand shopping not only accessible but also
            enjoyable. Whether you{"'"}re looking to declutter your home, find a
            great deal, or reduce your carbon footprint, ReCycleMart is here to
            support you every step of the way.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sustainability",
                  description:
                    "We are committed to reducing waste and promoting eco-friendly practices.",
                },
                {
                  title: "Trust",
                  description:
                    "We ensure every product is verified for quality and authenticity.",
                },
                {
                  title: "Community",
                  description:
                    "We foster a supportive and inclusive community of buyers and sellers.",
                },
                {
                  title: "Affordability",
                  description:
                    "We make second-hand shopping accessible to everyone.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously improve our platform to enhance user experience.",
                },
                {
                  title: "Transparency",
                  description:
                    "We believe in open and honest communication with our users.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "10,000+",
                  description: "Happy Customers",
                },
                {
                  metric: "50,000+",
                  description: "Listed Products",
                },
                {
                  metric: "95%",
                  description: "Customer Satisfaction",
                },
                {
                  metric: "100+",
                  description: "Cities Served",
                },
              ].map((achievement, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-[#FF5E01]">
                    {achievement.metric}
                  </p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join the ReCycleMart Movement
            </h3>
            <p className="text-gray-600">
              By choosing ReCycleMart, you{"'"}re not just buying or selling
              second-hand products you{"'"}re joining a movement that values
              sustainability, affordability, and community. Together, we can
              make a difference by reducing waste, saving resources, and
              creating a better future for generations to come.
            </p>
            <Button className="mt-6 bg-[#FF5E01] hover:bg-[#D94F01] transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-50 py-16">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Buy & Sell Second-Hand Products",
                description:
                  "A seamless platform for buying and selling high-quality pre-owned items.",
              },
              {
                title: "Verified Listings",
                description:
                  "Every product is verified for quality and authenticity.",
              },
              {
                title: "Secure Transactions",
                description:
                  "Safe and hassle-free payment options for all users.",
              },
              {
                title: "Sustainability Focus",
                description:
                  "Promoting eco-friendly practices by reducing waste.",
              },
              {
                title: "Fast & Reliable Delivery",
                description:
                  "Quick and dependable shipping across the country.",
              },
              {
                title: "Community Support",
                description:
                  "Building a community of eco-conscious buyers and sellers.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className=" mx-auto  py-16">
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          <Image
            src={visionImage}
            alt="Our Vision"
            width={600}
            height={400}
            className="rounded-lg w-full xl:w-1/2"
          />
          <div className="xl:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600">
              At ReCycleMart, we envision a world where second-hand shopping is
              the norm, not the exception. Our goal is to revolutionize the
              resale market by providing a reliable platform for buying and
              selling pre-owned products. We believe in a future where every
              item gets a second life, reducing waste and making high-quality
              goods available to everyone at a fair price.
            </p>
            <Button className="mt-6 bg-[#FF5E01] hover:bg-[#D94F01] transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "ReCycleMart made it so easy to sell my old items. The process was smooth, and I got a great price!",
                author: "Verified Customer",
              },
              {
                quote:
                  "I was hesitant to buy second-hand, but ReCycleMart's verification process gave me confidence. Highly recommend!",
                author: "Verified Customer",
              },
              {
                quote:
                  "Fantastic experience! Secure payments and fast shipping. Will definitely use ReCycleMart again!",
                author: "Verified Customer",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                  <p className="text-sm font-semibold mt-4">
                    {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className=" py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {[
            {
              question: "How does ReCycleMart work?",
              answer:
                "ReCycleMart allows you to buy and sell second-hand products easily. Simply create an account, list your items, or browse through our verified listings to find what you need.",
            },
            {
              question: "Are the products on ReCycleMart verified?",
              answer:
                "Yes, all products listed on ReCycleMart go through a verification process to ensure quality and authenticity.",
            },
            {
              question: "How do I sell my items on ReCycleMart?",
              answer:
                "Selling is easy! Create an account, upload photos and details of your item, and list it on our platform. Once sold, we handle the payment and delivery process.",
            },
            {
              question: "Is ReCycleMart eco-friendly?",
              answer:
                "Absolutely! We promote sustainability by encouraging the reuse of products and reducing waste.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                <HelpCircle className="w-6 h-6 text-[#FF5E01] mr-2" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </NMContainer>
  );
};

export default AboutPage;
