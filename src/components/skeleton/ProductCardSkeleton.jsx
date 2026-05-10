export default function ProductCardSkeleton() {
  return (
    <div className="card bg-base-100 border shadow-sm">
      {/* Image */}
      <div className="skeleton h-52 w-full"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-3 w-1/2"></div>

        {/* Rating */}
        <div className="skeleton h-3 w-1/3"></div>

        {/* Price */}
        <div className="skeleton h-4 w-1/4"></div>

        {/* Buttons */}
        <div className="flex gap-2">
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
        </div>
      </div>
    </div>
  );
}
