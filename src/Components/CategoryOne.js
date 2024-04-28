import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import HomeVideo from './HomeVideo';
import MidCategory from './MidCategory';

const CategoryOne=({title,id})=>
{



    return(<>
    
    <Card>
    <Image src='../b1.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Skybags Tekie X 02{title}</Card.Header>
      <Card.Meta>Only few items left!!! {id}</Card.Meta>
      <Card.Description>
      Skybags Tekie X 02 18 cms Turquoise Laptop Backpack.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a style={{color: 'blue'}} href='/POne'>
        <Icon name='rupee sign' />
        2,499 /-      Buy Now
      </a>
    </Card.Content>
  </Card>


  <Card>
    <Image src='../b2.jpeg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Purse</Card.Header>
      <Card.Meta>Only few items left!!!</Card.Meta>
      <Card.Description>
      Line Old Style Pattern Women Fashion Handbags
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a style={{color: 'blue'}} href='/'>
        <Icon name='rupee sign' />
        1,199 /-      Buy Now
      </a>
    </Card.Content>
  </Card>



  
    
    
    
    
    
    
    </>)
}
export default CategoryOne;