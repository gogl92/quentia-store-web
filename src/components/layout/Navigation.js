import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
  DropdownItem
} from "reactstrap";

// const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
//  const [isOpen, setisOpen] = useState(false);
//  toggle = () => {
//    setisOpen: !isOpen
//  }
const Navigation = ({ loggedIn }) => {
  const authLinks = (
    <NavItem>
      <NavLink>
        <Link>Cerrar Sesión</Link>
      </NavLink>
    </NavItem>
  );
  const guestLinks = (
    <Fragment>
      <DropdownToggle nav caret>
        Mi Perfil
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          {" "}
          <Link to="/login">Iniciar Sesión</Link>
        </DropdownItem>
        <DropdownItem>
          {" "}
          <Link to="/register">Registrarse</Link>
        </DropdownItem>
      </DropdownMenu>
    </Fragment>
  );
  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">
        <img
          src="https://quentia.mx/img/Logo.png"
          alt="Quentia Logo"
          className="img-fluid"
        />
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">vestidos</Link>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            {/* <Fragment>
              <DropdownToggle nav caret>
                Mi Perfil
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {" "}
                  <Link to="/login">Iniciar Sesión</Link>
                </DropdownItem>
                <DropdownItem>
                  {" "}
                  <Link to="/register">Registrarse</Link>
                </DropdownItem>
              </DropdownMenu>
            </Fragment> */}
            {
              <Fragment>
                {loggedIn ? <Fragment></Fragment> : guestLinks}
              </Fragment>
            }
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
// Navigation.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({ loggedIn: state.authentication.loggedIn });

export default connect(mapStateToProps, {})(Navigation);
