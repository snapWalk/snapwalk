import React from "react";
import { GoogleLogin } from "react-google-login";
import Home from "./home";
require("../scss/loginStyle.scss");

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      userID: null
    };
  }

  responseGoogle (response) {
    fetch("http://localhost:3060/api/v1/users", {
      method: "POST",
      body: JSON.stringify({
        "email": response.profileObj.email
      })
    }).then(res => res.json())
      .then(json => {
        this.setState({ success: true, userID: json.body });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render () {
    if (this.state.success) {
      return <Home userID={this.state.userID}/>;
    }
    return (
      <div>
        <div className="loginImage">
          <img id="backgroundIMG" src="http://www.chinesenzherald.co.nz/assets/Uploads/News/blog-30215/pexels-photo-1252983.jpeg"/>
        </div>
        <div className="loginContent">
          <h1>SnapWalk</h1>
          <p>Login to start your <br/> SnapWalk adventure!</p>
          <GoogleLogin clientId="222454378359-4nglm1c1jqb54m9ntlbs2kfovf7kqru1.apps.googleusercontent.com"
            className="google-login"
            fetchBasicProfile={false}
            onSuccess={(response) => this.responseGoogle(response)}
            onFailure={(response) => this.responseGoogle(response)}
            buttonText="Login With Google"/>
        </div>
      </div>
    );
  }
}

export default Login;
