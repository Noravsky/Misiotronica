import './Home.css';
import Vendedores from '../Imagenes/grupo-de-vendedores.jpg';
import WhatsApp from '../Imagenes/WhatsApp.png';

const Home=() => {
    return (
        <div className="Home">
            <header>
            <p>Te invitamos a recorrer nuestra tienda virtual</p>
            </header>
            <body>
              <img src={Vendedores} alt="vendedores" id="Vendedores" />
            </body>
            <footer>
             <img src={WhatsApp} alt="WhatsApp" id="WhatsApp" />
             <br/>
            <a href="https://wa.me/223332233">¡Contactanos!</a>
            </footer>
        </div>
    )
}
export default Home;
