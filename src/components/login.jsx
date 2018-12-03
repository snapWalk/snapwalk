import React from "react";
import { GoogleLogin } from "react-google-login";
import Home from "./home";

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      success: false,
      userID: ""
    };
  }

  responseGoogle (response) {
    this.setState({ loading: true });
    fetch("http://localhost:3060/api/v1/users", {
      method: "POST",
      body: JSON.stringify({
        "email": response.profileObj.email
      }).then(res => res.json())
        .then(json => {
          this.setState({ success: true, loading: false, userID: response.profileObj.googleId });
        })
        .catch(() => {
          this.setState({ error: true });
        })
    });
  }

  render () {
    if (this.state.loading) {
      return <img src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"/>;
    }
    if (this.state.success) {
      return <Home/>;
    }
    return (
      <div>
        <h1>SnapWalk</h1>
        <p>Login to start your SnapWalk advanture!</p>
        <GoogleLogin clientId="222454378359-4nglm1c1jqb54m9ntlbs2kfovf7kqru1.apps.googleusercontent.com"
          className="google-login"
          fetchBasicProfile={false}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          buttonText="Login With Google"/>
      </div>
    );
  }
}

export default Login;
