import React from 'react';
import {  Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import "./Orderform.css";
class Orderform extends React.Component {
  render() {

    return (
      <Form>
        <Col xs="6">
        <FormGroup>.col-6
          <Label for="Name">Name</Label>
          <Input type="textarea" name="text" />
        </FormGroup>
        </Col>

        <Col xs="6">
        <FormGroup>
          <Label for="Number">Number</Label>
          <Input type="textarea" name="text" />
        </FormGroup>
        </Col>
        <Row>
        <FormGroup><Col xs="6">.col-6</Col>
          <Label for="Email">Email</Label>
          <Input type="textarea" name="text" />
          </FormGroup>
          </Row>
        <FormGroup><Col xs="6">.col-6</Col>
          <Label for="Name">How can I help?</Label>
          <Input type="textarea" name="text" />
        </FormGroup>
        <button>submit</button>
      </Form>
     
    
    );
  }
}

export default Orderform;

// {
// 	order_id: efalehf12348123aflh,
// 	name: suzy,
// 	email: suzy@suzy.com,
// 	order: [
// 		{
// 		item: chocolate type 1,
// 		quant: 5
// 		},{
// 		item: lolipops,
// 		quant: 9000
// 		}
//   ]
