import React from 'react';
import LoginForm from '../../components/sections/LoginForm';

class Login extends React.Component {
  render() {
 
    return (
      <LoginForm {...this.props} className="illustration-section-02" />
    );
  }
}

export default Login;