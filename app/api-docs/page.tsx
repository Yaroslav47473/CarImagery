import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-gray-300 max-w-2xl">
            Integrate CarImagery's extensive car image database directly into your applications with our powerful API.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-4 rounded-lg border sticky top-24">
              <h3 className="font-semibold mb-4">Documentation</h3>
              <nav className="space-y-1">
                <a href="#getting-started" className="block py-2 px-3 bg-gray-100 rounded-md font-medium text-sm">
                  Getting Started
                </a>
                <a href="#authentication" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  Authentication
                </a>
                <a href="#endpoints" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  API Endpoints
                </a>
                <a href="#rate-limits" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  Rate Limits
                </a>
                <a href="#errors" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  Error Handling
                </a>
                <a href="#sdks" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  SDKs & Libraries
                </a>
                <a href="#webhooks" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  Webhooks
                </a>
                <a href="#examples" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                  Code Examples
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg border mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <ChevronRight className="h-5 w-5 text-amber-800" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Quick Start</h2>
                  <p className="text-sm text-gray-500">Get up and running in minutes</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Sign up</span> for a CarImagery API key
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                    2
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Authenticate</span> your requests with your API key
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                    3
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Make requests</span> to our endpoints
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                    4
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Integrate</span> car images into your application
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-gray-900 text-white hover:bg-gray-800" asChild>
                  <Link href="/signup">Get Your API Key</Link>
                </Button>
              </div>
            </div>

            <div id="getting-started" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <div className="bg-white p-6 rounded-lg border mb-8">
                <p className="mb-4">
                  The CarImagery API provides programmatic access to our extensive database of car images. You can
                  search, filter, and retrieve images based on various parameters such as make, model, year, angle, and
                  more.
                </p>
                <p className="mb-4">
                  Our API follows RESTful principles and returns data in JSON format. All API requests must be made over
                  HTTPS.
                </p>
                <h3 className="font-semibold mb-2">Base URL</h3>
                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm mb-4">https://api.carimagery.com/v1</div>

                <h3 className="font-semibold mb-2">API Versioning</h3>
                <p className="text-sm text-gray-700 mb-4">
                  The current version of the API is v1. We recommend specifying the API version in the URL to ensure
                  compatibility with your application.
                </p>

                <Tabs defaultValue="curl">
                  <TabsList>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl" className="mt-2">
                    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-green-400 text-sm font-mono">
                        {`curl -X GET "https://api.carimagery.com/v1/cars" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="javascript" className="mt-2">
                    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-green-400 text-sm font-mono">
                        {`// Using fetch
const fetchCars = async () => {
  const response = await fetch('https://api.carimagery.com/v1/cars', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  console.log(data);
};

fetchCars();`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="python" className="mt-2">
                    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-green-400 text-sm font-mono">
                        {`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.carimagery.com/v1/cars', headers=headers)
data = response.json()
print(data)`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div id="authentication" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Authentication</h2>
              <div className="bg-white p-6 rounded-lg border mb-8">
                <p className="mb-4">All API requests require authentication. We support two authentication methods:</p>

                <h3 className="font-semibold mb-2">API Key Authentication</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Include your API key in the Authorization header of your requests.
                </p>

                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm mb-4">
                  Authorization: Bearer YOUR_API_KEY
                </div>

                <h3 className="font-semibold mb-2">OAuth 2.0</h3>
                <p className="text-sm text-gray-700 mb-4">
                  For applications that need to access user-specific data, we support OAuth 2.0 authentication.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-4">
                  <h4 className="font-semibold text-amber-800 mb-1">Security Note</h4>
                  <p className="text-sm text-amber-700">
                    Never expose your API key in client-side code. Always make API requests from your server.
                  </p>
                </div>

                <Button variant="outline" asChild>
                  <Link href="/api-docs/authentication">Learn more about authentication</Link>
                </Button>
              </div>
            </div>

            <div id="endpoints" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
              <div className="bg-white p-6 rounded-lg border mb-8">
                <h3 className="font-semibold mb-4">Cars</h3>

                <div className="space-y-4">
                  <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 border-b">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">GET</span>
                      <span className="font-mono text-sm">/cars</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm mb-2">List all cars with pagination</p>
                      <Button variant="link" className="text-xs p-0 h-auto" asChild>
                        <Link href="/api-docs/endpoints/cars">View Documentation</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 border-b">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">GET</span>
                      <span className="font-mono text-sm">/cars/{"{id}"}</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm mb-2">Get a specific car by ID</p>
                      <Button variant="link" className="text-xs p-0 h-auto" asChild>
                        <Link href="/api-docs/endpoints/cars-id">View Documentation</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold mb-4 mt-6">Images</h3>

                <div className="space-y-4">
                  <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 border-b">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">GET</span>
                      <span className="font-mono text-sm">/images</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm mb-2">List all images with pagination and filtering</p>
                      <Button variant="link" className="text-xs p-0 h-auto" asChild>
                        <Link href="/api-docs/endpoints/images">View Documentation</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 border-b">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">GET</span>
                      <span className="font-mono text-sm">/images/{"{id}"}</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm mb-2">Get a specific image by ID</p>
                      <Button variant="link" className="text-xs p-0 h-auto" asChild>
                        <Link href="/api-docs/endpoints/images-id">View Documentation</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 border-b">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">POST</span>
                      <span className="font-mono text-sm">/images/search</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm mb-2">Search for images with advanced filtering</p>
                      <Button variant="link" className="text-xs p-0 h-auto" asChild>
                        <Link href="/api-docs/endpoints/images-search">View Documentation</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/api-docs/endpoints">View All Endpoints</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional sections would continue here */}
            <div className="text-center py-8">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our developer support team is here to help you integrate with our API.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button className="bg-gray-900 text-white hover:bg-gray-800" asChild>
                  <Link href="/signup">Get API Key</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
