import { BlogPostCard } from "./BlogPostCard"; // Import the new component

// Sample data for your blog posts
// In a real application, this data might come from an API
const blogPosts = [
  {
    id: "1", // Unique key for mapping
    title: "Exploring the Latest Car Models",
    description:
      "Find high-quality car stock images at your fingertips. Get the perfect images when you need them.",
  },
  {
    id: "2",
    title: "Tips for Automotive Photography",
    description:
      "Find high-quality car stock images at your fingertips. Get the perfect images when you need them.",
  },
  {
    id: "3",
    title: "The Future of Electric Vehicles",
    description:
      "Find high-quality car stock images at your fingertips. Get the perfect images when you need them.",
  },
  // Add more blog post objects here as needed
];

export function BlogSection() {
  return (
    <section className="py-12 bg-white w-full">
      <div className="px-4 w-full">
        <h2 className="text-2xl font-bold mb-8">
          Check Out our Blog's and Help
        </h2>

        <div className="w-full flex flex-row justify-around px-[50px] gap-[30px] mb-12">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id} // React needs a unique key for list items
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
