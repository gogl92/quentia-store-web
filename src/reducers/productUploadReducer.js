import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAIL
} from "../actions/types";

const initialState = {
  size: null,
  color: "",
  item_value: "",
  brand: null,
  price_rent: "",
  item_name: "",
  images: [],
  type: "",
  condition: 0,
  description: "",
  price_sale: "",
  location: "",
  size_description: "",
  typeOfSale: null,
  item_length2: null,
  occasion: null,
  item_event_type: null,
  item_special_occasion: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCT_REQUEST:
      return {};
    case UPLOAD_PRODUCT_SUCCESS:
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
