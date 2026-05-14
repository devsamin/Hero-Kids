import { ObjectId } from "mongodb";

import { dbConnect, collections } from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCT);
    const data = await collection.find({}).toArray();

    console.log("🔥 PRODUCTS:", data);
    return await collection.find({}).toArray();
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
};
export const getSingleProduct = async (id) => {
  try {
    if (!id || !ObjectId.isValid(id)) return null;

    const collection = await dbConnect(collections.PRODUCT);

    return await collection.findOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    console.error("getSingleProduct error:", error);
    return null;
  }
};
