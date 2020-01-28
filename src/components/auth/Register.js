import React, { Fragment, Component } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { register, loadUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import PropTypes from "prop-types";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        phone: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    if (
      !user.firstName ||
      !user.lastName ||
      !user.username ||
      !user.password ||
      !user.email ||
      !user.phone
    ) {
      this.props.setAlert("Favor de llenar los campos requeridos", "danger");
    } else {
      this.props.register(user);
    }
    this.setState({ submitted: true });
    // if (
    //   user.firstName &&
    //   user.lastName &&
    //   user.username &&
    //   user.password &&
    //   user.email &&
    //   user.phone
    // ) {
    //   this.props.register(user);
    //   // this.props.loadUser();
    // }

    // this.setState({

    // });
  }

  render() {
    const { user, submitted } = this.state;
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Fragment>
        <Row>
          <Col md={8}>
            <Form onSubmit={this.handleSubmit}>
              <h1>Regístrate</h1>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">Nombre</Label>
                    <Input
                      type="text"
                      name="firstName"
                      value={user.firstName}
                      onChange={this.handleChange}
                      className={
                        submitted && !user.firstName ? "is-invalid" : ""
                      }
                    />
                    {/* {submitted && !user.firstName && (
                      <div className="help-block">First Name is required</div>
                    )} */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">Apellido</Label>
                    <Input
                      type="text"
                      name="lastName"
                      value={user.lastName}
                      onChange={this.handleChange}
                      className={
                        submitted && !user.lastName ? "is-invalid" : ""
                      }
                    />
                    {/* {submitted && !user.lastName && (
                      <div className="help-block">Last Name is required</div>
                    )} */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      value={user.email}
                      onChange={this.handleChange}
                      className={submitted && !user.email ? "is-invalid" : ""}
                    />
                    {/* {submitted && !user.email && (
                      <div className="help-block">Email is required</div>
                    )} */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="phone">Teléfono</Label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      value={user.phone}
                      onChange={this.handleChange}
                      className={submitted && !user.phone ? "is-invalid" : ""}
                    />
                    {/* {submitted && !user.phone && (
                      <div className="help-block">Phone is required</div>
                    )} */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={this.handleChange}
                      className={
                        submitted && !user.password ? "is-invalid" : ""
                      }
                    />
                    {/* {submitted && !user.password && (
                      <div className="help-block">Phone is required</div>
                    )} */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="username">Nombre de Usuario</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={user.username}
                      onChange={this.handleChange}
                      className={
                        submitted && !user.username ? "is-invalid" : ""
                      }
                    />
                    {/* {submitted && !user.username && (
                      <div className="help-block">Phone is required</div>
                    )} */}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check className="my-3">
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Acepto <a href="">Términos y Condiciones</a>
                </Label>
              </FormGroup>
              <button className="btn--main-pink">Registrar</button>
              <div className="signIn">
                <p>
                  ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={4}>
            <div className="social-signin">
              <h1>Registrarte con Redes Sociales</h1>
              <p>Muy Pronto!</p>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
// const Register = ({ register }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     password2: "",
//     username: "",
//     submitted: false
//     // touched: {
//     //   email: false,
//     //   password: false
//     // }
//   });
//   const { registering } = this.props;
//   const { user, submitted } = this.state;

// };
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({ loggedIn: state.authentication.loggedIn });
export default connect(mapStateToProps, { setAlert, register, loadUser })(
  Register
);
