import React, { Fragment } from "react";
import { Row, Container, Col } from "reactstrap";

export const ProductDetail = ({ product }) => {
  console.log("en product detail", product);
  return (
    <Container className="product__detail">
      <Row>
        <Col md={5}>
          <img
            className="img-fluid"
            src="https://quentia.mx/img/header-photo.jpg"
            alt=""
          />
        </Col>
        <Col md={7}>
          <div className="product__detail--container">
            <h1>{product.get("item_name")}</h1>
            <div className="product__detail--subtitle">
              <p className="product__detail--brand">
                <span>Marca:</span> {product.get("brand")}
              </p>
              <p className="product__detail--type">
                {product.get("type") === "Día"
                  ? "Vestido de día"
                  : "Vestido de Noche"}
              </p>
            </div>
            <div className="product__detail--prices">
              {!product.get("price_rent") ? (
                <Fragment>
                  <span>
                    Renta:{" "}
                    {new Intl.NumberFormat("mx-MX", {
                      style: "currency",
                      currency: "MXN"
                    }).format(product.get("price_sale"))}
                  </span>
                </Fragment>
              ) : (
                <Fragment>
                  <span>
                    Venta:{" "}
                    {new Intl.NumberFormat("mx-MX", {
                      style: "currency",
                      currency: "MXN"
                    }).format(product.get("price_sale"))}
                  </span>
                  <span>
                    Renta:{" "}
                    {new Intl.NumberFormat("mx-MX", {
                      style: "currency",
                      currency: "MXN"
                    }).format(product.get("price_rent"))}
                  </span>
                </Fragment>
              )}
              {/* {product.get("price_sale") && product.get("price_rent") ? (
                <Fragment>
                  <span>
                    Renta:{" "}
                    {new Intl.NumberFormat("mx-MX", {
                      style: "currency",
                      currency: "MXN"
                    }).format(product.get("price_rent"))}
                  </span>
                  <span>
                    Venta:{" "}
                    {new Intl.NumberFormat("mx-MX", {
                      style: "currency",
                      currency: "MXN"
                    }).format(product.get("price_sale"))}
                  </span>
                </Fragment>
              ) : (
                <span></span>
              )} */}
            </div>
            <div className="product__detail--description">
              <h4>Información del Vestido</h4>
              <span>Descripción</span>
              <p>{product.get("description")}</p>
            </div>
            <div className="product__detail--actions">
              <button>corazon</button>
              <button>baul</button>
              <button>Rentar</button>
              <button>Comprar</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

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
// ProductDetail.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
//   getProduct: PropTypes.func.isRequired,
//   product: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   loggedIn: state.authentication.loggedIn,
//   product: state.product
// });
// export default connect(mapStateToProps, { getProduct })(ProductDetail);
export default ProductDetail;
