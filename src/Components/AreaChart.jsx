import React from "react";
import ReactApexChart from "react-apexcharts";

function AreaChart({chartObject}){
        const[series,setSeries] = React.useState(chartObject.series);
        const[options,setOptions] = React.useState({
            chart: {
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            responsive: [{
              breakpoint: 785,
              chart:{
                 height:400
              }
            }],
            title: {
                text: chartObject.title,
                align: 'left'
              },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
              }
            },
            xaxis: {
              categories:chartObject.categories 
            }
          })
        return(
            <ReactApexChart 
              options={options}
              series={series}
              type="area"
            />
        )
}

export default AreaChart;