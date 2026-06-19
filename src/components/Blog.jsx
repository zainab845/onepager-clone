const Blog = () => {
 
  const blogPosts = [1, 2, 3, 4];

  return (
    <section id="blog" className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* section headers */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4 tracking-wider">
          LATEST POSTS
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* image Placeholder */}
              <div className="aspect-[4/3] bg-slate-200 w-full flex items-center justify-center">
                <span className="font-mono text-slate-500 text-sm">Blog Image {post}</span>
              </div>

              <div className="flex justify-center -mt-5 z-10">
                <div className="bg-teal-500 text-white font-mono text-xs font-bold py-2 px-6 flex items-center gap-3 shadow-sm">
                  <span>🕒 19 oct</span>
                  <span>💬 10</span>
                </div>
              </div>

             
              <div className="pt-6 pb-4 px-2">
                <h3 className="font-mono text-slate-600 leading-relaxed group-hover:text-teal-500 transition-colors cursor-pointer">
                  Mobile Friendly Comments Dashboardnow launched!
                </h3>
              </div>

              {/*divider Line */}
              <hr className="border-slate-200 mx-8 my-2" />

              <div className="p-4">
                <p className="font-mono text-slate-400 text-xs leading-loose">
                  Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
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