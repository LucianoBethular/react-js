import React, { Component } from 'react';
import './ItemListConteiner.css';
import { Message, Icon } from 'semantic-ui-react'

export default class ItemListConteiner extends Component {
    render() {
        return (
            <div id="sectionItems">
                <h1>Lista de perifericos para pc</h1>
                <Message icon color="red" size="massive">
                    <Icon name='circle notched' loading />
                    <Message.Content>
                    <Message.Header>La pagina esta en mantenimiento</Message.Header>
                    Por favor aguarde para ver el contenido de esta seccion.
                    </Message.Content>
                </Message>
)
            </div>
        )
    }
}
