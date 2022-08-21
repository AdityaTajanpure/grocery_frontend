import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Login from "./components/authentication/Login";
//*Redux imports
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <div className="container">
          <Login />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
