import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";
import { getGroups } from "../../util/getGoups";
import { getTotalValues } from "../../util/getTotalValues";
import { getDate } from "../../util/getDate";
import { getSortedValues } from "../../util/getSortedValues";

const TradeHistoryState = (props) => {
  const [conract, setConract] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getTradeHistory();
  }, []);

  const getTradeHistory = async () => {
    const response = await fetch("http://localhost:8000/body");

    const json = await response.json();
    calculateTotalValues(json.intraDayTradeHistoryList);
  };

  const calculateTotalValues = (intraDayTradeHistoryList) => {
    const groups = getGroups(intraDayTradeHistoryList);

    const totalValues = getTotalValues(groups);

    const conracts = totalValues.map((value) => {
      return value.conract;
    });

    const dates = conracts.map((conract) => {
      return getDate(conract);
    });

    getSortedValues(totalValues, dates);

    setConract(totalValues);
    setDates(dates);
  };

  return (
    <TradeHistoryContext.Provider
      value={{
        conract,
        dates,
      }}
    >
      {props.children}
    </TradeHistoryContext.Provider>
  );
};

export default TradeHistoryState;
