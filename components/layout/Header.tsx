import Link from "next/link";
import { MainBtn } from "./MainBtn";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export function Header() {
  return (
    <header className="border-b bg-white w-full">
      <div className="px-4 py-[20px] flex items-center justify-between w-full">
        <div className="p-left-[20px]0 flex items-center gap-2">
          <div className="rounded flex items-center justify-center">
            {/* <span className="text-white text-xs">C</span>
             */}
            <Image src={logo} alt="CarImagery Logo" />
          </div>
          <span className="font-bold text-[48px]">CarImagery</span>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden xl:flex items-center space-x-6 text-sm">
            <Link
              href="/dashboard"
              className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10"
            >
              Dashboard
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Products
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Our Company
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Contact Us Form
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Documentation
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Pricing
            </Link>
            <Link href="#" className="text-[#1E1E1E] hover:bg-[#F0F0F0] z-10">
              Support
            </Link>
          </nav>
          <MainBtn />
        </div>
      </div>
    </header>
  );
}
