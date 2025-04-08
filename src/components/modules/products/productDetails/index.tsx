"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import { IProduct } from "@/types";
import {
  Star,
  Heart,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const conditionColors = {
    new: "bg-green-100 text-green-800",
    used: "bg-blue-100 text-blue-800",
    refurbished: "bg-purple-100 text-purple-800",
  };

  const statusColors = {
    available: "bg-green-100 text-green-800",
    sold: "bg-red-100 text-red-800",
  };

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + product.images.length) % product.images.length;
    setMainImage(product.images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % product.images.length;
    setMainImage(product.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const highlightDescription = (text: string) => {
    if (!text) return "";

    const keywords = [
      "excellent",
      "perfect",
      "good",
      "like new",
      "condition",
      "rare",
      "limited",
      "authentic",
      "original",
      "warranty",
      "guarantee",
      "best",
      "quality",
      "price",
      "offer",
      "discount",
    ];

    let highlightedText = text;

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="font-semibold text-[#FF5E01]">${keyword}</span>`
      );
    });

    return highlightedText;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out this ${product.title} on our marketplace`,
        url: window.location.href,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  return (
    <NMContainer>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 lg:h-[550px] w-full rounded-xl bg-gray-50 overflow-hidden mb-4 group">
              <Image
                src={
                  mainImage ||
                  "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                }
                alt={product?.title}
                fill
                className="object-contain transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-800" />
                  </button>
                </>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product?.images.slice(0, 4).map((image: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(image, idx)}
                  className={`relative h-24 rounded-md bg-gray-50 overflow-hidden border transition-all duration-200 ${
                    mainImage === image
                      ? "ring-2 ring-[#FF5E01]"
                      : "hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    conditionColors[product.condition]
                  }`}
                >
                  {product.condition.charAt(0).toUpperCase() +
                    product.condition.slice(1)}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    statusColors[product.status]
                  }`}
                >
                  {product.status.toUpperCase()}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="text-gray-400 hover:text-[#FF5E01] transition-colors relative"
                >
                  <Share2 className="w-5 h-5" />
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Share on Facebook
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=Check out this ${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Share on Twitter
                      </a>
                    </div>
                  )}
                </button>
                <button
                  className={`transition-colors ${
                    isFavorite
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product?.title}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (product?.ratingCount || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-base text-gray-500">
                ({product?.ratingCount || 0} reviews)
              </span>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${product?.price.toLocaleString()}
                </span>
                {product.negotiable && (
                  <span className="ml-2 text-base text-gray-500">
                    (Negotiable)
                  </span>
                )}
              </div>

              <div className="flex items-center text-base text-gray-500 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-[#FF5E01]" />
                <span>{product?.location}</span>
              </div>

              <div className="flex items-center text-base text-gray-500">
                <Clock className="w-5 h-5 mr-2 text-[#FF5E01]" />
                <span>
                  Posted{" "}
                  {new Date(product?.createdAt || "").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-base text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 min-w-[20px]" />
                  <span>
                    Category:{" "}
                    <span className="font-medium capitalize">
                      {product?.category}
                    </span>
                  </span>
                </li>
                {product.brand && (
                  <li className="flex items-center text-base text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 min-w-[20px]" />
                    <span>
                      Brand:{" "}
                      <span className="font-medium">{product.brand}</span>
                    </span>
                  </li>
                )}
                <li className="flex items-center text-base text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 min-w-[20px]" />
                  <span>
                    Stock:{" "}
                    <span className="font-medium">
                      {product?.stock} available
                    </span>
                  </span>
                </li>
                {product.contactNumber && (
                  <li className="flex items-center text-base text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 min-w-[20px]" />
                    <span>
                      Contact:{" "}
                      <span className="font-medium">
                        {product.contactNumber}
                      </span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Description
              </h3>
              <div
                className="text-gray-600 text-base leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: highlightDescription(product?.description),
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href={`/buy/${product?._id}`} passHref className="w-full">
                <Button
                  className="w-full h-12 bg-[#FF5E01] hover:bg-[#D94F01] text-white transition-all duration-200 text-base"
                  disabled={product.status === "sold"}
                >
                  {product.status === "sold" ? "Sold Out" : "Buy Now"}
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">
                Why Buy With Us
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-base text-gray-600">
                  <ShieldCheck className="w-6 h-6 text-green-500 mr-2" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center text-base text-gray-600">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Authenticity</span>
                </div>
                <div className="flex items-center text-base text-gray-600">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span>Money Back</span>
                </div>
                <div className="flex items-center text-base text-gray-600">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>7-Day Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default ProductDetails;
