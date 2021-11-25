import React from "react";

import { GET_USER } from '../../actions/queries'
import Spinner from '../../components/SpinnerLoading/index'

import { useApolloClient } from '@apollo/client';
import UserProfile from "../UserProfileLite";


export default () => {
  const client = useApolloClient();


  let ReadFromCache = client.readQuery({
    query: GET_USER,
  })



  return (
    (!ReadFromCache || ReadFromCache.authUser === null) ?
      <Spinner />
      :
      <UserProfile myprofile={true} authUser={ReadFromCache.authUser} />
  );

}
