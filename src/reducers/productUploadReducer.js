import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAIL
} from "../actions/types";

const initialState = {
  size: null,
  color: "",
  occasion: null,
  brand: null,
  item_value: "",
  item_length: null,
  item_name: "",
  images: [],
  type: "",
  condition: 0,
  description: "",
  price_sale: "",
  price_rent: "",
  location: "",
  size_description: ""
  // typeOfSale: null,
  // item_event_type: null,
  // item_special_occasion: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCT_REQUEST:
      console.log(action.payload);
      return {};
    case UPLOAD_PRODUCT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        newProduct: action.payload
      };

    case UPLOAD_PRODUCT_FAIL:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
