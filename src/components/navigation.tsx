"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { createDomainUrl, getDomainType } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const domainType = getDomainType()

  // Define navigation items for both domains
  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/", domain: "blog" },
  ]

  const blogNavItems = [
    { name: "Main Site", path: "/", domain: "main" },
    { name: "Blog Home", path: "/" },
    { name: "Categories", path: "/categories" },
  ]

  // Select the appropriate navigation items based on the current domain
  const navItems = domainType === "blog" ? blogNavItems : mainNavItems

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {domainType === "blog" ? (
                <span className="text-xl font-bold text-gray-900">Blog</span>
              ) : (
                <span className="text-xl font-bold text-gray-900">My Website</span>
              )}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                // Determine if this is a cross-domain link
                const isCrossDomain = item.domain && item.domain !== domainType

                // Create the appropriate href
                const href = isCrossDomain ? createDomainUrl(item.path, item.domain as "main" | "blog") : item.path

                // Check if the item is active
                const isActive = !isCrossDomain && pathname === item.path

                return (
                  <Link
                    key={`${item.name}-${item.path}`}
                    href={href}
                    className={cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
