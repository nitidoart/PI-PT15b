import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;





/* import { createStore, applyMiddleware, compose } from 'redux';
import thunderMiddleware from 'redux-thunk';
import rootReducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //CONIGURACION patra que la app se conecte con la extension REDUX DEVTOOLS del navegador

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunderMiddleware)) //Para hacer peticiones a una Api/servidor
    );

export default store; */

