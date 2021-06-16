import React, { Component } from 'react'
import './ItemCount.css'
import { Button , Icon } from 'semantic-ui-react'

export class ItemCount extends Component {
    constructor(){
        super(); 
        this.state={
            count:0
        }
    };
    
contadorStock = (stock) => {
    
}

handleCounterUp = ()=> {
this.setState({count: this.state.count + 1})
}

handleCounterDown = ()=> {
    this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="counter-section">
                {this.state.count}
                <div className="masMenos">
                <Button.Group>
                    <Button onClick={this.handleCounterUp} color="blue">+</Button>
                    <Button onClick={this.handleCounterDown} color="red">−</Button>
                </Button.Group>
                </div>
                <Button  size="huge" animated='vertical' >
                <Button.Content hidden>Comprar</Button.Content>
                <Button.Content visible>
                <Icon name='shop' />
                </Button.Content>
                </Button>
            </div>
        )
    }
}

export default ItemCount
