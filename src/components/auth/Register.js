import React, { Fragment, useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    username: ""
    // touched: {
    //   email: false,
    //   password: false
    // }
  });
  return (
    <Fragment>
      <Row>
        <Col md={8}>
          <Form>
            <h1>Regístrate</h1>
            <hr />
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">Nombre</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    // value={firstName}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Apellido</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    // value={lastName}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    // value={email}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phone">Teléfono</Label>
                  <Input type="text" name="phone" id="phone" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Contraseña</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    // value={password}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password2">Contraseña</Label>
                  <Input
                    type="password"
                    name="password2"
                    id="password2"
                    // value={password2}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <FormGroup>
                <Label for="username">Nombre de Usuario</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  // value={username}
                />
              </FormGroup>
            </FormGroup>

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
};
export default Register;
