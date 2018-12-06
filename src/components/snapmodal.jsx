import React from "react";
import Home from "./home";
import { Modal, Button } from "react-bootstrap";

class SnapModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      homeView: false
    };
  }

  goHome () {
    this.setState({ homeView: true });
  }

  render () {
    return (
      this.state.homeView ? <Home/> : <div>
        <Modal.Dialog>
          <Modal.Body>
            <p>You have created a new route!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.goHome()}>Return</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SnapModal;
