// import { ObjectId } from "mongodb";

// import { dbConnect, collections } from "@/lib/dbConnect";

// export const getProducts = async () => {
//   try {
//     const collection = await dbConnect(collections.PRODUCT);
//     const data = await collection.find({}).toArray();

//     // console.log("🔥 PRODUCTS:", data);
//     return await collection.find({}).toArray();
//   } catch (error) {
//     console.error("getProducts error:", error);
//     return [];
//   }
// };
// export const getSingleProduct = async (id) => {
//   try {
//     if (!id || !ObjectId.isValid(id)) return null;

//     const collection = await dbConnect(collections.PRODUCT);

//     return await collection.findOne({
//       _id: new ObjectId(id),
//     });
//   } catch (error) {
//     console.error("getSingleProduct error:", error);
//     return null;
//   }
// };

import { ObjectId } from "mongodb";
import { dbConnect, collections } from "@/lib/dbConnect";

/**
 * 🔥 Convert MongoDB document to plain JS object
 */
const serializeProduct = (product) => {
  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
};

/**
 * 🔥 Get All Products
 */
export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCT);

    const data = await collection.find({}).toArray();

    // ✅ convert all _id to string
    return data.map(serializeProduct);
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
};

/**
 * 🔥 Get Single Product by ID
 */
export const getSingleProduct = async (id) => {
  try {
    if (!id || !ObjectId.isValid(id)) return null;

    const collection = await dbConnect(collections.PRODUCT);

    const product = await collection.findOne({
      _id: new ObjectId(id),
    });

    return serializeProduct(product);
  } catch (error) {
    console.error("getSingleProduct error:", error);
    return null;
  }
};
