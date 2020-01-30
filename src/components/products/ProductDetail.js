import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Container, Col } from "reactstrap";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";
import Sidebar from "../sidebar/Sidebar";

const ProductDetail = ({ product }) => (
  <Container className="product__detail">
    {/* {loggedIn ? <Sidebar /> : <Fragment></Fragment>} */}
    <Row>
      <Col md={6}>
        <img src="https://quentia.mx/img/header-photo.jpg" alt="" />
      </Col>
      <Col md={6}>
        <div className="product__detail--container">
          <h1>Vestido Super Chick</h1>
          <p className="text-muted">Vestido de Día</p>
          <div className="prices">
            <span>$900.00 Renta</span>
            <span>$3,000.00 Venta</span>
          </div>
          <div className="product__detail--container--info">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quae hic explicabo aliquam autem dolore natus dolorum numquam
                facilis dicta, temporibus ipsam vero velit inventore mollitia
                voluptates recusandae eligendi ipsa esse nostrum voluptatibus,
                veritatis iste suscipit saepe! Beatae, placeat mollitia.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);
// class ProductDetail extends Component {
//   constructor(props) {
//     super(props);
//     // reset login status
//     // this.props.logout();
//     // this.state = {
//     //   product: {},
//     //   products: [],
//     //   error: null,
//     //   filteredItems: [],
//     //   size: ""
//     // };
//   }
//   // static propTypes = {
//   //   prop: PropTypes
//   // }
//   componentDidMount() {
//     this.props.getProduct(this.props.match.params.id);
//   }

//   render() {
//     const { description } = this.props.product;
//     return (
//       <Container>
//         {this.props.loggedIn ? <Sidebar /> : <Fragment></Fragment>}
//         <Row>
//           <Col md={6}>
//             {console.log(description)}
//             <p>{this.props.product.condition}</p>
//           </Col>
//           <Col md={6}>
//             <p>información</p>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
ProductDetail.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  product: state.product.product
});
export default connect(mapStateToProps, { getProduct })(ProductDetail);
