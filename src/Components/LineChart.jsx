import React from "react";
import ReactApexChart from "react-apexcharts";

function LineChart(props){
       const[series,setSeries] = React.useState([{
        name: props.chartObject.name,
        data: props.chartObject.data
        }]);

      const[options,setOptions] = React.useState({
        chart: {
          height: 350,
          type: 'lineChart',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: props.chartObject.title,
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
       });
       return(
             <ReactApexChart options={options} series={series} type="line" height={350} />
       )
}

export default LineChart;