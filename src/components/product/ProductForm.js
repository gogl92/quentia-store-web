import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import { setAlert } from "../../actions/alertActions";
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
import { addProduct } from "../../actions/productActions";
import { Link, Redirect } from "react-router-dom";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    // reset login status
    // this.props.logout();
    this.state = {
      rate: [5],
      size: null,
      ocation: "",
      color: null,
      item_value: 0,
      brand: null,
      price_rent: 0,
      item_length: "",
      blocked_dates: null,
      item_name: "",
      images: [],
      type: "",
      condition: null,
      description: "",
      price_sale: 0,
      location: "",
      size_description: "",
      typeOfSale: "Renta"
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
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
    } = this.state;
    if (brand && item_name) {
      this.props.addProduct(brand, item_name);
    } else {
      this.props.setAlert("Favor de llenar los campos requeridos", "danger");
    }
    // this.setState({
    //   username: "",
    //   password: "",
    //   submitted: false
    // });
    // history.push("/dashboard");
  };
  render() {
    return (
      <Fragment>
        <Sidebar />
        <Container>
          <h1>Agregar Vestido</h1>
          <hr />
          <p>
            Proporciona los siguientes datos de tu vestido. Los campos con * son
            obligatorios.
          </p>
          <Form onSubmit={this.handleSubmit} enctype="multipart/form-data">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="productName">Nombre del vestido</Label>
                  <Input
                    type="text"
                    name="item_name"
                    id="productName"
                    placeholder="Vestido Largo Rojo"
                    onChange={this.handleChange}
                    value={this.state.item_name}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="productBrand">Marca</Label>
                  <Input
                    type="text"
                    name="brand"
                    id="productBrand"
                    placeholder="Marca del Vestido"
                    onChange={this.handleChange}
                    value={this.state.brand}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <Label for="typeOfSaleSelect">Renta/Venta</Label>
                <Input
                  type="select"
                  name="typeOfSale"
                  id="typeOfSaleSelect"
                  onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
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
  }
}

// const ProductForm = ({ addProduct, product: { product } }) => {
//   const [state, setState] = useState({
//     rate: [5],
//     size: null,
//     ocation: "",
//     color: null,
//     item_value: 0,
//     brand: null,
//     price_rent: 0,
//     item_length: "",
//     blocked_dates: null,
//     item_name: "",
//     images: [],
//     type: "",
//     condition: null,
//     description: "",
//     price_sale: 0,
//     location: "",
//     size_description: "",
//     typeOfSale: "Renta"
//   });
//   function handleChange(e) {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   }
//   return (
//     <Fragment>
//       <Sidebar />
//       <Container>
//         <h1>Agregar Vestido</h1>
//         <hr />
//         <p>
//           Proporciona los siguientes datos de tu vestido. Los campos con * son
//           obligatorios.
//         </p>
//         <Form
//           onSubmit={e => {
//             e.preventDefault();
//             addProduct(state);
//             setState({});
//           }}
//           enctype="multipart/form-data"
//         >
//           <Row>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productName">Nombre del vestido</Label>
//                 <Input
//                   type="text"
//                   name="item_name"
//                   id="productName"
//                   placeholder="Vestido Largo Rojo"
//                   onChange={handleChange}
//                   value={this.state.item_name}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productBrand">Marca</Label>
//                 <Input
//                   type="text"
//                   name="brand"
//                   id="productBrand"
//                   placeholder="Marca del Vestido"
//                   onChange={handleChange}
//                   value={this.state.brand}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <Label for="typeOfSaleSelect">Renta/Venta</Label>
//               <Input
//                 type="select"
//                 name="typeOfSale"
//                 id="typeOfSaleSelect"
//                 onChange={handleChange}
//               >
//                 <option></option>
//                 <option>Renta</option>
//                 <option>Venta</option>
//                 <option>Ambos</option>
//               </Input>
//             </Col>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productDescription">Descripción</Label>
//                 <Input
//                   type="textarea"
//                   name="description"
//                   id="productDescription"
//                   placeholder="¿Cómo es tu vestido?"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productValue">Valor Total de tu vestido</Label>
//                 <Input
//                   type="text"
//                   name="item_value"
//                   id="productValue"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productConditionSelect">Nuevo/Usado</Label>
//                 <Input
//                   type="select"
//                   name="condition"
//                   id="productConditionSelect"
//                   onChange={handleChange}
//                 >
//                   <option></option>
//                   <option>Nuevo</option>
//                   <option>Usado</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productPrice">Precio de Venta</Label>
//                 <Input
//                   type="text"
//                   name="price_sale"
//                   id="productPrice"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productSizeSelect">Talla</Label>
//                 <Input
//                   type="select"
//                   name="size"
//                   id="productSizeSelect"
//                   onChange={handleChange}
//                 >
//                   <option>0</option>
//                   <option>2</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productSizeDetails">Detalles de Talla</Label>
//                 <Input
//                   type="text"
//                   name="size_description"
//                   id="productSizeDetails"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productDeliveryLocation">Ubicación </Label>
//                 <Input
//                   type="text"
//                   name="location"
//                   id="location"
//                   placeholder="(pega la url de Google Maps)"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="productLengthSelect">Largo de tu vestido</Label>
//                 <Input
//                   type="select"
//                   name="item_length"
//                   id="productLengthSelect"
//                   onChange={handleChange}
//                 >
//                   <option>Vestido Corto</option>
//                   <option>Vestido Largo</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="productDressTimeDaySelect">Ocasión</Label>
//                 <Input
//                   type="select"
//                   name="type"
//                   id="productDressTimeDaySelect"
//                   onChange={handleChange}
//                 >
//                   <option>Vestido de Día</option>
//                   <option>Vestido de Noche</option>
//                   <option>Ambos</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="productWearSelect">Formal/Casual</Label>
//                 <Input
//                   type="select"
//                   name="wearType"
//                   id="productWearSelect"
//                   onChange={handleChange}
//                 >
//                   <option>Formal</option>
//                   <option>Casual</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productColorSelect">Color</Label>
//                 <Input
//                   type="color"
//                   name="color"
//                   id="productColorSelect"
//                   placeholder="color placeholder"
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={3}>
//               <FormGroup>
//                 <Label for="productSpecialOcasionSelect">
//                   Ocasiones Especiales
//                 </Label>
//                 <Input
//                   type="select"
//                   name="ocation"
//                   id="productSpecialOcasionSelect"
//                   onChange={handleChange}
//                 >
//                   <option>Ninguno</option>
//                   <option>Novia</option>
//                   <option>Quinceañera</option>
//                   <option>Primera Comunión</option>
//                   <option>Otros</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="productImgFile">File</Label>
//                 <Col sm={10}>
//                   <Input type="file" name="images" id="productImgFile" />
//                   <FormText color="muted">
//                     This is some placeholder block-level help text for the above
//                     input. It's a bit lighter and easily wraps to a new line.
//                   </FormText>
//                 </Col>
//               </FormGroup>
//             </Col>
//           </Row>
//           <input
//             type="submit"
//             className="btn--main-pink__sm ml-auto"
//             value="Guardar"
//           />
//           <Link to="/gallery">
//             <button className="btn--dark-pink ml-4">Cancelar</button>
//           </Link>
//         </Form>
//       </Container>
//     </Fragment>
//   );
// };
ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  product: state.product
});
export default connect(mapStateToProps, { addProduct, setAlert })(ProductForm);
