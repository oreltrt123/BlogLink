import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to determine if we're on a blog page
export function isOnBlogPage() {
  if (typeof window === "undefined") return false
  return window.location.pathname.startsWith("/blog")
}
