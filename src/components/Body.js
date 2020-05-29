import React, { Fragment } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserList from "./user/UserList";
import USerProfile from "./user/UserProfile";
const Body = (props) => {
  return (
    <Router>
      <Fragment>
        <Nav className='nav nav-tabs'>
          <NavItem className='nav-item'>
            <Link className='active nav-link' to='/'>
              {" "}
              User Lists
            </Link>
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink className='active nav-link'>User Profile</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path='/' component={UserList} />
          {/* <Route exact path='/user-profile' component={USerProfile} /> */}
          <Route exact path='/user-profile/:id' component={USerProfile} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Body;
