import Link from "next/link";
import { MainBtn } from "./MainBtn";

export function Header() {
  return (
    <header className="border-b bg-white w-full">
      <div className="px-4 py-[32px] flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-xs">C</span>
          </div>
          <span className="font-bold text-[48px]">CarImagery</span>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center space-x-6 mr-6 text-sm">
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Our Features
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Contact Us Form
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Documentation
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Support
            </Link>
          </nav>
          <MainBtn />
        </div>
      </div>
    </header>
  );
}
