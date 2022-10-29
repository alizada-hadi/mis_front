import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import Theme from "./components/Template/Theme";

function App() {
  return <div className="App"></div>;
}

export default App;
