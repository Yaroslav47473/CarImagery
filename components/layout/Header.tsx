import Link from "next/link";
import { MainBtn } from "./MainBtn";
import Image from "next/image";
import logo from "../../public/img/logo.png"

export function Header() {
  return (
    <header className="border-b bg-white w-full">
      <div className="px-4 py-[20px] flex items-center justify-between w-full">
        <div className="p-left-[20px]0 flex items-center gap-2">
          <div className="rounded flex items-center justify-center">
            {/* <span className="text-white text-xs">C</span>
             */}
            <Image src={logo} alt="CarImagery Logo"/>
          </div>
          <span className="font-bold text-[48px]">CarImagery</span>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center space-x-6 mr-6 text-[20px]">
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Products
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:text-gray-900">
              Our Company
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
