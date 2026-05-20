import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;

if (!uri) {
  throw new Error("❌ MONGODB_URI missing");
}

// ✅ global cache (VERY IMPORTANT)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// ✅ spelling fixed
export const collections = {
  PRODUCT: "products",
  USER: "users",
};

// ✅ correct db connect
export const dbConnect = async (cname) => {
  const client = await clientPromise;
  return client.db(dbname).collection(cname);
};
