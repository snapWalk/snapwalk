import React from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  responseGoogle (response) {
  }

  render () {
    return (
      <div>
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
