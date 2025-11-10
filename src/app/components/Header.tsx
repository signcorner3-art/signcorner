"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="top-0 left-0 w-full bg-[#0b0b0b] z-[9998] shadow-md">
      <div className="flex items-center justify-center py-3">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/asset/picture/Logo.png"
            alt="Signs Corner Logo"
            width={250}  // increased size
            height={170}
            priority
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
