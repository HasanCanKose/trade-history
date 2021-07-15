import { useState, useContext, useEffect } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";

const Home = () => {
  const { intraDayTradeHistoryList } = useContext(TradeHistoryContext);
  const [conract, setConract] = useState([]);

  useEffect(() => {
    asd();
  }, [intraDayTradeHistoryList]);

  // console.log(intraDayTradeHistoryList);

  const asd = () => {
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

    const total = groups.map((group) => {
      const { quantity, price } = group.reduce(
        (acc, curr) => {
          return {
            quantity: acc.quantity + curr.quantity,
            price: acc.price + curr.price,
          };
        },
        { quantity: 0, price: 0 }
      );

      const agirlikliOrt =
        group.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity;
        }, 0) / quantity;

      return { conract: group[0].conract, quantity, price, agirlikliOrt };
    });

    setConract(total);
    console.log(total);
  };

  return (
    <div>
      {intraDayTradeHistoryList.map((x) => (
        <p key={x.id}>{x.conract}</p>
      ))}
    </div>
  );
};

export default Home;
