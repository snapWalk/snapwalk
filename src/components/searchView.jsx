import React from "react";
import { Button, Col, Thumbnail } from "react-bootstrap";

class SearchView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h2>Search for a route</h2>
        <Col>
          <Thumbnail>
            <h3>Route name</h3>
            <p>Route description</p>
            <p>
              <Button bsStyle="primary">Start</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}

export default SearchView;
