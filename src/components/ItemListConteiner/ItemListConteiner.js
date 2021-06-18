import React from 'react'
import { Image, Item, Icon, Button, Label} from 'semantic-ui-react'
import './ItemListConteiner.css'
import ItemList from './ItemList'



const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemListConteiner = ({name, price, stock, description, counter}) => (
    <div className="listaItems">
<ItemList />
  
    </div>
)

export default ItemListConteiner
