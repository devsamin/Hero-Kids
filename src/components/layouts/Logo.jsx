import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="flex items-center gap-1" href="/">
      <Image
        alt="heroKids-logo"
        src="/assets/logo.png"
        width={55}
        height={40}
      />
      <h2 className="text-xl font-bold">
        Hero <span className="text-primary">Kids</span>
      </h2>
    </Link>
  );
}
