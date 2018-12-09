import React from "react";
import Home from "./home";
import { Modal, Button } from "react-bootstrap";
require("../assets/background.jpg");

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
      this.state.homeView ? <Home/> : <div className="modal">
        <Modal.Dialog className="modcontent">
          <p>You have created a new route!</p>
          <Button onClick={() => this.goHome()}>return</Button>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SnapModal;
