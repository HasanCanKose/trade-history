import { Bar } from "react-chartjs-2";

const BarChart = ({ dates, values, backgroundColor, borderColor, label }) => {
  return (
    <div>
      <Bar
        data={{
          labels: dates,
          datasets: [
            {
              label: label,
              data: values,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default BarChart;
