import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="help.html">¿Quiénes somos?</a>{" "}
              </li>
              <li>
                <a href="help.html">¿Cómo funciona Quentia?</a>
              </li>
              <li>
                <a href="help.html#v-pills-tab">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="contact.html">Contacto</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h4>Quentia</h4>
            <ul>
              <li>
                <a href="#">Misión</a>
              </li>
              <li>
                <a href="#">Visión</a>
              </li>
              <li>
                <a href="#">Comunidad</a>
              </li>
              <li>
                <a href="#">Agentes</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h4>Más Información</h4>
            <ul>
              <li>
                <a href="termsofservice.html">Términos y Condiciones</a>
              </li>
              <li>
                <a href="privacy.html">Aviso de Privacidad</a>
              </li>
              <li>
                <a href="#">Precios Quentia</a>
              </li>
            </ul>
          </Col>
          <div className="col d-block d-sm-none text-center d-flex justify-content-center">
            <img src="img/svg/download-footer.svg" alt="Download Footer SVG" />
            <div className="media--footer d-flex align-items-center">
              <ul>
                <li>
                  <a
                    target="blank"
                    href="https://www.facebook.com/Quentia-Oficial-545759405871133/"
                  >
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/quentiaoficial/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/QuentiaOficial">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <Row className="footer__bottom">
          <Col>
            <p>
              © 2019 Quentia Technologies. Todos los derechos Reservados.
              <span>
                <i className="qtip tip-top" data-tip="¡Búscanos en inquid.co!">
                  <i className="fas fa-code"></i> con
                  <i className="fa fa-heart" aria-hidden="true"></i> por Inquid
                </i>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
