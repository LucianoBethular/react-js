import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ItemCount from './components/ItemListConteiner/ItemCount'




class App extends Component { 
render (){
  return (
    <div className="app">
    <NavBar />
    <div className="items">
    <ItemListConteiner 
    name="Hyperx FPS Pro"
    price="$8000"
    description="El teclado para juegos mecánico HyperX™ Alloy FPS cuenta con un diseño compacto y minimalista que resulta ideal para tus partidas FPS. Su diseño 
    compacto maximiza el espacio del escritorio para el movimiento del ratón 
    durante partidas FPS mientras mantienes todas las funciones y una fácil 
    portabilidad para jugar de un sitio a otro."
    stock="0"
    counter={<ItemCount />}/>
        <ItemListConteiner 
    name="HyperX Alloy Origins Core"
    price="$10000"
    description="El HyperX Alloy Origins™ Core es un teclado tenkeyless ultra compacto y robusto que cuenta con interruptores mecánicos diseñados para brindarles a los gamers la mejor combinación de estilo, rendimiento y confiabilidad"
    stock="3"
    counter={<ItemCount />}/> 
    <ItemListConteiner 
    name="Hyperx Alloy Core"
    price="$5500"
    description="Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo."
    stock="10"
    counter={<ItemCount />} />
    </div>
    </div>
  );
}
}

export default App;
