import './NavBar.css';
import logo from '../../Logo1.jpeg';

const NavBar=() => {
    return (
        <nav> 
            
            <ul>
            <li>
            <img src={logo} className="NavBar-logo" alt="logo" id="logo" />
                </li>          
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