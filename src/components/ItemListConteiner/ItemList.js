import React, { useEffect, useState } from 'react'
import {ItemData} from './ItemData'
import { Image, Item, Icon, Button, Label, Divider} from 'semantic-ui-react'
import './ItemListConteiner.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';


function ItemList() {
	const [items, setItems] = useState([]);
	// console.log('data', data);
	useEffect(() => {
            setTimeout(() => {
                setItems(ItemData);
                
            }, 2000);
		// setTimeout(() => {
		// }, 2000);
	}, []);

        return (
            <div>
        {items.map((item) => {
            return(
                <div className="listaItems">
    <Item.Group relaxed >
    <Item >
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
        <Item.Header> <Link  to={`/ItemDetail/${item.id}`} style={{color:"Teal", textDecoration:"none"}} >{item.name} </Link></Item.Header>
        <Item.Meta>
        <span className='price'>{item.price}</span>
        </Item.Meta>
        <Item.Description>{item.description}</Item.Description>
        <Item.Extra >
        
        <Label >Stock: {item.stock} </Label>
        </Item.Extra>
    </Item.Content>
    
    
    <ItemCount />

    </Item>
    
    </Item.Group>
    
                </div>
            );
        })}

            </div>
        )
    }


export default ItemList