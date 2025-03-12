import {  HelpCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF5E01] to-[#D94F01] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About ReCycleMart</h1>
          <p className="text-xl text-gray-100">
            Your trusted platform for buying and selling high-quality second-hand products.
          </p>
        </div>
      </div>

      {/* About ReCycleMart Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Who We Are
        </h2>
        <div className="text-gray-600 space-y-4">
          <p>
            ReCycleMart is a leading online marketplace dedicated to making second-hand shopping easy, affordable, and sustainable. Our mission is to reduce waste by promoting the reuse of products while helping you save money.
          </p>
          <p>
            Founded in 2023, we have grown to become a trusted platform for thousands of buyers and sellers across the country. Whether you{"'"}re looking to buy or sell, ReCycleMart is here to make the process seamless and enjoyable.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
      What We Do
    </h2>
    <div className="text-center">
      <ul className="list-disc list-inside text-gray-600 inline-block text-left space-y-4">
        <li>Provide a platform for buying and selling second-hand products.</li>
        <li>Ensure all listings are verified for quality and authenticity.</li>
        <li>Offer secure payment options for hassle-free transactions.</li>
        <li>Promote sustainability by reducing waste and encouraging reuse.</li>
        <li>Deliver products quickly and reliably across the country.</li>
        <li>Support a community of eco-conscious buyers and sellers.</li>
      </ul>
    </div>
  </div>
</div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF5E01]" />
              How does ReCycleMart work?
            </h3>
            <p className="text-gray-600 mt-2">
              ReCycleMart allows you to buy and sell second-hand products easily. Simply create an account, list your items, or browse through our verified listings to find what you need.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF5E01]" />
              Are the products on ReCycleMart verified?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, all products listed on ReCycleMart go through a verification process to ensure quality and authenticity.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF5E01]" />
              How do I sell my items on ReCycleMart?
            </h3>
            <p className="text-gray-600 mt-2">
              Selling is easy! Create an account, upload photos and details of your item, and list it on our platform. Once sold, we handle the payment and delivery process.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF5E01]" />
              Is ReCycleMart eco-friendly?
            </h3>
            <p className="text-gray-600 mt-2">
              Absolutely! We promote sustainability by encouraging the reuse of products and reducing waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;