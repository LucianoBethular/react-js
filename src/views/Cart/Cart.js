import React, {useContext, useParams, useEffect, useState}  from 'react'
import { List, Segment , Button} from 'semantic-ui-react'
import { CartContext } from '../../CartContext'
import { ItemData } from '../../components/ItemListConteiner/ItemData'


function Cart({count}) {
  
  const [carts, setCarts] = useContext(CartContext)

  useEffect(() => {

  }, []);

  
    return (
      
        <div style={{display:"flex", flexDirection:"column" }}>
          
            <div style={{display:"flex", flexDirection:"column" }}>
 
        
        <Segment>
        {carts.map((item) => {
          return(
<List divided  relaxed size='big'>

  <List.Item >
  
    <List.Content>
      <List.Header>Producto: {item.name} </List.Header>
      Cantidad: {count}
      <br />
      Precio: {item.price}
    </List.Content>
    
  </List.Item>


  
</List>
  )} )  } 
  
</Segment>

<h2>Total:</h2>

<Button color="teal" size="huge">Terminar la Compra</Button>
<br />
<Button color="teal" size="huge">Agregar mas productos</Button>


            </div>
           
        
        </div>
      
    )

}


export default Cart
