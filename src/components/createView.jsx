import React from "react";
import SnapModal from "./snapmodal";
require("../scss/style.scss");

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
    fetch("http://localhost:3060/api/v1/routes", {
      method: "POST",
      body: JSON.stringify({
        "route": {
          "name": this.state.name,
          "description": this.state.description,
          "author": this.props.userID
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
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render () {
    if (this.state.success) {
      return <SnapModal/>;
    }
    return (
      <div>
        <div className="create">
          <h2>Create your own route</h2>
          <form>
            <div className="createroute">
              <input name="name" className="form" type="text" placeholder="route name" required onChange={e => this.updateInput(e)}></input>
              <br/>
              <textarea rows="4" name="description" type="text" placeholder="this route will take you to ..." onChange={e => this.updateInput(e)}/>
            </div>
            <div className="createplace">
              <input name="placeName" className="form" type="text" placeholder="place" required onChange={e => this.updateInput(e)}></input>
              <br/>
              <textarea rows="4" name="placeDescription" type="text" placeholder="describe the task" required onChange={e => this.updateInput(e)}/>
              <br/>
              <p>insert geolocation of this place!</p>
              <input name="lat" inline="true" className="latlng" type="text" placeholder="lat" required onChange={e => this.updateInput(e)}></input>
              <input name="lng" inline="true" className="latlng" type="text" placeholder="lng" required onChange={e => this.updateInput(e)}></input>
              <br/>
              <p>wat item should we look for?</p>
              <input name="item" className="form" type="text" placeholder="item name" required onChange={e => this.updateInput(e)}></input>
            </div>
          </form>
          <button className="custom-btn" type="submit" onClick={e => this.addRoute(e)}>Submit</button>
        </div>
      </div>

    );
  }
}

export default CreateView;
