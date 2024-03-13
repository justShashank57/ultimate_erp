import React from 'react'
import mockProducts from '../Data/mockProducts';
import ProductTable from '../Components/ProductTable';

function Products() {
  const[data,setData] = React.useState(mockProducts);

  return (
    <div id='productRoot'>
         <div id='boxesRoot'>
              <div id='add' style={{cursor:"pointer"}}>
                   <img style={{width:"3rem"}} src="add.png" alt="plus_sign" />
                   <p>Add Product</p>
              </div>
              <div id='pom'>
                 <h1>Laptop</h1>
                 <p>Product of the month.(250 sold)</p>
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
    </div>
  )
}

export default Products