// mockOrders.js

export default [
    {
      orderId: "ORD001",
      customerName: "John Doe",
      orderDate: "2024-03-01",
      expectedDelivery: "2024-03-05",
      status: "Delivered",
      items: [
        { itemName: "Wireless Mouse", quantity: 2, pricePerItem: 29.99 },
        { itemName: "Keyboard", quantity: 1, pricePerItem: 59.99 }
      ],
      totalAmount: 119.97
    },
    {
      orderId: "ORD002",
      customerName: "Jane Smith",
      orderDate: "2024-03-02",
      expectedDelivery: "2024-03-06",
      status: "Dispatched",
      items: [
        { itemName: "USB-C Adapter", quantity: 1, pricePerItem: 19.99 },
        { itemName: "HDMI Cable", quantity: 2, pricePerItem: 14.99 }
      ],
      totalAmount: 49.97
    },
    {
      orderId: "ORD003",
      customerName: "Michael Brown",
      orderDate: "2024-03-02",
      expectedDelivery: "2024-03-06",
      status: "Processing",
      items: [
        { itemName: "Bluetooth Speaker", quantity: 1, pricePerItem: 99.99 }
      ],
      totalAmount: 99.99
    },
    {
      orderId: "ORD004",
      customerName: "Emily Johnson",
      orderDate: "2024-03-03",
      expectedDelivery: "2024-03-07",
      status: "Returned",
      items: [
        { itemName: "Smart Watch", quantity: 1, pricePerItem: 199.99 }
      ],
      totalAmount: 199.99
    },
    {
      orderId: "ORD005",
      customerName: "David Wilson",
      orderDate: "2024-03-04",
      expectedDelivery: "2024-03-08",
      status: "Delivered",
      items: [
        { itemName: "External Hard Drive", quantity: 1, pricePerItem: 89.99 },
        { itemName: "Screen Protector", quantity: 3, pricePerItem: 12.99 }
      ],
      totalAmount: 128.96
    },
    {
      orderId: "ORD006",
      customerName: "Alice Green",
      orderDate: "2024-03-05",
      expectedDelivery: "2024-03-09",
      status: "Processing",
      items: [
        { itemName: "Ergonomic Chair", quantity: 1, pricePerItem: 329.99 },
        { itemName: "Desk Lamp", quantity: 2, pricePerItem: 49.99 }
      ],
      totalAmount: 429.97
    },
    {
      orderId: "ORD012",
      customerName: "Bruce Wayne",
      orderDate: "2024-03-11",
      expectedDelivery: "2024-03-15",
      status: "Dispatched",
      items: [
        { itemName: "Wireless Earbuds", quantity: 1, pricePerItem: 129.99 },
        { itemName: "Smartphone Case", quantity: 2, pricePerItem: 15.99 }
      ],
      totalAmount: 161.97
    },
    {
      orderId: "ORD007",
      customerName: "Robert Ford",
      orderDate: "2024-03-06",
      expectedDelivery: "2024-03-10",
      status: "Dispatched",
      items: [
        { itemName: "Monitor Stand", quantity: 1, pricePerItem: 59.99 },
        { itemName: "Wireless Charger", quantity: 1, pricePerItem: 29.99 }
      ],
      totalAmount: 89.98
    },
    {
      orderId: "ORD008",
      customerName: "Lucy Hale",
      orderDate: "2024-03-07",
      expectedDelivery: "2024-03-11",
      status: "Delivered",
      items: [
        { itemName: "Noise Cancelling Headphones", quantity: 1, pricePerItem: 259.99 },
        { itemName: "Portable Battery", quantity: 2, pricePerItem: 39.99 }
      ],
      totalAmount: 339.97
    },
    {
      orderId: "ORD011",
      customerName: "Sarah Connor",
      orderDate: "2024-03-10",
      expectedDelivery: "2024-03-14",
      status: "Dispatched",
      items: [
        { itemName: "Laptop Stand", quantity: 1, pricePerItem: 45.99 },
        { itemName: "USB Hub", quantity: 2, pricePerItem: 22.99 }
      ],
      totalAmount: 91.97
    },
    {
      orderId: "ORD009",
      customerName: "Omar Hassan",
      orderDate: "2024-03-08",
      expectedDelivery: "2024-03-12",
      status: "Returned",
      items: [
        { itemName: "Gaming Mouse", quantity: 1, pricePerItem: 79.99 },
        { itemName: "Mechanical Keyboard", quantity: 1, pricePerItem: 129.99 }
      ],
      totalAmount: 209.98
    },
    {
      orderId: "ORD010",
      customerName: "Tina Fey",
      orderDate: "2024-03-09",
      expectedDelivery: "2024-03-13",
      status: "Delivered",
      items: [
        { itemName: "Drawing Tablet", quantity: 1, pricePerItem: 199.99 },
        { itemName: "Stylus Pen", quantity: 2, pricePerItem: 49.99 }
      ],
      totalAmount: 299.97
    },
    {
      orderId: "ORD013",
      customerName: "Diana Prince",
      orderDate: "2024-03-12",
      expectedDelivery: "2024-03-16",
      status: "Dispatched",
      items: [
        { itemName: "Fitness Tracker", quantity: 1, pricePerItem: 199.99 },
        { itemName: "Yoga Mat", quantity: 1, pricePerItem: 59.99 },
        { itemName: "Water Bottle", quantity: 2, pricePerItem: 29.99 }
      ],
      totalAmount: 319.96
    }
  ]
  