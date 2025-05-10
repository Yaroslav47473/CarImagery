import Image from "next/image";

import backimg from "../../public/img/back.png";

interface BlogPostCardProps {
  title: string;
  description: string;
  // You could add imageUrl?: string; here if you want to pass image URLs
}

export function BlogPostCard({ title, description }: BlogPostCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-row">
      <div className="h-40 p-5 bg-gray-200 w-[50%] flex justify-center items-center">
        <Image src={backimg} alt="back" className="w-[100%] h-[100%]"/>
      </div>
      {/* Placeholder for image */}
      <div className="p-4 w-[50%]">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
