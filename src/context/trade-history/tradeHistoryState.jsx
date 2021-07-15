import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";

const TradeHistoryState = (props) => {
  const [intraDayTradeHistoryList, setintraDayTradeHistoryList] = useState([]);

  useEffect(() => {
    getTradeHistory();
  }, []);

  const getTradeHistory = async () => {
    const response = await fetch("http://localhost:8000/body");

    const json = await response.json();
    setintraDayTradeHistoryList(json.intraDayTradeHistoryList);
  };
  return (
    <TradeHistoryContext.Provider
      value={{
        intraDayTradeHistoryList,
      }}
    >
      {props.children}
    </TradeHistoryContext.Provider>
  );
};

export default TradeHistoryState;
