import React from 'react'
import { Image, Item, Icon, Button, Label} from 'semantic-ui-react'
import './ItemListConteiner.css'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemListConteiner = ({name, price, stock, description, counter}) => (
    <div className="listaItems">
  <Item.Group relaxed >
    <Item >
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>
        <span className='price'>{price}</span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra >
        
        <Label >Stock: {stock} </Label>
        </Item.Extra>
    </Item.Content>
    
    {counter}

    </Item>
    </Item.Group>
    </div>
)

export default ItemListConteiner
