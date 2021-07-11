import React, {useEffect, useState, createContext, useContext} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'
import {Link, useParams} from 'react-router-dom';
import './ItemListDetail.css';
import {CartContext} from '../../CartContext'
import { db } from '../../firebase';

export const ItemListDetailContext = createContext();


export function ItemListDetailProvider(props) {
    

    const [detail, setDetail] = useState([]);;
    useEffect(() => {
        db.collection('ItemData').get().then((querySnapshot, ID) => { 
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                //console.log(doc.id);
                //console.log(`${doc.id} === ${doc.data().name}` )
                if (doc.id) {
                docs.push(doc.data());
                
                }
                
            });
            ;
            setDetail(docs);
        })
        
        }, [])

    return (
        <ItemListDetailContext.Provider value={[detail, setDetail]}>
        {props.children}
    </ItemListDetailContext.Provider>
    )
    }


