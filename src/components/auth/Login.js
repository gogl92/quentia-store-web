import React, { Fragment, Component } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/userActions";
import PropTypes from "prop-types";

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
  componentDidMount() {
    this.props.login();
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
    this.setState({
      username: "",
      password: "",
      submitted: false
    });
  };
  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <Fragment>
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
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    {submitted && !username && (
                      <div className="help-block">Username is required</div>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {submitted && !password && (
                      <div className="help-block">Password is required</div>
                    )}
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
            </Form>
          </Col>
          <Col md={4}>
            <div className="social-signin">
              <h1>Inicia Sesión con Redes Sociales</h1>
              <p>Muy Pronto!</p>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ loggedIn: state.authentication });
export default connect(mapStateToProps, { login })(Login);
