import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const ContactUs = () => 
{


  return(<>

<div>
    <Message
      attached
      header='Add: Raja Bags, 1055, Tiwari Lane, Main Road, In front of First Lady Store, Nashik, Maharashtra 422001'
      content='Contact No: 9850574257 
               Email: rajabagsofficial@gmail.com'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='Name'
          placeholder=' Name'
          type='text'
        />
        <Form.Input
          fluid
          label='Email'
          placeholder='Email'
          type='text'
        />
      </Form.Group>
      <Form.Input label='PhoneNo' placeholder='PhoneNo' type='text' />
      <Form.TextArea label='Message' placeholder='Message' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Submit</Button>
    </Form>
    
  </div>
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.119296307058!2d73.78663687435842!3d20.003507222203005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaa297914ab%3A0x9890c00b5b25b513!2sRaja%20Bags!5e0!3m2!1sen!2sin!4v1697656776143!5m2!1sen!2sin" 
    width = "1350" 
    height="450" 
    style={{border:"0"}} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">

    </iframe>

  </div>
  
  
  
  
  
  
  
  
  </>)
  


}
export default ContactUs;