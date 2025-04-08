const Newsletter = () => {
  return (
    <div>
      {/* Newsletter Subscription */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-400 text-sm">
          Get the latest updates on new products, exclusive deals, and more!
        </p>
        <form className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF5E01]"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-lg bg-[#FF5E01] hover:bg-[#D94F01] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
