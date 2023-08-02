import './Notfound.css';
import Error404 from '../Imagenes/Error404.jpeg';
const Notfound=() => {
    return (
        <div className="Notfound">
            <header>
                <h1>ERROR 404</h1>
            <p>Página no encontrada</p>
            </header>
            <body>
                <img src={Error404} alt="Error 404" id="Error"/>
            </body>
        </div>
    )
}
export default Notfound;
