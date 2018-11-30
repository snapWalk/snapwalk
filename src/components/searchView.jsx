import React from "react";
import { Button, Col, Thumbnail } from "react-bootstrap";

class SearchView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: null,
      description: null
    };
  }

  render () {
    let name = this.state.name || "Sample Route Name";
    let description = this.state.description || "Sample description here. Lalalaaaaaa. Lalaa.";
    return (
      <div>
        <h2>Search for a route</h2>
        <Col>
          <Thumbnail>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="text-right">
              <Button bsStyle="success">Start</Button>
            </div>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}

export default SearchView;
