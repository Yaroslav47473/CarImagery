export function Footer() {
  // Example data structure if you want to map links
  const footerColumns = {
    companyInfo: {
      logoChar: "C",
      name: "CarImagery",
      socialLinks: [
        { href: "#", icon: <FacebookIcon /> }, // Replace with actual SVG or Icon component
        { href: "#", icon: <TwitterIcon /> },
        { href: "#", icon: <InstagramIcon /> },
        { href: "#", icon: <LinkedInIcon /> },
      ],
    },
    useCases: {
      title: "Use Cases",
      items: ["UI design", "UX design", "Prototyping" /* ... */],
    },
    explore: {
      title: "Explore",
      items: ["Design", "Development", "Prototyping features" /* ... */],
    },
    resources: {
      title: "Resources",
      items: ["Blog", "Best practices", "Support" /* ... */],
    },
    company: {
      title: "Company",
      items: ["About", "Careers", "Legal", "Contact"],
    },
  };

  // Placeholder Icon components (replace with actual SVGs or from a library)
  const FacebookIcon = () => (
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
  );
  const TwitterIcon = () => (
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
  );
  const InstagramIcon = () => (
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
  );
  const LinkedInIcon = () => (
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
  );

  return (
    <footer className="bg-white py-8 md:py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {" "}
          {/* Adjusted grid for better steps */}
          {/* Column 1: Logo and Social Media */}
          <div className="sm:col-span-2 md:col-span-1">
            {" "}
            {/* Spans more on smaller grids if needed */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-5 w-5 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white text-xs">
                  {footerColumns.companyInfo.logoChar}
                </span>
              </div>
              <span className="font-medium text-xl md:text-2xl">
                {footerColumns.companyInfo.name}
              </span>
            </div>
            <div className="flex space-x-3">
              {footerColumns.companyInfo.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 border rounded-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  aria-label={social.icon.toString()} // Improve accessibility
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Column 2: Use Cases */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              {footerColumns.useCases.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-600">
              {footerColumns.useCases.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Column 3: Explore */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              {footerColumns.explore.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-600">
              {footerColumns.explore.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Column 4: Resources */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              {footerColumns.resources.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-600">
              {footerColumns.resources.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Column 5: Company */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              {footerColumns.company.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-600">
              {footerColumns.company.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
