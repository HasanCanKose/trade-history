import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";

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
    const groups = intraDayTradeHistoryList.reduce((acc, curr) => {
      if (curr.conract.includes("PH")) {
        const tradeHistoryList = acc.find((items) =>
          items.some((item) => item.conract === curr.conract)
        );
        const conract = curr.conract;
        const price = (curr.price * curr.quantity) / 10;
        const quantity = curr.quantity / 10;
        if (tradeHistoryList) {
          tradeHistoryList.push({ conract, price, quantity });
        } else {
          acc.push([
            {
              conract,
              price,
              quantity,
            },
          ]);
        }
      }
      return acc;
    }, []);

    const totalValues = groups.map((group) => {
      const { quantity, price } = group.reduce(
        (acc, curr) => {
          return {
            quantity: acc.quantity + curr.quantity,
            price: acc.price + curr.price,
          };
        },
        { quantity: 0, price: 0 }
      );

      const weightedAveragePrice =
        group.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity;
        }, 0) / quantity;

      return {
        conract: group[0].conract,
        quantity,
        price,
        weightedAveragePrice,
      };
    });

    const conracts = totalValues.map((value) => {
      return value.conract;
    });

    const dates = conracts.map((conract) => {
      return getDate(conract);
    });

    const sortedTotalValues = totalValues.sort(function (firstEl, secondEl) {
      return ("" + firstEl.conract).localeCompare(secondEl.conract);
    });

    setConract(sortedTotalValues);
    setDates(dates);
  };

  const getDate = (conract) => {
    const dateString = conract.slice(2);
    const [year, month, day, hour] = dateString.match(/.{1,2}/g);
    return `20${year}.${month}.${day} - ${hour}.00`;
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
