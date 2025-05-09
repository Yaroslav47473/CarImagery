import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const cars = [
  {
    id: "car_1",
    make: "Ferrari",
    model: "F8 Tributo",
    year: 2021,
    category: "Sports Car",
    images: [
      {
        id: "img_1",
        url: "/placeholder.svg?height=800&width=1200&text=Ferrari+F8+Tributo",
        angle: "front",
        resolution: "4K",
        format: "jpg",
      },
      {
        id: "img_2",
        url: "/placeholder.svg?height=800&width=1200&text=Ferrari+F8+Tributo+Side",
        angle: "side",
        resolution: "4K",
        format: "jpg",
      },
    ],
  },
  {
    id: "car_2",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2022,
    category: "Sports Car",
    images: [
      {
        id: "img_3",
        url: "/placeholder.svg?height=800&width=1200&text=Porsche+911",
        angle: "front",
        resolution: "4K",
        format: "jpg",
      },
    ],
  },
  {
    id: "car_3",
    make: "Lamborghini",
    model: "Huracan",
    year: 2021,
    category: "Supercar",
    images: [
      {
        id: "img_4",
        url: "/placeholder.svg?height=800&width=1200&text=Lamborghini+Huracan",
        angle: "front",
        resolution: "4K",
        format: "jpg",
      },
    ],
  },
]

export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const make = searchParams.get("make")
    const model = searchParams.get("model")
    const year = searchParams.get("year")
    const category = searchParams.get("category")

    // Filter cars based on query parameters
    let filteredCars = [...cars]

    if (make) {
      filteredCars = filteredCars.filter((car) => car.make.toLowerCase().includes(make.toLowerCase()))
    }

    if (model) {
      filteredCars = filteredCars.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()))
    }

    if (year) {
      filteredCars = filteredCars.filter((car) => car.year.toString() === year)
    }

    if (category) {
      filteredCars = filteredCars.filter((car) => car.category.toLowerCase().includes(category.toLowerCase()))
    }

    // Pagination (simplified)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = filteredCars.slice(startIndex, endIndex)

    return NextResponse.json({
      data: results,
      pagination: {
        total: filteredCars.length,
        page,
        limit,
      },
    })
  } catch (error) {
    console.error("Error fetching cars:", error)
    return NextResponse.json({ error: "Failed to fetch cars" }, { status: 500 })
  }
}
