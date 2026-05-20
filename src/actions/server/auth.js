// "use server";

// import { collections, dbConnect } from "@/lib/dbConnect";
// import bcrypt from "bcrypt";
// export const postUser = async (payload) => {
//   // chack payload
//   if (!payload.username || !payload.password) {
//     return null;
//   }
//   // chack user in database
//   const isExist = await (
//     await dbConnect("users")
//   ).findOne({
//     username: payload.username,
//   });
//   if (isExist) {
//     return null;
//   }

//   // create user
//   const newUser = {
//     provider: "credentials",
//     username: payload.username,
//     email: payload.email,
//     password: await bcrypt.hash(payload.password, 10),
//     role: "user",
//   };
//   // insert user to database
//   const result = (await dbConnect(collections.USER)).insertOne(newUser);
//   if (result.acknowledged) {
//     return {
//       ...result,
//       insertedId: result.insertedId.toString(),
//     };
//   }
// };

"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const postUser = async (payload) => {
  try {
    // check payload
    if (!payload.username || !payload.password) {
      return { acknowledged: false, message: "Invalid data" };
    }

    // check user exists
    const collection = await dbConnect(collections.USER);

    const isExist = await collection.findOne({
      username: payload.username,
    });

    if (isExist) {
      return { acknowledged: false, message: "User already exists" };
    }

    // create user
    const newUser = {
      provider: "credentials",
      username: payload.username,
      email: payload.email,
      password: await bcrypt.hash(payload.password, 10),
      role: "user",
    };

    // insert user
    const result = await collection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        acknowledged: true,
        insertedId: result.insertedId.toString(),
      };
    }

    return { acknowledged: false };
  } catch (error) {
    console.log(error);
    return { acknowledged: false, error: error.message };
  }
};
