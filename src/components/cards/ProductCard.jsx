// "use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { _id, title, bangla, image, price, discount, ratings, sold } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="card bg-base-100 border hover:shadow-xl transition duration-300 group">
      {/* Image */}
      <figure className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover h-52 w-full group-hover:scale-105 transition duration-300"
        />

        {discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="card-body p-4 space-y-2">
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
          {title}
        </h2>

        <p className="text-xs text-gray-500">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <FaStar className="text-yellow-400" />
          <span>{ratings}</span>
          <span className="text-gray-400">({sold} sold)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-xs line-through text-gray-400">৳{price}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <button className="btn btn-primary btn-xs flex-1">
            <FaShoppingCart /> Add
          </button>

          <Link
            href={`/products/${_id}`}
            className="btn btn-outline btn-xs flex-1"
          >
            <FaEye /> Details
          </Link>
        </div>
      </div>
    </div>
  );
}
