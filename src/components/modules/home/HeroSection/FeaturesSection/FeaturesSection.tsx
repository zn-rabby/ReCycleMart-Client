// components/FeaturesSection.tsx
import { Truck, Headset, RefreshCw, Shield, Tag } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Free Delivery",
      description: "From $59.89. Fast and reliable shipping.",
    },
    {
      icon: <Headset className="w-6 h-6 text-green-600" />,
      title: "24/7 Support",
      description: "Online 24 hours for your convenience.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
      title: "Free Returns",
      description: "365-day hassle-free return policy.",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Secure Payment",
      description: "Safe and secure payment methods.",
    },
    {
      icon: <Tag className="w-6 h-6 text-red-600" />,
      title: "Big Savings",
      description: "Weekend sales and exclusive discounts.",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 ">
        <div className="bg-gray-50 rounded ">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
