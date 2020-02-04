import React, { useState } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  FormGroup,
  Container,
  Input,
  Form
} from "reactstrap";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alertActions";
import { connect } from "react-redux";
import { recoverPassword } from "../../actions/userActions";

const Recover = ({ recoverPassword, setAlert }) => {
  const [state, setState] = useState({ email: "", submitted: false });
  // const handleChange = e => {
  //   setEmail({ email: e.target.value });
  //   console.log(e.target.value);
  //   console.log(email);

  const handleSubmit = e => {
    e.preventDefault();
    if (state.email !== "") {
      recoverPassword(state.email);
      setState({ email: "", submitted: true });
      // setState({ email: "", submitted: false });
    } else {
      setAlert("Ingresa un email", "danger");
    }
  };
  if (state.submitted) {
    return <Redirect to="/login" />;
  }
  return (
    <Container>
      <div className="recover-password__container">
        <Card body>
          <CardTitle>¿Olvidaste tu usuario o contraseña?</CardTitle>
          <CardText>
            Escribe el mail con el que te registraste y te enviaremos
            instrucciones de cómo recuperar tu cuenta.
          </CardText>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={e => setState({ ...state, email: e.target.value })}

                // className={
                //   submitted && !username
                //     ? "form-control is-invalid"
                //     : "form-control"
                // }
              />
            </FormGroup>
            <input
              type="submit"
              className="btn--main-pink btn--main-pink--no-upp"
              value="recuperar"
            />
          </Form>
        </Card>
      </div>
    </Container>
  );
};
Recover.propTypes = {
  recoverPassword: PropTypes.func.isRequired
};
export default connect(null, { recoverPassword, setAlert })(Recover);
