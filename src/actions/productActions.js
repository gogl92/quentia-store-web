import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_PRICE,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_BRANDS,
  GET_BRANDS_FAIL
} from "./types";
import { setAlert } from "./alertActions";
import Parse from "parse";

Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
Parse.serverURL = "http://34.73.39.87/parse";

export const getProducts = () => async dispatch => {
  const Items = Parse.Object.extend("Item");
  const query = new Parse.Query(Items);
  try {
    const results = await query.find();
    dispatch({
      type: GET_PRODUCTS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_PRODUCTS_FAIL });
  }
};

export const getProduct = objectId => async dispatch => {
  const Item = Parse.Object.extend("Item");
  const query = new Parse.Query(Item);
  query.get(`${objectId}`).then(
    item => {
      const objectId = item.id;
      dispatch({
        type: GET_PRODUCT,
        payload: item
      });
      console.log(item);
    },
    err => {
      const errors = err.message;
      if (errors) {
        dispatch(setAlert(errors, "danger"));
      }
      dispatch({ type: GET_PRODUCT_FAIL });
    }
  );
};

export const getBrands = () => async dispatch => {
  const Brands = Parse.Object.extend("Brand");
  const query = new Parse.Query(Brands);
  try {
    const results = await query.find();
    dispatch({
      type: GET_BRANDS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_BRANDS_FAIL });
  }
};

export const addProduct = ({
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
}) => async dispatch => {
  const Item = Parse.Object.extend("Item");
  let newItem = new Item();
  // newItem.save({ ...formData }).then(
  newItem
    .save({
      brand,
      item_name
    })
    .then(
      newItem => {
        dispatch({
          type: UPLOAD_PRODUCT_SUCCESS,
          payload: newItem
        });
        dispatch(setAlert("Product Added", "success"));
      },
      err => {
        const errors = err.message;
        if (errors) {
          dispatch(setAlert(errors, "danger"));
        }
        dispatch({ type: UPLOAD_PRODUCT_FAIL });
      }
    );
};

export const filterProductsBySize = (products, size) => async dispatch => {
  const Items = Parse.Object.extend("Item");
  const query = new Parse.Query(Items);
  const results = await query.find();
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    size: size,
    payload:
      size === ""
        ? results
        : results.filter(a => a.size.indexOf(size.toUppercase()) >= 0)
  });
};

// export const filterProductsByPrice = (products, price) => async dispatch => {
//   const Items = Parse.Object.extend("Item");
//   const query = new Parse.Query(Items);
//   const results = await query.find();
//   dispatch({
//     type: FILTER_PRODUCTS_BY_PRICE,
//     price: price,
//     payload:
//       price === ""
//         ? results
//         : results.filter(a => a.price_sale.indexOf(size.toUppercase()) >= 0)
//   });
// };
