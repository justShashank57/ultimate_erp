import React from "react";
import ReactApexChart from "react-apexcharts";

function ColumnChart({chartObject}){
    const[series,setSeries] = React.useState(chartObject.series);
      const[options,setOptions] = React.useState({
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: chartObject.categories,
        },
        yaxis: {
          // title: {
          //   text: chartObject.title
          // }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      })
    return(
        <ReactApexChart options={options} series={series} type="bar" height={350} />
    )
}

export default ColumnChart;