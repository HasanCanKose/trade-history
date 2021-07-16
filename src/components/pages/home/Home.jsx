import { useContext } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";
import TableItem from "./TableItem";
import "./Home.css";
import Spinner from "../../layout/Spinner";
const Home = () => {
  const { conract, dates, loading } = useContext(TradeHistoryContext);

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
            {conract.map((asd, index) => (
              <TableItem
                key={index}
                date={dates[index]}
                totalPrice={asd.price}
                totalQuantity={asd.quantity}
                weightedAveragePrice={asd.weightedAveragePrice}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
