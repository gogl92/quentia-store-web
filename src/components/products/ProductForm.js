import React, { useState, Fragment } from "react";
import Sidebar from "../sidebar/Sidebar";
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
import { setAlert } from "../../actions/alertActions";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productActions";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductForm = ({ addProduct, setAlert }) => {
  const [formData, setFormData] = useState({
    item_name: "",
    brand: "",
    size: "",
    occasion: "",
    type: "",
    color: "",
    item_length: "",
    item_value: 0,
    condition: null,
    description: "",
    price_sale: 0,
    location: "",
    size_description: "",
    wear_type: "",
    special_occasion: "",
    submitted: false,
    success: false,
    images: null,
    availability: null
  });
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "item_value" ||
        e.target.name === "price_sale" ||
        e.target.name === "condition" ||
        e.target.name === "availability"
          ? parseInt(e.target.value)
          : e.target.value
    });
    console.log(e.target.value);
  };
  const {
    item_name,
    brand,
    size,
    occasion,
    type,
    color,
    item_length,
    item_value,
    condition,
    description,
    price_sale,
    location,
    size_description,
    aviability,
    wear_type,
    special_occasion,
    availability
    // images
  } = formData;
  const handleSubmit = e => {
    e.preventDefault();
    setFormData({ ...formData, submitted: true });
    if (
      formData.item_name === "" ||
      formData.brand === "" ||
      formData.size === "" ||
      formData.occasion === "" ||
      formData.type === "" ||
      formData.color === "" ||
      formData.item_length === "" ||
      formData.item_value === 1 ||
      formData.condition === NaN ||
      formData.description === "" ||
      formData.price_sale === 1 ||
      formData.location === "" ||
      formData.size_description === "" ||
      formData.wear_type === "" ||
      // formData.special_occasion === "" ||
      formData.availability === ""
      // formData.images.length < 0
    ) {
      setAlert("Favor de llenar los campos requeridos", "danger");
    } else {
      addProduct(
        item_name,
        brand,
        size,
        occasion,
        type,
        color,
        item_length,
        item_value,
        condition,
        description,
        price_sale,
        location,
        size_description,
        aviability,
        wear_type,
        special_occasion,
        availability
        // item_day_time
        // images
      );
      setFormData({ ...formData, success: true });
    }
  };
  if (formData.success) {
    return <Redirect to="/gallery" />;
  }
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
                  value={formData.item_name}
                  className={
                    formData.submitted && !formData.item_name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
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
                  value={formData.brand}
                  className={
                    formData.submitted && !formData.brand
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Marca 1">Marca 1</option>
                  {/* {brands.map(brand => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={brand.id} value={brand.id}>
                      {brand.get("Name")}
                    </option>
                  ))} */}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <Label for="typeOfSaleSelect">Renta/Venta</Label>
              <Input
                type="select"
                name="availability"
                id="typeOfSaleSelect"
                onChange={handleChange}
                value={availability}
                className={
                  formData.submitted && !formData.availability
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Selecciona una opción</option>
                <option value="2">Renta</option>
                <option value="3">Venta</option>
                <option value="1">Ambos</option>
                {/* {typesOfSale.map(type => (
                  // <option key={brand.objectId} value={brand.Name}>
                  //   {brand}
                  // </option>
                  <option key={type.id} value={type.id}>
                    {type.get("Name")}
                  </option>
                ))} */}
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
                  value={description}
                  className={
                    formData.submitted && !formData.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productValue">Valor Total de tu vestido</Label>
                <Input
                  type="number"
                  name="item_value"
                  id="productValue"
                  onChange={handleChange}
                  value={item_value}
                  className={
                    formData.submitted && !formData.item_value
                      ? "form-control is-invalid"
                      : "form-control"
                  }
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
                  value={condition}
                  className={
                    formData.submitted && !formData.condition
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1">Nuevo</option>
                  <option value="0">Usado</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productPrice">Precio de Venta</Label>
                <Input
                  type="number"
                  name="price_sale"
                  id="productPrice"
                  onChange={handleChange}
                  value={price_sale}
                  className={
                    formData.submitted && !formData.price_sale
                      ? "form-control is-invalid"
                      : "form-control"
                  }
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
                  value={size}
                  className={
                    formData.submitted && !formData.size
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="0">0</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  {/* {sizes.map(size => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={size.id} value={size.id}>
                      {size.get("Size")}
                    </option>
                  ))} */}
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
                  value={size_description}
                  className={
                    formData.submitted && !formData.size_description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
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
                  value={location}
                  className={
                    formData.submitted && !formData.location
                      ? "form-control is-invalid"
                      : "form-control"
                  }
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
                  value={item_length}
                  className={
                    formData.submitted && !formData.item_length
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1">Corto</option>
                  <option value="2">Largo</option>
                  {/* {item_Lengths.map(length => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={length.id} value={length.id}>
                      {length.get("Name")}
                    </option>
                  ))} */}
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="productDressTimeDaySelect">Día/Noche</Label>
                <Input
                  type="select"
                  name="type"
                  id="productDressTimeDaySelect"
                  onChange={handleChange}
                  value={type}
                  className={
                    formData.submitted && !formData.type
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Día">Vestido de día</option>
                  <option value="Noche">Vestido de noche</option>
                  <option value="Ambos">Ambos</option>
                  {/* {occasions.map(occasion => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={occasion.id} value={occasion.id}>
                      {occasion.get("Name")}
                    </option>
                  ))} */}
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="productWearSelect">Formal/Casual</Label>
                <Input
                  type="select"
                  name="wear_type"
                  id="productWearSelect"
                  onChange={handleChange}
                  className={
                    formData.submitted && !formData.wearType
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Formal">Formal</option>
                  <option value="Casual">Casual</option>
                  {/* {item_event_types.map(item => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={item.id} value={item.id}>
                      {item.get("Name")}
                    </option>
                  ))} */}
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="productColorSelect">Color</Label>
                <Input
                  type="select"
                  name="color"
                  id="productColorSelect"
                  onChange={handleChange}
                  value={color}
                  className={
                    formData.submitted && !formData.color
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="rosa">Rosa</option>
                  <option value="blanco">Blanco</option>
                  <option value="Negro">Negro</option>
                  <option value="Amarillo">Amarillo</option>
                  {/* {colors.map(color => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={color.id} value={color.id}>
                      {color.get("Name")}
                    </option>
                  ))} */}
                </Input>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="productSpecialOcasionSelect">
                  Ocasiones Especiales
                </Label>
                <Input
                  type="select"
                  name="occasion"
                  id="productOcasionSelect"
                  onChange={handleChange}
                  className={
                    formData.submitted && !formData.occasion
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Novia">Novia</option>
                  <option value="Quinceañera">Quinceañera</option>
                  <option value="Primera Comunión">Primera Comunión</option>
                  <option value="Otros">Otros</option>
                  {/* {item_special_occasions.map(item => (
                    // <option key={brand.objectId} value={brand.Name}>
                    //   {brand}
                    // </option>
                    <option key={item.id} value={item.id}>
                      {item.get("Name")}
                    </option>
                  ))} */}
                  <option value="Ninguno">Ninguno</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="productImgFile">File</Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="images"
                    id="productImgFile"
                    onChange={e => {
                      setFormData({ ...formData, images: [e.target.files[0]] });
                    }}
                  />
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

export default connect(null, { addProduct, setAlert })(ProductForm);
