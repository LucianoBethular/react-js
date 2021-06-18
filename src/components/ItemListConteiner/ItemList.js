import React, { Component } from 'react'
import {ItemData} from './ItemData'
import { Image, Item, Icon, Button, Label} from 'semantic-ui-react'
import './ItemListConteiner.css'
import ItemCount from './ItemCount'



export class ItemList extends Component {
    constructor() {
        super();

        this.state = {
            items: []
        }
    }

    componentDidMount () {
        this.setState ({items: ItemData});
    }

    render() {
        return (

            <div>
        {this.state.items.map((item) => {
            return(
                <div className="listaItems">

            
<Item.Group relaxed >
    <Item >
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
        <Item.Header>{item.name}</Item.Header>
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
}

export default ItemList