import React, { Fragment, Component, useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, loadUser } from "../../actions/userActions";
import { setAlert } from "../../actions/alertActions";
import PropTypes from "prop-types";
import { history } from "../../helpers/history";

// const Login = ({ login, loggedIn, setAlert }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     submitted: false
//   });

//   const { username, password, submitted } = formData;
//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async e => {
//     e.preventDefault();
//     setFormData({ submitted: true });
//     if (username && password) {
//       login(username, password);
//     } else {
//       setAlert("Favor de llenar los campos requeridos", "danger");
//     }

//     // this.setState({
//     //   username: "",
//     //   password: "",
//     //   submitted: false
//     // });
//     // history.push("/dashboard");
//   };
//   // if (loggedIn) {
//   //   return <Redirect to="/dashboard" />;
//   // }
//   return (
//     <Fragment>
//       <Row>
//         <Col md={8}>
//           <Form name="form" onSubmit={e => handleSubmit(e)}>
//             <h1>Inicia Sesión</h1>
//             <hr />
//             <Row form>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="username">Nombre de Usuario</Label>
//                   <Input
//                     type="text"
//                     name="username"
//                     value={username}
//                     onChange={e => handleChange(e)}
//                     className={
//                       submitted && !username
//                         ? "form-control is-invalid"
//                         : "form-control"
//                     }
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="password">Contraseña</Label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={e => handleChange(e)}
//                     className={
//                       submitted && !password
//                         ? "form-control is-invalid"
//                         : "form-control"
//                     }
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <button className="btn--main-pink">Iniciar Sesión</button>
//             <div className="signIn">
//               <p>
//                 ¿No tienes una cuenta?{" "}
//                 <Link to="/register">Regístrate Gratis</Link>
//               </p>
//             </div>
//           </Form>
//         </Col>
//         <Col md={4}>
//           <div className="social-signin">
//             <h1>Inicia Sesión con Redes Sociales</h1>
//             <p>Muy Pronto!</p>
//           </div>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };

class Login extends Component {
  constructor(props) {
    super(props);
    // reset login status
    // this.props.logout();
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }
  // componentDidMount() {
  //   this.props.login();
  // }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    } else {
      this.props.setAlert("Favor de llenar los campos requeridos", "danger");
    }
    // this.setState({
    //   username: "",
    //   password: "",
    //   submitted: false
    // });
    // history.push("/dashboard");
  };
  render() {
    const { username, password, submitted } = this.state;
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Form name="form" onSubmit={this.handleSubmit}>
              <h1>Inicia Sesión</h1>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="username">Nombre de Usuario</Label>
                    <Input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      className={
                        submitted && !username
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      className={
                        submitted && !password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <button className="btn--main-pink">Iniciar Sesión</button>
              <div className="signIn">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/register">Regístrate Gratis</Link>
                </p>
              </div>
              <div className="signIn">
                <p>
                  Recuperar contraseña
                  <Link to="/register">Regístrate Gratis</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={4}>
            <div className="social-signin">
              <h1>Inicia Sesión con Redes Sociales</h1>
              <p>Muy Pronto!</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({ loggedIn: state.authentication.loggedIn });
export default connect(mapStateToProps, { login, loadUser, setAlert })(Login);
