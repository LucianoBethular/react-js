import React, {useContext, useParams, useEffect, useState}  from 'react'
import { List, Segment , Button, Icon} from 'semantic-ui-react'
import { CartContext } from '../../CartContext'
import { ItemData } from '../../components/ItemListConteiner/ItemData'


function Cart({count} , {detail} ) {
  
  const [carts, setCarts] = useContext(CartContext)
  

  const removeItem = (id, detail ) => {
    
    const carrito = carts.filter((detail) => detail.id !== id);
    
    setCarts(carrito);
    
  };

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
  <List.Content floated='right' >
    <Button.Group>
    <Button positive size='big' icon='plus' ></Button>
    
    <Button negative size='big' icon='trash'onClick={() => removeItem()}></Button>
    
  </Button.Group>
  </List.Content>
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
