import logo from './Logo1.jpeg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>BIENVENIDO A MISIOTRÓNICA</h1>
        <p>Su tienda de componentes electrónicos
        </p>
        <Card
        image='Images/Auriculares.jpg'
        title='Auriculares'
        description='Todos los modelos'
        />
        <Card
        image='./Images/Cables.jpg'
        title='Cables'
        description='Por metro y por bobina'
        />
        <Card
        image='./Images/Circuitos.jpg'
        title='Circuitos'
        description='A pedido'
        />
         <Card
        image='./Images/Control Remoto.jpg'
        title='Controles Remotos'
        description='Todas las marcas'
        />
        <Card
        image='./Images/Microfonos2.jpg'
        title='Micrófonos'
        description='Te asesoramos para elegir el mejor'
        />
        <Card
        image='./Images/Placas.jpg'
        title='Placas'
        description='Consultar disponibilidad'
        />
      </header>
    </div>
  );
}

export default App;
