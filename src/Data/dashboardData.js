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
          "chart": {
            "title": "Sales Distribution by Category",
            "type": "pieChart",
            "data": [
              {"category": "Electronics", "value": 30},
              {"category": "Clothing", "value": 25},
              {"category": "Home & Garden", "value": 20},
              {"category": "Books", "value": 15},
              {"category": "Other", "value": 10}
            ]
          }
        },
        {
          "chart": {
            "title": "Sales Trends Over Time",
            "type": "lineChart",
            "data": [
              {"month": "January", "sales": 20000},
              {"month": "February", "sales": 22000},
              {"month": "March", "sales": 25000},
              {"month": "April", "sales": 28000},
              {"month": "May", "sales": 30000},
              {"month": "June", "sales": 32000}
            ]
          }
        }
    ]
]  