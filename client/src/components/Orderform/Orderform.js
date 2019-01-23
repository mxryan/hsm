import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Orderform.css";

export default class Orderform extends React.Component {
  state = {
    name: "",
    number: "",
    email: "",
    message: "",
  }
  
  render() {
    return (
      
      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="name" placeholder="Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="number">Number</Label>
            <Input type="text" placeholder="Phone number" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text"  placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textArea" placeholder="How can I help?" />
      </FormGroup>
      
      <Button>Send</Button>
    </Form>
        
    )
  }
}
