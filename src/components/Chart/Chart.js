import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //   const fillBar = (dataPoint) => {
  //     const monthsFound = props.items.filter((item) => {
  //       let month = new Date(item.date).getMonth();
  //       return month.toString() === dataPoint.toString();
  //     });

  //     return (
  //       <ChartBar
  //         label={monthStr}
  //         key={dataPoint}
  //         value={monthsFound.length}
  //       />
  //     );
  //   };
  const dataPoints = props.dataPoints.map((point) => point.value);
  const maximumValue = Math.max(...dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            label={dataPoint.label}
            key={dataPoint.label}
            maxValue={maximumValue}
            value={dataPoint.value}
          />
        );
      })}
    </div>
  );
};

export default Chart;
