const Blog = () => {
  // Updated array to include specific image URLs for each post
  const blogPosts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/vector-1738590593450-647695dbf9d0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* section headers */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4 tracking-wider uppercase">
          Latest Posts
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col group">
              
              {/*hover Zoom */}
              <div className="aspect-[4/3] bg-slate-200 w-full flex items-center justify-center overflow-hidden">
                <img 
                  src={post.img} 
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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