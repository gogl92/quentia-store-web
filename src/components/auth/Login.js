import React, { Fragment } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col md={8}>
          <Form>
            <h1>Inicia Sesión</h1>
            <hr />
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">Nombre de Usuario</Label>
                  <Input type="text" name="username" id="username" required />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Contraseña</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password2"
                    required
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
};

export default Login;
