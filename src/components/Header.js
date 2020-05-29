import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <Navbar
        color='light'
        light
        expand='md'
        className='d-flex align-items-center justify-content-between'>
        <div className='container'>
          <NavbarBrand href='/'>LOGO</NavbarBrand>
          <NavbarText>User name</NavbarText>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
