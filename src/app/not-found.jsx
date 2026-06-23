"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        {/* Large 404 Text */}
        <h1 className="text-[12rem] font-bold text-gray-200 dark:text-gray-800 leading-none">
          404
        </h1>

        {/* Content */}
        <div className="-mt-12 mb-8">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            Go Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-xl transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Optional Illustration / Emoji */}
        <div className="mt-12 text-6xl">🔍</div>
      </div>
    </div>
  );
}
