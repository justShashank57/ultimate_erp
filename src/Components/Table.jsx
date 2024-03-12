import React from 'react'

function Table({data}) {
  const tabElements = data.map((obj)=>{
       let statusClass = `status ${obj.status}`;
       let rowClass = `childRows ${obj.orderId}`;
       function viewOrder(event){
                const clssList = event.currentTarget.classList;
       }
       return (
             <tr className={rowClass} onClick={viewOrder}>
                <td className='childCells'>{obj.customerName}</td>
                <td className='childCells'><span className={statusClass}>{obj.status}</span></td>
                <td className='childCells'>{obj.orderId}</td>
                <td className='childCells'>{obj.orderDate}</td>
                <td className='childCells'>{obj.totalAmount}</td>
             </tr>
       )
  })
  return (
       <table>
          <tr id='headRow'>
            <td>Customer Name</td>
            <td>Status</td>
            <td>Order ID</td>
            <td>Order Date</td>
            <td>Amount ($)</td>
          </tr>
          {tabElements}
       </table>
  )
}

export default Table