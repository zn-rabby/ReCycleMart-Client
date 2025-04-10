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
  Truck,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [zoomImage, setZoomImage] = useState(false);

  const conditionColors = {
    new: "bg-green-50 text-green-700 border-green-200",
    used: "bg-blue-50 text-blue-700 border-blue-200",
    refurbished: "bg-purple-50 text-purple-700 border-purple-200",
  };

  const statusColors = {
    available: "bg-green-50 text-green-700 border-green-200",
    sold: "bg-red-50 text-red-700 border-red-200",
  };

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setCurrentImageIndex(index);
    setZoomImage(false);
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
        text: `Check out this ${product.title} on ReCycleMart`,
        url: window.location.href,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  return (
    <NMContainer>
      <div className=" py-6">
        {/* Back Button */}
        <Link
          href="/products"
          className="flex items-center text-[#FF5E01] mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to Products</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images Section */}
          <div className="w-full lg:w-1/2">
            <div
              className={`relative h-96 lg:h-[550px] w-full rounded-xl bg-gray-50 overflow-hidden mb-4 group border border-gray-200 ${
                zoomImage ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setZoomImage(!zoomImage)}
            >
              <Image
                src={
                  mainImage ||
                  "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                }
                alt={product?.title}
                fill
                className={`object-contain transition-all duration-300 ${
                  zoomImage ? "scale-150" : "scale-100"
                }`}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product?.images.slice(0, 4).map((image: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(image, idx)}
                  className={`relative h-24 rounded-lg bg-gray-50 overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === image
                      ? "border-[#FF5E01]"
                      : "border-transparent hover:border-gray-300"
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
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    conditionColors[product.condition]
                  }`}
                >
                  {product.condition.charAt(0).toUpperCase() +
                    product.condition.slice(1)}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    statusColors[product.status]
                  }`}
                >
                  {product.status.toUpperCase()}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#FF5E01] transition-colors relative"
                >
                  <Share2 className="w-5 h-5" />
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-10 border border-gray-200">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                        Facebook
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=Check out this ${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        Twitter
                      </a>
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite
                      ? "bg-red-50 text-red-500 hover:bg-red-100"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product?.title}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center mr-3">
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
                {product?.ratingCount || 0} reviews
              </span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="text-base text-gray-500">
                {product?.soldCount || 0} sold
              </span>
            </div>

            {/* Price Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="flex items-baseline mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product?.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-xl text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.negotiable && (
                  <span className="ml-3 px-2 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                    Negotiable
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {product.discount && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                    {product.discount}% OFF
                  </span>
                )}
                {product.isVerified && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-base">
                  <MapPin className="w-5 h-5 mr-3 text-[#FF5E01] min-w-[20px]" />
                  <span className="text-gray-700">{product?.location}</span>
                </div>

                <div className="flex items-center text-base">
                  <Clock className="w-5 h-5 mr-3 text-[#FF5E01] min-w-[20px]" />
                  <span className="text-gray-700">
                    Posted{" "}
                    {new Date(product?.createdAt || "").toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Delivery Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-200">
                  <Truck className="w-6 h-6 text-[#FF5E01] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Standard</h4>
                    <p className="text-sm text-gray-500">
                      Delivery in 3-5 days • $5.00
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-200">
                  <CreditCard className="w-6 h-6 text-[#FF5E01] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Cash on Delivery
                    </h4>
                    <p className="text-sm text-gray-500">
                      Pay when you receive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                Product Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-600">Category: </span>
                    <span className="font-medium text-gray-800 capitalize">
                      {product?.category}
                    </span>
                  </div>
                </li>
                {product.brand && (
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-600">Brand: </span>
                      <span className="font-medium text-gray-800">
                        {product.brand}
                      </span>
                    </div>
                  </li>
                )}
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-600">Stock: </span>
                    <span className="font-medium text-gray-800">
                      {product?.stock} available
                    </span>
                  </div>
                </li>
                {product.contactNumber && (
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-600">Contact: </span>
                      <span className="font-medium text-gray-800">
                        {product.contactNumber}
                      </span>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                Description
              </h3>
              <div
                className="text-gray-600 text-base leading-relaxed whitespace-pre-line bg-gray-50 p-5 rounded-xl border border-gray-200"
                dangerouslySetInnerHTML={{
                  __html: highlightDescription(product?.description),
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-0 bg-white py-4 border-t border-gray-200 -mx-4 px-4 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/buy/${product?._id}`} passHref className="w-full">
                  <Button
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-[#FF5E01] to-[#FF8C01] hover:from-[#E55601] hover:to-[#E57A01] text-white text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    disabled={product.status === "sold"}
                  >
                    {product.status === "sold" ? "Sold Out" : "Buy Now"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default ProductDetails;
