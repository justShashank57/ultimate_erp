import React from 'react'

function Table({data,allowClick,showItems}) {
  const[layer,setLayer] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  let itemNames;
  if(selectedOrder){
     itemNames = selectedOrder.items.map((item)=>{
        return item.itemName;
     }).join(', ')
  }

  function viewOrder(event){
           if(allowClick==false) return;
           const clssList = event.currentTarget.classList;
           const order = data.find((obj)=>{
               return obj.orderId === clssList[1];
           })
           setSelectedOrder(order);
           setLayer(true);
  }

  function handleLayer(event){
          if(event.currentTarget === event.target){
              setLayer(false);
              setSelectedOrder(null);
          }
  }

  // Sort the orders by orderDate
  const sortedData = React.useMemo(() => {
    return [...data].sort((b, a) => {
      return new Date(a.orderDate) - new Date(b.orderDate);
    });
  }, [data]);
   
  const tabElements = sortedData.map((obj)=>{
       let statusClass = `status ${obj.status}`;
       let rowClass = `childRows ${obj.orderId}`;
       const items = obj.items.map((item)=>{
             return item.itemName;
       }).join(', ')
       return (
             <tr className={rowClass} onClick={viewOrder}>
                <td className='childCells'>{obj.customerName}</td>
                <td className='childCells'><span className={statusClass}>{obj.status}</span></td>
                <td className='childCells orders'>{obj.orderId}</td>
                <td className='childCells'>{obj.orderDate}</td>
                <td className='childCells money'>{obj.totalAmount}</td>
                {showItems && <td className='childCells money'>{items}</td>}
             </tr>
       )
  })
  return (
    <>
       <table>
          <tr id='headRow'>
            <td>Customer Name</td>
            <td>Status</td>
            <td>Order ID</td>
            <td>Order Date</td>
            <td>Amount ($)</td>
            {showItems && <td>Items</td>}
          </tr>
          {tabElements}
       </table>

       {/* conditionally rendering the layer which shows order details */}
       {layer && selectedOrder && (
           <div id='layerRoot' onClick={handleLayer}>
               <div>
                    <table>
                        <tr>
                            <td className='att'>OrderID</td>
                            <td>{selectedOrder.orderId}</td>
                        </tr>
                        <tr>
                            <td className='att'>Order Date</td>
                            <td>{selectedOrder.orderDate}</td>
                        </tr>
                        <tr>
                            <td className='att'>Expected Delivery</td>
                            <td>{selectedOrder.expectedDelivery}</td>
                        </tr>
                        <tr>
                            <td className='att'>Customer Name</td>
                            <td>{selectedOrder.customerName}</td>
                        </tr>
                        <tr>
                            <td className='att'>Status</td>
                            <td><span className={`status ${selectedOrder.status}`}>{selectedOrder.status}</span></td>
                        </tr>
                        <tr>
                            <td className='att'>Items</td>
                            <td>{itemNames}</td>
                        </tr>
                        <tr>
                            <td className='att'>Amount</td>
                            <td id='dollars'>${selectedOrder.totalAmount}</td>
                        </tr>
                    </table>
               </div>
           </div>
       )}
    </>

  )
}

export default Table