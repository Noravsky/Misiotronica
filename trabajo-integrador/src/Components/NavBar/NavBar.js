import './NavBar.css';

const NavBar=() => {
    return (
        <nav>
            <ul>
            <li>
                    <a href='/'>INICIO </a>
                </li>
                <li>
                    <a href='/About'>ACERCA</a>
                </li>
                <li>
                    <a href='/Contact'>CONTACTO</a>
                </li>
                <li>
                    <a href='/tienda'>TIENDA</a>
                </li>
                </ul>
        </nav>
    );
};
export default NavBar;