import {
  GET_BRANDS,
  GET_BRANDS_FAIL,
  GET_TYPES_OF_SALE,
  GET_TYPES_OF_SALE_FAIL,
  GET_SIZES,
  GET_SIZES_FAIL,
  GET_LENGTHS,
  GET_LENGTHS_FAIL,
  GET_OCCASIONS,
  GET_OCCASIONS_FAIL,
  GET_EVENTS,
  GET_EVENTS_FAIL,
  GET_COLORS,
  GET_COLORS_FAIL,
  GET_SPECIAL_OCCASIONS,
  GET_SPECIAL_OCCASIONS_FAIL
} from "../actions/types";

const initialState = {
  brands: [],
  typesOfSale: [],
  sizes: [],
  item_Lengths: [],
  occasions: [],
  item_event_types: [],
  item_special_occasions: [],
  colors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    case GET_TYPES_OF_SALE:
      return {
        ...state,
        typesOfSale: action.payload
      };
    case GET_SIZES:
      return {
        ...state,
        sizes: action.payload
      };
    case GET_LENGTHS:
      return {
        ...state,
        item_Lengths: action.payload
      };
    case GET_OCCASIONS:
      return {
        ...state,
        occasions: action.payload
      };
    case GET_EVENTS:
      return {
        ...state,
        item_event_types: action.payload
      };
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload
      };
    case GET_SPECIAL_OCCASIONS:
      return {
        ...state,
        item_special_occasions: action.payload
      };
    case GET_SPECIAL_OCCASIONS_FAIL:
    case GET_COLORS_FAIL:
    case GET_EVENTS_FAIL:
    case GET_BRANDS_FAIL:
    case GET_SIZES_FAIL:
    case GET_TYPES_OF_SALE_FAIL:
    case GET_LENGTHS_FAIL:
    case GET_OCCASIONS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
