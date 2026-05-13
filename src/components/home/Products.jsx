import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

export default async function Products() {
  const products = await getProducts();
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        OUR PRODUCTS
      </h2>

      {/* Flex Layout */}
      <div className="flex flex-wrap -mx-2">
        {products.map((product, index) => (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
