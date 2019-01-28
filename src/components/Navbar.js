import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";

class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="white" expand="md">
          <NavbarBrand>
            <label className="title" style={{color:" #302c58",fontWeight:'bold'}} >Mes évènements</label>
          </NavbarBrand>
          
            
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect" to="/"><i class="fa fa-sign-out" style={{color:"#7974bf",fontSize: '20px'}} ></i></NavLink>
              </NavItem>
            </NavbarNav>
      </Navbar>
    );
  }
}

export default NavbarPage;