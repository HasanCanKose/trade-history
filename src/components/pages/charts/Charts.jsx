import { useContext } from "react";
import TradeHistoryContext from "../../../context/trade-history/tradeHistoryContext";
import BarChart from "../../chart/BarChart";
import "./Charts.css";

const Charts = () => {
  const { conract, dates } = useContext(TradeHistoryContext);
  return (
    <div className="chart-wrapper">
      <div>
        <BarChart
          dates={dates}
          values={conract.map((value) => value.quantity)}
          backgroundColor={"rgba(153, 102, 255, 0.2"}
          borderColor={"rgba(153, 102, 255, 1"}
          label={"Toplam Miktar"}
        />
      </div>
      <div>
        <BarChart
          dates={dates}
          values={conract.map((value) => value.price)}
          backgroundColor={"rgba(54, 162, 235, 0.2)"}
          borderColor={"rgba(54, 162, 235, 1)"}
          label={"Toplam Fiyat"}
        />
      </div>

      <div>
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
