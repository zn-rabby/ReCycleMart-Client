import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";

import { getProductsByCategory } from "@/services/Product";
import { IProduct } from "@/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const { data: products }: { data: IProduct[] } = await getProductsByCategory(
    category
  );

  if (!(products ?? false)) {
    return (
      <div className="mt-36">
        <p className="text-center mt-[5%] text-gray-500 text-lg">
          No data found with this category
        </p>
      </div>
    );
  }

  return (
    <NMContainer className="my-12 mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </NMContainer>
  );
}
