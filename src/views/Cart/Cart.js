import React, {useContext, useParams, useEffect, useState}  from 'react'
import { List, Segment , Button} from 'semantic-ui-react'
import { CartContext } from '../../CartContext'
import { ItemData } from '../../components/ItemListConteiner/ItemData'


function Cart() {
  
  const [carts, setCarts] = useState([false])

  useEffect(() => {

  }, []);

  
    return (
      
        <div style={{display:"flex", flexDirection:"column" }}>
        {carts.length === 0 ?  
            <Segment>
        
    <List divided  relaxed>
    
      <List.Item>
      
        <List.Content>
          <List.Header>Producto: </List.Header>
          Cantidad: 
          <br />
          Precio:
        </List.Content>
        
      </List.Item>
  
    
      
    </List>
      
      
    </Segment>
: <h2>No hay productos en el carrito</h2>}
    <h2>Total:</h2>

  <Button color="teal" size="huge">Terminar la Compra</Button>
 <br />
  <Button color="teal" size="huge">Agregar mas productos</Button>

        </div>
      
    )

}


export default Cart
