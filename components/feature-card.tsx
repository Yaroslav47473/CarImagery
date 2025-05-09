import type { ReactNode } from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  icon?: ReactNode
}

export default function FeatureCard({ number, title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-sm transition-shadow">
      <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
        {icon ? icon : <span className="text-sm">{number}</span>}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
