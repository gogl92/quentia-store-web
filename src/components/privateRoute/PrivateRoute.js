import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  authentication: { loggedIn },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

PrivateRoute.propTypes = {
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

export default connect(mapStateToProps)(PrivateRoute);

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       localStorage.getItem("user") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: "/login", state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );
