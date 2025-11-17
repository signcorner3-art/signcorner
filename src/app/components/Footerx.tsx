"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white body-font bg-gray-400">
      <div className="container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/" 
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100"
        >
          <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
       
                      <Image
                        src="/asset/picture/SC-Logo.png"
                        alt="Signs Corner Logo"
                        width={250}  // increased size
                        height={170}
                        priority
                        className="object-contain cursor-pointer"
                      />
          </div>
          <span className="ml-3 font-bold text-xl">SignCorner</span>
        </Link>

        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100  sm:py-2 sm:mt-0 mt-4">
          © 2025 Singcorner —
          <Link
            href="https://twitter.com"
            className="text-gray-100 ml-1 hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            @x-solution
          </Link>
        </p>
{/* social media */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-items-end sm:justify-start space-x-3">
          <Link href="https://www.facebook.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-indigo-500 transition-colors">
          <FaFacebookF /> 
          </Link>
{/* ended face book code */}
          <Link href="https://x.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-indigo-500 transition-colors">
          <RiTwitterXFill />
          </Link>
{/* ended x code  */}
          <Link href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-100 hover:text-indigo-500 transition-colors">
          <FaInstagramSquare />
          </Link>
{/* ended instagramcode  */}
          <Link href="https://www.linkedin.com" 
          target="_blank" rel="noopener noreferrer" 
          className="text-gray-100 hover:text-indigo-500 transition-colors">
          <FaLinkedin />  
          </Link>
{/* ended linkedin code  */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
