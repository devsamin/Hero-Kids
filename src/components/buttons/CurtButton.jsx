"use client";
import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

export default function CurtButton({ product }) {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const add2cart = () => {
    if (isLogin) alert(product._id);
    else router.push(`/login?callbackUrl=${path}`);
  };
  return (
    <div>
      <button onClick={add2cart} className="btn btn-primary w-full mt-4">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}
