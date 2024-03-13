import React from 'react'
import Table from '../Components/Table';
import orderData from '../Data/orders'
import Calendar from '../Components/Calendar';

function Orders() {
  const[title,setTitle] = React.useState("Total Orders");
  const[obj,setObj] = React.useState(orderData);
  
  function handleClick(event){
           const text = event.currentTarget.innerText;
           setTitle(text);
  }
  const tableData = obj.filter(function(object){
        if(title==="Total Orders") return true;
        return object.status === title;
  })
  return (
    <div id='orderRoot'>
         <div id='orderHead'>
           <h1 id='orderTitle'>{title}</h1>
           <ul id='titleList'>
             <li onClick={handleClick} style={title==="Total Orders"?{color:"#0085FF",borderBottom:"2px solid #0085FF"}:{}}>Total Orders</li>
             <li onClick={handleClick} style={title==="Processing"?{color:"#0085FF",borderBottom:"2px solid #0085FF"}:{}}>Processing</li>
             <li onClick={handleClick} style={title==="Dispatched"?{color:"#0085FF",borderBottom:"2px solid #0085FF"}:{}}>Dispatched</li>
             <li onClick={handleClick} style={title==="Delivered"?{color:"#0085FF",borderBottom:"2px solid #0085FF"}:{}}>Delivered</li>
             <li onClick={handleClick} style={title==="Returned"?{color:"#0085FF",borderBottom:"2px solid #0085FF"}:{}}>Returned</li>
           </ul>
         </div>

         <div id='tableRoot'>
             <Table data={tableData} allowClick={true} showItems={false}/>
         </div>
         
         <div id='calendarRoot'>
              <div>
                <h1 id='calendarHead'>Order Calendar</h1>
                <p id='orderPara'>* Orders are pinned with respect to Expected Delivery Dates *</p>
              </div>
              <div style={{cursor:"pointer"}}>
                 <Calendar/>
              </div>
         </div>
    </div>
  )
}

export default Orders