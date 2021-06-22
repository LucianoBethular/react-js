import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css';
import 'semantic-ui-css/semantic.min.css';



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
