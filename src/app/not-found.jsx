"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Title */}
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
}
