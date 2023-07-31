import './Store.css';
import Card from '.././Card';

const Store=() => {
    return (
        <div className="Store">
       <header> <h1>Tienda</h1>
        <p>Nuestros productos</p>
        </header>
        <body className="Store-body">
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
        </body>
        </div>
    )
}
export default Store; 