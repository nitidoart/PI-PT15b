import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./type";

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }; //esta función recibe un personaje por parámetro.
};//retorna una action con el **type** igual a "**ADD_FAVORITE**", y el payload igual a ese personaje.
//cuando esta action creator retorna este objeto y se hace dispatch de esta accion va a llegar al reducer por propiedades para ser evaluado por el switch

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
};

//se hace dispatch de lo que que devuleva la ejecuaciñon de estas action creators para llevarlas a reducer y el sepa que hacer

export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender,
    };
  };
  
  export const orderCards = (order) => {
    return {
      type: ORDER,
      payload: order,
    };
  };