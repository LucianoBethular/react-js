import React  from 'react'
import { List, Segment , Button} from 'semantic-ui-react'
import count from '../../components/ItemListConteiner/ItemCount'

function Cart({}) {
    
    console.log({count})

    return (
        <div style={{display:"flex", flexDirection:"column" }}>
             <Segment >
    <List divided  relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Snickerdoodle</List.Header>
          Cantidad: {count}
        </List.Content>
      </List.Item>
      
    </List>
  </Segment>
  <Button color="teal" size="huge">Terminar la Compra</Button>
 <br />
  <Button color="teal" size="huge">Agregar mas productos</Button>
        </div>
    )
}


export default Cart
