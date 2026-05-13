import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// 🔥 get all products
export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCT);
    const products = await collection.find({}).toArray();

    return products;
  } catch (error) {
    console.error("❌ getProducts error:", error);
    return [];
  }
};

// 🔥 get single product
export const getSingleProduct = async (id) => {
  try {
    if (!id || !ObjectId.isValid(id)) return null;

    const collection = await dbConnect(collections.PRODUCT);

    const product = await collection.findOne({
      _id: new ObjectId(id),
    });

    return product || null;
  } catch (error) {
    console.error("❌ getSingleProduct error:", error);
    return null;
  }
};
