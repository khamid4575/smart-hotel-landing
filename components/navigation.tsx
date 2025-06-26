"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Language from "./Language";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Smart Hotel Logo"
                width={200}
                height={200}
                className="h-14 w-auto"
                loading="lazy"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Hotel PMS
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                FAQ
              </Link>
              <div className="flex items-center space-x-">
                <div className="text-gray-700 hover:text-blue-600 flex items- space-x-2 cursor-pointer">
                  {/* <LogIn className="h-4 w-4" /> */}
                  <span>Sign in</span>
                </div>
                <span className="mx-1.5">/</span>
                <div className="text-gray-700 hover:text-blue-600 flex items-center space-x-2 mr-8 cursor-pointer">
                  {/* <UserPlus className="h-4 w-4" /> */}
                  <span>Sign up</span>
                </div>
                <Language />
                {/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Request Demo
                </Button> */}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              FAQ
            </Link>
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              <div className="flex px-3 justify-between items-center">
                <div className="flex">
                  <div className="text-gray-700 hover:text-blue-600 ">
                    {/* <LogIn className="h-4 w-4 mr-2" /> */}
                    Sign in
                  </div>
                  <span className="mx-1.5">/</span>
                  <div className="text-gray-700 hover:text-blue-600">
                    {/* <UserPlus className="h-4 w-4 mr-2" /> */}
                    Sign up
                  </div>
                </div>
                <Language />
              </div>
              {/* <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Request Demo
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
