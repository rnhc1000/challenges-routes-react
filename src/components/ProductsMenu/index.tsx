import { NavLink } from 'react-router-dom';
import './styles.css'

export default function ProductsMenu() {
    return (
        <section>
            <div className="container-products-menu">
                <nav className="nav-products">
                    <NavLink to="/products/computers" className={({ isActive }) => isActive ? "nav-active" : "nav-normal"}> Computadores</NavLink>
                    <NavLink to="/products/electronics" className={({ isActive }) => isActive ? "nav-active" : "nav-normal"}>Eletrônicos</NavLink>
                    <NavLink to="/products/books" className={({ isActive }) => isActive ? "nav-active" : "nav-normal"}>Livros</NavLink>
                </nav>
            </div>

        </section>

    );
}