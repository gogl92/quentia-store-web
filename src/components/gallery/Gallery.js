import React, { Fragment } from "react";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Gallery = () => {
  return (
    <Container>
      <Sidebar />
      <h1>Tu galería de vestidos</h1>
      <Link to="/add">
        {" "}
        <button className="btn--main-pink__sm">Agregar vestido</button>
      </Link>
    </Container>
  );
};

export default Gallery;
