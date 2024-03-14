import React from 'react'
import mockProducts from '../Data/mockProducts';
import ProductTable from '../Components/ProductTable';

function Products() {
  const[data,setData] = React.useState(mockProducts);
  const[showLayer,setShowLayer] = React.useState(false);
  function handleLayer(event){
     if(event.currentTarget===event.target){
          setShowLayer(false);
     }
  }
function addProduct(){
       // Grabbing the input values directly
       const productName = document.querySelector(".addInputs[type='text'][name='productName']").value;
       const productId = document.querySelector(".addInputs[type='text'][name='productId']").value;
       const stockQuantity = document.querySelector(".addInputs[type='text'][name='stockQuantity']").value;
       const unitPrice = document.querySelector(".addInputs[type='text'][name='unitPrice']").value;
       const category = document.querySelector(".addInputs[type='text'][name='category']").value;

       if (productName && productId && stockQuantity && unitPrice && category) {
         const formdata = {
           name:productName,
           productId,
           stockQuantity: parseInt(stockQuantity, 10),
           price: parseFloat(unitPrice),
           category
         };
     
         const newData = [...data, formdata];
         setData(newData);
     
         document.querySelectorAll(".addInputs").forEach(input => {
           input.value = "";
         });
     
         setShowLayer(false);
       } else {
             document.getElementById("fill").style.display = "block";
       }
}
  return (
    <div id='productRoot'>
         <div id='boxesRoot'>
              <div onClick={()=>setShowLayer(true)} id='add' style={{cursor:"pointer"}}>
                   <img src="plus.png" alt="plus_sign" />
                   <p>Add Product</p>
              </div>
              <div id='pom'>
                 <h1>Laptop</h1>
                 <p>Product of the month.<b>(250 sold)</b></p>
              </div>
              <div id='totalProducts'>
                 <h1>{data.length}</h1>
                 <p>Total Products</p>
              </div>
         </div>
         <div id='productTableRoot'>
              <h1 id='invent'>Inventory</h1>
              <ProductTable data={data} setData={setData}/>
         </div>
         {
           showLayer &&
           <div id='layerRoot' onClick={handleLayer}>
                <div id='addProducts'>
                     <div>
                          <p className='inputNames'>Product Name</p>
                          <input className='addInputs' name='productName' type="text" />
                     </div>
                     <div>
                          <p className='inputNames'>Product ID</p>
                         <input className='addInputs' name='productId' type="text" />
                     </div>
                     <div>
                          <p className='inputNames'>Stock Quantity</p>
                         <input className='addInputs' name='stockQuantity' type="text" />
                     </div>
                     <div>
                          <p className='inputNames'>Unit Price</p>
                         <input className='addInputs' name='unitPrice' type="text" />
                     </div>
                     <div>
                          <p className='inputNames'>Category</p>
                         <input className='addInputs' name='category' type="text" />
                     </div>
                     <div style={{display:"none"}} id='fill'>*Please fill all the fields*</div>
                     <button id='createProduct' onClick={addProduct}>Create</button>
                </div>
           </div>
         }
    </div>
  )
}

export default Products