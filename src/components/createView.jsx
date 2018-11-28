import React from "react";
import { Form, FormGroup, InputGroup, Button, Radio, FormControl } from "react-bootstrap";

class CreateView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h2>Create your own route</h2>
        <Form>
          <FormGroup>
            <InputGroup>
              <FormGroup className="col-md-4">
                <h3>Route Name</h3>
                <input className="col-md-4" type="text" placeholder="route name" required></input>
                <h3>Description</h3>
                <FormControl componentClass="textarea" placeholder="This route will take you to ..." />
              </FormGroup>
            </InputGroup>
            <hr/>
            <FormGroup className="col-md-4">
              <h3>Place 1</h3>
              <input className="col-md-4" type="text" required></input>
              <h3>Describe the task</h3>
              <FormControl componentClass="textarea" placeholder="In this place, you need to do ... and find ..." />
            </FormGroup>
            <FormGroup className="col-md-4">
              <h3>Enter Geolocation</h3>
              <h3>lat</h3>
              <FormControl type="text"/>
            </FormGroup>
            <FormGroup controlId="formInlineEmail">
              <h3>lng</h3>
              <FormControl type="text" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <h3>Place order</h3>
              <Radio name="radioGroup" inline>
        1
              </Radio>{" "}
              <Radio name="radioGroup" inline>
        2
              </Radio>{" "}
              <Radio name="radioGroup" inline>
        3
              </Radio>
            </FormGroup >
            <FormGroup className="col-md-4">
              <h3>What item you need to find?</h3>
              <input className="col-md-4" type="text" placeholder="item name" required></input>
            </FormGroup>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>

    );
  }
}

export default CreateView;
