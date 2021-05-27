import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap css
import "./index.css";
import App from "./App";
import configureStore from "./redux/configureStore"; // import store configuration
import { Provider as ReduxProvider } from "react-redux"; // a high order component that provides your redux store data to child components

// it can be useful to pass initial state into the store here if you're server rendering or initializing your redux store with data from local storage
const store = configureStore(); // instantiate the redux store with the default state set/specified in the reducer

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
