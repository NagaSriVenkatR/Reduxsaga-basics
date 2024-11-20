import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux 4/Store/store';
// import store from './Redux 3/store/Store';
// import createSagaMiddleware from 'redux-saga';
// import dataReducer from './Redux 2/reducers/index';
// import { configureStore} from "@reduxjs/toolkit";
// import mySaga from './Redux1/Sagas/Sagas';
// import { watchFetchData } from './Redux 2/saga';


// const rootElement = document.getElementById("root");


// const sagaMiddleware = createSagaMiddleware();
// // const rootReducer = combineReducers({ myReducer }); //in case you have more than one reducer just comma seprate them here
// const store = configureStore({
//   reducer: {dataReducer},
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(watchFetchData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
