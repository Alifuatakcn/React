import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppRouterProvider from "./router";

const App = () => {
  

  return (
    <Provider store={store}>
        <AppRouterProvider />
    </Provider>
  );
};

export default App;
