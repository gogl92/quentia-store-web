import React, { Component } from "react";
import { CustomInput, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { filterProductsBySize } from "../../actions/productActions";

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <div className="category__content">
          <p>Categorías</p>
          <ul>
            <li>Evento de Día</li>
            <li>Evento de Noche</li>
            <li>Vestidos Largos</li>
            <li>Vestidos Cortos</li>
          </ul>
        </div>
        <div className="sortBy__content">
          <p>Ordenar por</p>
          <hr align="left" />
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Todos
            </Label>
          </FormGroup>
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Vestidos Renta
            </Label>
          </FormGroup>
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Vestidos Venta
            </Label>
          </FormGroup>
        </div>
        <p>Filtros</p>
        <hr align="left" />
        <FormGroup>
          <Label for="exampleCustomRange">Precio</Label>
          <br />
          <CustomInput
            type="range"
            id="exampleCustomRange"
            name="customRange"
          />
        </FormGroup>
        <span>Tallas</span>
        <div className="size__content">
          <ul>
            <li
              onClick={e =>
                this.props.filterProductsBySize(
                  this.props.product,
                  e.target.dataset.id
                )
              }
              data-id="0"
            >
              <label>0</label>
            </li>
            <li
              onClick={e =>
                this.props.filterProductsBySize(
                  this.props.product,
                  e.target.dataset.id
                )
              }
              data-id="2"
            >
              <label>2</label>
            </li>
            <li
              onClick={e =>
                this.props.filterProductsBySize(
                  this.props.product,
                  e.target.dataset.id
                )
              }
              data-id="4"
            >
              <label>4</label>
            </li>
            <li
              onClick={e =>
                this.props.filterProductsBySize(
                  this.props.product,
                  e.target.dataset.id
                )
              }
              data-id="6"
            >
              <label>6</label>
            </li>
            <li
              onClick={e =>
                this.props.filterProductsBySize(
                  this.props.product,
                  e.target.dataset.id
                )
              }
              data-id="8"
            >
              <label>8</label>
            </li>
            <li>
              <label>10</label>
            </li>
            <li>
              <label>12</label>
            </li>
            <li>
              <label>14</label>
            </li>
            <li>
              <label>16</label>
            </li>
            <li></li>
          </ul>
        </div>
        <span>Ocasiones Especiales</span>
        <div className="occasion__content">
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Boda
            </Label>
          </FormGroup>
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Graduación
            </Label>
          </FormGroup>
          <FormGroup check className="my-3">
            <Input type="radio" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Quinceañera
            </Label>
          </FormGroup>
        </div>
        <span>Ciudad</span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.product,
  size: state.product.size
});
export default connect(mapStateToProps, { filterProductsBySize })(Filters);
