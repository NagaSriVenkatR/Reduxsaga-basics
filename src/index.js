import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from './Redux1/Reducer/myReducer';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mySaga from './Redux1/Sagas/Sagas';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myReducer }); //in case you have more than one reducer just comma seprate them here
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
