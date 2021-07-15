import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Charts from "./components/pages/charts/Charts";
import Home from "./components/pages/home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/charts" component={Charts} />
      </Switch>
    </Router>
  );
};

export default App;
