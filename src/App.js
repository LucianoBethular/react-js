import React, { Component } from 'react';
import { CartProvider } from './CartContext';
import NaviBar from './components/NaviBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemListDetail from './views/ItemListDetail/ItemListDetail';
import Contact from './views/Contact/Contact';
import Teclados from './views/Categorias/Teclados/Teclados';
import Mouses from './views/Categorias/Mouses/Mouses';
import Auriculares from './views/Categorias/Auriculares/Auriculares';
import Cart from './views/Cart/Cart';


class App extends Component { 
render (){
  return (
    <CartProvider>
    <Router>
    <div className="app">
    <NaviBar /> 
    <Switch> 
    <Route path="/" exact component={ItemListConteiner}/>
    <Route path="/ItemDetail/:id" component={ItemListDetail}/>
    <Route path="/Contacto" component={Contact}/>
    <Route path="/Teclados" component={Teclados}/>
    <Route path="/Auriculares" component={Auriculares}/>
    <Route path="/Mouses" component={Mouses}/>
    <Route path="/Cart/" component={Cart}/>
    </Switch> 
    <div className="items">
    

    </div>
    </div>
    </Router>
    </CartProvider>
  );
}
}

export default App;
