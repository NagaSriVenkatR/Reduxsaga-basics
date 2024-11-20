import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import formReducer from "../Reducer/reducer";
import rootSaga from "../Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(formReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;