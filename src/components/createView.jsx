import React from "react";
import { Form, FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";

class CreateView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      placeName: "",
      placeDescription: "",
      lat: "",
      lng: "",
      item: "",
      success: false,
      error: false
    };
  }

  updateInput (e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  addRoute (e) {
    e.preventDefault();
    console.log("clicked!");
    fetch("http://localhost:3060/api/v1/routes", {
      method: "POST",
      body: JSON.stringify({
        "route": {
          "name": this.state.name,
          "description": this.state.description,
          "author": 1
        },
        "place1": {
          "name": this.state.placeName,
          "description": this.state.placeDescription,
          "latitude": this.state.lat,
          "longitude": this.state.lng,
          "item": this.state.item
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({ success: true });
      })
      .catch(error => {
        this.setState({ error: true })
      });
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
                <FormControl name="name" className="col-md-4" type="text" placeholder="route name" required onChange={e => this.updateInput(e)}></FormControl>
                <h3>Description</h3>
                <FormControl name="description" componentClass="textarea" placeholder="This route will take you to ..." onChange={e => this.updateInput(e)}/>
              </FormGroup>
            </InputGroup>
            <hr/>
            <InputGroup>
              <FormGroup className="col-md-4">
                <h3>Place 1</h3>
                <FormControl name="placeName" className="col-md-4" type="text" required onChange={e => this.updateInput(e)}></FormControl>
                <h3>Describe the task</h3>
                <FormControl name="placeDescription" componentClass="textarea" placeholder="In this place, you need to do ... and find ..." required onChange={e => this.updateInput(e)}/>
              </FormGroup>
              <FormGroup>
                <h3>Insert geolocation of this place!</h3>
                <FormControl name="lat" inline="true" className="col-xs-3" type="text" placeholder="LAT" required onChange={e => this.updateInput(e)}></FormControl>
                <FormControl name="lng" inline="true" className="col-xs-3" type="text" placeholder="LNG" required onChange={e => this.updateInput(e)}></FormControl>
              </FormGroup>
              <FormGroup className="col-md-4">
                <h3>What item you need to find?</h3>
                <FormControl name="item" className="col-md-4" type="text" placeholder="item name" required onChange={e => this.updateInput(e)}></FormControl>
              </FormGroup>
            </InputGroup>
            <Button type="submit" onClick={e => this.addRoute(e)}>Submit</Button>
          </FormGroup>
        </Form>
      </div>

    );
  }
}

export default CreateView;
