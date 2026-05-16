"use client";

import { signIn } from "next-auth/react";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95 cursor-pointer">
            Login
          </button>
        </form>

        <SocialLogin />

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
