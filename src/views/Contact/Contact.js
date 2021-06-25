import React from 'react'
import { Button, Divider, Form, Grid, Segment, List } from 'semantic-ui-react'


function Contact() {
    return (
        <div>
        <h1 style={{textAlign:'center', color:"teal", textDecoration:"underline"}}>Contacto</h1>
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable padded="horizontally" >
      <Grid.Column verticalAlign="middle">
      <List animated>
    <List.Item>
      <List.Icon name='users' verticalAlign="center"/>
      <List.Content>BB-Techno</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Bahia Blanca, Buenos Aires, Argentina</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:bbtechno@gmail.com'>bbtechno@gmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.bb-techno.com'>bb-techno.com</a>
      </List.Content>
    </List.Item>
  </List>
      </Grid.Column>
      
      <Grid.Column verticalAlign='center' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199222.69753532365!2d-62.39645670692251!3d-38.72114597412733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1624652679150!5m2!1ses-419!2sar" style={{border:0}}></iframe>
      </Grid.Column>
    </Grid>
    <Divider  vertical />
    
  </Segment>
        </div>
    )
}

export default Contact
