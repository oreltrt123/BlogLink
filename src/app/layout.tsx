import type React from "react"
import { Navigation } from "@/components/navigation"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Website",
  description: "A website with a primary domain and blog subdomain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        <footer className="bg-gray-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} My Website. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
