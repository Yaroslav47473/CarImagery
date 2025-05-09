import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const images = [
  {
    id: "img_1",
    carId: "car_1",
    make: "Ferrari",
    model: "F8 Tributo",
    url: "/placeholder.svg?height=800&width=1200&text=Ferrari+F8+Tributo",
    angle: "front",
    resolution: "4K",
    format: "jpg",
    uploadDate: "2023-03-15",
    tags: ["Ferrari", "Sports Car", "Italian", "Supercar", "V8", "Red", "Luxury"],
  },
  {
    id: "img_2",
    carId: "car_1",
    make: "Ferrari",
    model: "F8 Tributo",
    url: "/placeholder.svg?height=800&width=1200&text=Ferrari+F8+Tributo+Side",
    angle: "side",
    resolution: "4K",
    format: "jpg",
    uploadDate: "2023-03-15",
    tags: ["Ferrari", "Sports Car", "Italian", "Supercar", "V8", "Red", "Luxury"],
  },
  {
    id: "img_3",
    carId: "car_2",
    make: "Porsche",
    model: "911 Turbo S",
    url: "/placeholder.svg?height=800&width=1200&text=Porsche+911",
    angle: "front",
    resolution: "4K",
    format: "jpg",
    uploadDate: "2023-04-20",
    tags: ["Porsche", "Sports Car", "German", "Luxury", "Turbo", "Silver"],
  },
  {
    id: "img_4",
    carId: "car_3",
    make: "Lamborghini",
    model: "Huracan",
    url: "/placeholder.svg?height=800&width=1200&text=Lamborghini+Huracan",
    angle: "front",
    resolution: "4K",
    format: "jpg",
    uploadDate: "2023-05-10",
    tags: ["Lamborghini", "Supercar", "Italian", "V10", "Green", "Luxury"],
  },
]

export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const make = searchParams.get("make")
    const model = searchParams.get("model")
    const angle = searchParams.get("angle")
    const resolution = searchParams.get("resolution")
    const format = searchParams.get("format")
    const tag = searchParams.get("tag")

    // Filter images based on query parameters
    let filteredImages = [...images]

    if (make) {
      filteredImages = filteredImages.filter((image) => image.make.toLowerCase().includes(make.toLowerCase()))
    }

    if (model) {
      filteredImages = filteredImages.filter((image) => image.model.toLowerCase().includes(model.toLowerCase()))
    }

    if (angle) {
      filteredImages = filteredImages.filter((image) => image.angle.toLowerCase() === angle.toLowerCase())
    }

    if (resolution) {
      filteredImages = filteredImages.filter((image) => image.resolution === resolution)
    }

    if (format) {
      filteredImages = filteredImages.filter((image) => image.format.toLowerCase() === format.toLowerCase())
    }

    if (tag) {
      filteredImages = filteredImages.filter((image) =>
        image.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())),
      )
    }

    // Pagination (simplified)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = filteredImages.slice(startIndex, endIndex)

    return NextResponse.json({
      data: results,
      pagination: {
        total: filteredImages.length,
        page,
        limit,
      },
    })
  } catch (error) {
    console.error("Error fetching images:", error)
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 })
  }
}
