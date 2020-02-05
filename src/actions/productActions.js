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
  GET_BRANDS_FAIL,
  GET_TYPES_OF_SALE,
  GET_TYPES_OF_SALE_FAIL,
  GET_SIZES,
  GET_SIZES_FAIL,
  GET_OCCASIONS,
  GET_OCCASIONS_FAIL,
  GET_LENGTHS,
  GET_LENGTHS_FAIL,
  GET_EVENTS,
  GET_EVENTS_FAIL,
  GET_COLORS,
  GET_COLORS_FAIL,
  GET_SPECIAL_OCCASIONS,
  GET_SPECIAL_OCCASIONS_FAIL,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAIL
} from "./types";
import { setAlert } from "./alertActions";
import Parse from "parse";

// Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
// Parse.serverURL = "http://34.73.39.87/parse";

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

export const getTypesOfSale = () => async dispatch => {
  const TypesOfSale = Parse.Object.extend("TypeOfSale");
  const query = new Parse.Query(TypesOfSale);
  try {
    const results = await query.find();
    dispatch({
      type: GET_TYPES_OF_SALE,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_TYPES_OF_SALE_FAIL });
  }
};

export const getSizes = () => async dispatch => {
  const Sizes = Parse.Object.extend("Size");
  const query = new Parse.Query(Sizes);
  try {
    const results = await query.find();
    dispatch({
      type: GET_SIZES,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_SIZES_FAIL });
  }
};

export const getOccasions = () => async dispatch => {
  const Occasions = Parse.Object.extend("Occasion");
  const query = new Parse.Query(Occasions);
  try {
    const results = await query.find();
    dispatch({
      type: GET_OCCASIONS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_OCCASIONS_FAIL });
  }
};

export const getLengths = () => async dispatch => {
  const Lengths = Parse.Object.extend("ItemLength");
  const query = new Parse.Query(Lengths);
  try {
    const results = await query.find();
    dispatch({
      type: GET_LENGTHS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_LENGTHS_FAIL });
  }
};
export const getEventTypes = () => async dispatch => {
  const EventTypes = Parse.Object.extend("ItemEventType");
  const query = new Parse.Query(EventTypes);
  try {
    const results = await query.find();
    dispatch({
      type: GET_EVENTS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_EVENTS_FAIL });
  }
};

export const getColors = () => async dispatch => {
  const Colors = Parse.Object.extend("Color");
  const query = new Parse.Query(Colors);
  try {
    const results = await query.find();
    dispatch({
      type: GET_COLORS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_COLORS_FAIL });
  }
};

export const getSpecialOccasions = () => async dispatch => {
  const SpecialOcasions = Parse.Object.extend("SpecialOccasion");
  const query = new Parse.Query(SpecialOcasions);
  try {
    const results = await query.find();
    dispatch({
      type: GET_SPECIAL_OCCASIONS,
      payload: results
    });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: GET_SPECIAL_OCCASIONS_FAIL });
  }
};

export const addProduct = (
  item_name,
  brand,
  size,
  occasion,
  type,
  color,
  item_length,
  item_value,
  condition,
  description,
  price_sale,
  location,
  size_description,
  aviability,
  wear_type,
  special_occasion,
  images
  // size,
  // occasion,
  // color,
  // item_value,
  // brand,
  // item_length2,
  // item_name,
  // typeOfSale,
  // condition,
  // description,
  // price_sale,
  // location,
  // size_description,
  // item_event_type,
  // item_special_occasion
) => async dispatch => {
  try {
    const Item = Parse.Object.extend("Item");
    const newItem = new Item();
    const UserSchema = Parse.Object.extend("User");
    const image = new Parse.File(images);
    image.save().then(
      function() {
        dispatch({
          type: UPLOAD_IMAGE,
          payload: newItem
        });
      },
      function(err) {
        const errors = err.message;
        if (errors) {
          dispatch(setAlert(errors, "danger"));
        }
        dispatch({ type: UPLOAD_IMAGE_FAIL });
      }
    );
    newItem
      .save({
        user_id: UserSchema.createWithoutData(Parse.User.current().id),
        item_name: item_name,
        brand: brand,
        size: size,
        occasion: occasion,
        type: type,
        color: color,
        item_length: item_length,
        item_value: item_value,
        condition: condition,
        description: description,
        price_sale: price_sale,
        location: location,
        size_description: size_description,
        aviability: aviability,
        wear_type: wear_type,
        special_occasion: special_occasion,
        image: image
      })
      .then(newItem => {
        dispatch({
          type: UPLOAD_PRODUCT_SUCCESS,
          payload: newItem
        });
        dispatch(setAlert("Product Added", "success"));
      });
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: UPLOAD_PRODUCT_FAIL });
  }
  // newItem
  //   .save({
  //     user_id: UserSchema.createWithoutData(Parse.User.current().id),
  //     item_name: item_name,
  //     brand: brand,
  //     size: size,
  //     occasion: occasion,
  //     type: type,
  //     color: color,
  //     item_length: item_length,
  //     item_value: item_value,
  //     condition: condition,
  //     description: description,
  //     price_sale: price_sale,
  //     location: location,
  //     size_description: size_description,
  //     aviability: aviability,
  //     wear_type: wear_type,
  //     special_occasion: special_occasion
  //   })
  //   .then(
  //     newItem => {
  //       dispatch({
  //         type: UPLOAD_PRODUCT_SUCCESS,
  //         payload: newItem
  //       });
  //       dispatch(setAlert("Product Added", "success"));
  //     },
  //     err => {
  //       const errors = err.message;
  //       if (errors) {
  //         dispatch(setAlert(errors, "danger"));
  //       }
  //       dispatch({ type: UPLOAD_PRODUCT_FAIL });
  //     }
  //   );

  // const Item = Parse.Object.extend("Item");
  // // const Brand = Parse.Object.extend("Brand");
  // const UserSchema = Parse.Object.extend("User");
  // const Size = Parse.Object.extend("Size");
  // const Color = Parse.Object.extend("Color");
  // const TypeOfSale = Parse.Object.extend("TypeOfSale");
  // const ItemLength = Parse.Object.extend("ItemLength");
  // const Occasion = Parse.Object.extend("Occasion");
  // const ItemEventType = Parse.Object.extend("ItemEventType");
  // const SpecialOccasion = Parse.Object.extend("SpecialOccasion");
  // const newItem = new Item();
  // newItem.save({ ...formData }).then(
  // newItem.set("item_name", item_name);
  // newItem.set("brand", Brand.createWithoutData(brand));
  // newItem.set("user_id", UserSchema.createWithoutData(Parse.User.current().id));
  // newItem
  //   .save({
  //     item_name: item_name,
  //     brand: brand,
  //     user_id: UserSchema.createWithoutData(Parse.User.current().id),
  //     size: size,
  //     occasion: occasion,
  //     // color: Color.createWithoutData(color),
  //     type: type,
  //     color: color,
  //     item_length: item_length,
  //     item_value: item_value,
  //     condition: condition,
  //     description: description,
  //     price_sale: price_sale,
  //     location: location,
  //     size_description: size_description,
  //     aviability: aviability
  //     // item_name: item_name,
  //     // brand: Brand.createWithoutData(brand),
  //     // user_id: UserSchema.createWithoutData(Parse.User.current().id),
  //     // size: Size.createWithoutData(size),
  //     // occasion: Occasion.createWithoutData(occasion),
  //     // // color: Color.createWithoutData(color),
  //     // typeOfSale: TypeOfSale.createWithoutData(typeOfSale)
  //     // item_event_type: ItemEventType.createWithoutData(item_event_type),
  //     // item_special_occasion: SpecialOccasion.createWithoutData(
  //     //   item_special_occasion
  //     // ),
  //     // item_length2: ItemLength.createWithoutData(item_length2),
  //     // item_value: item_value,
  //     // condition: condition,
  //     // description: description,
  //     // price_sale: price_sale,
  //     // location: location,
  //     // size_description: size_description
  //   })
  //   .then(
  //     newItem => {
  //       dispatch({
  //         type: UPLOAD_PRODUCT_SUCCESS,
  //         payload: newItem
  //       });
  //       dispatch(setAlert("Product Added", "success"));
  //     },
  //     err => {
  //       const errors = err.message;
  //       if (errors) {
  //         dispatch(setAlert(errors, "danger"));
  //       }
  //       dispatch({ type: UPLOAD_PRODUCT_FAIL });
  //     }
  //   );
  // newItem
  //   .save({
  //     brand: brand,
  //     item_name: item_name
  //   })
  //   .then(
  //     newItem => {
  //       dispatch({
  //         type: UPLOAD_PRODUCT_SUCCESS,
  //         payload: newItem
  //       });
  //       dispatch(setAlert("Product Added", "success"));
  //     },
  //     err => {
  //       const errors = err.message;
  //       if (errors) {
  //         dispatch(setAlert(errors, "danger"));
  //       }
  //       dispatch({ type: UPLOAD_PRODUCT_FAIL });
  //     }
  //   );
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
