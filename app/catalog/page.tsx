import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Car Image Catalog</h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our extensive collection of high-quality car images. Find the perfect image for your project.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search for car models, brands..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="downloads">Most Downloads</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-64 space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sports" />
                  <label
                    htmlFor="sports"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Sports Cars (245)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="luxury" />
                  <label
                    htmlFor="luxury"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Luxury Cars (189)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="suv" />
                  <label
                    htmlFor="suv"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SUVs (312)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="electric" />
                  <label
                    htmlFor="electric"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Electric Cars (156)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vintage" />
                  <label
                    htmlFor="vintage"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Vintage Cars (98)
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-3">Brands</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="bmw" />
                  <label
                    htmlFor="bmw"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    BMW (124)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mercedes" />
                  <label
                    htmlFor="mercedes"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mercedes-Benz (145)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="audi" />
                  <label
                    htmlFor="audi"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Audi (98)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="toyota" />
                  <label
                    htmlFor="toyota"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Toyota (156)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="honda" />
                  <label
                    htmlFor="honda"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Honda (87)
                  </label>
                </div>
              </div>
              <Button variant="link" className="text-xs mt-2 h-auto p-0">
                Show more brands
              </Button>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-3">Image Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="exterior" />
                  <label
                    htmlFor="exterior"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Exterior (543)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="interior" />
                  <label
                    htmlFor="interior"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Interior (312)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="detail" />
                  <label
                    htmlFor="detail"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Detail Shots (245)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="action" />
                  <label
                    htmlFor="action"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Action/Driving (178)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <Link href={`/catalog/car-${i + 1}`} key={i} className="group">
                  <div className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-100 relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Car+${i + 1}`}
                        alt={`Car ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        {
                          [
                            "Ferrari F8",
                            "Porsche 911",
                            "BMW M4",
                            "Mercedes AMG GT",
                            "Audi R8",
                            "Lamborghini Huracan",
                            "McLaren 720S",
                            "Aston Martin DB11",
                            "Bugatti Chiron",
                          ][i % 9]
                        }
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {
                          [
                            "Sports Car",
                            "Luxury Sedan",
                            "SUV",
                            "Electric Car",
                            "Convertible",
                            "Coupe",
                            "Supercar",
                            "Hypercar",
                            "Grand Tourer",
                          ][i % 9]
                        }
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Resolution: 4K</span>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-900 text-white hover:bg-gray-800">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">
                  10
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
