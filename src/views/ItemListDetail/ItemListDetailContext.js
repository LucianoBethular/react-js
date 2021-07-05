import React, {useEffect, useState, createContext, useContext} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'
import {Link, useParams} from 'react-router-dom';
import './ItemListDetail.css';

export const ItemListDetailContext = createContext();

export function ItemListDetailProvider(props) {
    const [detail, setDetail] = useState([ItemData]);
    const ID = ItemData.find(element => element.id )
    

    useEffect(() => {
        console.log(ID)
        setDetail([ID])
        
        
        
            
        
        }, [])

    return (
        <ItemListDetailContext.Provider value={[detail, setDetail]}>
        {props.children}
    </ItemListDetailContext.Provider>
    )
    }


