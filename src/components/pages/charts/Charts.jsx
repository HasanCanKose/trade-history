import { useContext } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";
import BarChart from "../../chart/BarChart";

const Charts = () => {
  const { conract, dates } = useContext(TradeHistoryContext);
  return (
    <div>
      <div>
        <h2>Toplam Miktar</h2>
        <BarChart
          dates={dates}
          values={conract.map((value) => value.quantity)}
          backgroundColor={"rgba(153, 102, 255, 0.2"}
          borderColor={"rgba(153, 102, 255, 1"}
          label={"Toplam Miktar"}
        />
      </div>
      <div>
        <h2>Toplam Fiyat</h2>
        <BarChart
          dates={dates}
          values={conract.map((value) => value.price)}
          backgroundColor={"rgba(54, 162, 235, 0.2)"}
          borderColor={"rgba(54, 162, 235, 1)"}
          label={"Toplam Fiyat"}
        />
      </div>

      <div>
        <h2>Ağırlıklı Ortalama Fiyat</h2>
        <BarChart
          dates={dates}
          values={conract.map((value) => value.weightedAveragePrice)}
          backgroundColor={"rgba(75, 192, 192, 0.2)"}
          borderColor={"rgba(75, 192, 192, 1)"}
          label={"Ağırlıklı Ortalama Fiyat"}
        />
      </div>
    </div>
  );
};

export default Charts;
