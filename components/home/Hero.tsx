import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MainBtn } from "../layout/MainBtn";

import car1 from "../../public/img/P90536855-the-new-bmw-m4-coup-600px 2.svg";
import car2 from "../../public/img/f0d8352b-6762-465a-a17b-e92c2f4538b6 1.svg"

export function Hero() {
  return (
    <section className="bg-[#1D1B201F] w-full relative">
      <div className="flex flex-row w-full flex-grow md:flex-row h-[125vh]">
        {/* Sidebar Navigation */}
        <div className="px-[42px] py-[62px] w-[50%] bg-[#6A6A6A]">
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">Data</p>
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">Stock</p>
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">CarImagery</p>
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">Views</p>
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">Cars</p>
        <p className="font-inter text-[6.5vw] leading-[7vw]  space-x-1 bg-gradient-to-r from-white to-[#757575] text-transparent bg-clip-text">API</p>
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col relative flex-grow">
          <div className="h-[65%] w-full bg-[var(--State-Layers-On-Surface-Opacity-12,#1D1B201F)] flex justify-center items-center">
            <div className="w-full relative flex flex-col items-center justify-center">
              <h1 className="text-[128px] bg-[radial-gradient(50%_50%_at_50%_50%,#000000_0%,#233501_100%)] bg-clip-text text-transparent">CarImagery</h1>
              <MainBtn />
            </div>
          </div>
          <div className="h-[35%] w-full bg-white p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900">The Best Solution for Car Images</h2>
            <p className="text-md text-gray-500 mt-1">CarImagery</p>
            <p className="text-sm text-gray-700 mt-3">
              Body text for your whole article or post. We&apos;ll put in some lorem ipsum to show how a filled-out page
              might look:
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1B201F] h-[20vh] w-full">
      <div >
          <Image src={car2} alt="car2" className="absolute bottom-[-80px]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={car1} alt="car1" className="absolute top-[-10vh]" height={900}  />
      </div>
    </section>
  );
}
