import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import Sagas from "../Sagas/Sagas";
import userReducer from "../Reducer/Reducer";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Sagas);
export default store;