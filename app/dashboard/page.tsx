import { Header } from "@/components/layout/Header"; // Adjust path if necessary
import { Input } from "@/components/ui/input"; // Assuming you have this from shadcn/ui
import { Button } from "@/components/ui/button"; // Assuming you have this from shadcn/ui
import Image from "next/image"; // For user avatar
import {
  Search,
  X,
  LayoutDashboard,
  FileText,
  Database,
  KeyRound,
  History,
  Settings2,
  Users,
  MessageSquare,
  ChevronRight,
  Menu, // For the floating action button (mobile menu icon)
  Mail, // Added for User Profile
  Phone, // Added for User Profile
} from "lucide-react";

// Dummy data for sidebar navigation
const sidebarNavItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true,
  },
  { name: "Request a Vehicle", href: "#", icon: FileText, current: false }, // Replace # with actual paths later
  { name: "Vehicle Libary", href: "#", icon: Database, current: false },
  { name: "API Keys", href: "#", icon: KeyRound, current: false },
  { name: "API Logs", href: "#", icon: History, current: false },
  { name: "Updates", href: "#", icon: Settings2, current: false },
];

const sidebarActionItems = [
  {
    name: "User-Managment",
    href: "#",
    icon: Users,
    color: "bg-pink-100 text-pink-700 hover:bg-pink-200",
  },
  {
    name: "Settings",
    href: "#",
    icon: Settings2,
    color: "bg-red-700 text-white hover:bg-red-800",
  },
  {
    name: "Support-Chat",
    href: "#",
    icon: MessageSquare,
    color: "bg-indigo-600 text-white hover:bg-indigo-700",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 min-h-full bg-white p-5 border-r border-gray-200 flex flex-col">
          {/* User Profile Card */}
          <div className="p-4 mb-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="/placeholder.svg?height=40&width=40" // Replace with actual user avatar path
                alt="Jason Lohre"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-sm">Jason Lohre</h4>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                  Personal Support
                </span>
              </div>
              <span className="ml-auto w-2.5 h-2.5 bg-green-500 rounded-full"></span>{" "}
              {/* Online indicator */}
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p className="flex items-center">
                <Phone size={14} className="mr-2" /> +49 151 47918371
              </p>
              <p className="flex items-center">
                <Mail size={14} className="mr-2" /> Jason@carimagery.com
              </p>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-gray-50"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            {/* X icon for clearing search would need state management */}
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="space-y-1.5">
              {sidebarNavItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md group
                      ${
                        item.current
                          ? "bg-gray-700 text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    <item.icon size={18} className="mr-3" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Action Buttons */}
          <div className="mt-auto space-y-2 pt-6">
            {sidebarActionItems.map((item) => (
              <Button
                key={item.name}
                variant="outline"
                className={`w-full justify-start text-sm py-2.5 px-3 ${item.color}`}
                // onClick={() => router.push(item.href)} // For Next.js Link behavior, use <Link>
              >
                <item.icon size={18} className="mr-3" />
                {item.name}
              </Button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Summary Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1: Active API-Keys */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Active API-Keys
              </h3>
              <p className="text-2xl font-bold text-green-600">3 Active</p>
              <p className="text-lg font-semibold text-red-500 mb-2">
                1 Inactive
              </p>
              <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
                View More
              </a>
            </div>
            {/* Card 2: API Requests */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                API Requests
              </h3>
              <p className="text-xl font-bold text-gray-800">June 15.538</p>
              <p className="text-xl font-bold text-gray-800 mb-2">
                Janury 10.518
              </p>
              <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
                View More
              </a>
            </div>
            {/* Card 3: Data Usage */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Data Usage
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-3.5">
                2,3 GB / 10 GB
              </p>
              <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
                View More
              </a>
            </div>
            {/* Card 4: Payment in */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Payment in
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-3.5">28 Days</p>
              <a href="#" className="text-xs text-gray-500 hover:text-blue-600">
                View More
              </a>
            </div>
          </div>

          {/* API-Requests Graph Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              API-Requests
            </h3>
            {/* Placeholder for graph - you'd integrate a charting library here */}
            <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">
                [Graph Placeholder: January - July]
              </p>
            </div>
          </div>

          {/* Latest API Requests Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Latest API Requests
            </h3>
            {/* Placeholder for table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-3 text-left font-medium text-gray-600">
                      Image
                    </th>
                    <th className="py-2 px-3 text-left font-medium text-gray-600">
                      Details
                    </th>
                    <th className="py-2 px-3 text-left font-medium text-gray-600">
                      ID
                    </th>
                    <th className="py-2 px-3 text-left font-medium text-gray-600">
                      Status
                    </th>
                    <th className="py-2 px-3 text-left font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-3">
                      <Image
                        src="/placeholder.svg?height=30&width=50"
                        alt="Car"
                        width={50}
                        height={30}
                        className="rounded-sm"
                      />
                    </td>
                    <td className="py-3 px-3 text-gray-700">
                      BMW 3Series Side Profile
                    </td>
                    <td className="py-3 px-3 text-gray-700">
                      DWADDFadaddaw....
                    </td>
                    <td className="py-3 px-3 text-green-600 font-medium">
                      OKAY
                    </td>
                    <td className="py-3 px-3">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View Request
                      </a>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      {/* Floating Action Button for Mobile (example) */}
      <Button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center md:hidden">
        <Menu size={24} />
      </Button>
    </div>
  );
}
