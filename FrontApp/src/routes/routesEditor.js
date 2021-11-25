import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../layouts";
 // Route Views
import UserProfile from "../views/UserProfileLite";

import Errors from "../views/Errors";
import Home from '../components/home/home';
import Users from '../components/users/users';
 


     export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
 
  
 
   
  {
    path: "/Projets",
    exact: true,

    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Home
  },
  
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path:"*",
    layout: DefaultLayout,
    component: Home  },
 
];
