import "normalize.css";
import "react-toastify/dist/ReactToastify.css";

import App from "containers/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "redux/store";
import GlobalStyles from "styles/global";

if (process.env.NODE_ENV === "development") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
