const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" }
    ]
  },
  {
    title: "Resources", 
    links: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Support", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MO</span>
              </div>
              <span className="ml-3 text-sm font-semibold">Mobile Operator</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">
              Revolutionizing mobile app testing with AI-powered automation and intelligent quality assurance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">GitHub</span>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 Mobile Operator. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-4 md:mt-0">Built for mobile development teams worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
