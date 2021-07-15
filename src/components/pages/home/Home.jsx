import { useContext } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";

const Home = () => {
  const { intraDayTradeHistoryList } = useContext(TradeHistoryContext);

  console.log(intraDayTradeHistoryList);

  return (
    <div>
      {/* {intraDayTradeHistoryList.map((x) => (
        <p key={x.id}>{x.title}</p>
      ))} */}
    </div>
  );
};

export default Home;
