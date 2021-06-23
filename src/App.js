import React, { Component } from 'react';
import NaviBar from './components/NaviBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import home from './views/Home/Home'
import ItemListDetail from './views/ItemListDetail/ItemListDetail'
import Contact from './views/Contact/Contact'

class App extends Component { 
render (){
  return (
    <Router>
    <div className="app">
    <NaviBar /> 
    <Switch> 
    <Route path="./" exact component={home}/>
    <Route path="./ItemDetail/:id" component={ItemListDetail}/>
    <Route path="./Contacto" component={Contact}/>
    </Switch> 
    <div className="items">
    <ItemListConteiner />

    </div>
    </div>
    </Router>
  );
}
}

export default App;
