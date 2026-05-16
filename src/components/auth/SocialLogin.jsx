"use client";

import { signIn } from "next-auth/react";

export default function SocialLogin() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      <button
        onClick={() => signIn("google")}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </div>
  );
}
