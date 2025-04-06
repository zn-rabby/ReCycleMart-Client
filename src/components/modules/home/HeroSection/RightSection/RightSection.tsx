import Image from "next/image";

const RightSection = () => {
  return (
    <div className="h-[600px] overflow-hidden">
      <div className="grid grid-cols-2 h-full bg-gray-50 gap-1">
        {/* Electronics Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Refurbished electronics"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Certified Refurbished Tech
          </span>
        </div>

        {/* Fashion Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Second-hand fashion"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Designer Fashion Up to 70% Off
          </span>
        </div>

        {/* Furniture Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Pre-owned furniture"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Quality Pre-Owned Furniture
          </span>
        </div>

        {/* Books Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Used books collection"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Rare & Used Books
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
