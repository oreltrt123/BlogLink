import Link from "next/link"

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2023-05-15",
  },
  {
    id: 2,
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    excerpt: "A comprehensive guide to React Hooks and how to use them effectively",
    date: "2023-06-02",
  },
  {
    id: 3,
    slug: "deploying-to-vercel",
    title: "Deploying Your Next.js App to Vercel",
    excerpt: "Step-by-step guide to deploying your Next.js application to Vercel",
    date: "2023-06-20",
  },
]

export default function BlogHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600">Latest articles, tutorials, and updates from our team</p>
      </div>

      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <div className="mb-2 text-gray-500">{post.date}</div>
            <h2 className="text-2xl font-bold mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
