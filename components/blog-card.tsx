import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
}

export default function BlogCard({ title, excerpt, slug }: BlogCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-200 relative">
        <Image
          src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(title)}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-sm font-medium text-amber-800 hover:text-amber-700">
          Read More →
        </Link>
      </div>
    </div>
  )
}
