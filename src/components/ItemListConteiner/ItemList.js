import React, { useEffect, useState , useContext} from 'react'
import {  Item,  Label, } from 'semantic-ui-react'
import './ItemListConteiner.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext'
import { db } from '../../firebase'

function ItemList() {
    const [carts, setCarts] = useContext(CartContext);
	const [items, setItems] = useState([]);
	// console.log('data', data);
	useEffect(() => {
        
        db.collection('ItemData').onSnapshot((querySnapshot) => { 
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                //console.log(doc.id);
                docs.push({...doc.data(), id: doc.id});
                //console.log(docs)
            });
            setItems(docs);
        })

	}, []);

        return (
            <div>
        {items.map((item) => {
            return(
                <div className="listaItems" key={Item.id}>
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
    
    
    <ItemCount
    key={item.id}
    item={item}
    carts={carts}
    setCarts={setCarts}
    items={items}

    
    />

    </Item>
    
    </Item.Group>
    
                </div>
            );
        })}

            </div>
        )
    }


export default ItemList