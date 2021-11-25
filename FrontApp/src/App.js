import React from "react";
import { BrowserRouter as Router, Switch, } from "react-router-dom";




import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { ApolloProvider } from '@apollo/client';
import client from './Client'
import Login from './views/Login/Login'
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutSignin';
import AppRoute from './utils/AppRoute';
import Home from './views/Accueil/Home';
import Secondary from './views/Secondary/Secondary';
import Main from './MainApp'
import { ToastProvider } from 'react-toast-notifications';

var token = localStorage.getItem("token");


export default () => {
  return (

    <Router basename={process.env.REACT_APP_BASENAME || ""}>

      <ToastProvider autoDismiss={true}  >
        <Switch>


          <ApolloProvider client={client}>

            {token ?
              <Switch>

                <Main />
              </Switch>
              :
              <>
                {/* <AppRoute exact path="/secondary" component={Secondary} layout={LayoutAlternative} />
                <AppRoute exact path="/login" component={Login} layout={LayoutSignin} /> */}

                <AppRoute exact path="/" component={Login} layout={LayoutDefault} />

              </>
            }
          </ApolloProvider>

        </Switch>

      </ToastProvider>
    </Router>
  )
}
