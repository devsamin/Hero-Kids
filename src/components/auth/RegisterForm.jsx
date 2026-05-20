"use client";

import { useState } from "react";
import SocialLogin from "./SocialLogin";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await postUser(form);
    if (result.acknowledged) {
      alert("User created successfully!");
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center">Create Account 🚀</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95 cursor-pointer">
            Register
          </button>
        </form>

        <SocialLogin />

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
