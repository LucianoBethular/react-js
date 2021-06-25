import React, { Component } from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './NaviBar'
import { Menu , Segment, Dropdown} from 'semantic-ui-react'

export default class NaviBar extends Component {

    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

        return (
            
<div className="naviBar">
<Segment inverted >
        <Menu inverted pointing secondary size="huge" >
        <Menu.Item>
        <CardWidget />
        
        </Menu.Item>
        <Menu.Item 
        name="Inicio"
        active={activeItem === 'Inicio'}
        onClick={this.handleItemClick}>
          <Link  to="/" className="link">Inicio</Link>
            </Menu.Item>
          <Menu.Menu inverted>
          <Dropdown item text='Categorias' >
            <Dropdown.Menu color="black">
              <Dropdown.Item><Link  to="/Teclados" className="link" >Teclados</Link></Dropdown.Item>
              <Dropdown.Item><Link  to="/Auriculares" className="link" >Auriculares</Link></Dropdown.Item>
              <Dropdown.Item><Link  to="/Mouses" className="link" >Mouse</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>

          <Menu.Item
          name="Contacto"
          active={activeItem === 'Contacto'}
          onClick={this.handleItemClick}>
            <Link to="/Contacto">Contacto</Link>
            
            </Menu.Item>

        </Menu>
      </Segment>
</div>

        )
    } 
    }
;
