import React, {useState, useEffect } from 'react'
import './ItemCount.css'
import { Button , Icon , Card , } from 'semantic-ui-react'
import { ItemData } from './ItemData';
import {Link} from 'react-router-dom';

function ItemCount() {

    const [count, setCount] = useState(0);
    const stock = ItemData.find(element => element.stock)
     

    function handleCounterUp (){
        
        setCount(count + 1) };
        console.log(count)
        
        function handleCounterDown (){
            setCount(count - 1) }
        



        return (
            <div>
                <div className="counter-section">
                <Card>
    <Card.Content>
        <Card.Header >{count}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <div >
        <Button.Group>
                    <Button onClick={handleCounterDown} color="red">−</Button>
                    <Button onClick={handleCounterUp}  color="blue">+</Button>
                </Button.Group>
                <Button  size="normal" animated='vertical' >
                <Button.Content hidden><Link  to="/Cart" className="link" style={{color:"Teal", textDecoration:"none"}}>Comprar</Link></Button.Content>
                <Button.Content visible>
                <Icon name='shop' />
                </Button.Content>
                </Button>
        <div className="masMenos">
        
                </div>
        </div>
    </Card.Content>
    </Card>

                </div>
            </div>
        )
    }


export default ItemCount

