import React, { useState  } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
 
// import { useQuery } from '@apollo/client';
// import Spinner from '../../../../components/SpinnerLoading/index'
 
 
export default () => {

 

  const [visible, setVisible] = useState(false)





  const toggleUserActions = () => {
    setVisible(!visible)
  }

 
  return (
    
      <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3"> 
          <span className="d-none d-md-inline-block" style={{ paddingLeft: 10 }}>{"Admin Admin"}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu}   small open={visible} >
          {/* <DropdownItem tag={Link} to="/profile">
            <i className="material-icons">&#xE7FD;</i>
            Profile
          </DropdownItem> */}
          {/* <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i>Modifier profile
          </DropdownItem> */}
          {/* <DropdownItem divider /> */}
          <DropdownItem tag={"div"} style={{ cursor: "pointer" }} onClick={() => {
            localStorage.clear()
            window.location.href = "/"

          }} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Déconnection
          </DropdownItem>
        </Collapse>
      </NavItem>
  );

}
