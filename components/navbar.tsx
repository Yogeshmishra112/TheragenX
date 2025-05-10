"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur-xl shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black tracking-wide">
              TheragenX
            </span>
          </Link>
        </div>

        {/* Right side: Navigation and Button */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-base font-medium text-black hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              href="/analytics"
              className="text-base font-medium text-black hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              Solutions
            </Link>
            <Link
              href="/ai-capabilities"
              className="text-base font-medium text-black hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              TheraSentriX
            </Link>
          </nav>
          <Button
            size="default"
            className="bg-black text-white hover:scale-110 hover:shadow-xl transition-all ease-in-out duration-300 text-base"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none text-black"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 p-4 bg-white border-t shadow-md rounded-b-lg">
          <Link
            href="/"
            className="text-base font-medium text-black hover:text-gray-600 transition duration-200 ease-in-out transform hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/analytics"
            className="text-base font-medium text-black hover:text-gray-600 transition duration-200 ease-in-out transform hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/ai-capabilities"
            className="text-base font-medium text-black hover:text-gray-600 transition duration-200 ease-in-out transform hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            TheraSentriX
          </Link>
          <Button
            size="default"
            className="w-full bg-black text-white hover:scale-110 hover:shadow-xl transition-all ease-in-out duration-300 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
          </Button>
        </div>
      )}
    </header>
  );
}
