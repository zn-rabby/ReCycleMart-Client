import { Card } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/about-1.jpg";
import NMContainer from "@/components/ui/core/NMContainer";
import pattern from "@/assets/about-1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
  return (
    <NMContainer className="mt-36">
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
            FAQ <span className="text-[#FF5E01]">ReCycleMart</span>
          </h1>
          <p className="text-lg font-light italic mt-4">
            Your trusted platform for buying and selling high-quality
            second-hand products.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8 mt-16">
        {/* Header Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-bold">Help Center</h1>
          <div>
            <Image
              src={logo}
              alt="ReCycleMart Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {[
              { id: "getting-started", label: "Getting Started" },
              { id: "product-info", label: "Product Information" },
              { id: "how-it-works", label: "How It Works" },
              { id: "support", label: "Support" },
              { id: "legal", label: "Legal" },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-[#FF5E01] hover:text-white transition-all duration-300 text-center"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <section id="getting-started" className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FF5E01]">
            Getting Started
          </h2>
          <p className="mb-8 text-gray-700">
            Welcome to ReCycleMart! Here’s everything you need to know to start
            buying and selling second-hand products with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                How do I create an account?
              </h3>
              <p className="text-gray-700">
                Signing up is easy! Click on the Sign Up button, fill in your
                details, and verify your email to get started.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                Is ReCycleMart free to use?
              </h3>
              <p className="text-gray-700">
                Yes, creating an account and browsing products is completely
                free. Sellers may incur fees when listing items.
              </p>
            </Card>
          </div>
        </section>

        {/* Product Information Section */}
        <section id="product-info" className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FF5E01]">
            Product Information
          </h2>
          <p className="mb-8 text-gray-700">
            Learn how to identify and verify products on ReCycleMart to ensure
            you’re getting the best deals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                What is a product code?
              </h3>
              <p className="text-gray-700">
                A product code is a unique identifier that helps you verify the
                authenticity and origin of a product.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                How do I verify a product?
              </h3>
              <p className="text-gray-700">
                Use the product code to check the product’s details on our
                platform. Verified products are marked with a badge.
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FF5E01]">
            How It Works
          </h2>
          <p className="mb-8 text-gray-700">
            ReCycleMart makes buying and selling second-hand products simple and
            secure. Here’s how it works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                For Buyers
              </h3>
              <p className="text-gray-700">
                Browse products, contact sellers, and make secure payments
                directly through the platform.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-[#FF5E01]/10 to-[#FF5E01]/5 border border-[#FF5E01]/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#FF5E01]">
                For Sellers
              </h3>
              <p className="text-gray-700">
                List your products, manage orders, and receive payments
                securely.
              </p>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FF5E01]">
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

        {/* Legal Section */}
        <section id="legal" className="mt-16 mb-6">
          <h2 className="text-3xl font-bold mb-6 text-[#FF5E01]">Legal</h2>
          <p className="text-gray-700">
            ReCycleMart is a marketplace platform. We do not take responsibility
            for the quality of products sold by third-party sellers. Always
            verify product details before purchasing.
          </p>
        </section>
      </div>
    </NMContainer>
  );
}
