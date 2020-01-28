import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faSignOutAlt,
  faBell,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div class="sidenav">
    <div className="top">
      <Link>
        {" "}
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Link>
    </div>
    <div className="content">
      <Link to="/favorites">
        <FontAwesomeIcon icon={faBriefcase} />
      </Link>
      <Link to="/gallery">
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link to="/register">
        <FontAwesomeIcon icon={faBell} />
      </Link>
    </div>
  </div>
  // <div className={classNames("b", { "is-open": props.isOpen })}>
  //   <div className="sidebar-header">
  //     <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
  //       &times;
  //     </span>
  //     <h3>Bootstrap Sidebar</h3>
  //   </div>
  //   <div className="side-menu">
  //     <Nav vertical className="list-unstyled pb-3">
  //       <p>Dummy Heading</p>
  //       <NavItem>
  //         <NavLink tag={Link} to={"/about"}>
  //           <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
  //           About
  //         </NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink tag={Link} to={"/pages"}>
  //           <FontAwesomeIcon icon={faImage} className="mr-2" />
  //           Portfolio
  //         </NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink tag={Link} to={"/faq"}>
  //           <FontAwesomeIcon icon={faQuestion} className="mr-2" />
  //           FAQ
  //         </NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink tag={Link} to={"/contact"}>
  //           <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
  //           Contact
  //         </NavLink>
  //       </NavItem>
  //     </Nav>
  //   </div>
  // </div>
);

// const submenus = [
//   [
//     {
//       title: "Home 1",
//       target: "Home-1"
//     },
//     {
//       title: "Home 2",
//       target: "Home-2"
//     },
//     {
//       itle: "Home 3",
//       target: "Home-3"
//     }
//   ],
//   [
//     {
//       title: "Page 1",
//       target: "Page-1"
//     },
//     {
//       title: "Page 2",
//       target: "Page-2"
//     }
//   ]
// ];

export default Sidebar;
// export default connect(mapStateToProps, { logout })(Sidebar);
// import React, { Fragment } from "react";
// import SideNav, {
//   Toggle,
//   Nav,
//   NavItem,
//   NavIcon,
//   NavText
// } from "@trendmicro/react-sidenav";
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";
// import Catalogue from "../layout/Catalogue";

// const Sidebar = () => {
//   return (
//     <SideNav
//       onSelect={selected => {
//         // Add your code here
//       }}
//       className="profile-sidebar"
//     >
//       <SideNav.Toggle />
//       <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//           <NavIcon>
//             <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
//           </NavIcon>
//           <NavText>Home</NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//           <NavIcon>
//             <i
//               className="fa fa-fw fa-line-chart"
//               style={{ fontSize: "1.75em" }}
//             />
//           </NavIcon>
//           <NavText>Charts</NavText>
//           <NavItem eventKey="charts/linechart">
//             <NavText>Line Chart</NavText>
//           </NavItem>
//           <NavItem eventKey="charts/barchart">
//             <NavText>Bar Chart</NavText>
//           </NavItem>
//         </NavItem>
//       </SideNav.Nav>
//     </SideNav>
//   );
// };

// export default Sidebar;
