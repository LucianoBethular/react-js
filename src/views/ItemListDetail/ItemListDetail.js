import React, {useEffect, useState} from 'react'
import {ItemData} from '../../components/ItemListConteiner/ItemData'


function ItemListDetail({match}) {

    const [detail, setDetail] = useState([ItemData]);

    useEffect(() => {
        setDetail(ItemData.id)
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default ItemListDetail
