import Image from "next/image";

import icon from "../../public/img/Icon.png";

interface FeatureCardProps {
  //   number: string;
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-3 pt-6 pb-6 flex flex-row items-center gap-6">
      {/* <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
        <span className="text-sm">{number}</span>
      </div> */}
      <div className="w-full">
        <div className="mb-2 flex flex-row items-center gap-2 ">
          <Image src={icon} alt="feature-Icon" />
          <p className="font-bold text-[22px]">{title}</p>
        </div>
        <p className="text-sm text-[14px] pl-10 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
