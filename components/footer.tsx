import Link from "next/link"
import SocialLinks from "@/components/social-links"

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Social Media Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-5 w-5 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white text-xs">C</span>
              </div>
              <span className="font-medium">CarImagery</span>
            </div>

            {/* Social Media Icons */}
            <SocialLinks />

            <h3 className="font-semibold mb-4 mt-6">Use Cases</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/use-cases/ui-design" className="hover:text-gray-900">
                  UI design
                </Link>
              </li>
              <li>
                <Link href="/use-cases/ux-design" className="hover:text-gray-900">
                  UX design
                </Link>
              </li>
              <li>
                <Link href="/use-cases/prototyping" className="hover:text-gray-900">
                  Prototyping
                </Link>
              </li>
              <li>
                <Link href="/use-cases/wireframing" className="hover:text-gray-900">
                  Wireframing
                </Link>
              </li>
              <li>
                <Link href="/use-cases/programming" className="hover:text-gray-900">
                  Programming
                </Link>
              </li>
              <li>
                <Link href="/use-cases/diagramming" className="hover:text-gray-900">
                  Diagramming
                </Link>
              </li>
              <li>
                <Link href="/use-cases/brainstorming" className="hover:text-gray-900">
                  Brainstorming
                </Link>
              </li>
              <li>
                <Link href="/use-cases/team-collaboration" className="hover:text-gray-900">
                  Team collaboration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/explore/design" className="hover:text-gray-900">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/explore/development" className="hover:text-gray-900">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/explore/prototyping-features" className="hover:text-gray-900">
                  Prototyping features
                </Link>
              </li>
              <li>
                <Link href="/explore/design-systems" className="hover:text-gray-900">
                  Design systems
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/explore/design-process" className="hover:text-gray-900">
                  Design process
                </Link>
              </li>
              <li>
                <Link href="/explore/figma" className="hover:text-gray-900">
                  Figma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/best-practices" className="hover:text-gray-900">
                  Best practices
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-gray-900">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/resources/learn-design" className="hover:text-gray-900">
                  Learn design
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-gray-900">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources/library" className="hover:text-gray-900">
                  Resource library
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-900">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} CarImagery. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-900">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
