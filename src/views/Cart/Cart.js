import React, {useContext, useParams, useEffect}  from 'react'
import { List, Segment , Button} from 'semantic-ui-react'
import { CartContext } from '../../CartContext'
import { ItemData } from '../../components/ItemListConteiner/ItemData'


function Cart({match}) {
  
  
  const [carts, setCarts] = useContext(CartContext);
  const ID = ItemData.find(element => element.id )
console.log(match)
  useEffect(() => {
      console.log(ID)
      setCarts([ID])
      
      
      
          
      
      }, [])
  

    return (
      
        <div style={{display:"flex", flexDirection:"column" }}>
          
          {carts.map((cart) => {
            return (
            <Segment>
        
    <List divided  relaxed>
    
      <List.Item>
      
        <List.Content>
          <List.Header>{cart.name}</List.Header>
          Cantidad: {cart.price}
        </List.Content>
         
      </List.Item>
  
     
      
    </List>
      
      
    </Segment>
 );
})}

  <Button color="teal" size="huge">Terminar la Compra</Button>
 <br />
  <Button color="teal" size="huge">Agregar mas productos</Button>

        </div>
      
    )
  
}


export default Cart
