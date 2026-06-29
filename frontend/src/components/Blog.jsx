import { useState, useEffect } from "react";
// 🎯 Hamari central API service
import { fetchSections } from "../services/api";

// STATIC FALLBACK DATA (Safe Zone)
const fallbackPosts = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    date: "19 oct",
    comments: 10,
    title: "Mobile Friendly Comments Dashboard now launched!",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    date: "24 oct",
    comments: 7,
    title: "How We Redesigned Our Core Product in 3 Weeks",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  }
];

// Helper: MongoDB timestamp se "19 oct" jaisa format nikalna
const formatShortDate = (dateString) => {
  if (!dateString) return "12 oct";
  const date = new Date(dateString);
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  return `${date.getDate()} ${monthNames[date.getMonth()]}`;
};

// Helper: Database card ko Blog Post object mein convert karna
const formatBlogPost = (item, index) => {
  return {
    id: item._id,
    img: item.imageUrl,
    date: formatShortDate(item.createdAt),
    comments: (index * 3 + 4) % 18, // Generate a natural looking comment count
    title: item.title || "Untitled Blog Post",
    excerpt: item.description ? item.description.slice(0, 85) + "..." : "No short excerpt provided for this post."
  };
};

const Blog = () => {
  const [posts, setPosts] = useState(fallbackPosts);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Dynamic Blog Posts
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Backend ko bola: "Sirf 'blog' category walay articles bhejo"
        const data = await fetchSections('blog');
        if (data && data.length > 0) {
          const formatted = data.map(formatBlogPost);
          setPosts(formatted);
        }
      } catch (err) {
        console.error("Blog live fetch failed, using fallback:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white text-center font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4 tracking-[0.2em] uppercase">
          Latest Posts
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto tracking-widest">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* STATE 1: LOADING SPINNER */}
        {loading && (
          <div className="py-12 mb-16 font-mono text-xs text-teal-600 animate-pulse">
            [ Syncing Latest Articles with MongoDB Atlas... ]
          </div>
        )}

        {/* STATE 2: 4-COLUMN DYNAMIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col text-center group">

              {/* Image with hover zoom */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-200 rounded-t">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Date / Comments Badge (Overlapping Image Boundary) */}
              <div className="relative z-10 flex justify-center -mt-7 mb-6">
                <div className="bg-teal-500 text-white font-mono text-[13px] md:text-[15px] font-bold py-3.5 px-8 flex items-center justify-center gap-6 shadow-md whitespace-nowrap tracking-wider rounded-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>

              {/* Content — Typewriter Typography Applied */}
              <div className="px-2 flex-1 flex flex-col items-center">
                <h3 className="font-mono text-slate-700 text-base md:text-[17px] leading-[1.8] tracking-[0.1em] group-hover:text-teal-500 transition-colors cursor-pointer mb-6 px-4 uppercase font-semibold">
                  {post.title}
                </h3>
                
                <hr className="border-gray-200 w-[90%] mb-6" />
                
                <p className="font-mono text-gray-400 text-sm leading-[2.2] tracking-[0.1em] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;