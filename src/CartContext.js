import React, {createContext, useState} from 'react'
import { ItemData } from './components/ItemListConteiner/ItemData';

export const CartContext =createContext();

export const CartProvider = (props) => {

    const [carts, setCarts] = useState([ItemData]);

    return(
    <CartContext.Provider value={[carts, setCarts]}>{props.children}</CartContext.Provider>
    )
}




