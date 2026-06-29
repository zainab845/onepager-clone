import { useState, useEffect } from 'react';
// 🎯 Hamari nayi Service Layer se imports
import { fetchSections, createSection, removeSection } from '../services/api';

const AdminDashboard = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    sectionType: 'services',
    title: '',
    description: '',
    image: null
  });

  // 1. Backend se saare cards pull karna
  const loadAllSections = async () => {
    try {
      const data = await fetchSections();
      setSections(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    loadAllSections();
  }, []);

  // 2. Naya Section Publish (POST) karne ka logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.image) {
      alert("⚠️ Please upload a display image first!");
      return;
    }

    setLoading(true);

    const payload = new FormData();
    payload.append('sectionType', formData.sectionType);
    payload.append('title', formData.title);
    payload.append('description', formData.description);
    payload.append('image', formData.image);

    try {
      await createSection(payload); // <-- api.js ka helper call hua
      alert("✅ Section Published Successfully!");
      
      // State aur DOM form ko clear karna
      setFormData({ sectionType: 'services', title: '', description: '', image: null });
      e.target.reset(); 
      
      loadAllSections(); // Neeche list ko turant refresh karo
    } catch (err) {
      console.error(err);
      alert("❌ Error publishing section!");
    } finally {
      setLoading(false);
    }
  };

  // 3. Card Delete karne ka logic
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this card permanently?")) return;
    
    try {
      await removeSection(id);
      loadAllSections(); // Refresh list
    } catch (err) {
      alert("❌ Could not delete item!");
    }
  };

  const handleReset = () => {
    setFormData({ sectionType: 'services', title: '', description: '', image: null });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 pt-24 font-sans select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="bg-slate-800 p-6 rounded-t-xl border-b-4 border-teal-500 shadow-md">
          <h1 className="text-2xl font-mono tracking-widest text-white uppercase font-bold flex items-center gap-3">
            <span className="text-teal-400">❁</span> CONTENT MANAGEMENT DASHBOARD
          </h1>
          <p className="text-gray-400 font-mono text-xs mt-1 tracking-wider">
            ADD, EDIT OR DELETE WEBSITE SECTIONS DYNAMICALLY
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-lg border border-slate-200 mb-12">
          
          {/* ========================================================= */}
          {/* BLOCK 1: INPUT FIELDS BLOCK (Strictly Alag Block) */}
          {/* ========================================================= */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6 space-y-5">
            <h2 className="font-mono text-sm font-bold text-teal-600 tracking-wider uppercase border-b pb-2">
              Block 1: Section Data Inputs
            </h2>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-2">Select Target Page:</label>
              <select 
                className="w-full p-3 border rounded font-mono text-sm bg-white focus:outline-teal-500 transition cursor-pointer"
                value={formData.sectionType}
                onChange={(e) => setFormData({...formData, sectionType: e.target.value})}
              >
                <option value="hero">Hero Slider</option>
                <option value="services">Services Section</option>
                <option value="portfolio">Portfolio Section</option>
                <option value="team">Team Section</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-2">Card Title:</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Modern Cloud Architect"
                className="w-full p-3 border rounded text-sm focus:outline-teal-500 transition"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-2">Description:</label>
              <textarea 
                rows="3" 
                required
                placeholder="Enter short description..."
                className="w-full p-3 border rounded text-sm focus:outline-teal-500 transition"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-2">Upload Display Image:</label>
              <input 
                type="file" 
                required
                accept="image/*"
                className="w-full p-2 border bg-white rounded text-xs cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-teal-500 file:text-white file:font-mono file:text-xs hover:file:bg-teal-600 transition"
                onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BLOCK 2: ACTION BUTTONS BLOCK (Strictly Alag Block) */}
          {/* ========================================================= */}
          <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-end gap-4">
            <span className="font-mono text-xs text-gray-400 mr-auto hidden sm:block">
              * Click publish to sync with MongoDB
            </span>
            
            <button 
              type="reset"
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-600 hover:bg-slate-500 text-white font-mono text-xs tracking-widest uppercase rounded transition cursor-pointer"
            >
              Reset Form
            </button>

            <button 
              type="submit" 
              disabled={loading}
              className="px-8 py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-mono text-xs font-bold tracking-widest uppercase rounded transition shadow-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {loading ? "Uploading to Cloud..." : "+ Publish Section"}
            </button>
          </div>

        </form>

        {/* ========================================================= */}
        {/* LIVE PREVIEW / DATABASE ITEMS LIST */}
        {/* ========================================================= */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <h2 className="text-lg font-mono font-bold text-slate-800 tracking-wider uppercase border-b pb-4 mb-6 flex justify-between items-center">
            <span>Live Items in Database</span>
            <span className="text-xs font-normal text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{sections.length} Total</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map(item => (
              <div key={item._id} className="flex gap-4 border p-4 rounded-lg bg-slate-50 relative group hover:shadow-md transition">
                <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded shadow flex-shrink-0 bg-slate-200" />
                <div className="flex-1 min-w-0 pr-6">
                  <span className="px-2 py-0.5 bg-teal-100 text-teal-800 font-mono text-[10px] uppercase font-bold rounded">
                    {item.sectionType}
                  </span>
                  <h3 className="font-bold text-slate-800 text-sm mt-1.5 truncate">{item.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-2">{item.description}</p>
                </div>

                <button 
                  onClick={() => handleDelete(item._id)}
                  className="absolute top-3 right-3 p-1.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded transition shadow-sm cursor-pointer"
                  title="Delete Item"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            ))}

            {sections.length === 0 && (
              <div className="col-span-2 text-center py-12 border-2 border-dashed rounded-lg bg-slate-50">
                <p className="font-mono text-xs text-gray-400">Database is completely empty. Add your first card above!</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;