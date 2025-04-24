import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          This is the main domain of our website. We also have a blog available.
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Visit Our Blog
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Feature {i}</h2>
            <p className="text-gray-600">
              This is a feature description for the main website. It showcases what we offer.
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
