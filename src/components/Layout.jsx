import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen text-slate-800 bg-white">
      {/* Navbar yahan upar hona zaroori hai */}
      <Navbar />
      
      {/* Agar ye Outlet nahi hoga, to Hero ya koi bhi page screen par nahi dikhega */}
      <main>
        <Outlet />
      </main>

      {/* Footer yahan neeche lagayein taake har page par dikhe */}
      <footer className="bg-slate-900 text-white text-center py-6 mt-10">
        <p className="font-mono text-sm">© 2026 ONEPAGER. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Layout;