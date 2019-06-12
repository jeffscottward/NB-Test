import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import GlobalValues from "../constants/globalValues";
import FontAwesome from '@fortawesome/fontawesome-free'


/*
Nav Properties
Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavItem Properties
NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  // pass in custom element to use
}
NavLink Properties
NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  // pass in custom element to use
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
*/


const Sidebar = () => (
  // console.log(FontAwesome)
  <nav id="Sidebar">
    <div className="logo" />
    <Nav vertical>
      Dashboard
      People
      Website
      Communication
      Finances
      Nations
      Settings
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
    </Nav>
    <style jsx>{`
      #Sidebar {
      }
      .logo {
      }
      }
    `}</style>
  </nav>
);
export default Sidebar;