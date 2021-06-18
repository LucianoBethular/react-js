import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ItemCount from './components/ItemListConteiner/ItemCount'
import ItemList from './components/ItemListConteiner/ItemList'



class App extends Component { 
render (){
  return (
    <div className="app">
    <NavBar />
    <div className="items">
    <ItemListConteiner />

    </div>
    </div>
  );
}
}

export default App;
