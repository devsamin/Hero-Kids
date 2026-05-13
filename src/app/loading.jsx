"use client";

import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      {/* Logo (replace with your logo path) */}
      <Image
        src="/assets/logo.png" // 👉 put your logo in public folder
        alt="Logo"
        width={80}
        height={80}
        className="animate-bounce"
      />

      {/* Spinner */}
      <FaSpinner className="text-3xl text-primary animate-spin" />

      <p className="text-gray-500">Loading...</p>
    </div>
  );
}
