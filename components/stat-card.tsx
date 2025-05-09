interface StatCardProps {
  number: string
  label: string
  icon: string
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg border text-center hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
        <span className="text-sm">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold">{number}</h3>
      <p>{label}</p>
    </div>
  )
}
