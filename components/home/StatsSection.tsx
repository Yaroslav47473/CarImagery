import { StatCard } from "./StatCard"; // Import the StatCard component

const statsData = [
  {
    id: "stat1",
    value: "70,000+  Images",
    label: "Body Text",
  },
  {
    id: "stat2",
    value: "10,000+  Car Models",
    label: "Body Text",
  },
  {
    id: "stat3",
    value: "100+  Happy Customers",
    label: "Body Text",
  },
  {
    id: "stat4",
    value: "99.9%  Uptime",
    label: "Body Text",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-[#1D1B2029] w-full mb-[300px]">
      <div className=" w-full mx-auto px-4">
        <div className="grid grid-cols-1 px-10 md:grid-cols-4 gap-10">
          {statsData.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
