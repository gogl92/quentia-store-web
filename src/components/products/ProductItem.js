import React from "react";
import { Col } from "reactstrap";
import { faBriefcase, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log("en product item component", product);
  return (
    <div className="wrapper">
      <div className="container-2">
        <div className="top">
          <Link to={`/product/${product.id}`}>
            <img
              className="img-fluid"
              alt="img"
              // src={
              //   product.get("images").length === 0
              //     ? "https://quentia.mx/img/image-not-found.png"
              //     : product.get("images")[0].url()
              // }
            />
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="product-content">
              <h1>{product.get("item_name")}</h1>
              <h1>{product.get("objectId")}</h1>
              <hr />
              <div className="details">
                {/* <p>$ {data.price_rent}</p> */}
                <p>
                  {new Intl.NumberFormat("mx-MX", {
                    style: "currency",
                    currency: "MXN"
                  }).format(product.get("price_sale"))}
                </p>
                <p className="type-of-sale"></p>
              </div>
              <FontAwesomeIcon icon={faHeart} /> me gusta
            </div>
            <div className="buy">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <FontAwesomeIcon icon={faEye} />
        </div>
        <div className="contents container">
          <h1>Características</h1>
          <h2>Descripción:</h2>
          <p>{product.get("description")}</p>
          <div className="row">
            <div className="col col-md-4">
              <h2>Marca:</h2>
              {/* <p>{product.get("brand")}</p> */}
            </div>
            <div className="col col-md-3">
              <h2>Talla:</h2>
              {/* <p>{size}</p> */}
            </div>
            <div className="col col-md-5">
              <h2>Condición:</h2>
              {product.get("condition") == 0 ? <p>Nuevo</p> : <p>Usado</p>}
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <h2>Color:</h2>
              {/* <p>{color}</p> */}
            </div>
            <div className="col col-md-6">
              <h2>Ocasión:</h2>
              <p>{product.get("type")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Medidas:</h2>
              <p>{product.get("size_description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
