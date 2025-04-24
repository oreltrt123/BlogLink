import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Blog",
  description: "The blog section of my website",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="blog-layout">{children}</div>
}
