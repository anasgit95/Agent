 

// Layout Types
import { DefaultLayout } from "../layouts";
 // Route Views
 
import Errors from "../views/Errors";
import Home from '../components/home/home';
import Projet from '../views/Projets/Projet';
import Clients from  '../views/Client';
import AddClient from  '../views/Client/AddClient';
import Monteur from  '../views/Monteur';
import AddMonteur from  '../views/Monteur/AddMonteurs';
import Administrateur from '../views/Administrateur'
import AddAdministrateur from '../views/Administrateur/AddAdministrateur'
import Profile from "../views/myprofile/index"
// import Parametres from '../views/Pamaretres/index'
// import Categorie from '../views/Pamaretres/Catergorie/'
// import Departement from '../views/Pamaretres/Departement'
// import Family from '../views/Pamaretres/Family'
import ModifierClient from  '../views/Client/ModifierClient';
import ModifierEditor from  '../views/Monteur/ModifierMonteur';
import ProfileUser from  '../views/profile-user/';
import Projets from "../views/Projets"

     export default [

  {
    path: "/admins/ajouter",
    exact: true,

    layout: DefaultLayout,
    component: AddAdministrateur
  },
  {
    path: "/admins",
    exact: true,

    layout: DefaultLayout,
    component: Administrateur
  },
   {
    path: "/client/Modifier/:id",
    exact: true,

    layout: DefaultLayout,
    component: ModifierClient
  },
  {
    path: "/client/ajouter",
    exact: true,

    layout: DefaultLayout,
    component: AddClient
  },
  {
    path: "/client",
    exact: true,

    layout: DefaultLayout,
    component: Clients
  },
  {
    path: "/Projets/:id",
    exact: true,

    layout: DefaultLayout,
    component: Projet
  },
  {
    path: "/Agent/Modifier/:id",
    exact: true,

    layout: DefaultLayout,
    component: ModifierEditor
  },
  {
    path: "/Agent/ajouter",
    exact: true,

    layout: DefaultLayout,
    component: AddMonteur
  },
  {
    path: "/Agent",
    exact: true,

    layout: DefaultLayout,
    component: Monteur
  },
  {
    exact:true,

    path: "/dashboard",
    layout: DefaultLayout,
    component: Home
  },
  {
    exact:true,

    path: "/Projets",
    layout: DefaultLayout,
    component: Projets
  },
  {
    exact:true,

    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  { 
    exact:true,

    path: "/user-profile/:id",
    layout: DefaultLayout,
    component: ProfileUser
  },
  { 
 

    path: "/profile",
    layout: DefaultLayout,
    component: Profile
  },
 
   
 
  {
    path: "/",
    exact:true,
    layout: DefaultLayout,
    component: Home
  },
 
];
