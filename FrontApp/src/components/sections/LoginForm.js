import React, { useState } from "react";
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
// import Input from '../elements/Input';
import Button from '../elements/Button';
// import Checkbox from '../elements/Checkbox';
import './style.css';
import { login } from '../../actions/mutations';
import { useMutation } from '@apollo/client';
import axios from '../../utils/Api'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const LoginForm = ({className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor,...props}) => {
   
   const [error, setError] = useState(false);
  const [loginData, setLoginData] = useState({
    Email: '',
    Password: ''
  });

  const [userLogin] = useMutation(login);

  const handleSubmit = async (event) => {
    setError(false);

    event.preventDefault();
    axios.post("agent/login",loginData).then(response=>
      {
         localStorage.setItem('token',response.data.Token)
        window.location.href="/dashboard"
      }

    )
  
    
  }

  const handleInputChange = (event) => {
    const target = event.target;
    setError(false);

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setLoginData({ ...loginData, [name]: value });
  }

  const outerClasses = classNames(
    'signin section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'signin-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Se connecter',
  };
  return (
    <section
       className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
          <div className="tiles-wrap">
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="mb-12">
                      <input
                        className="form-input-login"
                        type="email"
                        label="Email"
                        name="Email"
                        placeholder="Email"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-12">
                      <input
                        type="password"
                        name="Password"
                        autoComplete="on"
                        className="form-input-login"
                        label="Mot de passe"
                        placeholder="Mot de passe"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {error ?
                      <h6 className="error-text"> Le login ou le mot de passe que vous avez saisi est incorrect. </h6>
                      : null
                    }
                    <div className="mt-24 mb-15">
                      <Button color="primary" wide>Se connecter</Button>
                    </div>
                       {/* <Checkbox>Se souvenir de moi</Checkbox> */}
                      {/* <Link to="/recover-password/" className="func-link text-xs">Mot de passe oublié?</Link> */}
                   </fieldset>
                </form>
                {/* <div className="signin-bottom has-top-divider">
                  <div className="pt-32 text-xs center-content text-color-low">
                    Don't you have an account? <Link to="/signup/" className="func-link">Sign up</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
 