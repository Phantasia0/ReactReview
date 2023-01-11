import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadableReady } from "@loadable/component";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const Root = () => {
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;
};

const root = document.getElementById("root");

if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrateRoot(root, <Root />);
  });
} else {
  ReactDOM.render(<Root />, root);
}
