import secondHandBanner2 from "@/assets/banner-2.jpg";
import secondHandBanner1 from "@/assets/banner.jpg";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Image 1 */}
      <div className="relative overflow-hidden rounded shadow-md aspect-square">
        <Image
          src={secondHandBanner2}
          alt="Banner 1"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Image 2 */}
      <div className="relative overflow-hidden rounded shadow-md aspect-square">
        <Image
          src={secondHandBanner1}
          alt="Banner 2"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Image 3 */}
      <div className="relative overflow-hidden rounded shadow-md aspect-square">
        <Image
          src={secondHandBanner1}
          alt="Banner 3"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Image 4 */}
      <div className="relative overflow-hidden rounded shadow-md aspect-square">
        <Image
          src={secondHandBanner1}
          alt="Banner 4"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default RightSection;
