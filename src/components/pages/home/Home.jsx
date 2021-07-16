import { useContext } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";
import TableItem from "./TableItem";
import "./Home.css";
import Spinner from "../../layout/Spinner";
const Home = () => {
  const { totalValues, dates, loading } = useContext(TradeHistoryContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Toplam Miktar</th>
              <th>Toplam Fiyat</th>
              <th>Ağırlıklı Ortalama Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {totalValues.map((value, index) => (
              <TableItem
                key={index}
                date={dates[index]}
                totalPrice={value.price}
                totalQuantity={value.quantity}
                weightedAveragePrice={value.weightedAveragePrice}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
