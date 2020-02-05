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
  // getBrands,
  addProduct
  // getTypesOfSale,
  // getSizes,
  // getOccasions,
  // getLengths,
  // getEventTypes,
  // getColors,
  // getSpecialOccasions
} from "../../actions/productActions";
import { setAlert } from "../../actions/alertActions";
import { Link, Redirect } from "react-router-dom";

function compare(a, b) {
  return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
}
const ProductForm = ({
  loggedIn,
  // getBrands,
  // getTypesOfSale,
  // getSizes,
  // getOccasions,
  // getLengths,
  // getEventTypes,
  // getColors,
  // getSpecialOccasions,
  addProduct,
  productUploadReducer
  // data: {
  //   brands,
  //   typesOfSale,
  //   sizes,
  //   item_Lengths,
  //   occasions,
  //   item_event_types,
  //   item_special_occasions,
  //   colors
  // }
}) => {
  // useEffect(() => {
  //   getBrands();
  //   getTypesOfSale();
  //   getSizes();
  //   getOccasions();
  //   getLengths();
  //   getEventTypes();
  //   getColors();
  //   getSpecialOccasions();
  //   eslint-disable-next-line
  // }, []);
  const [formData, setFormData] = useState({
    item_name: "",
    brand: "",
    size: "",
    occasion: "",
    type: "",
    color: "",
    item_length: "",
    item_value: "",
    condition: 0,
    description: "",
    price_sale: 0,
    location: "",
    size_description: "",
    aviability: 1,
    wearType: "",
    special_occasion: ""
    // images: [],
    // price_rent: ""
    // size: "",
    // occasion: "",
    // color: "",
    // item_value: "",
    // brand: "",
    // price_rent: "",
    // item_length2: "",
    // item_name: "",
    // images: "",
    // typeOfSale: "",
    // condition: "",
    // description: "",
    // price_sale: "",
    // location: "",
    // size_description: "",
    // item_event_type: "",
    // item_special_occasion: ""
  });

  const {
    size,
    color,
    occasion,
    brand,
    item_value,
    item_length,
    item_name,
    images,
    type,
    condition,
    description,
    price_sale,
    price_rent,
    location,
    size_description,
    aviability,
    wearType,
    special_occasion
  } = formData;
  // const handleOptionChange = e => {
  //   setProductState({ ...productState, brand: e.target.value });
  //   console.log(e.target.value);
  // };

  // this.setState({ [e.target.name]: e.target.value });
  const handleChange = e => {
    setFormData({
      ...formData,
      // price_sale: parseInt(e.target.value, 10),
      // aviability: parseInt(e.target.value, 10),
      [e.target.name]: e.target.value
    });
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
    if (
      item_name === ""
      // size &&
      // occasion &&
      // color &&
      // item_value &&
      // price_sale &&
      // item_length &&
      // type &&
      // condition &&
      // description &&
      // location &&
      // size_description
      // item_event_type ||
      // item_special_occasion
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
        wearType,
        special_occasion
        // item_event_type,
        // item_special_occasion
      );
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
                  value={item_name}
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
                name="type"
                id="typeOfSaleSelect"
                onChange={handleChange}
                value={type}
              >
                <option value="">Selecciona una opción</option>
                <option value="Renta">Renta</option>
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
                  value={item_value}
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
                  type="text"
                  name="price_sale"
                  id="productPrice"
                  onChange={handleChange}
                  value={price_sale}
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
                >
                  <option value="">Selecciona una opción</option>
                  <option>Tamaño 1</option>
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
                >
                  <option value="">Selecciona una opción</option>
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
                <Label for="productDressTimeDaySelect">Ocasión</Label>
                <Input
                  type="select"
                  name="occasion"
                  id="productDressTimeDaySelect"
                  onChange={handleChange}
                  value={occasion}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ocasion 1">Ocasión1</option>
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
                  name="wearType"
                  id="productWearSelect"
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="formal">Formal</option>
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
                >
                  <option value="">Selecciona una opción</option>
                  <option value="rosa">Rosa</option>
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
                  name="special_occasion"
                  id="productSpecialOcasionSelect"
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="opcion 1">Opción 1</option>
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
  // getBrands: PropTypes.func.isRequired,
  // getTypesOfSale: PropTypes.func.isRequired,
  // getSizes: PropTypes.func.isRequired,
  // getLengths: PropTypes.func.isRequired,
  // getOccasions: PropTypes.func.isRequired,
  // getEventTypes: PropTypes.func.isRequired,
  // getColors: PropTypes.func.isRequired,
  // getSpecialOccasions: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product
});

export default connect(mapStateToProps, {
  // getBrands,
  // getTypesOfSale,
  // getSizes,
  // getLengths,
  // getOccasions,
  // getEventTypes,
  // getColors,
  // getSpecialOccasions,
  addProduct
  // setAlert
})(ProductForm);
