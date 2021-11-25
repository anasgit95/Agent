import React from "react";

import Spinner from '../../components/SpinnerLoading/index'
import { GET_MONTEUR_PROFILE } from '../../actions/queries'

import UserProfile from "../UserProfileLite";
import { useQuery } from '@apollo/client';


export default (props) => {
  const { loading: loadingProfile, data } = useQuery(GET_MONTEUR_PROFILE, {
    variables: { id: props.match.params.id },
  });

  return (
    !loadingProfile && data ?
      <UserProfile myprofile={false} authUser={data.getProfile} />
      :
      <Spinner />

  );

}
