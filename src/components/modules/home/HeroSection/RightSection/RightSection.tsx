import Image from "next/image";

const RightSection = () => {
  return (
    <div className="h-[650px] overflow-hidden">
      <div className="grid grid-cols-2 h-full bg-gray-50 gap-1">
        {/* Fashion Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80"
            alt="Second-hand fashion"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Used Cars & Bikes
          </span>
        </div>
        {/* Electronics Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="Refurbished electronics"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Pre-Owned Electronics
          </span>
        </div>

        {/* Furniture Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Pre-owned furniture"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Premium Smartphones
          </span>
        </div>

        {/* Books Banner */}
        <div className="relative overflow-hidden rounded shadow-md group">
          <Image
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Used books collection"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm">
            Sports & Outdoor Gear
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
