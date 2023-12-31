import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/header/Navbar';

const Layout = () => {
    return (
        <div>
            <header className="h-24 bg-colorOscuro overflow-visible sticky top-0 z-50 shadow-md shadow-black/50">
                <Navbar />
            </header>

            <main className="min-h-screen">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
