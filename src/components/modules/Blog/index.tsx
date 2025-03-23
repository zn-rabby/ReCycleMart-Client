import BlogCard from "@/components/ui/core/BlogCard";
import NMContainer from "@/components/ui/core/NMContainer";

export default function AllBlogs() {
  return (
    <NMContainer>
      <div className="mt-6">
        <h1 className="lg:text-3xl text-2xl font-bold text-gray-800">
          Latest Blogs
        </h1>

        {/* Blogs Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
    </NMContainer>
  );
}
