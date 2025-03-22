// components/FeaturesSection.tsx
import { Truck, Headset, RefreshCw, Shield, Tag } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Free Delivery",
      description: "From $59.89. Fast and reliable shipping.",
      bgColor: "bg-blue-50", // Light blue background
      hoverBgColor: "hover:bg-blue-100", // Hover background color
    },
    {
      icon: <Headset className="w-6 h-6 text-green-600" />,
      title: "24/7 Support",
      description: "Online 24 hours for your convenience.",
      bgColor: "bg-green-50", // Light green background
      hoverBgColor: "hover:bg-green-100", // Hover background color
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
      title: "Free Returns",
      description: "365-day hassle-free return policy.",
      bgColor: "bg-purple-50", // Light purple background
      hoverBgColor: "hover:bg-purple-100", // Hover background color
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Secure Payment",
      description: "Safe and secure payment methods.",
      bgColor: "bg-orange-50", // Light orange background
      hoverBgColor: "hover:bg-orange-100", // Hover background color
    },
    {
      icon: <Tag className="w-6 h-6 text-red-600" />,
      title: "Big Savings",
      description: "Weekend sales and exclusive discounts.",
      bgColor: "bg-red-50", // Light red background
      hoverBgColor: "hover:bg-red-100", // Hover background color
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center">
                <div
                  className={`w-12 h-12 rounded-full ${feature.bgColor} ${feature.hoverBgColor} flex items-center justify-center mb-4 transition-colors`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
