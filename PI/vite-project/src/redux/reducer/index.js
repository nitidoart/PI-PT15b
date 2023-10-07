import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/type";
//ESTADO INICIAL
const initialState = {
    myFavorites: [], // state.myFavprites esta es la forma de traer a mi estado
};
//REDUCER
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter( // filter() genera un array
                    (character) => character.id !== Number(payload)
                )
            }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;




/* (character) => character.id !== payload
Esta es la función de callback que se pasa como argumento al método filter(). 
Esta función se ejecutará para cada elemento del array myFavorites 
(cada elemento se representa como character en esta función).
character.id !== payload: Dentro de la función de callback, 
se compara el id del elemento character con el valor de payload. 
La condición character.id !== payload verifica si el id del elemento actual 
no es igual al valor de payload. Si esta condición es verdadera para un elemento, 
significa que el elemento no coincide con el valor de payload. */