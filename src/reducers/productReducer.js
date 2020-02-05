import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  FILTER_PRODUCTS_BY_SIZE,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_BRANDS,
  GET_BRANDS_FAIL
} from "../actions/types";

const initialState = {
  product: null,
  products: [],
  error: null,
  filteredItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCT_REQUEST:
      return {};
    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT:
      console.log("get product", action.payload);
      return {
        ...state,
        product: action.payload
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload,
        size: action.payload.size
      };
    case UPLOAD_PRODUCT_FAIL:
    case GET_PRODUCTS_FAIL:
    case GET_PRODUCT_FAIL:
    case GET_BRANDS_FAIL:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
