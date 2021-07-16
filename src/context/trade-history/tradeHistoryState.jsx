import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";
import { getGroups } from "../../util/getGoups";
import { getTotalValues } from "../../util/getTotalValues";
import { getDate } from "../../util/getDate";
import { getSortedValues } from "../../util/getSortedValues";

const TradeHistoryState = (props) => {
  const [totalValues, setTotalValues] = useState([]);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTradeHistory();
    // eslint-disable-next-line
  }, []);

  const getTradeHistory = async () => {
    const response = await fetch(
      "/transparency/service/market/intra-day-trade-history?endDate=2020-02-26&startDate=2020-02-25"
    );
    const json = await response.json();
    calculateTotalValues(json.body.intraDayTradeHistoryList);
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

    setTotalValues(totalValues);
    setDates(dates);
    setLoading(false);
  };

  return (
    <TradeHistoryContext.Provider
      value={{
        totalValues,
        dates,
        loading,
      }}
    >
      {props.children}
    </TradeHistoryContext.Provider>
  );
};

export default TradeHistoryState;
