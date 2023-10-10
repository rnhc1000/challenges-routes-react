import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import homeSvg from '../../assets/home-svgrepo-com 1.svg';

export default function Header() {

    return (

        <header className="header-container">

            <nav className="header-content-container header-container-text">
                <NavLink to="/home" className={({ isActive}) => isActive ? "nav-active" : "nav-normal"}>Início</NavLink >
                <NavLink  to='/products' className={({ isActive }) => isActive ? "nav-active" : "nav-normal"}>Produtos</NavLink >
                <NavLink  to='/about' className={({ isActive}) => isActive ? "nav-active" : "nav-normal"}>Sobre nós</NavLink >
            </nav>
            <Link to='/'>
                <div className="header-container-text"><img className="nav-img" src={homeSvg}></img></div>
            </Link>

        </header>

    );
}