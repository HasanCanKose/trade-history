import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Charts from "./components/pages/charts/Charts";
import Home from "./components/pages/home/Home";
import TradeHistoryState from "./context/trade-history/tradeHistoryState";

const App = () => {
  return (
    <TradeHistoryState>
      <Router basename="/trade-history">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/charts" component={Charts} />
          </Switch>
        </div>
      </Router>
    </TradeHistoryState>
  );
};

export default App;
