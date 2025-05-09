import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-200">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar Navigation */}
              <div className="w-full md:w-64 p-8 space-y-4">
                <h2 className="text-4xl font-bold text-gray-700">Data Stock</h2>
                <h2 className="text-4xl font-bold text-gray-700">CarImagery Views</h2>
                <h2 className="text-4xl font-bold text-gray-700">Cars</h2>
                <h2 className="text-4xl font-bold text-gray-700">API</h2>
              </div>

              {/* Main Hero Content */}
              <div className="flex-1 relative">
                <div className="relative h-[400px] md:h-[500px]">
                  {/* Top view car */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Top view of a white car"
                      width={500}
                      height={300}
                      className="object-contain"
                    />
                  </div>

                  {/* Red sports car */}
                  <div className="absolute bottom-0 left-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Red sports car"
                      width={400}
                      height={200}
                      className="object-contain"
                    />
                  </div>

                  {/* White box with content */}
                  <div className="absolute top-0 right-0 bottom-0 bg-white w-full md:w-[350px] p-6">
                    <h1 className="text-3xl font-bold text-amber-800 mt-4">CarImagery</h1>
                    <h2 className="text-xl font-medium mt-4">The Best Solution for Car Images</h2>
                    <p className="text-sm mt-2 text-gray-700">
                      Find high-quality car stock images at your fingertips. Get the perfect images when you need them.
                      Fast and reliable car images.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" className="bg-white">
                        Try for Free
                      </Button>
                      <Button className="bg-gray-900 text-white hover:bg-gray-800">Get Started</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold mb-2">heading</h2>
            <p className="text-sm text-gray-500 mb-8">subheading</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="p-6 border rounded-lg">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">01</span>
                </div>
                <h3 className="font-semibold mb-2">High-Resolution</h3>
                <p className="text-sm text-gray-600">
                  We've got high-quality, high-resolution images of cars from every angle. Perfect for your projects.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">02</span>
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Our team is available around the clock to help with any questions or issues you might have.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">03</span>
                </div>
                <h3 className="font-semibold mb-2">Full Flexibility</h3>
                <p className="text-sm text-gray-600">
                  Choose from various angles, models, and formats to suit your specific needs.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">04</span>
                </div>
                <h3 className="font-semibold mb-2">Customer Dashboard</h3>
                <p className="text-sm text-gray-600">
                  Manage your account, downloads, and preferences through our intuitive dashboard.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">05</span>
                </div>
                <h3 className="font-semibold mb-2">Various Functions</h3>
                <p className="text-sm text-gray-600">
                  From simple downloads to API integration, we offer a range of functions to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-lg border text-center">
                <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">📊</span>
                </div>
                <h3 className="text-2xl font-bold">70,000+</h3>
                <p>Images</p>
              </div>

              <div className="p-6 bg-white rounded-lg border text-center">
                <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">🚗</span>
                </div>
                <h3 className="text-2xl font-bold">10,000+</h3>
                <p>Car Models</p>
              </div>

              <div className="p-6 bg-white rounded-lg border text-center">
                <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">😊</span>
                </div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="p-6 bg-white rounded-lg border text-center">
                <div className="w-10 h-10 mx-auto rounded-full border flex items-center justify-center mb-4">
                  <span className="text-sm">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-6 bg-gray-300">
          <div className="container mx-auto px-4">
            <p className="text-gray-600">Yaroslav Khrystych</p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Check Out our Blog's and Help</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Title</h3>
                  <p className="text-sm text-gray-600">
                    Find high-quality car stock images at your fingertips. Get the perfect images when you need them.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Title</h3>
                  <p className="text-sm text-gray-600">
                    Find high-quality car stock images at your fingertips. Get the perfect images when you need them.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Title</h3>
                  <p className="text-sm text-gray-600">
                    Find high-quality car stock images at your fingertips. Get the perfect images when you need them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter & Contact Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Newsletter */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Stay Up-to-Date</h2>
                <div className="flex gap-2">
                  <Input placeholder="Email address" className="bg-white" />
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">Submit</Button>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact & Support</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>support@carimagery.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (234) 567-8901</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Social Media Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-5 w-5 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs">C</span>
                </div>
                <span className="font-medium">CarImagery</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 border rounded-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border rounded-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border rounded-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border rounded-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* Use Cases Column */}
            <div>
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>UI design</li>
                <li>UX design</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
                <li>Programming</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Team collaboration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Design</li>
                <li>Development</li>
                <li>Prototyping features</li>
                <li>Design systems</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Design process</li>
                <li>Figma</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Blog</li>
                <li>Best practices</li>
                <li>Support</li>
                <li>Developers</li>
                <li>Learn design</li>
                <li>Releases</li>
                <li>Careers</li>
                <li>Resource library</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About</li>
                <li>Careers</li>
                <li>Legal</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
