

// Layout Types
import { DefaultLayout } from "../layouts";
// Route Views
// import UserProfile from "../views/UserProfileLite";

import Errors from "../views/Errors";
import Home from '../components/home/home';
import Users from '../components/users/users';
import Profile from "../views/myprofile/index"



export default [




  {
    path: "/Projets",

    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/dashboard",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },

  {
    path: "/errors",

    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/profile",

    layout: DefaultLayout,
    component: Profile
  },




];
