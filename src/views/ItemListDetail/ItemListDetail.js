import React, {useEffect, useState} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'
import { Image, Item, Icon, Button, Label} from 'semantic-ui-react'
import ItemCount from '../../components/ItemListConteiner/ItemCount'
import {Link} from 'react-router-dom';

function ItemListDetail({match}) {
    const detalle = match.params.id
    console.log(match)
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        
        setDetail(ItemData)
        
        
    }, [])

    return (
        <div>
        <h1>Detalle de Producto</h1>
        {detail.map((id) => {
    return (
        <div>
            <Item.Group relaxed >
        <Item key={id}>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
        <Item.Header> {id.name} </Item.Header>
        <Item.Meta>
        <span className='price'>{id.price}</span>
        </Item.Meta>
        <Item.Description>{id.description}</Item.Description>
        <Item.Extra >
        
        <Label >Stock: {id.stock} </Label>
        </Item.Extra>
    </Item.Content>
    
    <ItemCount />

    </Item>
    </Item.Group>
        </div>
    )
})}
    </div>
    )
}

export default ItemListDetail
