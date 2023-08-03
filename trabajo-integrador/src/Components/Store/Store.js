import './Store.css';
import Card from '.././Card';
import SearchBar from "../SearchBar/SearchBar.js";
import SideBarMenu from "../SideBarMenu/SideBarMenu.js";
import React, {useState} from "react";

const Store=() => {
  const [searchQuery, setSearchQuery] = useState(" ");
  /*Me queda pendiente hacer funcional la búsqueda, no logré aún el resultado que quiero*/


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

    return ( 
        <div className="Store">

       <header> <h1>Tienda</h1>
        <p>Nuestros productos</p>
        <SearchBar onSearch={handleSearch} />
         </header>

        <aside className='Store-aside'>
          <p>
          </p>
      <SideBarMenu />
      <div>
      
    </div>
        </aside>   

        <body className="Store-body">
        <Card
        image='./Images/Auriculares.jpg'
        title='Auriculares'
        description='$500'
        />
        <Card
        image='./Images/Cables.jpg'
        title='Cables'
        description='$100'
        />
        <Card
        image='./Images/Circuitos.jpg'
        title='Circuitos'
        description='$700'
        />
         <Card
        image='./Images/Control Remoto.jpg'
        title='Controles Remotos'
        description='$300'
        />
        <Card
        image='./Images/Microfonos2.jpg'
        title='Micrófonos'
        description='$600'
        />
        <Card
        image='./Images/Placas.jpg'
        title='Placas'
        description='$1000'
        />
        </body>

        </div>
    )
}
export default Store; 