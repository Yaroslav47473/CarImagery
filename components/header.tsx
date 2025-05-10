"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-gray-900 font-medium"
      : "text-gray-500 hover:text-gray-900";
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-white h-16">
      <div className="container mx-auto px-4 flex h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="h-5 w-5 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-xs">C</span>
            </div> */}
            <Image
              src="../public/img/Block.svg"
              alt="CarImagery Logo"
              width={20}
              height={20}
            />
            <span className="font-medium">CarImagery</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/catalog" className={isActive("/catalog")}>
            Catalog
          </Link>
          <Link href="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>
          <Link href="/api-docs" className={isActive("/api-docs")}>
            API
          </Link>
          <Link href="/blog" className={isActive("/blog")}>
            Blog
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gray-900 text-white hover:bg-gray-800"
            asChild
          >
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed top-16 inset-x-0 bottom-0 bg-white z-40 overflow-y-auto border-t">
          <div className="container mx-auto px-4 py-4 space-y-5">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/catalog"
                className="text-gray-500 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="/pricing"
                className="text-gray-500 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/api-docs"
                className="text-gray-500 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                API
              </Link>
              <Link
                href="/blog"
                className="text-gray-500 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gray-900 text-white hover:bg-gray-800"
                asChild
              >
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
