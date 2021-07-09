import React, {useEffect, useState, createContext, useContext} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'
import {Link, useParams} from 'react-router-dom';
import './ItemListDetail.css';
import {CartContext} from '../../CartContext'

export const ItemListDetailContext = createContext();


export function ItemListDetailProvider(props, {id}) {
    const [items, setItems] = useState([ItemData]);;
    const item = items.filter((item) => item.id === id);
    

    return (
        <ItemListDetailContext.Provider value={[items, setItems]}>
        {props.children}
    </ItemListDetailContext.Provider>
    )
    }


