import { dbConnect, collactions } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const product = await dbConnect(collactions.PRODUCT).find().toArray();

  return product;
};

export const getSingleProduct = async (id) => {
  // ✅ safe check first
  if (!id || !ObjectId.isValid(id)) {
    return null;
  }

  const product = await dbConnect(collactions.PRODUCT).findOne({
    _id: new ObjectId(id),
  });

  return product || null;
};
