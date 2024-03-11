import React from "react";
import ReactApexChart from "react-apexcharts";

function PieChart({chartObject}) {
  const [series, setSeries] = React.useState(chartObject.data);
  const [options, setOptions] = React.useState({
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    labels: chartObject.labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    title: {
      text: chartObject.title,
      align: 'left'
    },
    legend: {
      position: "right",
      offsetY: 0,
      // height: 230,
    },
  });

  return (
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width={400}
            />
  );
}
export default PieChart;
