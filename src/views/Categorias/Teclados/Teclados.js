import React from 'react'
import ItemList from '../../../components/ItemListConteiner/ItemList'
import {Link} from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

function Teclados() {
    return (
        <div>
            <h1 style={{textAlign:'left', color:"teal" , fontSize:"3rem"}}>Teclados</h1>
            <Divider clearing />
            <ItemList />
        </div>
    )
}

export default Teclados
