import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen text-slate-800 bg-white">

      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-white text-center py-6 mt-10">
        <p className="font-mono text-sm">© 2026 ONEPAGER. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Layout;