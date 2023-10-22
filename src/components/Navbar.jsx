import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container ">
            <nav>
                <ul className="flex flex-row justify-around min-w-full">
                    <Link to="/">HOME</Link>
                    <Link to="/productos/acuaticos">Productos Actuaticos</Link>
                    <Link to="/productos/nieve">Productos de Nieve</Link>
                    <Link to="productos/montaña">Productos de montaña</Link>
                    <Link to="/carrito">Carrito</Link>
                    <Link to="/administrador">Admin</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
