import React, { useContext } from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './NaviBar'
import { Menu , Segment, Dropdown, Input} from 'semantic-ui-react'
import {CartContext} from '../CartContext'


export default function NaviBar() {
  const [carts, setCarts] = useContext(CartContext)

        return (
            
<div className="naviBar">
<Segment inverted >
        <Menu inverted pointing secondary size="huge" >
        <Menu.Item>
        <CardWidget />
        
        </Menu.Item>
        <Menu.Item 
        name="Inicio"
        >
          <Link  to="/" className="link" style={{textDecoration:"none"}}>Inicio</Link>
            </Menu.Item>
          <Menu.Menu inverted>
          <Dropdown item text='Categorias' >
            <Dropdown.Menu color="black">
              <Dropdown.Item><Link  to="/Teclados" className="link" style={{color:"Teal", textDecoration:"none"}}>Teclados</Link></Dropdown.Item>
              <Dropdown.Item><Link  to="/Auriculares" className="link" style={{color:"Teal", textDecoration:"none"}}>Auriculares</Link></Dropdown.Item>
              <Dropdown.Item><Link  to="/Mouses" className="link" style={{color:"Teal", textDecoration:"none"}}>Mouse</Link></Dropdown.Item>
            </Dropdown.Menu>
            
          </Dropdown>
          </Menu.Menu>

          <Menu.Item
          name="Contacto"
          >
            <Link to="/Contacto" style={{textDecoration:"none"}}>Contacto</Link>
            
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Buscar...' />
            </Menu.Item>
            <Menu.Item>
            <Link  to="/Cart" className="link" style={{textDecoration:"none",  }}>Carrito: {carts.length} Items </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
</div>

        )
    } 
    
;
