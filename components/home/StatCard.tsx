import clockicon from "../../public/img/clock_icon.png";
import Image from "next/image";

interface StatCardProps {
  // Or React.ReactNode if you plan to use actual icon components
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg border text-center">
      <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
        <Image src={clockicon} alt="clockicon" />
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p>{label}</p>
    </div>
  );
}
