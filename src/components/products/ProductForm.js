import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
// import { addProduct } from "../../actions/product";
import {
  Container,
  Col,
  Row,
  FormText,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {
  getBrands,
  addProduct,
  getProducts
} from "../../actions/productActions";
import { setAlert } from "../../actions/alertActions";
import { Link, Redirect } from "react-router-dom";

const ProductForm = ({
  loggedIn,
  getBrands,
  addProduct,
  product: { brands }
}) => {
  useEffect(() => {
    getBrands();
    // eslint-disable-next-line
  }, [getBrands]);
  const [productState, setProductState] = useState({
    size: "",
    ocation: "",
    color: "",
    item_value: "",
    brand: null,
    price_rent: "",
    item_length: "",
    item_name: "",
    images: "",
    type: "",
    condition: "",
    description: "",
    price_sale: "",
    location: "",
    size_description: ""
  });
  const handleOptionChange = e => {
    setProductState({ ...productState, brand: e.target.value });
    console.log(e.target.value);
  };

  // this.setState({ [e.target.name]: e.target.value });
  const handleChange = e => {
    setProductState({ ...productState, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // const populateOptions = () => {
  //   return brands.map((brand, index) => (
  //     <option key={index} value={brand}>
  //       {brand}
  //     </option>
  //   ));
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const {
      size,
      ocation,
      color,
      item_value,
      brand,
      price_rent,
      item_length,
      item_name,
      images,
      type,
      condition,
      description,
      price_sale,
      location,
      size_description
    } = productState;
    if (item_name && brand) {
      addProduct(item_name, brand);
    } else {
      setAlert("Favor de llenar los campos requeridos", "danger");
    }
  };
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <h1>Agregar Vestido</h1>
        <hr />
        <p>Proporciona los siguientes datos de tu vestido.</p>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="productName">Nombre del vestido</Label>
                <Input
                  type="text"
                  name="item_name"
                  id="productName"
                  onChange={handleChange}
                  value={productState.item_name}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productBrand">Marca</Label>
                <Input
                  type="select"
                  name="brand"
                  id="productBrand"
                  onChange={handleChange}
                >
                  {brands.map((brand, index) => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={brand.id} value={brand.id}>
                      {brand.get("Name")}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <Label for="typeOfSaleSelect">Renta/Venta</Label>
              <Input
                type="select"
                name="typeOfSale"
                id="typeOfSaleSelect"
                onChange={handleChange}
              >
                <option></option>
                <option>Renta</option>
                <option>Venta</option>
                <option>Ambos</option>
              </Input>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productDescription">Descripción</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="productDescription"
                  placeholder="¿Cómo es tu vestido?"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productValue">Valor Total de tu vestido</Label>
                <Input
                  type="text"
                  name="item_value"
                  id="productValue"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productConditionSelect">Nuevo/Usado</Label>
                <Input
                  type="select"
                  name="condition"
                  id="productConditionSelect"
                  onChange={handleChange}
                >
                  <option></option>
                  <option>Nuevo</option>
                  <option>Usado</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productPrice">Precio de Venta</Label>
                <Input
                  type="text"
                  name="price_sale"
                  id="productPrice"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productSizeSelect">Talla</Label>
                <Input
                  type="select"
                  name="size"
                  id="productSizeSelect"
                  onChange={handleChange}
                >
                  <option>0</option>
                  <option>2</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productSizeDetails">Detalles de Talla</Label>
                <Input
                  type="text"
                  name="size_description"
                  id="productSizeDetails"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productDeliveryLocation">Ubicación </Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="(pega la url de Google Maps)"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="productLengthSelect">Largo de tu vestido</Label>
                <Input
                  type="select"
                  name="item_length"
                  id="productLengthSelect"
                  onChange={handleChange}
                >
                  <option>Vestido Corto</option>
                  <option>Vestido Largo</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="productDressTimeDaySelect">Ocasión</Label>
                <Input
                  type="select"
                  name="type"
                  id="productDressTimeDaySelect"
                  onChange={handleChange}
                >
                  <option>Vestido de Día</option>
                  <option>Vestido de Noche</option>
                  <option>Ambos</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="productWearSelect">Formal/Casual</Label>
                <Input
                  type="select"
                  name="wearType"
                  id="productWearSelect"
                  onChange={handleChange}
                >
                  <option>Formal</option>
                  <option>Casual</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productColorSelect">Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="productColorSelect"
                  placeholder="color placeholder"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="productSpecialOcasionSelect">
                  Ocasiones Especiales
                </Label>
                <Input
                  type="select"
                  name="ocation"
                  id="productSpecialOcasionSelect"
                  onChange={handleChange}
                >
                  <option>Ninguno</option>
                  <option>Novia</option>
                  <option>Quinceañera</option>
                  <option>Primera Comunión</option>
                  <option>Otros</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productImgFile">File</Label>
                <Col sm={10}>
                  <Input type="file" name="images" id="productImgFile" />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <input
            type="submit"
            className="btn--main-pink__sm ml-auto"
            value="Guardar"
          />
          <Link to="/gallery">
            <button className="btn--dark-pink ml-4">Cancelar</button>
          </Link>
        </Form>
      </Container>
    </Fragment>
  );
};

ProductForm.propTypes = {
  getBrands: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product
});

export default connect(mapStateToProps, { getBrands, addProduct, setAlert })(
  ProductForm
);
