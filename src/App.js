import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
