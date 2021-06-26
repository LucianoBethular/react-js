import React from 'react';
import { Icon } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../components/ItemListConteiner/ItemListConteiner.css'


function CardWidget() {
    return (
        <div className="icono">
            <Link  to="/" className="link" color="teal" style={{color:"Teal", textDecoration:"none"}}>BB-Techno</Link>
            <br />
            
            <Link  to="/" className="link" color="teal"><Icon color="teal" name='shopping cart' size='big' /></Link>
        </div>
    )
}

export default CardWidget
