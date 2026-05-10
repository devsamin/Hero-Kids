import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        OUR PRODUCTS
      </h2>

      <div className="flex flex-wrap -mx-2">
        {Array(8)
          .fill()
          .map((_, i) => (
            <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <ProductCardSkeleton />
            </div>
          ))}
      </div>
    </div>
  );
}
