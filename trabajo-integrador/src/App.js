import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Store from './Components/Store/Store';
import Notfound from './Components/Notfound/Notfound';
import NavBar from './Components/NavBar/NavBar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const rutas=createBrowserRouter(
  [
   {path:'/', element:<Home />},
   {path:'/About', element:<About />},
   {path:'/Contact', element:<Contact />},
   {path:'/tienda', element:<Store />},
   {path:'/*', element:<Notfound />},
  ] 
);

function App() {
  return (
     <div className="App"> 
      <nav className='App-nav'>
     <NavBar /> 
     <header className="App-header">  
        <p>MISIOTRONICA: TU PROVEEDOR DE INSUMOS ELECTRÓNICOS
        </p>
        </header>
     <RouterProvider router={rutas} /> 
        </nav>
        <footer className='App-footer'>
          <p>Las imágenes son a modo ilustrativo.
            <br/>
            Los precios de la tienda son válidos también para compra
            en nuestras sucursales.
          </p>
        </footer>
    </div>
  
  );
}

export default App;
