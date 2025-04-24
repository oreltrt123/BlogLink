import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to determine the current domain type
export function getDomainType() {
  if (typeof window === "undefined") return "unknown"

  const hostname = window.location.hostname
  if (hostname.startsWith("blog.")) return "blog"
  return "main"
}

// Helper function to create cross-domain links
export function createDomainUrl(path: string, type: "main" | "blog") {
  if (typeof window === "undefined") return path

  const currentHostname = window.location.hostname
  const protocol = window.location.protocol

  // For localhost development
  if (currentHostname === "localhost") {
    return type === "blog" ? `/blog${path === "/" ? "" : path}` : path
  }

  // Extract the base domain (remove 'blog.' if present)
  const baseDomain = currentHostname.startsWith("blog.") ? currentHostname.substring(5) : currentHostname

  // Create the appropriate domain URL
  if (type === "blog") {
    return `${protocol}//blog.${baseDomain}${path}`
  } else {
    return `${protocol}//${baseDomain}${path}`
  }
}
