import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Heart, Share2, Info, Camera, Layers, Clock } from "lucide-react"

export default function CarDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch car data based on the ID
  const carId = params.id

  // Mock data for demonstration
  const car = {
    id: carId,
    name: "Ferrari F8 Tributo",
    category: "Sports Car",
    description:
      "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta. It is a car with unique characteristics and, as its name implies, is an homage to the most powerful V8 in Ferrari history.",
    resolution: "4K (3840 x 2160)",
    format: "JPG, PNG, RAW",
    uploadDate: "March 15, 2023",
    views: 12458,
    downloads: 3254,
    tags: ["Ferrari", "Sports Car", "Italian", "Supercar", "V8", "Red", "Luxury"],
    photographer: "Michael Johnson",
    relatedCars: ["Lamborghini Huracan", "McLaren 720S", "Porsche 911 Turbo S"],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center text-sm gap-2 text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-gray-900">
              Catalog
            </Link>
            <span>/</span>
            <Link href="/catalog/sports-cars" className="hover:text-gray-900">
              Sports Cars
            </Link>
            <span>/</span>
            <span className="text-gray-900">{car.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Image and Gallery */}
          <div className="lg:w-2/3">
            <div className="bg-white p-4 rounded-lg border">
              <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Ferrari+F8+Tributo"
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=View+${i + 1}`}
                      alt={`${car.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Tabs defaultValue="description">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="license">License</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="bg-white p-4 rounded-lg border mt-2">
                  <h3 className="font-semibold mb-2">About this car</h3>
                  <p className="text-gray-700">{car.description}</p>

                  <h3 className="font-semibold mt-4 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {car.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="bg-white p-4 rounded-lg border mt-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Image Specifications</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Layers className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Resolution:</span> {car.resolution}
                        </li>
                        <li className="flex items-center gap-2">
                          <Camera className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Format:</span> {car.format}
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Upload Date:</span> {car.uploadDate}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Car Specifications</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="font-medium">Engine:</span> 3.9L Twin-Turbocharged V8
                        </li>
                        <li>
                          <span className="font-medium">Power:</span> 710 hp @ 8,000 rpm
                        </li>
                        <li>
                          <span className="font-medium">Torque:</span> 568 lb-ft @ 3,250 rpm
                        </li>
                        <li>
                          <span className="font-medium">0-60 mph:</span> 2.9 seconds
                        </li>
                        <li>
                          <span className="font-medium">Top Speed:</span> 211 mph
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="license" className="bg-white p-4 rounded-lg border mt-2">
                  <h3 className="font-semibold mb-2">License Information</h3>
                  <p className="text-gray-700 mb-4">
                    All images on CarImagery are available under our standard license, which allows you to use the
                    images for personal and commercial projects with proper attribution.
                  </p>

                  <h4 className="font-medium mb-2">What you can do:</h4>
                  <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
                    <li>Use in digital and print media</li>
                    <li>Use in website designs, mobile apps, and templates</li>
                    <li>Use in social media posts and advertisements</li>
                    <li>Modify and adapt the images to fit your project</li>
                  </ul>

                  <h4 className="font-medium mb-2">Restrictions:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Redistribution or reselling of the original image</li>
                    <li>Using the image in a way that is defamatory or misleading</li>
                    <li>Using the image in products for resale without an extended license</li>
                  </ul>

                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/license">View Full License Terms</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h1 className="text-2xl font-bold mb-1">{car.name}</h1>
              <p className="text-gray-500 mb-4">{car.category}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs">MJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">By {car.photographer}</p>
                    <p className="text-xs text-gray-500">Professional Photographer</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Info className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Resolution</span>
                  <span>{car.resolution}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Format</span>
                  <span>{car.format}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Views</span>
                  <span>{car.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Downloads</span>
                  <span>{car.downloads.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                  <Download className="h-4 w-4 mr-2" />
                  Download Image
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Related Cars</h3>
              <div className="space-y-4">
                {car.relatedCars.map((relatedCar, i) => (
                  <Link href={`/catalog/car-${i + 10}`} key={i} className="flex items-center gap-3 group">
                    <div className="h-16 w-16 bg-gray-100 rounded-lg relative overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${encodeURIComponent(relatedCar)}`}
                        alt={relatedCar}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-amber-800 transition-colors">{relatedCar}</h4>
                      <p className="text-xs text-gray-500">Sports Car</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button variant="link" className="text-sm p-0 h-auto" asChild>
                  <Link href="/catalog">View all similar cars</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Premium Membership</h3>
              <p className="text-sm text-gray-600 mb-4">
                Upgrade to Premium for unlimited downloads, higher resolutions, and commercial usage rights.
              </p>
              <Button className="w-full" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
