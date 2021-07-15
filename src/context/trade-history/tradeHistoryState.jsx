import { useState, useEffect } from "react";
import TradeHistoryContext from "./tradeHistoryContext";

const TradeHistoryState = (props) => {
  const [conract, setConract] = useState([]);

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

    setConract(totalValues);
    console.log(totalValues);
  };

  return (
    <TradeHistoryContext.Provider
      value={{
        conract,
      }}
    >
      {props.children}
    </TradeHistoryContext.Provider>
  );
};

export default TradeHistoryState;
