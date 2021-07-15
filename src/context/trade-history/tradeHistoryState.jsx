import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";

const TradeHistoryState = (props) => {
  const [intraDayTradeHistoryList, setintraDayTradeHistoryList] = useState([]);

  useEffect(() => {
    getTradeHistory();
  }, []);

  const getTradeHistory = async () => {
    const response = await fetch(
      "https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=2020-02-26&startDate=2020-02-25"
    );
    const json = await response.json();
    setintraDayTradeHistoryList(json.data.body);
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
