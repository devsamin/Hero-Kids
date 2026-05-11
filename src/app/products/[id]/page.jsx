import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";

import { FaStar, FaShoppingCart } from "react-icons/fa";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  // console.log(id);

  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={500}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-500">{product.bangla}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.ratings}</span>
            <span className="text-gray-400">({product.sold} sold)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>

            {product.discount > 0 && (
              <span className="line-through text-gray-400">
                ৳{product.price}
              </span>
            )}
          </div>

          {/* Info list */}
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            {product.info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Button */}
          <button className="btn btn-primary w-full mt-4">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 bg-base-100 p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Product Description</h2>
        <p className="text-gray-600 whitespace-pre-line">
          {product.description}
        </p>
      </div>

      {/* QnA */}
      {product.qna?.length > 0 && (
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-bold">Q&A</h2>

          {product.qna.map((item, i) => (
            <div key={i} className="bg-base-100 p-4 rounded shadow">
              <p className="font-semibold">Q: {item.question}</p>
              <p className="text-gray-600 mt-1">A: {item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
