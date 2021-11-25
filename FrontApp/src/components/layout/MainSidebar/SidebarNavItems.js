import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { GET_USER } from '../../../actions/queries'
import Spinner from '../../../components/Spinner'
import AdminArray from './nav-items/adminArray'
import CustomerArray from './nav-items/customerArray'
import EditorArray from './nav-items/EditorArray'
import { useApolloClient } from '@apollo/client';
import MainFooter from '../MainFooter';

export default () => {
  // const { loading, error, data } = useQuery(GET_USER);
  // if (loading) return <Spinner />;
  // if (error) return `Error! ${error.message}`;
 

  // this.state = {
  //   navItems: Store.getSidebarItems()
  // };

  // this.onChange = this.onChange.bind(this);

  // componentWillMount() {
  //   Store.addChangeListener(this.onChange);
  // }

  // componentWillUnmount() {
  //   Store.removeChangeListener(this.onChange);
  // }

  // onChange() {
  //   this.setState({
  //     ...this.state,
  //     navItems: Store.getSidebarItems()
  //   });
  // }

  return (
    <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">


          {
 
              AdminArray().map((item, idx) => (
                <SidebarNavItem key={idx} item={item} />
              ))
              
          }

          <MainFooter style={{position: "absolute",
    bottom: "-33px",
    fontSize: "15px "}}   />
        </Nav>
      </div>
  )
}


