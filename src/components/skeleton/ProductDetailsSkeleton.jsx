export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="bg-gray-300 h-[400px] w-full rounded-xl"></div>

        {/* Details Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>

          {/* Rating */}
          <div className="flex gap-2">
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Price */}
          <div className="flex gap-3">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Info list */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/6"></div>
          </div>

          {/* Button */}
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* QnA */}
      <div className="mt-10 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>

        <div className="bg-gray-200 p-4 rounded">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
