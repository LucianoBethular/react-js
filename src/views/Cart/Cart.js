import React, {useContext, useParams, useEffect}  from 'react'
import { List, Segment , Button} from 'semantic-ui-react'
import { CartContext } from '../../CartContext'
import { ItemData } from '../../components/ItemListConteiner/ItemData'


function Cart() {
  
    return (
      
        <div style={{display:"flex", flexDirection:"column" }}>
          
            <Segment>
        
    <List divided  relaxed>
    
      <List.Item>
      
        <List.Content>
          <List.Header>Nombre: </List.Header>
          Cantidad: 
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
