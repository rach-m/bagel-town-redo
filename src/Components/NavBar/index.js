import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import logo from "../../assets/logo (1).png"
  import "./style.css"
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" style = {{zIndex:4, color: "white"}}>
          <NavbarBrand href="/">
          <div>
            <img style = {{maxHeight: "75px",maxWidth:"auto", marginRight: "50px", padding: "5px"}} src = {logo} alt = "Bagel Town Cafe Logo"></img>
          <p><i>Always Sesame & Nut Free!</i></p>
          </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/menu">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/catering">Catering</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social Media
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Facebook
                  </DropdownItem>
                  <DropdownItem>
                    Instagram
                  </DropdownItem>
                  <DropdownItem>
                    Yelp
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
