import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { NewsletterContactSection } from "@/components/home/NewsletterContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Newsletter & Contact Section */}
        <NewsletterContactSection />
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
                <span className="font-medium text-[24px]">CarImagery</span>
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
