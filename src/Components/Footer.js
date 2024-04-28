import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

const Footer=()=>
{
    return(<>




<div >
<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Address' />
            <List link inverted>
              <p as='a'>Raja Bags, 1055, <br></br>
               Tiwari Lane, Main Road, <br></br>
                In front of First Lady Store,<br></br>
                 Nashik, Maharashtra <br></br>
                 422001</p>
              
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Policies' />
            <List link inverted>
              <List.Item as='a' href='/PriPolicy'>Privacy Policy</List.Item>
              <List.Item as='a' href='/TC'>Terms of Services</List.Item>
              <List.Item as='a' href='/RefundPolicy'>Return & Refund Policy</List.Item>
              
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='RAJA BAGS' />
            <p>
            Be hands-free, be fashionable! Carry it all in style!
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.jpg' />
        <List horizontal inverted divided link size='small'>
          
          <List.Item as='a' href='/ContactUs'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='/TC'>
            Terms of Services
          </List.Item>
          <List.Item as='a' href='/PriPolicy'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>


    </>)
}
export default Footer;