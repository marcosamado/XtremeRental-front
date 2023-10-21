import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
