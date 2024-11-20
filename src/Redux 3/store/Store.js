import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import dataReducer from "../reducer/Reducer";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware =createSagaMiddleware();
const store = createStore(dataReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;