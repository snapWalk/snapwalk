import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  responseGoogle (response) {
    // get email from response -> response.profileObj.email
    // post this in users
    // get the id from users
    // pass the id as a prop
  }

  logout (response) {
    console.log(response);
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
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}/>
      </div>
    );
  }
}

export default Login;
