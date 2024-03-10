export default [
   //monthly metric
    [
        {
          "metricName": "Total Orders",
          "value": "350"
        },
        {
          "metricName": "Total Revenue",
          "value": "$125,000"
        },
        {
          "metricName": "Revenue Growth",
          "value": "8.7%"
        },
        {
          "metricName": "Average Sale Value",
          "value": "$357.14"
        }
    ],
    // quarterly metric
    [
      {
        "metricName": "Total Orders",
        "value": "1050"
      },
      {
        "metricName": "Total Revenue",
        "value": "$380,000"
      },
      {
        "metricName": "Revenue Growth",
        "value": "12%"
      },
      {
        "metricName": "Average Sale Value",
        "value": "$361.91"
      }
  ],
    // half yearly ,metric
    [
      {
        "metricName": "Total Orders",
        "value": "1800"
      },
      {
        "metricName": "Total Revenue",
        "value": "$650,000"
      },
      {
        "metricName": "Revenue Growth",
        "value": "22%"
      },
      {
        "metricName": "Average Sale Value",
        "value": "$361.14"
      }
  ],
    // yearly metric
    [
      {
        "metricName": "Total Sales",
        "value": "3500"
      },
      {
        "metricName": "Total Revenue",
        "value": "$1,200,000"
      },
      {
        "metricName": "Revenue Growth",
        "value": "40%"
      },
      {
        "metricName": "Average Sale Value",
        "value": "$342.85"
      }
  ],
  
  // quick links
    [
          {
            "name": "Sales Reports",
            "url": "/salesReports",
          },
          {
            "name": "Products",
            "url": "/products"
          },
          {
            "name": "Orders",
            "url": "/orders"
          }
    ],

    // charts
    [
        {
            "title": "Sales Distribution by Category",
            "type": "pieChart",
            "data": [
              {"category": "Electronics", "value": 30},
              {"category": "Clothing", "value": 25},
              {"category": "Home & Garden", "value": 20},
              {"category": "Books", "value": 15},
              {"category": "Other", "value": 10}
            ]
        },
        {
            "title": "Sales Trends Over Time",
            "name":"Sales",
            "type": "lineChart",
            "categories": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            "data": [20000,22000,21000,24000,27000,32000,31000,32000,35000]
        },
        {
          "title": "Order Trends Over Time",
          "name":"Orders",
          "type": "lineChart",
          "categories": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          "data": [100,120,110,140,170,220,210,220,250]
       },
    ]
]  