import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { Provider } from "react-redux";
import store from "./store";
import {  GlobalDataProvider } from "./context/ModeContext";
import "./i18n/i18next"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalDataProvider>
    {" "}
    <Provider store={store}>
      {" "}
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </Provider>
  </GlobalDataProvider>
);
