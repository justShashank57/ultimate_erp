export default [
  //monthly metric
  [
    {
      metricName: "Total Orders",
      value: "350",
    },
    {
      metricName: "Total Revenue",
      value: "$125,000",
    },
    {
      metricName: "Revenue Growth",
      value: "8.7%",
    },
    {
      metricName: "Average Sale Value",
      value: "$357.14",
    },
  ],
  // quarterly metric
  [
    {
      metricName: "Total Orders",
      value: "1050",
    },
    {
      metricName: "Total Revenue",
      value: "$380,000",
    },
    {
      metricName: "Revenue Growth",
      value: "12%",
    },
    {
      metricName: "Average Sale Value",
      value: "$361.91",
    },
  ],
  // half yearly ,metric
  [
    {
      metricName: "Total Orders",
      value: "1800",
    },
    {
      metricName: "Total Revenue",
      value: "$650,000",
    },
    {
      metricName: "Revenue Growth",
      value: "22%",
    },
    {
      metricName: "Average Sale Value",
      value: "$361.14",
    },
  ],
  // yearly metric
  [
    {
      metricName: "Total Sales",
      value: "3500",
    },
    {
      metricName: "Total Revenue",
      value: "$1,200,000",
    },
    {
      metricName: "Revenue Growth",
      value: "40%",
    },
    {
      metricName: "Average Sale Value",
      value: "$342.85",
    },
  ],

  // quick links
  [
    {
      name: "Sales Reports",
      url: "/salesReports",
    },
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "Orders",
      url: "/orders",
    },
  ],

  // charts
  [
    //Pie chart
    {
      title: "Sales Distribution % by Category",
      type: "pieChart",
      labels: ["Electronics", "Clothing", "Home & Garden", "Books", "Other"],
      data: [30, 25, 20, 15, 10],
    },
    //Line charts
    {
      title: "Sales Trends Over Time",
      name: "Sales",
      type: "lineChart",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      data: [20000, 22000, 21000, 24000, 27000, 32000, 31000, 32000, 35000],
    },
    {
      title: "Order Trends Over Time",
      name: "Orders",
      type: "lineChart",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      data: [100, 120, 110, 140, 170, 220, 210, 220, 250],
    },
    // Area charts
    {
      title: "Sales Trends Distribution",
      series: [
        {
          name: "Electronics",
          data: [45, 52, 38, 45, 19, 23, 30],
        },
        {
          name: "Clothing",
          data: [30, 45, 40, 35, 55, 60, 62],
        },
      ],
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
    // Column Chart
    {
      title:"$ (thousands)",
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
    },
  ],
];
