"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const isOnBlogPage = pathname.startsWith("/blog")

  // Define navigation items for both sections
  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ]

  const blogNavItems = [
    { name: "Main Site", path: "/" },
    { name: "Blog Home", path: "/blog" },
    { name: "Categories", path: "/blog/categories" },
  ]

  // Select the appropriate navigation items based on the current path
  const navItems = isOnBlogPage ? blogNavItems : mainNavItems

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                {isOnBlogPage ? "My Blog" : "My Website"}
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                // Check if the item is active
                const isActive =
                  pathname === item.path ||
                  (item.path === "/blog" && pathname.startsWith("/blog") && item.name === "Blog Home")

                return (
                  <Link
                    key={`${item.name}-${item.path}`}
                    href={item.path}
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
