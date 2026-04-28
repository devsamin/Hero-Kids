import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          আপনার শিশুকে দিন একটি সুন্দর ভবিষ্যত
        </h2>

        <p className="text-gray-600 text-lg">
          Buy every toy with up to 50% discount
        </p>

        <button className="btn btn-primary  text-white px-6 py-3 rounded-lg  ">
          Explore Products
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <Image
          alt="banner-logo"
          src={"/assets/hero.png"}
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
