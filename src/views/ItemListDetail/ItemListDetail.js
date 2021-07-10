import React, {useEffect, useState} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'
import { Image, Item, Icon, Button, Label} from 'semantic-ui-react'
import ItemCount from '../../components/ItemListConteiner/ItemCount'
import {Link, useParams} from 'react-router-dom';
import './ItemListDetail.css';
import {db} from '../../firebase'


function ItemListDetail() {
    const detalle = useParams()
    console.log(detalle)
    const [detail, setDetail] = useState([]);
    

    useEffect(() => {
        db.collection('ItemData').onSnapshot((querySnapshot) => { 
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                //console.log(doc.id);
                docs.push({...doc.data(), id: doc.id});
                const ID = docs.forEach(doc => doc.id === detalle)
                console.log(ID)
            });
            ;
            setDetail(docs);
        })
        
        }, [detalle])

    return (
        <div >
        <h1 >Detalle de Producto</h1>
        {detail.map((item) => {
    return (
        <div >
            <Item.Group relaxed >
        <Item key={item.id}>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
        <Item.Header> {item.name} </Item.Header>
        <Item.Meta>
        <span className='price'>{item.price}</span>
        </Item.Meta>
        <Item.Description>{item.description}</Item.Description>
        <Item.Extra >
        
        <Label >Stock: {item.stock} </Label>
        </Item.Extra>
    </Item.Content>
    
    

    </Item>
    </Item.Group>
    <br />

    
        </div>
    )
})}
<div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
<ItemCount data={detalle}/>
</div>
    </div>
    )
}

export default ItemListDetail
