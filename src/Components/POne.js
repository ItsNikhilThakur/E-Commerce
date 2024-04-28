import React from 'react'
import { Message } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

import './POne.css'

const src = '../b1.jpg'
const POne = () => {
  
  
  return(
<div>
<div className='ClgBag'>
<Header as='h3' dividing>
    BAG
  </Header>
  </div>
<div className='img'>
  <br></br>
  <h3>
  <Image src={src} size='small' floated='left' />
  
  <div className='m1'>
  <Message>
    <br></br>
    <Message.Header>description</Message.Header>
    <Message.List>
      <Message.Item>Life opens up a whole new world of possibilities & Opportunities for the College Student.
         The drive for a new career path and freedom to socialise brings with it new motivations. 
         </Message.Item>
         <Message.Item>The College range of Backpacks from Skybags comes with dollops of contemporary styling and attractive 
         features to complement the footloose and carefree mindset of the young adult</Message.Item>
    </Message.List>
  </Message>
  </div>
  <div className='m2'>
  <Message>
  <br></br>
    <Message.Header>FEATURES</Message.Header>
    <Message.List>
      <Message.Item>Brand - Skybags </Message.Item>
      <Message.Item>Style Name - Backpacks
      <Message.Item>Closure Type - Zip</Message.Item>
      <Message.Item>Gender - Unisex</Message.Item>
      <Message.Item>Material - Polyester</Message.Item> 
      <Message.Item>Warranty Duration - 12 Monthst </Message.Item>
      <Message.Item>Capacity (Litres) - 18 L</Message.Item>
      
</Message.Item>
    </Message.List>
  </Message>
  </div>
  
  </h3>
  
</div>
<div className='p'>
  <p> Price:=1167</p>
  
</div>
<div className='p1'>
<p>₹ 1,620 Inclusive of all taxes</p>
</div>

<div className='b'>
  <br></br>
<button class="ui secondary button">
  AddToCart
</button>
<button class="ui button">
  BuyNow
</button>
</div>
</div>
);
  }

export default POne;